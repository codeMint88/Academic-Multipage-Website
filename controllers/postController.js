const { Course } = require("../model/data");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage }).single("courseImage");

// Using asynchronous operation to get the course document from our database
const getAllPosts = async (req, res) => {
  try {
    const foundArticles = await Course.find({});
    res.send(foundArticles);
  } catch (err) {
    res.send(err);
  }
};

// Using thenables to create and save the course when we post the course contents to our api
const createNewPost = function (req, res, next) {
  upload(req, res, (error) => {
    if (error) {
      console.log(`upload.single error: ${error}`);
      return res.sendStatus(500);
    } else {
      const newCourse = new Course({
        title: req.body.title,
        description: req.body.description,
        image: req.file.filename, // Save the image filename
      });
      newCourse
        .save()
        .then(() => {
          res
            .status(201) //Status 201 means success or created
            .send("Successfully uploaded the course info to coursesDB");
        })
        .catch((error) => {
          throw error;
        });
    }
  });
};

// Using asynchronous operation to create and save the course
// const createNewPost = async function (req, res, next) {
//   try {
//     upload(req, res, async (error) => {
//       if (error) {
//         console.log(`upload.single error: ${error}`);
//         return res.sendStatus(500);
//       } else {
//         const newCourse = new Course({
//           title: req.body.title,
//           description: req.body.description,
//           image: req.file.filename, // Save the image filename
//         });

//         await newCourse.save();
//         res
//           .status(201)
//           .send("Successfully uploaded the course info to coursesDB");
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("An error occurred while uploading the course info.");
//   }
// };

// Using async operation to get a particular course post in ours database and render it using the post ejs file. This also takes care of the explore button in the courses page. When clicked, the id of the course is added to the url the route (ejs route templating) then takes it up and get the course id using req.params.coursTitle

const getPost = async (req, res) => {
  const currentRouteId = req.params.courseTitle;
  try {
    const foundCourses = await Course.find();
    foundCourses.forEach((course) => {
      if (course._id.toString() === currentRouteId) {
        res.render("post", {
          courseData: course,
        });
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Replace a whole course in the Database with a new one
const putNewPost = async (req, res) => {
  try {
    const newDoc = await Course.findOneAndUpdate(
      { title: req.params.courseTitle },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          image: req.file.filename,
        },
      },
      { new: true }
    );
    // if the condition does not exist because the url current route param does not match any title in the article, it throws null instead of an error
    if (newDoc === null) {
      res.send(`No title matched ${req.params.courseTitle} in the document`);
    } else {
      res.send("Successfully updated the selected course to:\n" + newDoc);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Updates some details of a particular course with title courseTitle in the Database with a new one
const patchPost = async (req, res) => {
  try {
    const updatedDoc = await Course.findOneAndUpdate(
      { title: req.params.courseTitle },
      { $set: req.body },
      { new: true }
    );

    if (updatedDoc === null) {
      res.send(`No title matched ${req.params.courseTitle} in the document`);
    } else {
      res.send("Successfully updated the selected course to: " + updatedDoc);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Deletes a particular course with title courseTitle in the Database with a new one
const deletePost = async (req, res) => {
  try {
    await Course.deleteOne({ title: req.params.courseTitle });
    res.send("Successfully deleted the corresponding course.");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllPosts,
  createNewPost,
  putNewPost,
  patchPost,
  deletePost,
  getPost,
};
