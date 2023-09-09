import img1 from "../../assets/ContactUsPageGraphic.png";
import img2 from "../../assets/EvolveText.png";
import { motion } from "framer-motion";
import "./ContactUs.scss";

type Props = {
    selectedPage: string;
    setSelectedPage(val: string): void;
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 },
    },
};

export default function ContactUs({ setSelectedPage }: Props) {

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container} className="ContactUs" onViewportEnter={() => setSelectedPage("contact-us")} id="contact-us">
            <div className="container flex">
                <div className="left flex-col">
                    <motion.div
                        className="head flex-col"
                        variants={{
                            hidden: { opacity: 0, x: -80, y: -10 },
                            visible: { opacity: 1, x: 0, y: 0 },
                        }}>
                        <h1>
                            <span>JOIN NOW</span> TO GET IN SHAPE
                        </h1>
                        <p>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
                    </motion.div>
                    <motion.form
                        target="_blank"
                        action="https://formsubmit.co/f8cf1f946365522a9e2c13a73748b2a0"
                        method="POST"
                        className="flex-col"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <input required type="text" name="Name*" placeholder="Name" id="" />
                        <input required type="email" name="Email*" placeholder="Email" id="" />
                        <textarea required name="Message*" maxLength={2000} placeholder="Message" id="" rows={4}></textarea>
                        <button className="Button">SUBMIT</button>
                    </motion.form>
                </div>
                <motion.div
                    className="right"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <img src={img1} alt="" className="img-1" />
                    <img src={img2} alt="" className="img-2" />
                </motion.div>
            </div>
        </motion.div>
    );
}
