import express from "express";
import {
  CREATE_ROOM,
  DELETE_ROOM,
  GET_ALL_ROOM,
  GET_ROOM,
  UPDATE_ROOM,
} from "../controllers/roomc.js";

const router = express.Router();

//CREATE
router.post("/", CREATE_ROOM);
//UPDATE
router.put("/:id", UPDATE_ROOM);
//DELETE
router.delete("/:id", DELETE_ROOM);
//GET
router.get("/:id", GET_ROOM);
//GET ALL
router.get("/", GET_ALL_ROOM);

export default router;
