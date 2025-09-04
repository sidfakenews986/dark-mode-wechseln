const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

modeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    modeToggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    // Save user preference to local storage
    localStorage.setItem('darkMode', isDarkMode);
});

// Check if dark mode is saved
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    modeToggleButton.textContent = 'Switch to Light Mode';
} else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    modeToggleButton.textContent = 'Switch to Dark Mode';
}

// Ensure the button correctly reflects current mode on page load
const isDarkMode = body.classList.contains('dark-mode');
modeToggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';