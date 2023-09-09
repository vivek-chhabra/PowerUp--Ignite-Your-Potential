import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import TransButton from "../navbar/button/TransButton";
import { motion } from "framer-motion";
import "./Benefits.scss";

type Props = {
    selectedPage: string;
    setSelectedPage: (val: string) => void;
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const childVariant = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: { opacity: 1, scale: 1 },
};

const buttonVariant = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: { opacity: 1, y: 0 },
};

const headerVariant = {
    hidden: { x: -80, opacity: 0 },
    visible: { opacity: 1, x: 0 },
};

export default function Benefits({  setSelectedPage }: Props) {
    return (
        <div className="Benefits" id="benefits">
            <motion.div className="container flex-col" onViewportEnter={() => setSelectedPage("benefits")} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}>
                <motion.div initial="hidden" whileInView="visible" variants={headerVariant} transition={{ duration: 0.5, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }} className="head flex-col">
                    <h1>MORE THAN JUST GYM.</h1>
                    <p>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="benefit-cards flex">
                    <motion.div variants={childVariant} className="card-1 flex-col">
                        <HomeModernIcon className="icon" />
                        <div className="title">State of the Art Facilities</div>
                        <div className="content">Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.</div>
                        <motion.div transition={{ delay: 0.3, ease: "easeInOut" }} variants={buttonVariant} className="button">
                            <TransButton href="contact-us" radius={0.5} text="Learn More" px={3} py={1} />
                        </motion.div>
                    </motion.div>
                    <motion.div variants={childVariant} className="card-2 flex-col">
                        <UserGroupIcon className="icon" />
                        <div className="title">100's of Diverse Classes</div>
                        <div className="content">Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.</div>
                        <motion.div transition={{ delay: 0.5, ease: "easeInOut" }} variants={buttonVariant} className="button">
                            <TransButton href="contact-us" radius={0.5} text="Learn More" px={3} py={1} />
                        </motion.div>
                    </motion.div>
                    <motion.div variants={childVariant} className="card-3 flex-col">
                        <AcademicCapIcon className="icon" />
                        <div className="title">Expert and Pro Trainers</div>
                        <div className="content">Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.</div>
                        <motion.div transition={{ delay: 0.8, ease: "easeInOut" }} variants={buttonVariant} className="button">
                            <TransButton href="contact-us" radius={0.5} text="Learn More" px={3} py={1} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
