'use strict';

const axios = require('axios');
const {
  responseHeaders
} = require('../../common');

const options = () => ({
  method: 'post',
  base: 'https://jsonplaceholder.typicode.com',
  url: '/posts',
  data: {
    title: 'foo -' + Date.now(),
    body: 'bar -' + Date.now(),
    userId: Math.random() * 1000 + 100,
  }
});

exports.handler = async (event, context) => {
  try {
    const {
      data,
      status
    } = await axios(options());
    return {
      statusCode: status,
      body: JSON.stringify(data),
      headers: responseHeaders,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Internal server error: ${error}`,
      headers: responseHeaders,
    };
  }
};