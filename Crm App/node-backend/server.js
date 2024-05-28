const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createDb, createTable, insertUser, insertConversation, insertAnswers, insertMessage, getMessagesByConversation, getAnswers} = require("./db");
const { updateTimeController, getConversationById, insertMessageController, getMessagesByConversationController } = require("./controller/apiController");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const initialSetup = async () => {
  const dbResponse = await createDb("chat_app");
  const tableResponse = await createTable();

  //adding static user
  const addUser = await insertUser(
    "12345",
    "John",
    "Doe",
    "john.doe@example.com"
  );

  //adding case details
  const now = new Date();
  const currentDate = now.toISOString();
  const addConversation = await insertConversation(
    "12345",
    "54321",
    "C102345",
    "P54321",
    "Widget Pro",
    currentDate,
    currentDate,
    "Open"
  );

  //adding predefined answers
  const answers = [
    "Hi, my Widget Pro is not turning on.",
    "Hello John, have you tried checking the memory allocated for your site?",
    "Yes, I checked the memory, and it seems fine. The Widget Pro still won't turn on.",
    "Thanks for confirming. Can you please check if there are any error messages in your browser console?",
    "I just checked. There are no error messages in the console.",
    "Alright. Let's try resetting the Widget Pro. Can you please go to the plugin settings and click on 'Reset to Default'?",
    "I reset the settings to default, but the Widget Pro is still not turning on."
  ]

  const predefinedAnswersData = await getAnswers();

  if(predefinedAnswersData.length === 0){
    answers.forEach(async (answer)=> {
      await insertAnswers(answer);
    })
  }

  //adding initial message
  const messages = await getMessagesByConversation("54321");   
  if(messages.length === 0){
    await insertMessage("12345", "54321", "out", "Hey, How may I help you?", currentDate);
    console.log("Initial Hello Message from chat-bot inserted");
  }
};

initialSetup();

app.post("/api/updateTime", async (req, res)=>{
  const response = await updateTimeController(req, res);
  res.json(response);
});

app.get("/api/getConversation", async(req, res)=> {
  const response = await getConversationById(req, res);
  res.json(response);
})

app.post("/api/message", async (req, res) => {
  const response = await insertMessageController(req, res);
  res.json(response);
});

app.get("/api/message", async (req, res) => {
  const response = await getMessagesByConversationController(req, res);
  res.json(response);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
