document.querySelectorAll('.services-list a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default action of the <a> tag

        // Remove the "active" class from all links
        document.querySelectorAll('.services-list a').forEach(item => {
            item.classList.remove('active');
        });

        // Add the "active" class to the clicked link
        link.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.service-content').forEach(content => {
            content.style.display = 'none';
        });

        // Show the content section corresponding to the clicked link
        const contentId = link.getAttribute('data-content-id');
        document.getElementById(contentId).style.display = 'block';
    });
});
