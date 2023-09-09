import logo from "../../assets/Logo.png";
import { useState } from "react";
import Button from "./button/Button";
import Links from "./Links";
import "./Navbar.scss";

interface Props {
    selectedPage: string;
    setSelectedPage(val: string): void;
}

export default function Navbar({ selectedPage, setSelectedPage }: Props) {
    const [activeNav, setActiveNav] = useState<boolean>(false);
    const [changeColor, setChangeColor] = useState(false)

    const handleNav = () :void => {
        setActiveNav(!activeNav);
    };

    window.addEventListener('scroll', () => {
        if(window.scrollY > 200) setChangeColor(true)
        else setChangeColor(false)
    })


    return (
        <div className={`Navbar ${changeColor ? 'change' : ''}`}>
            <div className={`container ${activeNav && "active"}`}>
                <img src={logo} alt="" />
                <div className="right space-between">
                    <div className="center">
                        <div className="links flex">
                            <Links page="Home" link='home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Links page="Benefits" link='benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Links page="Our Classes" link='our-classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Links page="Contact Us" link='contact-us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                    <div className="right center">
                        <div className="signin">Sign in</div>
                        <Button radius={50} text="Become A Member" href="become-a-member"/>

                    </div>
                </div>
                <i className="fa-solid fa-xmark center" onClick={handleNav}></i>
                <i className="fa-solid fa-bars center" onClick={handleNav}></i>
            </div>
        </div>
    );
}
