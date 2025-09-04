const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

function updateButtonText() {
    const isDarkMode = body.classList.contains('dark-mode');
    modeToggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

modeToggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    // Toggle light mode only if dark mode is toggled off
    if (!isDarkMode) {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
    // Save user preference for dark mode to local storage
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