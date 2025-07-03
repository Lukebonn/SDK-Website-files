const colors = ['#f0a202', '#f45b69', '#7bdff2', '#ffcb77', '#94d82d', '#ff7f50', '#bc6ff1', '#00b894'];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

document.addEventListener("DOMContentLoaded", () => {
    const highlightSpan = document.getElementById('highlighted-text');
    if (highlightSpan) {
        highlightSpan.style.color = randomColor;
    }
});