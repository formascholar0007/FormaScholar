const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require('./routes/authroute');
const globalResponse = require('./middleware/globalResponse');
require('./config/database');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(globalResponse);
app.use(cors());

app.use('/api/auth',  authRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
