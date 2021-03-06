const userModel = require('../model/user.model');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = userModel.getAllUsers();
        res.status(200).json({
        msg: 'Users',
        users});
        return;
    },
    getUserById: async (req, res) => {
        const { id } = req.params;
        const user = userModel.getUserById(id);
        res.status(200).json({
            msg: 'User',
            user,
        });
        return;
    }

};