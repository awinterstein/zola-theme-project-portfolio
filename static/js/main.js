function toggleSidebar(){var e=document.getElementById("sidebar");[...e.classList].includes("translate-x-0")?(document.body.style.removeProperty("overflow"),e.classList.remove("translate-x-0"),e.classList.add("-translate-x-full")):(document.body.style.setProperty("overflow","hidden"),e.classList.remove("-translate-x-full"),e.classList.add("translate-x-0"))}function toggleMobileMenu(){var e=document.querySelector("#mobile-menu div.nav-links");[...e.classList].includes("h-screen")?(document.body.classList.remove("overflow-hidden","relative"),document.documentElement.classList.remove("overscroll-none"),e.classList.remove("h-screen"),e.classList.add("h-0")):(document.body.classList.add("overflow-hidden","relative"),document.documentElement.classList.add("overscroll-none"),e.classList.remove("h-0"),e.classList.add("h-screen"))}document.addEventListener("DOMContentLoaded",function(){window.matchMedia("(prefers-color-scheme: dark)").matches?document.getElementById("syntax_highlight").href="/syntax-dark.css":document.getElementById("syntax_highlight").href="/syntax-light.css",document.getElementById("toggle-sidebar")?.addEventListener("click",toggleSidebar),document.getElementById("toggle-mobile-menu")?.addEventListener("click",toggleMobileMenu)});