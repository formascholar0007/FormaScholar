const UserAdditionalModel = require("../model/UserAdditionalInfo");
const { StatusCodes } = require('http-status-codes');

const getProfile = async (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const verifyUser = await UserAdditionalModel.findOne({ userId });
        if (!verifyUser) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Not Found', null);
        }
        return res.globalResponse(StatusCodes.OK, false, 'User Found', verifyUser);
    } catch (err) {
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server Error', null);
    }
}

const updateProfile = async (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const updatedata = req.body;

        const updated = await UserAdditionalModel.updateOne(
            { userId },
            { $set:  updatedata  }
        )
        const user = await UserAdditionalModel.findOne({userId});
        console.log(updated , user)
        if (updated.acknowledged === true) {
            return res.globalResponse(StatusCodes.OK, false, 'User Updated successfully', null);
        } else {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Not Found', null);
        }
    } catch (err) {
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server Error', null);
    }


}

module.exports = { getProfile, updateProfile }