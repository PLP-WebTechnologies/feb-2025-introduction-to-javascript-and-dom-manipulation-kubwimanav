// script.js - JavaScript functionality for the interactive webpage

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
  // Get references to DOM elements
  const dynamicText = document.getElementById("dynamic-text");
  const changeTextBtn = document.getElementById("change-text-btn");
  const styleTarget = document.getElementById("style-target");
  const changeColorBtn = document.getElementById("change-color-btn");
  const changeSizeBtn = document.getElementById("change-size-btn");
  const resetStyleBtn = document.getElementById("reset-style-btn");
  const toggleElementBtn = document.getElementById("toggle-element-btn");
  const toggleTarget = document.getElementById("toggle-target");

  // Text content examples
  const textOptions = [
    "JavaScript has changed the content of this paragraph!",
    "Dynamic content makes websites interactive and engaging.",
    "You can update text without reloading the page.",
    "This is the power of DOM manipulation with JavaScript!",
  ];

  // Color options for style changes
  const colorOptions = [
    "#f8bbd0", // pink
    "#c8e6c9", // green
    "#bbdefb", // blue
    "#d1c4e9", // purple
    "#ffe0b2", // orange
  ];

  // Track current state
  let currentTextIndex = 0;
  let currentColorIndex = 0;
  let isLargeSize = false;

  // 1. Dynamic Text Content Change
  changeTextBtn.addEventListener("click", function () {
    currentTextIndex = (currentTextIndex + 1) % textOptions.length;

    // Create a temporary element to hold the new text with a highlight span
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = textOptions[currentTextIndex];

    // Add a highlight class to a random word
    const words = textOptions[currentTextIndex].split(" ");
    const randomIndex = Math.floor(Math.random() * words.length);

    // Reconstruct the text with the highlighted word
    const highlightedText = words
      .map((word, index) => {
        if (index === randomIndex) {
          return `<span class="highlight">${word}</span>`;
        }
        return word;
      })
      .join(" ");

    // Update the text content with HTML
    dynamicText.innerHTML = highlightedText;
  });

  // 2. CSS Style Modifications
  changeColorBtn.addEventListener("click", function () {
    currentColorIndex = (currentColorIndex + 1) % colorOptions.length;
    styleTarget.style.backgroundColor = colorOptions[currentColorIndex];
    styleTarget.style.borderColor = "#999";
  });

  changeSizeBtn.addEventListener("click", function () {
    isLargeSize = !isLargeSize;

    if (isLargeSize) {
      styleTarget.style.padding = "30px";
      styleTarget.style.fontSize = "1.2rem";
      styleTarget.style.fontWeight = "bold";
    } else {
      styleTarget.style.padding = "15px";
      styleTarget.style.fontSize = "1rem";
      styleTarget.style.fontWeight = "normal";
    }
  });

  resetStyleBtn.addEventListener("click", function () {
    // Reset all style changes
    styleTarget.style.backgroundColor = "white";
    styleTarget.style.padding = "15px";
    styleTarget.style.fontSize = "1rem";
    styleTarget.style.fontWeight = "normal";
    styleTarget.style.borderColor = "#ddd";

    // Reset tracking variables
    currentColorIndex = 0;
    isLargeSize = false;
  });

  // 3. Adding & Removing Elements
  toggleElementBtn.addEventListener("click", function () {
    // Toggle the 'hidden' class to show/hide the element
    toggleTarget.classList.toggle("hidden");

    // Update button text based on visibility state
    if (toggleTarget.classList.contains("hidden")) {
      toggleElementBtn.textContent = "Show Element";
    } else {
      toggleElementBtn.textContent = "Hide Element";

      // Add a subtle animation when showing
      toggleTarget.style.animation = "fadeIn 0.5s";
    }
  });

  // Initialize the toggle button text
  toggleElementBtn.textContent = "Show Element";
});

// Optional: Add a theme toggle for the entire page
document.addEventListener("DOMContentLoaded", function () {
  // Create the theme toggle button
  const themeToggle = document.createElement("button");
  themeToggle.textContent = "Toggle Dark Mode";
  themeToggle.id = "theme-toggle";
  themeToggle.style.position = "fixed";
  themeToggle.style.top = "10px";
  themeToggle.style.right = "10px";
  themeToggle.style.zIndex = "1000";

  document.body.appendChild(themeToggle);

  // Add theme toggle functionality
  let isDarkMode = false;

  themeToggle.addEventListener("click", function () {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#f5f5f5";
      document.querySelector("main").style.backgroundColor = "#444";
      document.querySelector("main").style.color = "#f5f5f5";
    } else {
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "initial";
      document.querySelector("main").style.backgroundColor = "white";
      document.querySelector("main").style.color = "initial";
    }
  });
});
