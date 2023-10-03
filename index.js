import mongoose from "mongoose";
import express from "express";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotel.js";
import roomsRoute from "./routes/rooms.js";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
// import roomsRoute from "./routes/rooms.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGOKEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.use(express.static("/Users/abhiramyanampally/Desktop/Hotel/Client"));
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/deluxe_room")
);
app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/grand_deluxe_room"
  )
);
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/double_room")
);
app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/grand_deluxe_suite"
  )
);
app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/junior_deluxe_room"
  )
);
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/premier_room")
);
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/prestige_room")
);
app.use(express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/SignUp"));

app.use(express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/dine"));
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/SignUp/img")
);
app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/Signature_suite"
  )
);
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/loginPage")
);
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/loginPage/img")
);

app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/Rooms and Suites"
  )
);

app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/Rooms and Suites/Rooms and Suites.html"
  )
);

app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/homePage")
);
app.use(
  express.static("/Users/abhiramyanampally/Desktop/Hotel/Client/homePage/img")
);

app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/homePage/integrate"
  )
);
app.use(
  express.static(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/Signature_suite"
  )
);
app.get("/", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/homePage/integrate/integrate.html"
  );
});

app.get("/booking", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/Signature_suite/Signature_suite.html"
  );
});
app.get("/availability", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/Rooms and Suites/Rooms and Suites.html"
  );
});
app.get("/loginPage", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/loginPage/login2.html"
  );
});
app.get("/signupPage", (req, res) => {
  res.sendFile("/Users/abhiramyanampally/Desktop/Hotel/Client/SignUp");
});
app.get("/signupPage", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/SignUp/signup.html"
  );
});
app.get("/dine", (req, res) => {
  res.sendFile("/Users/abhiramyanampally/Desktop/Hotel/Client/dine/dn.html");
});
app.get("/signature", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/Signature_suite/Signature_suite.html"
  );
});
app.get("/deluxe_room", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/deluxe_room/deluxe_room.html"
  );
});
app.get("/double_room", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/double_room/double_room.html"
  );
});
app.get("/grand_deluxe_suite", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/grand_deluxe_suite/grand_deluxe_suite.html"
  );
});
app.get("/grand_deluxe_room", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/grand_deluxe_room/grand_deluxe_room.html"
  );
});
app.get("/junior_deluxe_room", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/junior_deluxe_room/junior_deluxe_room.html"
  );
});
app.get("/premier_room", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/premier_room/premier_room.html"
  );
});
app.get("/prestige_suite", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/prestige_suite/prestige.html"
  );
});

app.get("/auth", (req, res) => {
  res.sendFile(
    "/Users/abhiramyanampally/Desktop/Hotel/Client/integratecopy.html"
  );
});
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
