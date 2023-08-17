// About Page Starts here

const tabsContainer = document.querySelector(".tabs_container");
const tabsList = tabsContainer.querySelector(".about_tab_ul");
const tabButtons = tabsList.querySelectorAll(".about_tab_li");
const tabPanels = tabsContainer.querySelectorAll(".tabs_panels > div");

// Inform screen reader that this tabsList is a tab
tabsList.setAttribute("role", "tablist");

// Set the tab li role to presentation
tabsList.querySelectorAll("li").forEach((listitem) => {
  listitem.setAttribute("role", "presentation");
});

tabButtons.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  if (index === 0) {
    tab.setAttribute("aria-selected", "true");
    // we'll add something here
  } else {
    tab.setAttribute("tabindex", "-1");
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabPanels.forEach((panel) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("tabindex", "0");
});

// instead of looping through the anchor links and adding event listeners to each, just add the event listener to the tabsContainer and then create a new variable called clickedTab which gets the anchor tag when we click on any of them or returns null if what we clicked on is not an anchor tag
tabsContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("a");
  // This makes sure that js does not do anything if the clickedTab is not an anchor link
  if (!clickedTab) return;
  // Prevent the link we clicked on from going to its targeted content
  e.preventDefault();

  switchTab(clickedTab);
});

tabsContainer.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "Home":
      e.preventDefault();
      switchTab(tabButtons[0]);
      break;
    case "End":
      e.preventDefault();
      switchTab(tabButtons[tabButtons.length - 1]);
      break;
  }
});

function moveLeft() {
  const currentTab = document.activeElement;
  if (!currentTab.parentElement.previousElementSibling) {
    switchTab(tabButtons[tabButtons.length - 1]);
  } else {
    switchTab(
      currentTab.parentElement.previousElementSibling.querySelector("a")
    );
  }
}

function moveRight() {
  const currentTab = document.activeElement;
  if (!currentTab.parentElement.nextElementSibling) {
    switchTab(tabButtons[0]);
  } else {
    switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
  }
}

function switchTab(newTab) {
  const activePanelId = newTab.getAttribute("href");
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", false);
    button.setAttribute("tabindex", "-1");
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  activePanel.removeAttribute("hidden", false);

  newTab.parentElement.setAttribute("aria-selected", true);
  newTab.setAttribute("tabindex", "0");
  newTab.focus();
  console.log(newTab);
}

// About Page Ends here
