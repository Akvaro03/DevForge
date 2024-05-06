import { motion } from "framer-motion"
import useSaveRecourse from "@/hooks/useSaveRecourse";
import useGetUser from "@/hooks/useGetUser";
import userType from "@/types/userType";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function BookMarkRecourse({ isHover, nameRecourse }: { isHover: boolean, nameRecourse: string }) {
    const { user }: { user: userType | null } = useGetUser()
    return (
        isHover && (
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ cursor: "pointer" }}
                whileHover={{ scale: 1.1, color: "var(--second-theme)" }}
            >
                {user?.saves?.includes(nameRecourse) ? (
                    <BookmarkIcon sx={{ color: "var(--second-theme)" }} />
                ) : (
                    <BookmarkBorderOutlinedIcon />
                )}
            </motion.span>
        )
    )
}

export default BookMarkRecourse;