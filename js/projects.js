const initial = `
<div class="container mt-4">
    <h1 class="mb-4 projectHeader"><button onclick="gotoHome()" class="arrow" href="/"><i class="bi bi-arrow-left-circle"></i></button><span style="margin-left: 1rem;">Projects</span></h1>
    <div class="row project__list"></div>
</div>
`;

document.body.innerHTML = initial;

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    let projects = '';

    data.projects.forEach(project => {
      projects += `<div class="col-md-4">
                    <div class="card m-3">
                        <img src="${project.logo}" class="card-img-top" alt="${project.name}">
                        <div class="card-body" style="text-align: center;">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="card-text">${project.short_description}</p>
                            <button onclick="showProject(\`${project.name}\`, \`${project.logo}\`, \`${project.description}\`)" class="btn btn-dark link_button">Learn More</button>
                        </div>
                    </div>
                </div>`;
    });

    document.getElementsByClassName('project__list')[0].innerHTML = projects;
  })
  .catch(error => {
    console.error('Error:', error);
  });
