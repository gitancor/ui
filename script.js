// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Modal Elements
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeSignupModal = document.getElementById('closeSignupModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');

// Open login modal
loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Open signup modal
signupButton.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

// Close login modal
closeLoginModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close signup modal
closeSignupModal.addEventListener('click', () => {
  signupModal.style.display = 'none';
});

// Switch between login and signup modals
document.getElementById('switchToSignup').addEventListener('click', () => {
  loginModal.style.display = 'none';
  signupModal.style.display = 'block';
});

document.getElementById('switchToLogin').addEventListener('click', () => {
  signupModal.style.display = 'none';
  loginModal.style.display = 'block';
});

// Close modals when clicked outside
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  } else if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  if (username === '' || password === '') {
    loginError.style.display = 'block';
  } else {
    loginError.style.display = 'none';
    alert('Login successful!');
    loginModal.style.display = 'none';
  }
});

// Handle signup form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  if (username === '' || email === '' || password === '') {
    signupError.style.display = 'block';
  } else {
    signupError.style.display = 'none';
    alert('Sign up successful!');
    signupModal.style.display = 'none';
  }
});
