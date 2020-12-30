---
title: Laracon Online 2020
slug: laracon-online
---

- [[laravel]]

## Jenny Shen : UX Design Across Different Cultures

[UX Design Across Different Cultures — Part 1](https://blog.prototypr.io/ux-design-across-different-cultures-part-1-1caa12a504c0)
[UX Design Across Different Cultures — Part 2](https://uxplanet.org/ux-design-across-different-cultures-part-2-761c911e875)

```md
Culture affects Internet usage, e-commerce trust, information and communication technology adoption, Internet marketing, and website development.

I have lived in 4 countries, 3 continents, and had the opportunities to design for users of Europe, North and South America, Asia, and Southeast Asia. In this article, I will share tips and tricks learned from designing for various cultures, and how to apply culture differences in user experience design.

1. Address cultural characteristics

Through projects of designing for different cultures, I learned to address cultural characteristics in my designs. Even though we are familiar with design patterns, it may surprise us when users of a different culture react to them in a way we didn’t expect.
```

## Scaling Laravel Jack Ellis

- [[laravel-vapor]]

First step for scaling Fathom was to move processing of data -- caluculating aggregates -- to queues. In v1 recorded page views to a table, and used queues to process data to aggregates.

In v2, page view controller, dispatches a job after response to record page view. Uses retry() around the job dispatch to ensure it gets recorded. Use cache to scale a fixed Vapor db.

Some customers getting super high traffic could prevent less popular pages form gettign agregatation jobs run. Put sites into groups, group ID column is index. Runs all groups on a loop.

- Always assume queue and database will fail: use `retry()`
- Cache everything you can.
- Watch I/Os on database
- Currently moving from MySQL to ElasticSearch and DynamoDB

- https://usefathom.com/blog/viral
- https://usefathom.com/blog/tech-stack
- https://usefathom.com/blog/vapor-one-year
