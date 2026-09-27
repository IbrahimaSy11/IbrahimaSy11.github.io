// Mobile menu: the button shows and hides the nav links on small screens.
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

const setMenuOpen = (open) => {
  navToggle.setAttribute("aria-expanded", String(open));
  siteNav.classList.toggle("open", open);
};

navToggle.addEventListener("click", () => {
  setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu after choosing a link, or when Escape is pressed.
siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    navToggle.focus();
  }
});

// Copy email: only shown when the browser supports the Clipboard API.
document.querySelectorAll(".copy-btn").forEach((button) => {
  if (!navigator.clipboard) return;
  button.hidden = false;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy failed";
    }
    setTimeout(() => {
      button.textContent = "Copy";
    }, 2000);
  });
});
