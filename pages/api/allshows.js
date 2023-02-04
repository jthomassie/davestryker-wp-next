// pages/api/new-show.js

import { format } from "date-fns";

const { connectToStrikezone } = require("../../lib/strikezone");
const ObjectId = require("mongodb").ObjectId;
const COL = "shows2";

const handler = async (req, res) => {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getShows(req, res);
    }

    case "POST": {
      return addShow(req, res);
    }

    case "PUT": {
      return updateShow(req, res);
    }

    case "DELETE": {
      return deleteShow(req, res);
    }
  }
};

export default handler;

// get all shows where lastdate >= today
const getShows = async (req, res) => {
  let today = format(new Date(), "yyyy-MM-dd");
  // console.log("TEST getShows", today);
  try {
    let { db } = await connectToStrikezone();
    let shows = await db
      .collection(COL)
      .find({ lastdate: { $gte: today } })
      .sort({ lastdate: 1 })
      .toArray();
    return res.json({
      shows: JSON.parse(JSON.stringify(shows)),
      success: true,
    });
  } catch (error) {
    return res.json({
      shows: new Error(error).message,
      success: false,
    });
  }
};

// find shows by id
const findShows = async (req, res) => {
  console.log("TEST findShows");
  try {
    let { db } = await connectToStrikezone();
    let shows = await db
      .collection(COL)
      .find({})
      .sort({ published: -1 })
      .toArray();
    return res.json({
      shows: JSON.parse(JSON.stringify(shows)),
      success: true,
    });
  } catch (error) {
    return res.json({
      shows: new Error(error).message,
      success: false,
    });
  }
};

// add new show
const addShow = async (req, res) => {
  try {
    let { db } = await connectToStrikezone();
    await db.collection(COL).insertOne(JSON.parse(req.body));
    return res.json({
      message: "Show added",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

// update a show
const updateShow = async (req, res) => {
  try {
    let { db } = await connectToStrikezone();
    await db
      .collection(COL)
      .updateOne(
        { _id: new ObjectId(req.body) },
        { $set: { published: true } }
      );
    return res.json({
      message: "Show updated",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

// delete a show
const deleteShow = async (req, res) => {
  try {
    let { db } = await connectToStrikezone();
    await db.collection(COL).deleteOne({
      _id: new ObjectId(req.body),
    });
    return res.json({
      message: "Show deleted",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
