// Project modal data
const projectsData = {
  project1: { image:"assets/images/project1-feature.jpg", video:"assets/videos/project1.mp4", info:"<h3>Project 1</h3><p>Android Unity game with multiplayer and ads.</p>" },
  project2: { image:"assets/images/project2-feature.jpg", video:"assets/videos/project2.mp4", info:"<h3>Project 2</h3><p>Android Unity game with analytics.</p>" },
  project3: { image:"assets/images/project3-feature.jpg", video:"assets/videos/project3.mp4", info:"<h3>Project 3</h3><p>iOS Unity game with multiplayer support.</p>" },
  project4: { image:"assets/images/project4-feature.jpg", video:"assets/videos/project4.mp4", info:"<h3>Project 4</h3><p>iOS Unity project with ads integration.</p>" },
  project5: { image:"assets/images/project5-feature.jpg", video:"assets/videos/project5.mp4", info:"<h3>Project 5</h3><p>Metaverse immersive experience.</p>" },
  project6: { image:"assets/images/project6-feature.jpg", video:"assets/videos/project6.mp4", info:"<h3>Project 6</h3><p>Metaverse VR/AR project.</p>" }
};

function openProject(projectId){
  const modal = document.getElementById("projectModal");
  const image = document.getElementById("projectImage");
  const video = document.getElementById("projectVideo");
  const info = document.getElementById("projectInfo");
  image.src = projectsData[projectId].image;
  video.src = projectsData[projectId].video;
  info.innerHTML = projectsData[projectId].info;
  modal.style.display = "block";
}

function closeProject(){
  document.getElementById("projectModal").style.display="none";
}

// Fade-in sections
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animation = "fadeInUp 1s forwards";
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
