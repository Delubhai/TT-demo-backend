
exports.GetAllUsers = (req, res) => {
    try {
        res.status(200).json({ code: 200, message: "Successfully get all users", data: [] },)
    } catch (error) {
        console.log("Get users error>>>:", error)
        res.status(200).json({ code: 400, data: error })
    }
}