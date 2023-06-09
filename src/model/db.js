const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => {
        console.log("DB connection established!")
    })
    .catch((e) => console.error.bind(console, "Error connecting to DB. err:", e));

