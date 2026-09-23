"use strict";


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {

  const open = nav.classList.toggle("open");

  navToggle.setAttribute(
    "aria-expanded",
    String(open)
  );

  document.body.classList.toggle(
    "menu-open",
    open
  );

});


document.querySelectorAll(".site-nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    navToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "menu-open"
    );

  });

});


/* =====================================================
   REVEAL ANIMATIONS
===================================================== */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");

        revealObserver.unobserve(
          entry.target
        );

      });

    },
    {
      threshold:0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = [
  ...document.querySelectorAll(
    "main section[id], footer[id]"
  )
];

const navLinks = [
  ...document.querySelectorAll(
    ".site-nav a"
  )
];


const activeSectionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        const id =
          `#${entry.target.id}`;

        navLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") === id
          );

        });

      });

    },
    {
      rootMargin:"-35% 0px -55% 0px",
      threshold:0
    }
  );


sections.forEach(section => {

  activeSectionObserver.observe(
    section
  );

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}
