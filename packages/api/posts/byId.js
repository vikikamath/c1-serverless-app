'use strict';

const axios = require('axios');
const options = {
  method: 'get',
  baseURL: 'https://jsonplaceholder.typicode.com',
};

exports.handler = async (event, context) => {
  const requestOptions = {
    ...options,
    url: event.path,
  }
  try {
    const {
      data,
      status
    } = await axios(requestOptions);
    return {
      statusCode: status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Internal server error: ${error}`
    };
  }
};