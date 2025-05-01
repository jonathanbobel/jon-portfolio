async function loadProjects() {
    const container = document.getElementById('projectList');

    try {
        const response = await fetch('https://portfolio-api-d05y.onrender.com/api/projects');
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        const data = await response.json();
        container.innerHTML = '';

        // Loop through projects and create elements
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
    }
    catch (err) {
        console.error(err);
        container.innerHTML = '<p class="text-red-600">Failed to load projects.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);