import CardRecourse from "@/components/cardRecourse";
import { AnimatePresence, motion } from "framer-motion"
import IsInView from "@/components/IsInView";
import recourseType from "@/types/recourseType";
import Style from "./listPins.module.css"
import useCount from "@/hooks/useCount";
function ListPins({ Pins }: { Pins: recourseType[] }) {
    const { count, addCount } = useCount(20)
    return (
        <>
            <motion.section layout className={Style.containerRecourses}>
                <AnimatePresence>
                    {Pins.slice(0, count).map(data => (
                        <CardRecourse  {...data} key={data.name} />
                    ))}
                </AnimatePresence>
            </motion.section>
            <IsInView funcInView={() => addCount(20)} />
        </>
    );
}

export default ListPins;