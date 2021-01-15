---
title: Laravel Vapor
slug: laravel-vapor
---

- [Serverless Laravel Course](https://serverlesslaravelcourse.com/)
- [[laravel]]

[Laravel Vapor](https://vapor.laravel.com/) is a [[serverless]] deployment solution for Laravel, built on AWS. It simplifies orchestrating microservices such as the database server, CDN, PHP web application, queue processing, email sending, caching, etc. as well as the logging, provisioning and monitoring the applications. Yes, you could build all of this yourself with AWS, but that would require a lot more code then the 1 Vapor YML file and a ton more work. And then you'd have to maintain it.

I've used Vapor for internal applications at Saturday Drive. With a little bit of experimentation and a lot of things I learned from the [Serverless Laravel Course](https://serverlesslaravelcourse.com/), we were able to create a highly scalbabe application with minimal cost or worry.

## Database

Find this sticky note.

- Serverless vs Fixed
  - Aurora takes too long to scale up for many app types.
    - Minumuma capactity with automatic scaling is an advantage of serverless.
    - Will not pay most of the time for staging database, beacuse its paused.
    - Cost is complex and can be real expensive.
    - Requires a VPC.
    - Self-healing and more throughput.
  - Over-provisioning a RDS is fixed cost, still managed.
    - Probably over-paying, but predictable cost.
    - Risk is high traffic breaking DB
      - Limit queue concurrency.
      - Add Redis cache level.
    - You can set the scaling of storage in AWS console to auto.
- Scaling/ Failover
  - A failover database comes online if production db goes down.
    - Failover takes ~60 or more.
    - Failover DB is recommend, doubles database cost.
    - Also allows for zero downtime db Scaling.
      - Vapor will bring failover up, scale up primary, switch back to primary, then scale up failover.

## Queues

- With standard queue, can not assume order. Can not assume that job will only run once.
- Assume SQS is down, to prevent loosing jobs. Always use retry.
  - https://laravel.com/docs/8.x/helpers#method-retry
- Queues run in there [own Lamda](https://blog.laravel.com/vapor-using-a-separate-lambda-function-for-queues).
  - Use `queue-memory` to set the RAM.

### Retry Laravel Job

- https://serverlesslaravelcourse.com/video/27

```php
      return retry(20, function () {
          dispatch( new SomeJob( ) );
      }, 200 );
```

### Ensuring A Job Only Runs Once

- https://serverlesslaravelcourse.com/video/28
- Set a queue timeout. Something a little longer then longest jobs.
- Default timeout is 70s, so then it runs again. Potential loop.
- Job timing out is fine, job running multiple times is not.
- Always check database is onlin.

## Other

- "warn" - avoid 2s post-deploy delay.
  - Bring X containers online before deployment and rewarmed every 5 minutes.
  - Warming, not too expensive. Polling warms for 40 containers would be ~\$1.
- Vapor "secrets" are for big environment variables. Acccesed using the `env()` helper function.
  - Environment variables can be seen in plain text in vapor UI. Secrets can not.

## Concurrency

Concurrency is how many Lamdas can exist at once. Each web requests gets one of Lamdas, with the memory set.

- https://blog.laravel.com/vapor-using-a-separate-lambda-function-for-queues
- Three Lamdas: web requests,cli,queue.
  - Each has `*-concurrency`, `*-memory`, `*-timeout`
  - Adding `*-memory` ads more processing
- Warming can slow requests happening during warming. Concurrency keeps X containers always online.
  - Could mean paying to keep things online all the, or could avoid paying for warming. Can save a lot of money, if enough consitent traffic.
  - By default 1000 is default Lamda concurrency.
    - Limit cuncurrency in Vapor to limit costs.
    - AWS has built in protections.

