const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const controller = require(__dirname + "/controllers/messages_controller");

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const messageUrl = "/api/messages/";
app.post(messageUrl, controller.create);
app.get(messageUrl, controller.read);
app.put(`${messageUrl}:id`, controller.update);
app.delete(`${messageUrl}:id`, controller.delete);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
