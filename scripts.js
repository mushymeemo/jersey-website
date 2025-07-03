function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const design = document.getElementById("design").value;
  const qtyS = parseInt(document.getElementById("qtyS").value) || 0;
  const qtyM = parseInt(document.getElementById("qtyM").value) || 0;
  const qtyL = parseInt(document.getElementById("qtyL").value) || 0;
  const qtyXL = parseInt(document.getElementById("qtyXL").value) || 0;
  const totalQty = qtyS + qtyM + qtyL + qtyXL;

  const match = design.match(/RM(\d+(\.\d+)?)/);
  const pricePerUnit = match ? parseFloat(match[1]) : 0;
  const totalPrice = pricePerUnit * totalQty;
  document.getElementById("totalPrice").textContent = `Total Price: RM ${totalPrice.toFixed(2)}`;

  const message = `Hi, I would like to order a jersey:\n\n` +
    `Name: ${name}\n` +
    `Design: ${design}\n` +
    `Sizes:\n  S: ${qtyS}\n  M: ${qtyM}\n  L: ${qtyL}\n  XL: ${qtyXL}\n` +
    `Total Quantity: ${totalQty}\n` +
    `Total Price: RM${totalPrice.toFixed(2)}\n\n` +
    `Please confirm the order.`;

  const phoneNumber = "60142866301";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappLink, "_blank");
}

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, form, #chatbot iframe').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});
