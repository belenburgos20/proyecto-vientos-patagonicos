// ── GALLERY FILTER ──
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    galleryItems.forEach((item) => {
      const match = filter === "all" || item.dataset.cat === filter;
      item.classList.toggle("hidden", !match);
      if (match) {
        item.style.opacity = "0";
        item.style.transform = "translateY(12px)";
        setTimeout(() => {
          item.style.transition = "opacity .35s ease, transform .35s ease";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 20);
      }
    });
  });
});

// Deshabilitar el comportamiento de clic en las imágenes de la galería
document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir la acción predeterminada
  });
});

// ── LIGHTBOX ──
const lightbox = GLightbox({
  selector: "a[data-lightbox]",
  touchNavigation: true,
  loop: true,
  keyboardNavigation: true,
  closeButton: true,
  openEffect: "fade",
  closeEffect: "fade",
  slideEffect: "fade",
});