import fetch from 'node-fetch';

export async function handler(event, context) {
  const url = event.queryStringParameters.url;
  const response = await fetch(url);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };
}
