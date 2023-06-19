import mongoose from "mongoose";
import colors from "colors";

const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb database ${connect.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};
export default ConnectDb;
