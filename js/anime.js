const targets = document.querySelectorAll(".slidein");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
    }
  });
}, {
  threshold: 0.15
});

targets.forEach((target) => observer.observe(target));