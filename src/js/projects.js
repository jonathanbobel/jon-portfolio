async function loadProjects() {
    const container = document.getElementById('projectList');
    if (!container) return; // ✅ Don't run if we're not on the projects page
  
    const isProduction = window.location.hostname === 'www.jonathanbobel.com';
    const API_BASE_URL = isProduction
      ? 'https://portfolio-api-d05y.onrender.com'
      : 'http://localhost:3000';
  
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects`);
      const data = await response.json();
      container.innerHTML = '';
  
      data.forEach(project => {
        const card = document.createElement('div');
        card.className = "mb-10";
        card.innerHTML = `
          <h3 class="text-3xl font-sans font-semibold text-dark mb-4">${project.title}</h3>
          <img src="${project.image}" alt="${project.title} screenshot" class="w-full mb-4 border-2">
          <p class="text-xl text-gray-700 mt-2 mb-2">${project.description}</p>
          <a href="${project.link}" class="text-primary font-sans text-xl font-bold hover:underline mt-2">View Project</a>
        `;
        container.appendChild(card);
      });
    } catch (err) {
      console.error(err);
      container.innerHTML = '<p class="text-red-600">Failed to load projects.</p>';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const isProduction = window.location.hostname === 'www.jonathanbobel.com';
    const API_BASE_URL = isProduction
      ? 'https://portfolio-api-d05y.onrender.com'
      : 'http://localhost:3000';
  
    // Ping the API to wake it up
    fetch(`${API_BASE_URL}/ping`)
      .then(() => {
        // Give Render a moment to warm up (you can tweak this)
        setTimeout(loadProjects, 500);
      })
      .catch(err => {
        console.warn('API warm-up failed, loading anyway:', err);
        loadProjects(); // fallback to load immediately
      });
  });
