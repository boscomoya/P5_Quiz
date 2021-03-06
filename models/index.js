const Sequelize = require ('sequelize');


const sequelize = new Sequelize ("sqlite:quizzes.sqlite", {logging : false});


sequelize.define('quiz', {
    question: {
        type: Sequelize.STRING,
        //Cada pregunta tiene que ser única
        unique: {msg: "Ya existe esa pregunta"},
        //No se pueden hacer preguntas vacías
        validate: {notEmpty: {msg: "La pregunta no puede estar vacía"}}
    },
    answer: {
        type: Sequelize.STRING,
        validate: {notEmpty: {msg: "La respuesta no puede estar vacía"}}
    }
});


sequelize.sync()

    .then(() => sequelize.models.quiz.count())
.then(count =>{

    if(!count) {
    return sequelize.models.quiz.bulkCreate([
        {question:"Capital de Italia", answer:"Roma"},
        {question:"Capital de Francia", answer:"París"},
        {question:"Capital de España", answer:"Madrid"},
        {question:"Capital de Portugal", answer:"Lisboa"}
    ]);
}
}).catch(error =>{
    console.log(error);
});

module.exports = sequelize;