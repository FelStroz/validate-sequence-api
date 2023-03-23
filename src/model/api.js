const mongoose = require('mongoose');

const SequenceSchema = new mongoose.Schema({
    sequence: {
        type: String,
        unique: true,
        required: true,
    },
    isValid: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Sequence', SequenceSchema);
