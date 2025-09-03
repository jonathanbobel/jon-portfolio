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
  const visual = document.getElementById('rotating-text-visual');
  const accessible = document.getElementById('rotating-text-accessible');

  if (!visual || !accessible) {
    console.warn('Rotating text elements not found');
    return;
  }

  const phrases = visual.children;
  const total = phrases.length;
  const originalCount = 9; // Number of original items (before duplicates)
  let currentIndex = 0;
  let offsets = [];

  function calculateOffsets() {
    offsets = Array.from(phrases).map(el => el.offsetTop - phrases[0].offsetTop);
  }

  // Initial calculation after load
  window.addEventListener('load', () => {
    calculateOffsets();

    setInterval(() => {
      currentIndex = (currentIndex + 1) % total;
      
      // If we're at a duplicated item, jump back to the original
      if (currentIndex >= originalCount) {
        // Jump back to the beginning seamlessly
        currentIndex = currentIndex - originalCount;
        // Update transform without animation for seamless jump
        visual.style.transition = 'none';
        visual.style.transform = `translateY(-${offsets[currentIndex]}px)`;
        // Re-enable animation after the jump
        requestAnimationFrame(() => {
          visual.style.transition = 'transform 500ms ease-in-out';
        });
      } else {
        // Normal transition
        visual.style.transform = `translateY(-${offsets[currentIndex]}px)`;
      }
      
      accessible.textContent = phrases[currentIndex].textContent;
    }, 5000);
  });

  // Recalculate offsets on window resize
  window.addEventListener('resize', () => {
    calculateOffsets();
    // Also recenter to current item after resize
    visual.style.transform = `translateY(-${offsets[currentIndex]}px)`;
  });

  const uhcToggle = document.getElementById('uhc-toggle');

  if (uhcToggle) {
    uhcToggle.addEventListener('change', () => {
      document.body.classList.toggle('uhc', uhcToggle.checked);
      localStorage.setItem('uhcMode', uhcToggle.checked ? 'on' : 'off');
    });
  
    // On page load
    if (localStorage.getItem('uhcMode') === 'on') {
      document.body.classList.add('uhc');
      uhcToggle.checked = true;
    }
  }
});