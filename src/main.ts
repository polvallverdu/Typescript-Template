import express from "express";

const app = express();

// Maybe set your dependencies with app.use() here

app.get("/", async (req, res) => {
  res.send("<h1><center>Hello World!</h1>");
});

const port = process.env.PORT === undefined || Number.isNaN(Number.parseInt(process.env.PORT)) ? 8080 : Number.parseInt(process.env.PORT)

app.listen(port, () => {
  console.log(`Listening on ${port}`)
  console.log(``);
  console.log(`Acess through http://localhost:${port}/`);
});
