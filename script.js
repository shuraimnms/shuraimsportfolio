// Scroll-triggered animation (for skill bars)
window.addEventListener('scroll', function() {
    const skillSections = document.querySelectorAll('.progress-bar');
    skillSections.forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            skill.style.width = skill.getAttribute('class').includes('html') ? '90%' : '75%';
        }
    });
});
