const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // Allow credentials
  })
);

app.use(express.json());

require("./connectDB");

const customerRouter = require("./src/routes/customer");
const courseRouter = require("./src/routes/course");

app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/courses", courseRouter);

// handle error
app.use((error, req, res, next) => {
  console.log(error);
  const status = error?.status || 500;
  return res.status(status).json({
    success: false,
    message: error?.message || "Internal Server Error",
  });
});

app.listen(5000, () => console.log("Server is running on port 5000"));
