document.addEventListener("DOMContentLoaded", function() {
  // ---------------- Switch Theme -------------------------
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("syntax_highlight").href = "/syntax-dark.css";
  } else {
    document.getElementById("syntax_highlight").href = "/syntax-light.css";
  }

  // ---------------- Toggle Sidebar -------------------------
  document.getElementById('toggle-sidebar')?.addEventListener('click', toggleSidebar);

  // ---------------- Toggle Mobile menu -------------------------
  document.getElementById('toggle-mobile-menu')?.addEventListener('click', toggleMobileMenu);
});

function toggleSidebar() {
  let sidebar = document.getElementById('sidebar');
  if ([...sidebar.classList].includes('translate-x-0')) {
    document.body.style.removeProperty("overflow")
    sidebar.classList.remove('translate-x-0')
    sidebar.classList.add('-translate-x-full')
  } else {
    document.body.style.setProperty("overflow", "hidden")
    sidebar.classList.remove('-translate-x-full')
    sidebar.classList.add('translate-x-0')
  }
}

function toggleMobileMenu() {
  let menu = document.querySelector('#mobile-menu div.nav-links');
  if ([...menu.classList].includes('h-screen')) {
    document.body.classList.remove("overflow-hidden", "relative")
    document.documentElement.classList.remove("overscroll-none",)
    menu.classList.remove('h-screen')
    menu.classList.add('h-0')
  } else {
    document.body.classList.add("overflow-hidden", "relative")
    document.documentElement.classList.add("overscroll-none",)
    menu.classList.remove('h-0')
    menu.classList.add('h-screen')
  }
}
