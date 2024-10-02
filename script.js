document.addEventListener('DOMContentLoaded', () => {
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const userProfile = document.querySelector('.user-profile');

    hamburguerMenu.addEventListener('click', () => {
        userProfile.classList.toggle('show-dropdown');
    });
});
