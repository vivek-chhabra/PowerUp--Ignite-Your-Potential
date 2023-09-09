import img from "../../assets/Logo.png";
import { motion } from "framer-motion";
import "./Footer.scss";

type Props = {
    selectedPage: string;
    setSelectedPage(val: string): void;
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const childVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Footer({ setSelectedPage }: Props) {
    return (
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ amount: 0.5, once: true }} className="Footer" onViewportEnter={() => setSelectedPage("contact-us")}>
            <div className="container flex">
                <motion.div variants={childVariant} className="col-1 flex-col">
                    <img src={img} alt="" />
                    <p>Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.</p>
                    <p className="rights">© Evogym All Rights Reserved.</p>
                </motion.div>
                <motion.div variants={childVariant} className="col-2 flex-col">
                    <div className="header">Links</div>
                    <p>Massa orci senectus</p>
                    <p>Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </motion.div>
                <motion.div variants={childVariant} className="col-3 flex-col">
                    <div className="header">Contact Us</div>
                    <p>(333)425-6825</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
