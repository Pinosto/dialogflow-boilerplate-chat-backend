const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/api/dialogflow', function (req, res) {
  res.send('boilerchat')
})
app.post('/api/dialogflow', async function (req, res) {

  const projectId = process.env.P_ID;
  const sessionId = req.body.uuid;
  const query = req.body.text;
  const languageCode = 'en-US';
  const credentials = {
    client_email: process.env.C_EMAIL,
    private_key: process.env.P_KEY.replace(/\\n/g, '\n'),
  };

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    projectId,
    credentials,
  });
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  try {
    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
    res.json(result.fulfillmentText)
  } catch (e) {
    console.error(e)
    res.json('I think dialogflow is down.')
  }
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})