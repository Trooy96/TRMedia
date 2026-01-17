// Portfolio Works Data
const works = [
  { title: "Tech Startup Logo", category: "logos", img: "works/logo1.png" },
  { title: "Clothing Store Brand Identity", category: "branding", img: "works/brand1.png" },
  { title: "Mobile Banking App UI", category: "uiux", img: "works/ui1.png" },
  { title: "Product Release Poster", category: "posters", img: "works/poster1.png" },
  { title: "Mining Company Logo", category: "logos", img: "works/logo3.png" },
  { title: "E-Commerce Dashboard", category: "uiux", img: "works/ui2.jpg" },
  { title: "Purse Branding Pack", category: "branding", img: "works/brand2.png" },
  { title: "Poster Series", category: "posters", img: "works/poster2.png" }
];

function loadGallery(filter = 'all') {
  const grid = document.getElementById('gallery');
  grid.innerHTML = '';
  works
    .filter(item => filter === 'all' || item.category === filter)
    .forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="overlay">
          <h3>${item.title}</h3>
          <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
        </div>
      `;
      div.onclick = () => openModal(item.img);
      grid.appendChild(div);
    });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadGallery(btn.dataset.filter);
  });
});

// Modal
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `<span class="close">&times;</span><img src="">`;
document.body.appendChild(modal);

function openModal(src) {
  modal.style.display = 'flex';
  modal.querySelector('img').src = src;
}
modal.querySelector('.close').onclick = () => modal.style.display = 'none';
modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// Load all on start
loadGallery();