const body = document.querySelector("body");
const dashboard = document.querySelector(".dashboard");
const dashboardsSection = document.querySelector(".dashboards-section");
const pages = document.querySelector(".pages");
const pagesSection = document.querySelector(".pages-section");

// Dashboard Section
// Event Bubbling
body.addEventListener("mouseover", (event) => {
  if (event.target !== dashboard && event.target !== dashboardsSection) {
    return;
  }
  dashboardsSection.classList.add("change");
});

dashboard.addEventListener("mouseout", () => {
  dashboardsSection.classList.remove("change");
});

// End of Dashboard Section

// Pages Section
body.addEventListener("mouseover", (event) => {
  if (event.target !== pages && event.target !== pagesSection) {
    return;
  }
  pagesSection.classList.add("change");
});

pages.addEventListener("mouseout", () => {
  pagesSection.classList.remove("change");
});
// End of Pages Section
