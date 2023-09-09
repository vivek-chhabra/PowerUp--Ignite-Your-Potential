import AnchorLink from "react-anchor-link-smooth-scroll";
import './Link.scss'

interface Props {
    page: string;
    selectedPage: string;
    setSelectedPage(val: string): void;
    link: string;
}

export default function Links({ page, selectedPage, setSelectedPage, link }: Props) {
    return (
        <AnchorLink 
            className={selectedPage === link ? "active" : ""}
            href={"#" + link} 
            onClick={() => setSelectedPage(link)}
        >
            {page}
        </AnchorLink>
    );
}
