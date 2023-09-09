import sponsorForbees from "../../assets/SponsorForbes.png";
import sponsorFrotune from "../../assets/SponsorFortune.png";
import sponsorRedBull from "../../assets/SponsorRedBull.png";
import { motion } from "framer-motion";
import "./Sponsors.scss";

type Props = {};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const childVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function Sponsors({}: Props) {
    return (
        <motion.div className="Sponsors flex" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
            variants={container}
        >
            <div className="container">
                <motion.img variants={childVariant} src={sponsorForbees} alt="" />
                <motion.img variants={childVariant} src={sponsorFrotune} alt="" />
                <motion.img variants={childVariant} src={sponsorRedBull} alt="" />
            </div>
        </motion.div>
    );
}
