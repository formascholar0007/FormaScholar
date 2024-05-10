const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require('./routes/auth.routes.js');
const profileRoute = require('./routes/profile.routes.js');
const classRoute = require('./routes/class.routes.js');
const subjectRoute = require('./routes/subject.routes.js');
const chapterRoute = require('./routes/chapter.routes.js');
const exerciseRoute = require('./routes/exercise.routes.js');
const questionRoute = require('./routes/question.routes.js');
const contactRoute  = require('./routes/contact.routes.js');
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

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/profile', profileRoute);
app.use('/api/v1/class', classRoute);
app.use('/api/v1/subject', subjectRoute);
app.use('/api/v1/chapter', chapterRoute);
app.use('/api/v1/exercise' , exerciseRoute);
app.use('/api/v1/question' , questionRoute);
app.use('/api/v1/contact', contactRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
