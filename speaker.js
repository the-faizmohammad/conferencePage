const speakers = [
    {
      image: 'assets/orly obel.jpg',
      speakerName: 'Orly Obel',
      job: 'Doctor of Intelligent Systems Engineering',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/Babak_Hodjat.png',
      speakerName: 'Babak Hodjat',
      job: 'Software Engineer and Specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/dr ebtesam.jpeg',
      speakerName: 'Dr. Ebtesam',
      job: 'Software Developer and Specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/Lila Ibrahim.jpg',
      speakerName: 'Lila Ibrahim',
      job: 'Mobile Application Developer and Specialist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/ali agha.jpeg',
      speakerName: 'Ali Agha',
      job: 'Expert of Cisco',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
    {
      image: 'assets/elon musk.jpeg',
      speakerName: 'Elon Musk',
      job: 'Full-Stack Software Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
    },
  ];
  
  // Add speakers
  // Add speakers
const container = document.querySelector('.program-speaker-part');
const moreButton = document.querySelector('.program-speaker-btn');
const maxMobileCards = 2; // Maximum number of cards to show in mobile version
let isMobileView = true; // Flag to track if the current view is mobile or desktop

const showCards = (cardsToShow) => {
  container.innerHTML = ''; // Clear the container
  cardsToShow.forEach((project) => {
    const card = document.createElement('article');
    card.classList.add('program-speakers-main');
    card.innerHTML = `<img src="${project.image}" alt="speaker 1" />
      <div class="program-speakers-info">
        <h4 class="program-speakers-name">${project.speakerName}</h4>
        <h5 class="program-speakers-job">${project.job}</h5>
        <hr class="program-speaker-underline" />
        <p class="program-speakers-desc">${project.description}</p>
      </div>`;
    container.appendChild(card);
  });
};

const toggleView = () => {
  if (isMobileView) {
    moreButton.textContent = 'Less';
    showCards(speakers);
  } else {
    moreButton.textContent = 'More';
    showCards(speakers.slice(0, maxMobileCards));
  }
  isMobileView = !isMobileView;
};

// Show initial cards based on the view
if (window.innerWidth >= 768) {
  showCards(speakers);
} else {
  showCards(speakers.slice(0, maxMobileCards));
}

// Toggle view on "More" button click
moreButton.addEventListener('click', toggleView);

// Update the view on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !isMobileView) {
    toggleView();
  }
});

  
  