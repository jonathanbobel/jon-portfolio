async function loadProjects() {
    const projectsContainer = document.getElementById('projects');

    try {
        const response = await fetch('https://portfolio-api-d05y.onrender.com/api/projects');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const projects = await response.json();

        // Clear the container 
        projectsContainer.innerHTML = '';

        // Loop through projects and create elements
        projects.forEach(project => {
            const projectCard = document.createElement('div');
        });

    }
}