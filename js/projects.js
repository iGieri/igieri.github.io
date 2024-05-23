import data from '../data.json' assert { type: 'json' };

const initial = `
<div class="container mt-4">
    <h1 class="mb-4"><a class="arrow" href="/"><i class="bi bi-arrow-left-circle"></i></a><span style="margin-left: 1rem;">Projects</span></h1>
    <div class="row project__list"></div>
</div>
`;

document.body.innerHTML = initial;


let projects = '';

data.projects.forEach(project => {
    projects += `<div class="col-md-4">
                    <div class="card m-3">
                        <img src="${project.logo}" class="card-img-top" alt="${project.name}">
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="card-text">${project.short_description}</p>
                            <button onclick="showProject(\`${project.name}\`, \`${project.logo}\`, \`${project.description}\`)" class="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>`;
});



document.getElementsByClassName('project__list')[0].innerHTML = projects;

