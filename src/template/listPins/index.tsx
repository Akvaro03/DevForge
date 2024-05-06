import CardRecourse from "@/components/cardRecourse";
import { useCallback, useState } from "react";
import { motion } from "framer-motion"
import IsInView from "@/components/IsInView";
import recourseType from "@/types/recourseType";
import Style from "./listPins.module.css"
function ListPins({ Pins }: { Pins: recourseType[] }) {
    const [countPins, setCountPins] = useState(20)
    const loadMorePins = useCallback(() => {
        setCountPins(prevCount => prevCount + 20);
    }, []);
    return (
        <>
            <motion.section layout className={Style.containerRecourses}>
                {Pins.slice(0, countPins).map(data => (
                    <CardRecourse {...data} key={data.name} />
                ))}
            </motion.section>
            <IsInView funcInView={loadMorePins} />
        </>
    );
}

export default ListPins;