// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const accounts = [
    {
        "AccountCode": "1145713",
        "AccountName": "FUSSEL ENTERPRISES INC",
        "FNAccountCode": "2136645",
        "ColCoId": "F21090"
    },
    {
            "AccountCode": "1145714",
            "AccountName": "FLEET AUTO BROKERS",
            "FNAccountCode": "429764",
            "ColCoId": "F21090",
    },    {
        "AccountCode": "1145716",
        "AccountName": "SPEEDY SMOG",
        "FNAccountCode": "439646",
        "ColCoId": "F21090",
    }
  ];
  const handler = async (event) => {
    try {
      const subject = event.queryStringParameters.name || 'World'
      return {
        statusCode: 200,
        body: JSON.stringify(accounts),
        // // more keys you can return:
        // headers: { "headerName": "headerValue", ... },
        // isBase64Encoded: true,
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }
  
  module.exports = { handler }
  