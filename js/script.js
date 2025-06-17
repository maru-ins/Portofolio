// Tambahkan nama ke hero dan footer
const nama = "Diva Lutfiando";
document.getElementById("nama").textContent = nama;
document.getElementById("footerNama").textContent = nama;

// Daftar proyek
const projects = [
  {
    title: "Aplikasi Tugas Harian",
    image: "assets/img/project1.jpg",
    description: "Aplikasi web untuk mengatur to-do list dengan UI minimalis."
  },
  {
    title: "Landing Page Produk",
    image: "assets/img/project2.jpg",
    description: "Landing page responsif untuk promosi produk digital."
  }
];

// Tampilkan semua proyek secara dinamis
const container = document.getElementById("projectContainer");
projects.forEach(project => {
  container.innerHTML += `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card h-100">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
        </div>
      </div>
    </div>
  `;
});

// Validasi form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Simulasi kirim
  document.getElementById("formSuccess").classList.remove("d-none");
  this.reset();
});
