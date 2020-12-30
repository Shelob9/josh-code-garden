---
title: Laravel Eloquent
slug: laravel-eloquent
---

- [Documentation](https://laravel.com/docs/8.x/eloquent)
- [Elqouent Performance Patterns Course](https://eloquent-course.reinink.ca/)
- [[laravel]]

## Measuring and Optimizing Queries

- Use Laravel debug bar to find slow queries.
- If database usage is too much, start by only select columns you need.
  - Can do this with relationships, using callback funciton passed to `with()`:

```php
Post::query()
    ->select(['id', 'title'])
    ->with( ['author' => function(&$query){
        return $query->select( ['id', 'name' ] );
    }]);
```

You can use a colon instead of callback:

```php
Post::query()
    ->select(['id', 'title'])
    ->with( 'author:id,name' );
```

## Get A Record From A `hasMany` Relationship

- Eager-loading can avoid n+1 query problems, but can lead to having to load tons of mdoels, using lots of memories.

This prevents extra queries for relationship between users and logins models, but loads every login model to do the sort.

```php
    @foreach( $users as $user ){
        {{$user->logins()->latest()->first()->created_at}}
    }
```

Using sub-queries allows us to add additional columns to the query based on computations of another table. Use `addSelect()` method.

```php
$users = User::query()
    //Add a virtual column
    ->addSelect( ['last_login_at' => Login::select('created_at')
        //Query by the user's ID
        ->whereColumn( 'user_id', 'user.id' )
        ->latest()
        ->take(1)//subqueries MUST return 1 record in MySQL.
    ]);
```

This will give us effectively two queries, MySQL optimizes the sub queries into one query.

Use virtual column:

```php
{{$user->last_login_at}}
```

This column is a string, not automatically casted to a Carbon instance:

```php
    ->withCasts(['last_login_at' => 'datetime' ] )
```

Moving query logic from controller to [scopes](https://laravel.com/docs/8.x/eloquent#query-scopes) in model, makes login reusable, and we can add them toghether.
