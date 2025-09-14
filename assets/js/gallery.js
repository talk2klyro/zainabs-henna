async function loadGallery() {
  const response = await fetch("assets/data/portfolio.json");
  const images = await response.json();
  const gallery = document.getElementById("gallery");

  images.forEach(item => {
    const slide = document.createElement("div");
    slide.classList.add("gallery-item");
    slide.innerHTML = `
      <img src="${item.image}" alt="Henna Design - ${item.category}">
      <span class="category">${item.category}</span>
    `;
    gallery.appendChild(slide);
  });

  updateProgress();
}

// Progress bar based on scroll
function updateProgress() {
  const progress = document.getElementById("progress");
  const gallery = document.querySelector(".gallery-container");

  gallery.addEventListener("scroll", () => {
    const scrollLeft = gallery.scrollLeft;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const percentage = (scrollLeft / maxScroll) * 100;
    progress.style.width = percentage + "%";
  });
}

document.addEventListener("DOMContentLoaded", loadGallery);
