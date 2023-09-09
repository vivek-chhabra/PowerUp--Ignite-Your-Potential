import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Benefits from "./components/benefits/Benefits";
import DescriptionSec from "./components/discription/DescriptionSec";
import Classes from "./components/ourClasses/Classes";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";

interface props {}

function App({}: props) {
    const [selectedPage, setSelectedPage] = useState<string>("home");
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener("load", () => {
            setTimeout(() => {
                setLoaded(true);
            }, 500);
        });
    }, []);

    return (
        <div className="App">
            {loaded && (
                <>
                    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Benefits selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <DescriptionSec selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Classes selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <ContactUs selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </>
            )}
        </div>
    );
}

export default App;
