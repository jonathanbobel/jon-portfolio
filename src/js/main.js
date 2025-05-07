// Add this to your JavaScript file or in a script tag at the bottom of your HTML
document.addEventListener('DOMContentLoaded', function() {

  // Mobile menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('menu-backdrop');

  if (menuBtn && mobileMenu && backdrop) {
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('translate-x-0');

      // Toggle menu
      mobileMenu.classList.toggle('translate-x-full');
      mobileMenu.classList.toggle('translate-x-0');
      menuBtn.classList.toggle('open');

      // Show or hide backdrop with fade
      if (!isOpen) {
        backdrop.classList.remove('hidden');
        // Delay opacity to trigger fade-in after un-hiding
        requestAnimationFrame(() => backdrop.classList.replace('opacity-0', 'opacity-100'));
      } else {
        backdrop.classList.replace('opacity-100', 'opacity-0');
        // Wait for fade-out to complete before hiding
        setTimeout(() => backdrop.classList.add('hidden'), 300);
      }
    });

    backdrop.addEventListener('click', function () {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.classList.remove('translate-x-0');
      menuBtn.classList.remove('open');
      backdrop.classList.replace('opacity-100', 'opacity-0');
      setTimeout(() => backdrop.classList.add('hidden'), 300);
    });
  }

  // Array of titles to rotate through
  const titles = [
    "Design Technologist",
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Coder",
    "Interaction Designer",
    "Jiu Jitsu Black Belt",
    "Toddler Dad",
    "Cycling Advocate",
    "Outdoors Enthusiast"
  ];
  
  // Get the element where we'll display the rotating text
  const titleElement = document.querySelector('.rotating-text');

  if(titleElement) {
    let currentIndex = 0;
  
    // Function to update the text with fade effect
    function updateTitle() {
      // Fade out
      titleElement.classList.add('fade-out');
      
      // Wait for fade out to complete then change text and fade in
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        titleElement.textContent = titles[currentIndex];
        titleElement.classList.remove('fade-out');
      }, 500); // This should match the CSS transition time
    }
    
    // Change the title every 5 seconds
    setInterval(updateTitle, 5000);
  }

  const uhcToggle = document.getElementById('uhc-toggle');

  uhcToggle.addEventListener('change', () => {
    document.body.classList.toggle('uhc', uhcToggle.checked);
    localStorage.setItem('uhcMode', uhcToggle.checked ? 'on' : 'off');
  });

  // On page load
  if (localStorage.getItem('uhcMode') === 'on') {
    document.body.classList.add('uhc');
    uhcToggle.checked = true;
  }

});