// Add this to your JavaScript file or in a script tag at the bottom of your HTML
document.addEventListener('DOMContentLoaded', function() {
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
});