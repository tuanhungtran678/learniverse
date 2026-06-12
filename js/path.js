const course =
    localStorage.getItem("selectedCourse");

const title =
    document.getElementById("courseTitle");

if (course) {

    title.textContent =
        course.charAt(0).toUpperCase()
        + course.slice(1)
        + " Path";

}

document
.getElementById("startLesson")
.addEventListener("click", () => {

    window.location.href =
        "lesson.html";

});