import mongoose from "mongoose";
import { Dburl } from "./confic.js";

const connectdb = async () => {
  try {

    await mongoose.connect(Dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("connected to database")
  } catch (e) {

    console.log("error connecting to database")
  }
};
export default connectdb