// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const csutomerIds = {
    "1145713": [
        {
          "CustName": "FUSSEL ENTERPRISES INC",
          "CustomerId": "1017868",
          "FNCustomerId": "2170897"
        },
        {
          "CustName": "UCX AR Tester MAMF2",
          "CustomerId": "1101454",
          "FNCustomerId": "2966875"
        }
      ],
      "1145714":  [
        {
          "CustName": "FLEET AUTO BROKERS",
          "CustomerId": "1017869",
          "FNCustomerId": "440612"
        }
      ],
      "1145716": [
        {
          "CustName": "SPEEDY SMOG",
          "CustomerId": "1017871",
          "FNCustomerId": "450494"
        }
      ]
    };
  const handler = async (event) => {
    try {
      const subject = event.queryStringParameters.name || 'World'
      return {
        statusCode: 200,
        body: JSON.stringify(csutomerIds),
        // // more keys you can return:
        // headers: { "headerName": "headerValue", ... },
        // isBase64Encoded: true,
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }
  
  module.exports = { handler }
  