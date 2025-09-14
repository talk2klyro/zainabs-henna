// Function to load reusable components
async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
  } catch (err) {
    console.error("Error loading component:", file, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");
});
