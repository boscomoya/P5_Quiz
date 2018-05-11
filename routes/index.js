var express = require('express');
var {models} = require('../models/index.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Página principal', autor:'Pablo Bosco Moya Rodriguez' });
});

router.get('/credits', function (req, res, next) {
    res.render('credits', { title: 'créditos', credits: 'Pablo Bosco Moya Rodriguez' });
});

router.get('/quizzes', function (req, res, next) {
    models.quiz.findAll()
        .then(quiz => {
        res.render('quizzes', { title: 'Lista de quizzes', quizzes: quiz});
})
});

module.exports = router;
