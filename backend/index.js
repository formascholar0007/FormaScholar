const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require('./routes/authroute');
const profileRoute = require('./routes/profileroute');
const classRoute = require('./routes/classroute');
const globalResponse = require('./middleware/globalResponse');
require('./config/database');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(globalResponse);
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/class', classRoute)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
