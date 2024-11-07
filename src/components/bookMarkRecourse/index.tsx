import { motion } from "framer-motion"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useGlobalContext } from "@/app/context/store";

function BookMarkRecourse({ isHover, nameRecourse }: { isHover: boolean, nameRecourse: string }) {
    const { isPinSave } = useGlobalContext()
    const isSave: boolean = isPinSave(nameRecourse)

    return (
        (isHover || isSave) && (
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ cursor: "pointer" }}
                whileHover={{ scale: 1.1, color: "var(--second-theme)" }}
            >
                {isSave ? (
                    <BookmarkIcon sx={{ color: "var(--second-theme)" }} />
                ) : (
                    <BookmarkBorderOutlinedIcon />
                )}
            </motion.span>
        )
    )
}

export default BookMarkRecourse;