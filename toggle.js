function toggleTheme() {
    var currentTheme = localStorage.getItem('theme') || 'style1.css';
    var newTheme = currentTheme === 'style1.css' ? 'style2.css' : 'style1.css';
    
    localStorage.setItem('theme', newTheme);
    document.getElementById('theme-style').setAttribute('href', newTheme);
}

// Apply the saved theme when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme') || 'style1.css';
    document.getElementById('theme-style').setAttribute('href', savedTheme);
});