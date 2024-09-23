document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector('.content');
  if (content) content.classList.add('loaded');

  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetUrl = this.getAttribute('href');
      document.body.classList.remove('fade-in');
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    });
  });

  const registrationForm = document.getElementById('registrationForm');
  const loginForm = document.getElementById('loginForm');

  if (registrationForm) {
    registrationForm.addEventListener('submit', handleRegistration);
  }

  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  function handleRegistration(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const courseSelected = document.getElementById('course').value;
    const lastSchool = document.getElementById('lastSchool').value;
    const yearSelected = document.getElementById('year').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    sessionStorage.setItem('registeredName', name);
    sessionStorage.setItem('registeredEmail', email);
    sessionStorage.setItem('registeredPhone', phone);
    sessionStorage.setItem('registeredGender', gender);
    sessionStorage.setItem('registeredAddress', address);
    sessionStorage.setItem('registeredCourse', courseSelected);
    sessionStorage.setItem('registeredLastSchool', lastSchool);
    sessionStorage.setItem('registeredYear', yearSelected);
    sessionStorage.setItem('registeredUsername', username);
    sessionStorage.setItem('registeredPassword', password);

    alert(`Registration successful! Welcome, ${name}. You can now log in.`);
    window.location.href = 'login.html';
  }

  function handleLogin(e) {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const registeredUsername = sessionStorage.getItem('registeredUsername');
    const registeredPassword = sessionStorage.getItem('registeredPassword');

    const loginMessage = document.getElementById('loginMessage');

    if (loginUsername === registeredUsername && loginPassword === registeredPassword) {
      loginMessage.innerText = `Login successful! Welcome, ${registeredUsername}. Redirecting...`;
      loginMessage.style.color = 'green';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } else {
      loginMessage.innerText = 'Incorrect username or password. Please try again.';
      loginMessage.style.color = 'red';
    }
  }
});
