document.addEventListener('DOMContentLoaded', () => {
  // Set up search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    }
  });

  // Set up tab switching functionality with animation
  const spaceTabs = document.querySelectorAll('.space-tab');
  const spaces = document.querySelectorAll('.space');

  spaceTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const spaceId = this.getAttribute('data-space');

      if (this.classList.contains('active')) return;

      // Deactivate all tabs
      spaceTabs.forEach(t => t.classList.remove('active'));

      // Hide current space
      document.querySelector('.space.active').classList.remove('active');

      // Activate selected tab and space
      this.classList.add('active');
      document.getElementById(`${spaceId}-space`).classList.add('active');

      // Reset animations by removing and re-adding the class
      const links = document.querySelectorAll(`#${spaceId}-space .link`);
      links.forEach(link => {
        link.style.animation = 'none';
        void link.offsetWidth;
        link.style.animation = '';
      });
    });
  });

  // Initial animation for links
  const initialLinks = document.querySelectorAll('.space.active .link');
  initialLinks.forEach((link, index) => {
    link.style.animationDelay = `${0.05 * (index + 1)}s`;
  });
});
