// Function to toggle the visibility of the menu and change the hamburger icon state.
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Toggle dark mode when the menu is clicked
  toggleDarkMode();
}

// Function to toggle dark mode
function toggleDarkMode() {
  let darkMode = localStorage.getItem('darkMode');
  console.log('Current Dark Mode status:', darkMode);
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  console.log('Dark Mode Enabled');
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', 'disabled');
  console.log('Dark Mode Disabled');
}

// If the user already visited and enabled darkMode, start with it on
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  // Initial dark mode check
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }
});
