import express from "express";
import Hotel from "../models/Hotel.js";
import { CREATE_HOTEL } from "../controllers/hotelc.js";
import { UPDATE_HOTEL } from "../controllers/hotelc.js";
import { DELETE_HOTEL } from "../controllers/hotelc.js";
import { GET_HOTEL } from "../controllers/hotelc.js";
import { GET_ALL_HOTEL } from "../controllers/hotelc.js";
import { BOOK } from "../controllers/hotelc.js";

const router = express.Router();

//CREATE
router.post("/", CREATE_HOTEL);
//UPDATE
router.put("/:id", UPDATE_HOTEL);
//DELETE
router.delete("/:id", DELETE_HOTEL);
//GET
router.get("/:id", GET_HOTEL);
//GET ALL
router.get("/", GET_ALL_HOTEL);
//Booking Route
router.post("/book", BOOK);

export default router;
