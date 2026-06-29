// auth.js — User authentication module

const SESSION_TIMEOUT = 60; // minutes

function login(username, password) {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }
  // Dummy auth — in production this would check a database
  if (username === 'admin' && password === 'secret') {
    return { success: true, token: 'abc123', expiresIn: SESSION_TIMEOUT };
  }
  return { success: false, error: 'Invalid credentials' };
}

function logout(token) {
  if (!token) {
    throw new Error('Token is required');
  }
  // Invalidate token
  return { success: true };
}

function validateToken(token) {
  // Dummy validation
  return token === 'abc123';
}

module.exports = { login, logout, validateToken, SESSION_TIMEOUT };