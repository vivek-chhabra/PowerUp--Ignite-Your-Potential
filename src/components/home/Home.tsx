import homePageGraphics from "../../assets/HomePageGraphic.png";
import homePageText from "../../assets/HomePageText.png";
import TransButton from "../navbar/button/TransButton";
import EvoGym from "../../assets/EvolveText.png";
import Button from "../navbar/button/Button";
import Sponsors from "../sponsors/Sponsors";
import { motion } from "framer-motion";
import "./Home.scss";

type Props = {
    selectedPage: string;
    setSelectedPage(val: string): void;
};

const Home = ({ setSelectedPage}: Props) => {
    
    return (
        <>
            <div className="Home" id="home">
                <div className="container flex">
                    <motion.img src={EvoGym} alt="" 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        onViewportEnter={() => setSelectedPage('home')}
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    />
                    <motion.div
                        className="left flex-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <img src={homePageText} alt="" />
                        <div className="content flex-col">
                            <div className="text">Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.</div>
                            <motion.div
                                className="btns flex"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut'}}
                                variants={{
                                    hidden: { opacity: 0, x: -80 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                                <Button href="contact-us" radius={0.5} text="Join Now" px={3} py={1} />
                                <TransButton href="contact-us" radius={0.5} text="Learn More" px={3} py={1} />
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="right flex-col">
                        <img src={homePageGraphics} alt="" />
                    </div>
                </div>
            </div>
            <div className="sponsor">
                <Sponsors />
            </div>
        </>
    );
};

export default Home;
