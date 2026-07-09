document.querySelectorAll(".questions").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});