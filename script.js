//tombol ganti menu
themeToggle.addeventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☾";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀";
    }
});

//smooth navigation
const navLinks = document.querySelectorAll(
    ".navbar nav a"
);

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId =
            this.getAttribute("href");
        const target =
            document.querySelector(targetId);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

//active navigation
const sections =
    document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach(function (section) {
        const sectionTop =
            section.offsetTop - 150;
        const sectionHeight =
            section.offsetHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.style.color = "";
        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.style.color =
                "var(--pink-dark)";
        }
    });
});

//fade animation
const animatedElements =
    document.querySelectorAll(".portfolio-card, .service-card, .price-card, .dream-box");

const observer =
    new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        "show"
                    );
                }
            });

        },
        {
            threshold: 0.15
        }
    );

animatedElements.forEach(function (element) {
    element.classList.add("animate");
    observer.observe(element);
});


/* ===== FAQ ACCORDION ===== */

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isOpen = item.classList.contains("active");

      // Tutup semua jawaban
      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove("active");

        const otherQuestion =
          otherItem.querySelector(".faq-question");

        otherQuestion.setAttribute("aria-expanded", "false");
      });

      // Buka jawaban yang diklik
      if (!isOpen) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
});
