document.querySelectorAll(".course-card")
.forEach(card => {

    card.addEventListener("click", () => {

        const course =
            card.dataset.course;

        localStorage.setItem(
            "selectedCourse",
            course
        );

        window.location.href =
            "path.html";

    });

});