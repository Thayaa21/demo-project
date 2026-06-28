// index.js — Application entry point

const { login } = require('./auth');
const { formatDate } = require('./utils');

console.log('Demo app started at', formatDate(new Date()));

// Example usage
const result = login('admin', 'secret');
console.log('Login result:', result);
