// Courses Menu Starts here

// Saved the HTML data in an array
courses = [
  {
    id: 1,
    img: "image/course1.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 2,
    img: "image/course2.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 3,
    img: "image/course3.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 4,
    img: "image/course4.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 5,
    img: "image/course5.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 6,
    img: "image/course6.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 7,
    img: "image/course7.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 8,
    img: "image/course8.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 9,
    img: "image/course9.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 10,
    img: "image/course10.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 11,
    img: "image/course11.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 12,
    img: "image/course12.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 13,
    img: "image/course13.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 14,
    img: "image/course14.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 15,
    img: "image/course15.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 16,
    img: "image/course16.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 17,
    img: "image/course17.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
  {
    id: 18,
    img: "image/course18.jpg",
    title: "Web Development",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    button: `<button class="ripple_button"> Explore </button>`,
  },
];

const courseHeader = document.getElementById("course_header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const coursesContainer = document.getElementById("courses_container");
const coursesCard = document.querySelector(".courses_card");
const courseRippleBtn = document.getElementById("course_link");
const animated_bgs = document.querySelectorAll(".animated_bg");
const animated_bg_texts = document.querySelectorAll(".animated_bg_text");

// This would serve as a div or string that would take in the HTML generated.
let coursesHTML = "";

// For the placeholder animation, we first generate same number of content in our array by cloning the coursesCard which is already in our hand coded html
for (let index = 0; index < courses.length; index++) {
  coursesContainer.append(coursesCard.cloneNode(true));
}

// We allowed the animation to happen with the codes above. We then call this function after 2500ms
function getContentData() {
  // checked if the documents have loaded
  if (document.readyState === "complete") {
    // To stop the placeholder animation, we set the innerHTML of the coursesContainer to an empty string. This removed the cloned data we generated earlier plus the hand coded html
    coursesContainer.innerHTML = "";
    // Looping and generating new html with the courses array data and adding them to the variable coursesHTML
    courses.forEach((course) => {
      coursesHTML += `
    <div class="courses_card">
      <div class="card_header " id="course_header"> <img src=${course.img}> </div>
        <div class="card_content">
          <h3 class="card_title" id="title"> ${course.title} </h3>
          <p class="card_excerpt" id="excerpt">
            ${course.details}
          </p>
          <div class="course_link" id="course_link">${course.button}</div>
      </div>
    </div>
    `;
    });

    // Adding all the generated html to the coursesContainer innerHTML
    coursesContainer.innerHTML = coursesHTML;

    // This helped to solve the issue with the rippleBtn. This must come after we grenerated the cards and added it to our html. If we did it before generating the cards, the code won't see the course_link class because it was among the element classes we removed in the coursesContainer when we set the innerHTML to an empty string before generating the new cards
    const rippleBtnContainer = document.querySelectorAll(".course_link");

    // Loop through the rippleBtn and set the btnContainer styles to fit the rippleBtn height and width; it removed the initial styles that was there for the place holder animation. Without this, the rippleBtn will not take the unchanged styles of its container which in turn helped to rightly position the rippleBtn in the card
    rippleBtnContainer.forEach((btnContainer) => {
      btnContainer.style.width = "fit-content";
      btnContainer.style.height = "fit-content";
    });
  }
}

setTimeout(getContentData, 2500);

// Courses Menu Ends here
