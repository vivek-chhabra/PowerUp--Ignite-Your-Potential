import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import "./Classes.scss";

type Props = {
    selectedPage: string;
    setSelectedPage(val: string): void;
};

export default function Classes({ setSelectedPage }: Props) {
    return (
        <motion.div className="Classes" onViewportEnter={() => setSelectedPage("our-classes")} id="our-classes">
            <div className="container flex-col">
                <motion.div
                    className="content flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    variants={{
                        hidden: { opacity: 0, x: -80 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <h1>OUR CLASSES</h1>
                    <div className="text">Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</div>
                </motion.div>
                <div className="images flex">
                    <div className="img flex">
                        <img src={img1} alt="" />
                        <div className="img-description">
                            <div className="head">Weight Training Classes</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="img flex">
                        <img src={img2} alt="" />
                        <div className="img-description">
                            <div className="head">Yoga Classes</div>
                        </div>
                    </div>
                    <div className="img flex">
                        <img src={img3} alt="" />
                        <div className="img-description">
                            <div className="head">Ab Core Classes</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="img flex">
                        <img src={img4} alt="" />
                        <div className="img-description">
                            <div className="head">Adventure Classes</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="img flex">
                        <img src={img5} alt="" />
                        <div className="img-description">
                            <div className="head">Fitness Classes</div>
                        </div>
                    </div>
                    <div className="img flex">
                        <img src={img6} alt="" />
                        <div className="img-description">
                            <div className="head">Training Classes</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
