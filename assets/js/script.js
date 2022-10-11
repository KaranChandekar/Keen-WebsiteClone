const body = document.querySelector("body");
const dashboard = document.querySelector(".dashboard");
const dashboardsSection = document.querySelector(".dashboards-section");

// Dashboard Section
// Event Bubbling
body.addEventListener("mouseover", (event) => {
  if (event.target !== dashboard && event.target !== dashboardsSection) {
    return;
  }
  dashboardsSection.classList.add("change");
});

body.addEventListener("mouseout", (event) => {
  if (event.target !== dashboard && event.target !== dashboardsSection) {
    dashboardsSection.classList.remove("change");
  }
  return;
});

// End of Dashboard Section
