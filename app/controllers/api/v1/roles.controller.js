const { ListAllData } = require("../../../../config/Common")
const DatabaseList = require("../../../../config/DatabaseList")

exports.GetAllRoles = async (req, res) => {
    try {
        let query = {}
        const roles = await ListAllData(DatabaseList.roles_master, query);
        res.status(200).json({ code: 200, message: "Successfully get all users", data: roles });
    } catch (error) {
        res.status(200).json({ code: 400, data: error });
    }
}
