const express = require("express");
// const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { userrouter } = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const { noterouter } = require("./routes/noteRoutes");
const path = require("path");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/users", userrouter);
app.use("/api/notes", noterouter);

// --------------------------deployment------------------------------
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
