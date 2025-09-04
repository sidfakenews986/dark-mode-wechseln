const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

function updateButtonText() {
    const isDarkMode = body.classList.contains('dark-mode');
    modeToggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

modeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    // Save user preference to local storage
    localStorage.setItem('darkMode', isDarkMode);
    updateButtonText();
});

// Check if dark mode is saved
const darkModePreference = localStorage.getItem('darkMode');
if (darkModePreference === 'true') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
} else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
}

// Update the button text on page load
updateButtonText();