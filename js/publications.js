
  function toggleYear(element) {
    const currentSection = element.parentElement;
    const allSections = document.querySelectorAll('.year-section');

    allSections.forEach(section => {
      if (section !== currentSection) {
        section.classList.remove('active');
      }
    });

    currentSection.classList.toggle('active');
  }

