// https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
// https://github.com/Rose-stack/nextjs-blog-app-with-mongodb
// pages/api/shows/[lastdate].js

import { useRouter } from "next/router";

const { connectToStrikezone } = require("../../../lib/strikezone");
const COL = "shows2";
const ObjectId = require("mongodb").ObjectId;

const handler = async (req, res) => {
  return getShow(req, res);
};

export default handler;

// get all shows where lastdate >= today
const getShow = async (req, res) => {
  try {
    let { db } = await connectToStrikezone();
    let id = new ObjectId(req.params);
    let show = await db
      .collection(COL)
      // .find({ _id: new ObjectId(req.body) })
      .find({ lastdate: req.body })
      .toArray();
    return res.json({
      show: JSON.parse(JSON.stringify(show)),
      success: true,
      req: req,
    });
  } catch (error) {
    return res.json({
      show: new Error(error).message,
      success: false,
    });
  }
};
