// auth.test.js — Tests for the auth module
const { test } = require('node:test');
const assert = require('node:assert');
const { login, logout, validateToken, SESSION_TIMEOUT } = require('../src/auth');

test('login succeeds with correct credentials', () => {
  const result = login('admin', 'secret');
  assert.strictEqual(result.success, true);
  assert.ok(result.token);
});

test('login fails with wrong password', () => {
  const result = login('admin', 'wrong');
  assert.strictEqual(result.success, false);
  assert.ok(result.error);
});

test('login throws when username is missing', () => {
  assert.throws(() => login('', 'secret'), /required/);
});

test('logout succeeds with valid token', () => {
  const result = logout('abc123');
  assert.strictEqual(result.success, true);
});

test('logout throws when token is missing', () => {
  assert.throws(() => logout(''), /required/);
});

test('validateToken returns true for valid token', () => {
  assert.strictEqual(validateToken('abc123'), true);
});

test('validateToken returns false for invalid token', () => {
  assert.strictEqual(validateToken('bad-token'), false);
});

test('SESSION_TIMEOUT is a positive number', () => {
  assert.ok(SESSION_TIMEOUT > 0);
});
