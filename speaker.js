const speakers = [
        {
            image: 'assets/orly obel.jpg',
            speakerName: 'Orly Obel',
            job: 'AI Research Scientist',
            description: 'Orly Obel is an AI Research Scientist with expertise in developing intelligent systems for various applications. With a strong background in machine learning and data analysis, she works towards advancing AI technology to solve complex real-world problems.'
        },
        {
            image: 'assets/Babak_Hodjat.png',
            speakerName: 'Babak Hodjat',
            job: 'Co-founder and Chief Scientist',
            description: 'Babak Hodjat is a renowned computer scientist and co-founder of an AI company. With extensive experience in natural language processing and cognitive computing, he specializes in developing cutting-edge AI software and solutions to revolutionize industries.'
        },
        {
            image: 'assets/dr ebtesam.jpeg',
            speakerName: 'Dr. Ebtesam',
            job: 'AI Ethics Researcher',
            description: 'Dr. Ebtesam is a leading expert in AI ethics and responsible AI development. As an advocate for ethical AI practices, she conducts research and advises organizations on implementing AI technologies in a fair, transparent, and unbiased manner.'
        },
        {
            image: 'assets/Lila Ibrahim.jpg',
            speakerName: 'Lila Ibrahim',
            job: 'Senior AI Engineer',
            description: 'Lila Ibrahim is a highly skilled AI engineer specializing in mobile application development. With a focus on leveraging AI algorithms and deep learning techniques, she designs and builds intelligent mobile apps that enhance user experiences and provide personalized services.'
        },
        {
            image: 'assets/ali agha.jpeg',
            speakerName: 'Ali Agha',
            job: 'Network Security Specialist',
            description: 'Ali Agha is an expert in network security, particularly in the field of Cisco systems. With a deep understanding of cybersecurity and threat detection, he works to ensure secure and reliable network infrastructure for organizations.'
        },
        {
            image: 'assets/elon musk.jpeg',
            speakerName: 'Elon Musk',
            job: 'Founder and CEO of Tesla and SpaceX',
            description: 'Elon Musk is a visionary entrepreneur and innovator in the technology industry. As the CEO of Tesla and SpaceX, he utilizes software development and AI technologies to drive advancements in electric vehicles, space exploration, and sustainable energy solutions.'
        }
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


