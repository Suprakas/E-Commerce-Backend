import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("mongodb+srv://SuprakashBallav1:Suprakash995@cluster0.epqw1.mongodb.net/E-Commerce-DB", {
        dbName : "E-Commerce-DB",
    }).then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};

