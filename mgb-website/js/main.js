console.log("JS LOADED");

// =======================
// EMAIL VALIDATION
// =======================
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// =======================
// APPLY FORM (index.html)
// =======================
const applyForm = document.getElementById("applyForm");

if (applyForm) {
  applyForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value.trim();
    const program = document.getElementById("program").value;

    if (!fullName || !email || !phone || !country || !program) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    showSuccessMessage();
    applyForm.reset();
  });
}

// =======================
// SUCCESS MESSAGE
// =======================
function showSuccessMessage() {
  const formSection = document.querySelector(".apply");
  if (!formSection) return;

  const successDiv = document.createElement("div");
  successDiv.classList.add("success-message");

  successDiv.innerHTML = `
    <h3>✅ Application Submitted!</h3>
    <p>Thank you for applying. Our consultants will contact you soon.</p>
  `;

  formSection.appendChild(successDiv);

  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

// =======================
// SMOOTH SCROLL
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// =======================
// CONSULTATION FORM
// =======================
const consultationForm = document.getElementById("consultationForm");

if (consultationForm) {
  consultationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const phone = document.getElementById("cPhone").value.trim();
    const country = document.getElementById("cCountry").value.trim();

    if (!name || !email || !phone || !country) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    alert("✅ Consultation booked! We will contact you soon.");
    consultationForm.reset();
  });
}

// =======================
// NAVBAR TOGGLE
// =======================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// =======================
// AUTO-CLOSE MOBILE MENU + TEMP CLICK HIGHLIGHT
// =======================
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // TEMP highlight
    link.classList.add("active");

    setTimeout(() => {
      link.classList.remove("active");
    }, 800);

    // Close mobile menu
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });
});
