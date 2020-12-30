---
title: Micro CSS Frameworks
slug: micro-css
---

- [Marx](https://mblode.github.io/marx/)
  - No classes!
- [Wing](https://kbrsh.github.io/wing/)
  - Super minimal, also black/whiteish
- [Chota](https://jenil.github.io/chota)
  - Very minimal
- [Milligram](https://milligram.io/)
- [water.css](https://watercss.kognise.dev/)

### Wing Components

[[react]] components for wing.css

```tsx
import { createElement } from "react";
import Link from "next/link";
export const Box: React.FC<{
	as?: string;
	className?: string;
	children: any;
}> = ({ as, children, className }) => {
	return createElement(as ? as : "div", { className }, children);
};

export const Button: React.FC<{
	outline?: boolean;
	onClick?: () => void;
	children: any;
}> = ({ outline, children, onClick }) => {
	return (
		<button
			className={outline ? "outline" : ""}
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		>
			{children}
		</button>
	);
};

export const Heading: React.FC<{
	level?: number;
	children: any;
	className?: string;
}> = ({ level, children, className }) => {
	return createElement(`h${level ? level : 2}`, { className }, children);
};
export const NavLink: React.FC<{ children: any; href: string }> = ({
	children,
	href,
}) => {
	return (
		<A className={"nav-item"} href={href}>
			{children}
		</A>
	);
};

export const A: React.FC<{
	children: any;
	href: string;
	className?: string;
}> = ({ children, href, className }) => {
	if (href.startsWith("http")) {
		return (
			<a className={className} href={href}>
				{children}
			</a>
		);
	}
	return (
		<Link href={href}>
			<a className={className}>{children}</a>
		</Link>
	);
};

export const Navigation: React.FC<{
	items: { href: string; label: string }[];
	title: string;
}> = ({ items, title }) => {
	return (
		<Box className="nav">
			<h2 className="nav-logo">
				<NavLink href={"/"}>{title}</NavLink>
			</h2>
			{items.map((item) => (
				<NavLink key={item.href} href={item.href}>
					{item.label}
				</NavLink>
			))}
		</Box>
	);
};

export const Divider = () => {
	return <hr />;
};

export const Section = (props) => (
	<Box as={"section"} {...props}>
		{props.children}
	</Box>
);

export const Input = (props) => {
	return <input {...props} />;
};
export const Label = (props) => (
	<Box as={"label"} {...props}>
		{props.children}
	</Box>
);

export const Grid = ({ children }) => (
	<Box as={"div"} className={"row"}>
		{children}
	</Box>
);

export const Column = ({ children }) => (
	<Box as={"div"} className={"col"}>
		{children}
	</Box>
);

export const CardWrapper = ({ children }) => {
	return <Box className="cards">{children}</Box>;
};

export const Card: React.FC<{
	content: string;
	title: string;
	footer: any;
}> = ({ content, title, footer }) => {
	return (
		<Box className="card">
			<h5 className="card-header">{title}</h5>
			<p className="card-body">{content}</p>
			<Box className="card-footer center text-center">{footer}</Box>
		</Box>
	);
};
```

