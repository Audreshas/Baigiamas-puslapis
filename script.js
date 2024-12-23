const toggleModeButton = document.getElementById('toggle-mode');
const welcomeText = document.getElementById('welcome-text');

const savedMode = localStorage.getItem('mode');

if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleModeButton.textContent = 'Perjungti į Naktinį Režimą';
    welcomeText.textContent = 'Sveiki atvykę į Lietuvos miškų pasaulį!';
}

toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleModeButton.textContent = 'Perjungti į Naktinį Režimą';
        welcomeText.textContent = 'Sveiki atvykę į Lietuvos miškų pasaulį!';
        localStorage.setItem('mode', 'dark');
    } else {
        toggleModeButton.textContent = 'Perjungti į Dienos Režimą';
        welcomeText.textContent = 'Sveiki atvykę į Lietuvos miškų pasaulį!';
        localStorage.setItem('mode', 'light');
    }
});

// Kontaktų formos pateikimas
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ačiū už susisiekimą! Mes su jumis susisieksime.');
});
