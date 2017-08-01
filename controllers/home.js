const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let calculatorBody = req.body;

        let calcParams = calculatorBody['calculator'];

        let calculator = new Calculator();
        calculator.leftOperand = Number(calcParams.leftOperand);
        calculator.operator = calcParams.operator;
        calculator.rightOperand = Number(calcParams.rightOperand);

        let result = calculator.CalculateResult();

        res.render('home/index', {'calculator' : calculator , 'result' : result})

    }
};