const darkModeBtn = document.getElementById('dark-mode__btn');
const bodyBg = document.querySelector('.login-register__bg');
const modeIcon = document.getElementById('mode-icon');

darkModeBtn.addEventListener('click', function () {
    console.log("click");
    bodyBg.classList.toggle('dark-mode');
    if (bodyBg.classList.contains('dark-mode')) {
        modeIcon.textContent = '☀️';
    } else {
        modeIcon.textContent = '🌙';
    }
});
