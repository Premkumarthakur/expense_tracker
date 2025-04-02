import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const connectDB = async () => {
    try {
        const db = process.env.MONGO_URL;
        if (!db) {
            throw new Error("MongoDB URI is not defined in environment variables");
        }

        const { connection } = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Exit the app if the DB connection fails
    }
};
