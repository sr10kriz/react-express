const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events.controllers");

// for request GET
router.get("/view", eventsController.view);

// for request POST
router.post("/create", eventsController.create);

// for request PUT
router.put("/update", eventsController.update);

// for request DELETE
router.delete("/remove", eventsController.remove);

module.exports = router;
