---
title: Pure Functions
slug: patterns-pure-functions
---

## What Are They

A "pure" function is one that, given perdicatable inputs will produce perdictable outputs with no side effects. For example:

## Examples

```js
function add(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}
```

This function adds two numbers, and does nothing out side of its closure. It is pure. It has no side effects. It is very predictable. I can test it like this:

```js
it("Sums", () => expect(add(1, 2).toBe(3)));
```

### Side Effects

This function, adds two numbers and then uses jQuery to set the inner HTML of an element to the sum of the two numbers:

```js
function addAndDisplay(firstNumber, secondNumber) {
	const sum = firstNumber + secondNumber;
	jQuery("#sum").html(sum);
}
```

This function is NOT pure, beacuse it has a side effect.

The DOM modification is a side effect, it happens outside of the scope of this closure and effects other things. This would be less straight forward to test, do to the side effects.

## In React

In React, a functional component can be pure. This funciton, given the same "title" property will allways result in the same object:

```jsx
const ShowTitle({title}) => (
    <div>{title}</div>
);
```

On the other hand, if we have to fetch the title from a remote API, that's a side effect. React has a "useEffect" hook for this:

```jsx
const ShowTitle({postId}) => {
    const [title,setTitle] = React.useState();
    React.useEffect(() => {
        fetch( `api/posts/${postId}`)
        .then(r => r.json())
        .then(r => setTitle(r.title))
    },
    //Rerun fetch when postId changes
    [postId]);
    if( title ){
        return (
            <div>{title}</div>
        )
    }
    return (<div>Loading</div>);
};
```

Now that the side effect is in a hook, we have more control over when the effect runs and can more easily mock it.

## WordPress

WordPress has very weak encapsulation. For example, consider this:

```php
function saveNewItem($title){
    wp_insert_post(['post_title'=> $title]);
}
```

This looks simple, but wp_insert_post has filters in it which can change the functions behaviour. In addition, a MySQL database is involved.
