import express from "express";
import db from "./config/connection.js";
import routes from "./routes/index.js";
const PORT = process.env.PORT || 3001;
const app = express();
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// API routes
app.use(routes);
// Start the server and connect to the database
(async () => {
    try {
        await db();
        app.listen(PORT, () => {
            console.log(`API server running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1);
    }
})();
