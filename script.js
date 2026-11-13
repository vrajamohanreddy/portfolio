const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const themeToggle = document.getElementById("themeToggle");
const courseCertificate = document.getElementById("courseCertificate");
const internshipCertificate = document.getElementById("internshipCertificate");
const certificateDialog = document.getElementById("certificateDialog");
const certificateDialogClose = certificateDialog.querySelector(".certificate-dialog-close");
const certificateDialogTitle = document.getElementById("certificateDialogTitle");
const certificateImage = document.getElementById("certificateImage");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☼";
});

courseCertificate.addEventListener("click", () => {
  certificateDialogTitle.textContent = "NPTEL – Big Data Computing";
  certificateImage.src = "nptel-course-certificate.png";
  certificateImage.alt = "NPTEL Big Data Computing certificate awarded to Raja Mohan Reddy";
  certificateDialog.showModal();
});
internshipCertificate.addEventListener("click", () => {
  certificateDialogTitle.textContent = "Internship Certificate";
  certificateImage.src = "internship-certificate.png";
  certificateImage.alt = "Averixis Solutions Web Development internship certificate awarded to Raja Mohan Reddy";
  certificateDialog.showModal();
});
certificateDialogClose.addEventListener("click", () => certificateDialog.close());
certificateDialog.addEventListener("click", event => {
  if (event.target === certificateDialog) certificateDialog.close();
});

document.getElementById("year").textContent = new Date().getFullYear();