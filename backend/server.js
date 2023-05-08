const express = require("express");
const port = 5500;

const app = express();


// get => c donne moi les donnees
// app.get("/post", (req, res) => {
//     res.json({ message: "voici les données" });
// });
// app.post
// app.put

app.use("/post", require("./routes/post.routes"))



// pr lancer le server
app.listen(port, () => console.log("Le server a bien demarre au port: " + port))
  