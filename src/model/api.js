const mongoose = require("mongoose");

const SequenceSchema = new mongoose.Schema({
    sequence: {
        type: [String],
        required: true,
    },
    isValid: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true});

SequenceSchema.pre('save', async function (next) {
    let data = this;

    let found = await mongoose.model('Sequences', SequenceSchema).findOne({sequence: data.sequence});
    if (found !== null) {
        return next(new Error("Sequence already exists"));
    }

    next();
});

module.exports = mongoose.model('Sequences', SequenceSchema);