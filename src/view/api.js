module.exports = {
    created: ({isValid}, status, res) => {
        res.status(200).json({
            status,
            is_valid: isValid,
        });
    },
    showList: (list, total, res) => {
        res.status(200).json({
            data: list.map((sequence) => {
                return oneSequence(sequence)
            }),
            total
        });
    },
    showStats: (stats, res) => {
        res.status(200).json(oneStats(stats));
    },
    error: (error = {}, code, status, res) => {
        let {message, _message} = error;
        res.status(code).json({
            status: status,
            error: {
                message: _message,
                completeMessage: message
            }
        });
    },
    message: (status, message, res) => {
        res.status(200).json({
            feedback: {
                status: status,
                message: message
            }
        });
    },
};

function oneStats({countValid, countInvalid, ratio}) {
    return {
        count_valid: countValid,
        count_invalid: countInvalid,
        ratio
    }
}

function oneSequence({sequence, isValid}) {
    return {
        sequence,
        is_valid: isValid,
    }
}
