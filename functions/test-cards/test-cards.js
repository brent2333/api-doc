// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const cards = [
  {
    "Alias":"0312",
    "CardId":"6077066",
    "CardToken":null,
    "LastFour":"************8889"
  },
  {
    "Alias":"0322",
    "CardId":"9999882",
    "CardToken":null,
    "LastFour":"************5916"
  },
  {
    "Alias":"0332",
    "CardId":"1111332",
    "CardToken":null,
    "LastFour":"************1125"
  }
];
const handler = async (event) => {
  try {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(cards),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
