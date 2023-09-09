import React from "react";
import "./DescriptionSec.scss";
import { motion } from "framer-motion";
import img from "../../assets/BenefitsPageGraphic.png";
import img2 from "../../assets/AbstractWaves.png";
import img3 from "../../assets/Sparkles.png";
import Button from "../navbar/button/Button";

type Props = {
    selectedPage: string;
    setSelectedPage(val: string): void;
};

export default function DescriptionSec({ selectedPage, setSelectedPage }: Props) {
    return (
        <div className="DescriptionSec">
            <motion.div className="container flex" onViewportEnter={() => setSelectedPage("benefits")}>
                <div className="left flex">
                    <img src={img} alt="" />
                </div>
                <div className="right flex-col">
                    <img src={img2} alt="" />
                    <div className="content flex-col">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            variants={{
                                hidden: { opacity: 0, x: 80 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            MILLIONS OF HAPPY MEMBERS GETTING <span>FIT</span>
                        </motion.h1>
                        <motion.div
                            className="description flex-col"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            variants={{
                                hidden: { opacity: 0, x: 80 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <p>
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper
                                arcu id pretium sapien proin integer nisl. Felis orci diam odio.
                            </p>
                            <p>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
                        </motion.div>
                        <motion.div
                            className="button"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}>
                            <Button href="contact-us" radius={0.5} text="Join Now" px={4} py={1} />
                        </motion.div>
                    </div>
                    <img src={img3} alt="" />
                </div>
            </motion.div>
        </div>
    );
}
