import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
)
    .then(console.log("DB connection established!"))
    .catch((e) => console.error.bind(console, "Error connecting to DB. err:", e));