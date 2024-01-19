function openBlogQuestions() {
    window.open('blog.html', '_blank')
}

const loadTube = async (id='6') => {
    // console.log(id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const tubes = data.data;
  // console.log(tubes);
  
  displayTubes(tubes);
//   console.log(tubes);
};

const displayTubes = (tubes) => {
//   console.log(tubes);

//   step 1:
    const tubeContainer = document.getElementById('tube-container');
    tubeContainer.textContent = "";

    // tubeContainer.innerHTML = "";
    

  tubes.forEach((tube) => {
    console.log(tube);
    // 2. create a div
    const tubeCard = document.createElement("div");
    tubeCard.classList = `card p-4 bg-gray-300 shadow-xl`;
    // 3. set innerHTML
    tubeCard.innerHTML = `
        <figure class="px-2 pt-2">
        <img src="${tube.thumbnail}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <div class="flex">
            <img style="height:50px; width:50px; border-radius:100px;" src="${tube.authors[0]?.profile_picture}" alt="" />
            <div class="card-content">
                <h2 class="card-title mt-1 ml-1">${tube.title}</h2>
            <div class="flex ml-2">
            <h2 class="card-name mt-1">${tube.authors[0]?.profile_name}</h2>
                <img class="ml-2" src="./fi_10629607.svg"/>
            </div>
            <h4 class="ml-2">${tube.others?.views} <span>views</span></h4>
            </div>
        </div>
        
        <div class="card-actions">
        </div>
      </div>
      `;
    //   4. append child
    tubeContainer.appendChild(tubeCard)
  });
};

const handleAllBtn = () => {
    loadTube('1000');
}
const handleMusicBtn = () => {
    loadTube('1001');
}
const handleDrawBtn = () => {
    loadTube('1005');
    const modal = document.getElementById('my_modal_5');
    modal.showModal();
}
const handleComedyBtn = () => {
    loadTube('1003');
}

// Javascript to control the modal
function closeMyModal() {
    const modal = document.getElementById('my_modal_5');
    modal.close();
}
// loadTube() 
