const speakers = [
    {
      image: 'assets/1.jpg',
      speakerName: 'Orly Obel',
      job: 'Doctor of Intelligent Systems Enginnering',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/4.jpg',
      speakerName: 'Babak Hodjat',
      job: '  Software Engineer and specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/3.jpg',
      speakerName: 'Dr ebtesam',
      job: '  Software Developer and specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/1.jpg',
      speakerName: 'Lila Ibrahim',
      job: '    Mobile Application Devloper and specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/4.jpg',
      speakerName: 'Ali Agha',
      job: '  Expert of Cisco ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/5.jpg',
      speakerName: 'Elon Musk',
      job: '    Full-Stack Software Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
  ];
  // speakers added
  speakers.forEach((project) => {
    const container = document.querySelector('.program-speaker-part');
    const card = document.createElement('article');
    card.classList.add('program-speakers-main');
    card.innerHTML = `<img src="${project.image}" alt="speaker 1" />
          <div class="project-speakers-info">
            <h4 class="project-speakers-name">${project.speakerName}</h4>
            <h5 class="project-speakers-job">
              ${project.job}
            </h5>
            <hr class="project-speaker-underline" />
            <p class="project-speakers-desc">
             ${project.description}</p>
          </div>`;
    container.appendChild(card);
  });