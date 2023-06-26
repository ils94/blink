window.addEventListener("DOMContentLoaded", function () {
  // Hide all tab contents except the first one
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 1; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
});

function toggleTab(tabId, contentId) {
  // Hide all tab contents
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove "active" class from all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].querySelector("button").classList.remove("active");
  }

  // Show selected tab content
  var selectedTabContent = document.getElementById(contentId);
  selectedTabContent.style.display = "block";

  // Add "active" class to the clicked tab
  var clickedTab = document.getElementById(tabId).parentNode;
  clickedTab.querySelector("button").classList.add("active");

  // Animate tab content
  animateTabContent(selectedTabContent);
}

function animateTabContent(tabContent) {
  var title = tabContent.querySelector("h2");
  var paragraphs = tabContent.getElementsByTagName("p");
  var delay = 0;

  title.style.animation = "fadeIn 0.5s ease forwards";

  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.animation = "fadeIn 0.5s ease " + delay + "s forwards";
    delay += 0.2;
  }
}
