import Express from "express";
import dotenv from "dotenv";
import connectarBD from "./config/db.js";

const app = Express();

dotenv.config();


const PORT = process.env.PORT || 4000;


connectarBD();


app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerdo ${PORT}`);
});