// Pause animation on hover
const newsScroll = document.querySelector('.news-scroll');
if (newsScroll) {
    newsScroll.addEventListener('mouseenter', () => {
        newsScroll.style.animationPlayState = 'paused';
    });
    newsScroll.addEventListener('mouseleave', () => {
        newsScroll.style.animationPlayState = 'running';
    });
}
