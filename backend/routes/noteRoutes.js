const express = require("express");
const noterouter = express.Router();
const {
  getNotes,
  creatNote,
  getNoteById,
  UpdateNote,
  DeleteNote,
} = require("../controller/noteControllers");
const { protect } = require("../middlewares/authMiddlewares");

noterouter.route("/").get(protect, getNotes);
noterouter.route("/create").post(protect, creatNote);
noterouter
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

module.exports = { noterouter };
