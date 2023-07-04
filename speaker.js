const speakers = [
    {
      image: '.assets/oryl obel.jpg',
      speakerName: 'Orly Obel',
      job: 'Doctor of Intelligent Systems Enginnering',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/Babak_Hodjat.png',
      speakerName: 'Babak Hodjat',
      job: '  Software Engineer and specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/dr ebtesam.jpeg',
      speakerName: 'Dr ebtesam',
      job: '  Software Developer and specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/Lila Ibrahim.jpg',
      speakerName: 'Lila Ibrahim',
      job: '    Mobile Application Devloper and specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/ali agha.jpeg',
      speakerName: 'Ali Agha',
      job: '  Expert of Cisco ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/elon musk.jpeg',
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