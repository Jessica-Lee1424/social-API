import express from "express";
import db from "./config/connection.js";
import routes from "./routes/index.js";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
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
