'use strict';

const requestPromise = require('request-promise');
const options = {
  method: 'POST',
  uri: 'https://jsonplaceholder.typicode.com/posts',
  json: true,
}

exports.handler = async (event, context) => {
  try {
    const requestOptions = {
      ...options,
      body: {
        title: 'foo -' + Date.now(),
        body: 'bar -' + Date.now(),
        userId: Math.random() * 1000 + 100,
      }
    }
    const body = await requestPromise(requestOptions);
  } catch (error) {
    return {
      statusCode: 500,
      body: `Internal server error: ${error}`
    };
  }
};