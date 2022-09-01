const express = require("express");

const app =  express();

const bodyParser = require('body-parser');
// const expHbs = require('express-handlebars');

const users = [];

// app.engine('hbs', expHbs({ defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'User', users: users });
});

app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    res.redirect('/users');

});







app.listen(3100);














// echo "# simpleApp" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/t33nux/simpleApp.git
// git push -u origin main