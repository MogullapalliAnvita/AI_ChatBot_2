import app from './app.js';
import { connectToDatabase } from './db/connection.js';
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("Failed to connect to the database:", error);
});
//# sourceMappingURL=index.js.map