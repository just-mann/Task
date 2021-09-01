const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 4000;


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Login', {title: `Task | Login`});
});

app.get('/sign-up', (req, res) => {
    res.render('SignUp', {title: `Task | Sign Up`});
});

app.get('/create-new', (req, res) => {
    res.render('CreateNewList', {title: `Task | Create New List`});
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})