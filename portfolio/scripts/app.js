window.addEventListener('load', () => {
    // Animate the progress bars
    document.querySelectorAll(".progress-bar").forEach(bar => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = progress;
    });
});
