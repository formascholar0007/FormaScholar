
const className = (req, res) => {
    try {

        res.status(200).json({message : "Something Good happens now when you comes here!"});

    } catch (error) {
        console.log(error);
        res.send(400).json({message : "Error : ", error})
    }
}

module.exports = className