import app from "./app";
import connectToDatabase from "./data-source";

const startServer = async () => {
  try {
    await connectToDatabase();
    const PORT: number = Number(process.env.PORT || 3000);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
