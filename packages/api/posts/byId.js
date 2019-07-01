'use strict';

const requestPromise = require('request-promise');

exports.handler = async (event, context) => {
  try {
    const body = await requestPromise('http://https://jsonplaceholder.typicode.com/posts/1');
    return {
      statusCode: 200,
      body
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Internal server error: ${error}`
    };
  }
};