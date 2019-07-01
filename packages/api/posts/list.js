'use strict';

// const requestPromise = require('request-promise');

exports.handler = async () => {
  try {
    // const body = await requestPromise('http://https://jsonplaceholder.typicode.com/posts');
    return {
      statusCode: 200,
      body: JSON.stringify({
        userId: 1,
        id: 1,
        title: 'The title',
        body: 'This is body',
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Internal server error: ${error}`
    };
  }
};