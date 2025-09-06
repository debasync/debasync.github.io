document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('#main article');
    const navLinks = document.querySelectorAll('#header nav a');

    function showArticle(id) {
        articles.forEach(a => {
            a.classList.remove('active');
        });
        const art = document.getElementById(id);
        if(art) art.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const id = this.getAttribute('href').replace('#','');
            showArticle(id);
        });
    });

    // Show intro by default
    showArticle('intro');

    // Close button
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.remove('active');
        });
    });
});

    