// auth.js — User authentication module

const SESSION_TIMEOUT = 45; // minutes

function login(username, password) {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }
  // Dummy auth — in production this would check a database
  if (username === 'admin' && password === 'qbotica') {
    return { success: true, token: 'taha12', expiresIn: SESSION_TIMEOUT };
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
  return token === 'taha12';
}

module.exports = { login, logout, validateToken, SESSION_TIMEOUT };