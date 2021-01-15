---
title: Laravel Queues
slug: laravel-queues
---

- [Learn Laravel Queues](https://learn-laravel-queues.com) - 5 stars! Buy This.
- [Serverless Laravel](https://serverlesslaravelcourse.com/) - 5 stars! Buy this if using Vapor.
- [Documentation](https://laravel.com/docs/8.x/queues)
- [[laravel]]

## Serial Vs Parallel Requests With Laravel Queues

A chain of jobs is executed in series, one after another. Batching can be used to run jobs in paralled. In both cases, you can call a function when the chain or bacth is done or when an error is caught.

On Vapor, queues are not first in first out -- FIDO -- and jobs can run more then once. So whether jobs are in chain or dispatched in a loop, they will run out of order.

### Science

I wrote two commands, that dispatch this job a hundred times:

```php
<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class LogTimeAndArgsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /* @var int */
    protected $itteration;

    /* @var string */
    protected $command;

    /**
     * @param int $itteration
     * @param string $command
     */
    public function __construct(int $itteration, string $command)
    {
        $this->itteration = $itteration;
        $this->command = $command;
    }

    public function handle()
    {
        logger(sprintf('Itteration: %s Command: %s', $this->itteration,$this->command) );
    }
}
```

Using a loop to dipsatch jobs in order:

```php
Artisan::command('test:loop', function (){
    for( $i = 0;$i <=100;$i++){
      dispatch( new \App\Jobs\LogTimeAndArgsJob($i,'test:loop'));
    }

});
```

And using a chain:

```php
Artisan::command('test:chain', function (){
    $jobs = [];
    for( $i = 0;$i <=100;$i++){
        $jobs[] = new \App\Jobs\LogTimeAndArgsJob($i,'test:chain');
    }

    \Illuminate\Support\Facades\Bus::chain(
       $jobs
    )->catch(function() {
        logger('test:chain failed' );
    })->dispatch();
});
```

I deployed this to Vapor, and used Vapor UI to trigger both commands. As I expected, the jobs dispatched with a loop ran in mildly random order. The chain executed in order of itterations.

Dispatching a chain from a command did cause my comamnd to take longer.

```yaml
environments:
  production:
    cli-timeout: 600
    queue-timeout: 600
```

## Laravel Vapor Queue 413 Errors

I noticed, in my logs, some 413 entity too large errors that mentioned SQS. Laravel serializes models of job classes. Laravel Vapor uses HTTP POST request to send the serialized model to the queue. If the model has an attribute that is an array and that array is bigger then whatever is the limit for a payload sent to the SQS, then well, I had an error.

I avoided this by passing the id of the model, not the model. This adds some database queries, but also avoids sending huge payloads to SQS and getting errors. Also, I don't know this to be true, but I assume we're getting billed for SQS payload size. But I didn't look it up, beacuse AWS.

I'm trying to use jobs to clean up and count data, 500 or so rows at a time. The model I was serializing was the "Summary" model, which stores the counts. I want the UI to query for one or a few summaries, not all of the data that the summary is based on. Time is litteraly money.

So this was actually a good refactor. In my original plan, the summary model was insantiated once and then passed to each job before they were dispatched. This sort of worked when I was dealing with less then 10,000 records that needed cleaned up. Now that I think about it, I am really unclear why.

Using the chain, I knew jobs would run page 1, page 2, etc. Having to query for the model in between jobs prevented having to worry about deserializing a model that was serialized at the "wrong" state. Whatever that actually means.

## Ensuring A Job Only (Effectively) Runs Once In Laravel Vapor

In Laravel Vapor a job may run more than once. Can't stop it. Can't Stop The Signal Mal.

This was an issue for me, when I'm trying to use jobs to clean up and count data, 500 or so rows at a time. Counting a page twice makes the math incorrect.

My solution was to save an array of page numbers that had been processed. If a job is processed for page 5, but page 5 is already processed, I just don't don't process that page again.

## Testing Laravel Queues

### Testing A Laravel Command That Dispatches A job

Be careful of `Error: Call to undefined method Illuminate\Support\Testing\Fakes\BusFake::chain()` happens if faking bus in a test that uses a chain.

```php
//Mock Bus to test jobs dispatched
use Illuminate\Support\Facades\Bus;
//Mock queue to test jobs pushed into queue using a chain.
use Illuminate\Support\Facades\Queue;

class SomeTests exteds TestCase {
    public function testDispatches()
    {
        //Mock queue bus
        Bus::fake();
        $this->artisan('command that calls a job');
        //Assert command dispatched a job 2 times
        Bus::assertDispatched(WhateverJob::class,2);

    }

    public function testChained()
    {
        //Mock queue
        Queue::fake();
        $this->artisan('command that chaines');
        //Assert job was pushed one times
            (WhateverJob::class,1);
    }
}
```
