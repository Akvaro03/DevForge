import { motion } from "framer-motion"
import userType from "@/types/userType";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import getUser from "@/db/getUser";
import { User } from "firebase/auth";

function BookMarkRecourse({ isHover, nameRecourse }: { isHover: boolean, nameRecourse: string }) {
    const { user }: { user: userType | null } = getUser()
    const recourseSave = user?.saves ? user?.saves.map(recourse => recourse.name) : []
    return (
        isHover && (
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ cursor: "pointer" }}
                whileHover={{ scale: 1.1, color: "var(--second-theme)" }}
            >
                {recourseSave.includes(nameRecourse) ? (
                    <BookmarkIcon sx={{ color: "var(--second-theme)" }} />
                ) : (
                    <BookmarkBorderOutlinedIcon />
                )}
            </motion.span>
        )
    )
}

export default BookMarkRecourse;