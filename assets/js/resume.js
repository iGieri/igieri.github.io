document.addEventListener("DOMContentLoaded", function() {
    // Se il file JSON è ospitato sul server locale
    fetch('../../resume.json')
      .then(response => response.json())
      .then(data => {
        // Selezioniamo l'elemento <ul> dove inserire gli studi
        const studyList = document.getElementById('study-list');
        // Selezioniamo l'elemento <ul> dove inserire le esperienze lavorative
        const workList = document.getElementById('work-list');

        const certList = document.getElementById('cert-list');
        
        // Iteriamo sui progetti nel JSON
        data.education.forEach(education => {

            const studyItem = document.createElement('li');
            studyItem.classList.add('timeline-item');
            studyItem.innerHTML = `
            <div class="row">
            <div class="col-2" style="text-align: center;">
              <img src="assets/images/${education.school_logo}" alt="Education" class="education-icon" >
            </div>
            <div class="col">
              <h4 class="h4 timeline-item-title">${education.school_it}</h4>
              <span>${education.time_it}</span>
              <p class="timeline-text">
                ${education.description_it}
              </p>
            </div>
            </div>
            `;
            studyList.appendChild(studyItem);
        
        });
        data.experience.forEach(experience => {
                
            const workItem = document.createElement('li');
            workItem.classList.add('timeline-item');
            workItem.innerHTML = `
            <div class="row">
            <div class="col-2" style="text-align: center;">
              <img src="assets/images/${experience.logo}" alt="Education" class="education-icon" >
            </div>
            <div class="col">
            <h4 class="h4 timeline-item-title">${experience.title_it}</h4>
            <span>${experience.time_it}</span>
            <p class="timeline-text">
                ${experience.description_it}
            </p>
            </div>
            </div>
            `;
            workList.appendChild(workItem);
            
        });
        data.certifications.forEach(experience => {
                
          const workItem = document.createElement('li');
          workItem.classList.add('timeline-item');
          workItem.innerHTML = `
          <div class="row">
          <div class="col-2" style="text-align: center;">
            <img src="assets/images/${experience.logo}" alt="Education" class="education-icon" >
          </div>
          <div class="col">
          <h4 class="h4 timeline-item-title">${experience.title_it}</h4>
          <span>${experience.time_it}</span>
          <p class="timeline-text">
              ${experience.description_it}
          </p>
          </div>
          </div>
          `;
          certList.appendChild(workItem);
          
      });
    })
    .catch(error => console.error('Errore durante il fetch dei progetti:', error));
});

