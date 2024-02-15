const darkModeBtn = document.getElementById('dark-mode__btn');
// const bodyBg = document.querySelector('.login-register__bg, .body-bg, .detail-movie__bg--main, .not-found__bg');
const bodyBg = document.querySelector('.toggle-dark-mode');
const modeIcon = document.getElementById('mode-icon');

darkModeBtn.addEventListener('click', function () {
    console.log("click");
    bodyBg.classList.toggle('dark-mode');
    bodyBg.classList.toggle('body-bg__dark-mode');
    if (bodyBg.classList.contains('dark-mode')) {
        modeIcon.textContent = '☀️';
    } else {
        modeIcon.textContent = '🌙';
    }
});
