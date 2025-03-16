// Add event listeners to all dropdown headings
document.querySelectorAll('.dropdown-heading').forEach(heading => {
    heading.addEventListener('click', () => {
        // Toggle the visibility of the next sibling element (dropdown content)
        const content = heading.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});