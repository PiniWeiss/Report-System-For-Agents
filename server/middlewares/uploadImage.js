import multer from "multer";

const storage = multer.diskStorage({
    destination: "/uploadsImage",
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname
        cb(null, uniqueName)
    }
})

const upload = multer({ storage: storage })
export default upload