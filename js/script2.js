document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Close all dropdowns when menu is toggled
    dropdowns.forEach(dropdown => {
      const menu = dropdown.querySelector('.dropdown-menu');
      menu.classList.remove('active');
    });
  });
  
  // Dropdown toggle for mobile
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        menu.classList.toggle('active');
      }
    });
  });
  
  // Sidebar functionality
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const mainContent = document.getElementById('mainContent');
  
  sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    mainContent.classList.toggle('shifted');
  });
  
  overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    mainContent.classList.remove('shifted');
  });
  
  // Sidebar dropdown functionality
  const sidebarDropdownToggles = document.querySelectorAll('.sidebar-dropdown-toggle');
  
  sidebarDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const parentItem = this.parentElement;
      const dropdown = parentItem.querySelector('.sidebar-dropdown');
      
      // Close all other dropdowns
      document.querySelectorAll('.sidebar-dropdown').forEach(item => {
        if (item !== dropdown) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
    });
  });
  
  // Close sidebar when clicking a link (except dropdown toggles)
  const sidebarLinks = document.querySelectorAll('.sidebar-menu a:not(.sidebar-dropdown-toggle)');
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        mainContent.classList.remove('shifted');
      }
    });
  });
});