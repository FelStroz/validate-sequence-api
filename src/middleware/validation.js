const validator = require('../services/validationServices');

module.exports = async (req, res, next) => {
    let {letters} = req.body;
    let err = await validator.validateMatrix(letters);

    if (err !== "") return res.status(400).json({error: err});
    
    const isValid = await validator.validateSequence(letters);

    req.body = {sequence: letters, isValid};
    next()
}

