const pages = document.querySelectorAll(".page");
let current = 0;

function updatePages() {
    pages.forEach((page, index) => {
        if (index < current) {
            page.style.transform = "rotateY(-180deg)";
        } else {
            page.style.transform = "rotateY(0deg)";
        }
    });
}

document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
        if (current < pages.length - 1) {
            current++;
            updatePages();
        }
    });
});

document.querySelectorAll(".prev").forEach(btn => {
    btn.addEventListener("click", () => {
        if (current > 0) {
            current--;
            updatePages();
        }
    });
});