const express = require("express");
const router = express.Router();;

router.get('/', (req, res) => {
    if (req.cookies.idioma == 'es') res.render('es.ejs');
    else if (req.cookies.idioma == 'en') res.render('en.ejs');
    else res.redirect('/idioma')

})

router.get('/idioma', (req, res) => {
    // res.send('Idioma: ' + req.query.idioma);
    res.cookie("idioma", req.query.idioma)
    res.redirect('/')
})


module.exports = router;
