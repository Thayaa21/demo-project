// utils.test.js — Tests for utility functions
const { test } = require('node:test');
const assert = require('node:assert');
const { formatDate, truncate, isValidEmail } = require('../src/utils');

test('formatDate returns YYYY-MM-DD format', () => {
  const result = formatDate(new Date('2024-01-15'));
  assert.strictEqual(result, '2024-01-15');
});

test('truncate returns string unchanged if under limit', () => {
  assert.strictEqual(truncate('hello', 10), 'hello');
});

test('truncate cuts string and adds ellipsis', () => {
  const result = truncate('hello world', 5);
  assert.strictEqual(result, 'hello...');
});

test('isValidEmail returns true for valid email', () => {
  assert.strictEqual(isValidEmail('user@example.com'), true);
});

test('isValidEmail returns false for invalid email', () => {
  assert.strictEqual(isValidEmail('not-an-email'), false);
});
