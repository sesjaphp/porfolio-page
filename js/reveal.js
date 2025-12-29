    const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

function revealCallback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

const observer = new IntersectionObserver(revealCallback, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
