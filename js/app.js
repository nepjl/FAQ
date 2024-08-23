const toggles = document.querySelectorAll(".toggle_faq");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    })
})