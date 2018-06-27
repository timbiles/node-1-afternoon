let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const { text } = req.body;
    const { id } = req.params;
    const messageIndex = messages.findIndex(e => e.id === +id);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
  },

  delete: (req, res) => {
    const { id } = req.params;
    messageIndex = messages.findIndex(e => e.id === +id);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }
};
