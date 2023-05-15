const eventsService = require("../services/events.service");

const view = async (req, res, next) => {
  try {
    let response = await eventsService.viewEvent().catch((err) => {
      console.log("responseERROR--", err);
    });
    res.json(response);
  } catch (err) {
    console.log("Error", err);
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    let response = await eventsService.createEvent(req, res).catch((err) => {
      console.log("responseERROR--", err);
    });
    res.json(response);
  } catch (err) {
    console.log("Error", err);
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    res.json(await eventsService.updateEvent(req));
  } catch (err) {
    console.log("Error", err);
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    res.json(await eventsService.removeEvent(req));
  } catch (err) {
    console.log("Error", err);
    next(err);
  }
};

module.exports = {
  view,
  create,
  update,
  remove,
};
