import Report from "../modules/report.model.js"

export const createReport = async (req, res) => {
    try {
        const { category, urgency, message } = req.body
        const user = req.user
        const image = req.file

        if (!category || !urgency || !message) return res.status(401).json({ error: "One Of The Fields IS Missing" })
        let imagePath = ""
        if (image) { imagePath = req.file.destination + "/" + req.file.filename }

        const newReport = await new Report({
            userId: user._id,
            category,
            urgency,
            message,
            imagePath: imagePath,
            sourceType: "form"
        })
        await newReport.save()

        res.status(201).json(newReport)

    } catch (error) {
        console.log("Error on createPost controller")
        res.status(500).json({ error: error.message })
    }
}

// const getReports