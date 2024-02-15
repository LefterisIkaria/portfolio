const applyThemeOnLoad = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const theme =
    localStorage.getItem("theme") ||
    (prefersDarkScheme.matches ? "dark" : "light");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Run the script in the head of the document to apply immediately
applyThemeOnLoad();
