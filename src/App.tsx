import DescriptionSec from "./components/discription/DescriptionSec";
import ContactUs from "./components/contactUs/ContactUs";
import Classes from "./components/ourClasses/Classes";
import Benefits from "./components/benefits/Benefits";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import Home from "./components/home/Home";
import "./App.scss";

interface props {}

function App({}: props) {
    const [selectedPage, setSelectedPage] = useState<string>("home")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="App">
                <>
                    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Benefits selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <DescriptionSec selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Classes selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <ContactUs selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </>
        </div>
    );
}

export default App;
