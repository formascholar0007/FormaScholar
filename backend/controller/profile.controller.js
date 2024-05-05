const UserModel = require("../model/User");
const UserAdditionalModel = require("../model/UserAdditionalInfo");
const { StatusCodes } = require('http-status-codes');


const getProfile = async (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const userCred = await UserModel.findOne({ _id: userId }, "email");
        if (!userCred) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Not Found', null);
        }
        const verifyUser = await UserAdditionalModel.findOne({ userId });
        if (!verifyUser) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Additional Info Not Found', null);
        }
        const userProfile = {
            email: userCred.email,
            ...verifyUser.toObject()
        }
        return res.globalResponse(StatusCodes.OK, true, 'User Found', userProfile);
    } catch (err) {
        console.error('Error fetching user profile:', error);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server Error', null);
    }
}

const updateProfile = async (req, res) => {
    console.log(req.body);
    try {
        const userId = req.decodedToken.userId;
        const updatedata = req.body;

        if (req.file && req.file.path) {
            updatedata.image = req.file.path;
        }

        console.log("updated")
        console.log("updatedata :   ", updatedata)

        const updated = await UserAdditionalModel.updateOne({ userId }, { $set: updatedata });

        const user = await UserAdditionalModel.findOne({ userId });

        if (!user) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Not Found', null);
        }

        console.log(updated, user);

        if (updated.acknowledged === true) {
            return res.globalResponse(StatusCodes.OK, true, 'User Updated successfully', user);
        } else {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'User Not Found', null);
        }
    } catch (err) {
        console.error("Error:", err);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server Error', null);
    }
};

const getAllUsersProfile = async (req, res) => {

    try {
        const allUsers = await UserModel.find({ role: 'user' });

        if (!allUsers) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'No Users Found', null);

        }
       
        const usersWithAdditionalInfo = await Promise.all(allUsers.map(async (user) => {
            const additionalInfo = await UserAdditionalModel.findOne({ userId: user._id });
            return { user, additionalInfo };
        }));


        return res.globalResponse(StatusCodes.OK, true, 'Users Found', usersWithAdditionalInfo);

    } catch (err) {
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server Error', null);

    }

}

const deleteUser = async (req, res) => {

    const {userId} = req.params;
    if (!userId) {
        return res.globalResponse(StatusCodes.NOT_FOUND, false, 'UserId Not Found', null);
    }

    try {
        const userAdditional = await UserAdditionalModel.findOneAndDelete({userId});
        const user = await UserModel.findByIdAndDelete(userId);
        if (!userAdditional) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'Something Went Wrong While Deleting UserAdditional', null);
        }
        if (!user) {
            return res.globalResponse(StatusCodes.NOT_FOUND, false, 'Something Went Wrong While Deleting User', null);
        }

        return res.globalResponse(StatusCodes.OK, true, 'User Deleted Successfully', null);
    } catch (err) {
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Internal Server Error Delete User', null);

    }



}


module.exports = { getProfile, updateProfile, getAllUsersProfile, deleteUser }