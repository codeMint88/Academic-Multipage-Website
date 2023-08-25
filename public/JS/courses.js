const coursesContainer1 = document.getElementById("course_1st_display");
const coursesContainer2 = document.getElementById("course_2nd_display");
const coursesCard = document.querySelector(".courses_card");

// For the placeholder animation, we first generate same number of content in our array by cloning the coursesCard which is already in our hand coded html
for (let index = 0; index < 20; index++) {
  coursesContainer1.append(coursesCard.cloneNode(true));
}

function getContentData() {
  // checked if the documents have loaded
  if (document.readyState === "complete") {
    coursesContainer1.style.display = "none";
    coursesContainer2.style.display = "grid";
  }
}

setTimeout(getContentData, 2500);
