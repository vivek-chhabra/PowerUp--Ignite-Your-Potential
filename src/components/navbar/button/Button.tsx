import React from "react";
import './Button.scss'
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    text: string;
    radius: number;
    href?: string;
    py?: number;
    px?: number;
};

export default function Button({ text, radius, href, py, px }: Props) {
    return (
        <AnchorLink className="Button" style={{ borderRadius: `${radius}rem`, paddingInline: `${px}rem`, paddingBlock: `${py}rem` }} href={href && `#${href}`}>
            {text}
        </AnchorLink>
    );
}
