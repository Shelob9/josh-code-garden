---
title: React
slug: react
---


## Portals

Render outside of the root element.

```jsx
const RenderPortal = ({domNode,children}){
    if( ! domNode ){
        return null
    }
    return ReactDOM.createPortal(
        this.props.children,
        domNode
    );
}

```

## Testing React With React Testing Library

- https://testing-library.com/docs/react-testing-library/
- https://github.com/testing-library/testing-library-docs/pull/138
- https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples
- https://testing-library.com/docs/react-testing-library/cheatsheet

I use React Testing Library. React Testing Library is different in it's approach then any other testing library. The idea is test like someone using an app.

Example Component:

```jsx
const FormInput = ({onChange,value}) => {

    return (
        <div>
            <label
                htmlFor={'the-input'}
            >
            Roy
            </label>
            <input
                id={'the-input}
                onChange={(e) => onChange(e.target.value)
                }>
        </div>
    )
}
```

### Test Change Event Calls Callback Function With React Testing Library

```jsx
import { render, fireEvent } from "@testing-library/react";
const changeHandler = jest.fn();
const { getByLabel } = render(<FormInput onChange={changeHandler} />);
fireEvent(getByLabel("Roy"), { event: { target: "mike" } });
expect(changeHandler).toBeCalledTimes(1);
expect(changeHandler).toBeCalledWith("mike");
```

### Snapshot React Componet With React Testing Library

- https://jestjs.io/docs/en/snapshot-testing

```jsx
import { render } from "@testing-library/react";
it("matches Snapshot", () => {
  const { container } = render(<FormInput onChange={jest.fn()} />);
  expect(container).toMatchSnapshot();
});
```
