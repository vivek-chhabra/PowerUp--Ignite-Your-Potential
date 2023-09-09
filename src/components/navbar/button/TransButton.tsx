import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./TransButton.scss";

type Props = {
    text: string;
    radius: number;
    href: string;
    py?: number;
    px?: number;
};

export default function TransButton({ text, href, radius, py, px }: Props) {
    return (
        <AnchorLink className="TransButton" style={{ borderRadius: `${radius}rem`, paddingInline: `${px}rem`, paddingBlock: `${py}rem`}} href={`#${href}`}>
            {text}
        </AnchorLink>
    );
}
