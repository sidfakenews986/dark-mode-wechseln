const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

modeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    modeToggleButton.textContent = isDarkMode ? 'Wechseln zu Lichtmodus' : 'Wechseln zu Dunkelmodus';

    // Speichern der Benutzereinstellung in der lokalen Speicherung
    localStorage.setItem('darkMode', isDarkMode);
});

// Überprüfen, ob der Dunkelmodus gespeichert ist
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    modeToggleButton.textContent = 'Wechseln zu Lichtmodus';
} else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    modeToggleButton.textContent = 'Wechseln zu Dunkelmodus';
}