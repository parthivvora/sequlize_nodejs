const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./routes/user.routes"));

app.listen(5000, () => {
  console.log(`Server listen on port 5000...!`);
});
