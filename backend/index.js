import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const MenuSchema = new mongoose.Schema({
  name: String,
  text: String,
  price: Number,
});

const MenuModel = mongoose.model("Menu", MenuSchema);

app.get("/", async (req, res) => {
  try {
    const menu = await MenuModel.find({});
    res.send(menu);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuModel.findById(id);
    res.send(menu);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, text, price } = req.body;
    const newMenu = MenuModel({ name, text, price });
    await newMenu.save();
    res.send("Got a POST request");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await MenuModel.findByIdAndDelete(id);
    res.send("Got a DELETE request");
  } catch (error) {
    console.error(error.message);
  }
});

mongoose
  .connect("mongodb+srv://mi6vyr5cb:mi6vyr5cb@cluster0.wireeb6.mongodb.net/")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
