const { StatusCodes } = require("http-status-codes");
const nodemailer = require('nodemailer')

const createContact = async (req, res) => {

    const { email, fullName, message } = req.body;

    if (!email || !fullName || !message) {
        return res.globalResponse(StatusCodes.PRECONDITION_FAILED, false, 'All Field Required', null);
    }

    try {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.APP_GMAIL,
                pass: process.env.APP_PASSWORD,
            }
        });

        var mailOptions = {
            from: email,
            to: process.env.APP_GMAIL,
            subject: `Message From ${fullName}`,
            text: `${message}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error sending email', null);
            } else {
                console.log('Email sent: ' + info.response);
                return res.globalResponse(StatusCodes.OK, true, 'Message sent successfully', null);
            }
        });


    } catch (error) {
        console.error(error);
        return res.globalResponse(StatusCodes.INTERNAL_SERVER_ERROR, false, 'Error processing request', null);
    }


}

module.exports = {
    createContact,
  };