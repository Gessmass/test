import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({path: "../.env"});

const port = parseInt(process.env.SERVER_PORT) ?? 4242;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Backend server is running on port ${port}`);
  }
});
