const { updateTimeConversation, getConversationDataById, insertMessage, getMessagesByConversation, getAnswers } = require('../db');

const updateTimeController = async (req, res) => {
    try{
        const { conversationID } = req.body;
        const now = new Date();
        const currentDate = now.toISOString();
        await updateTimeConversation(currentDate, conversationID);
        return {
            message: "successfully updated date and time!",
            status: true
        }
    }catch(err) {
        return {
            message: "api call failed!",
            status: false
        }
    }
};

const getConversationById = async (req, res)=> {
    try{    
        const { userid } = req.query;
        const response = await getConversationDataById(userid);
        return {
            data: response,
            status: true,
            message: "api call success"
        }        
    } catch(err) {
        return {
            message: "api call failed!",
            status: false
        }
    }
}

const insertMessageController = async (req, res) => {
    try{
        const { userId, conversationId, direction, content } = req.body;
        let now = new Date();
        let currentDate = now.toISOString();
        //user's message stored
        await insertMessage(userId, conversationId, direction, content, currentDate);

        const predefinedAnswers = await getAnswers();
        const randomIndex = Math.floor(Math.random() * 7) + 1;
        now = (new Date()).toISOString();
        await insertMessage(userId, conversationId, "out", predefinedAnswers[randomIndex]?.content, now);
        return {
            status: true
        }
    }catch(err) {
        console.log(err);
        return {
            status: false
        }
    }    
}

const getMessagesByConversationController = async (req, res) => {
    try{
        const { conversationId } = req.query;
        const response = await getMessagesByConversation(conversationId);
        console.log(response)
        return{
            status: true,
            data: response
        }
    } catch(err) {
        console.log(err);
        return {
            status: false,
            data: {}
        }
    }
}

module.exports = {updateTimeController, getConversationById, insertMessageController, getMessagesByConversationController};
