function openBlogQuestions() {
  window.open('blog.html', '_blank');
}

// Function to fetch videos by category ID
const loadTube = async (id = '6') => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const tubes = data.data;

  // Display the videos in the container
  displayTubes(tubes);
};

// Function to display fetched videos
const displayTubes = (tubes) => {
  const tubeContainer = document.getElementById('tube-container');
  tubeContainer.textContent = ''; // Clear existing content

  // If no videos are available, show the modal
  if (!tubes || tubes.length === 0) {
    const modal = document.getElementById('my_modal_5');
    modal.showModal();
    return;
  }

  // Iterate over each video and create cards
  tubes.forEach((tube) => {
    const tubeCard = document.createElement('div');
    tubeCard.classList = `card p-4 bg-gray-300 shadow-xl`;

    tubeCard.innerHTML = `
        <figure class="px-2 pt-2">
        <img src="${tube.thumbnail}" alt="Video thumbnail" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <div class="flex">
            <img style="height:50px; width:50px; border-radius:100px;" src="${tube.authors[0]?.profile_picture}" alt="Author image" />
            <div class="card-content">
                <h2 class="card-title mt-1 ml-1">${tube.title}</h2>
                <div class="flex ml-2">
                    <h2 class="card-name mt-1">${tube.authors[0]?.profile_name}</h2>
                    <img class="ml-2" src="./fi_10629607.svg"/>
                </div>
                <h4 class="ml-2">${tube.others?.views} <span>views</span></h4>
            </div>
        </div>
        
        <div class="card-actions"></div>
      </div>
    `;

    // Append the card to the container
    tubeContainer.appendChild(tubeCard);
  });
};

// Category handlers
const handleAllBtn = () => {
  loadTube('1000'); // Load "All" category
};
const handleMusicBtn = () => {
  loadTube('1001'); // Load "Music" category
};
const handleDrawBtn = () => {
  loadTube('1005'); // Load "Drawing" category
};
const handleComedyBtn = () => {
  loadTube('1003'); // Load "Comedy" category
};

// JavaScript to control the modal
function closeMyModal() {
  const modal = document.getElementById('my_modal_5');
  modal.close();
}

// Automatically load "All" category when the page loads
window.onload = function () {
  handleAllBtn();
};
