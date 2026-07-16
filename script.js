// تغيير لون الهيدر أثناء التمرير
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,.80)";
    } else {
        header.style.background = "rgba(0,0,0,.45)";
    }
});

// قائمة الجوال
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});