const Course = require("../model/data");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage }).single("courseImage");

const getAllPosts = (req, res) => {};

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
            .status(201)
            .send("Successfully uploaded the course info to coursesDB");
        })
        .catch((error) => {
          throw error;
        });
    }
  });
};

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

const updatePost = (req, res) => {};

const deletePost = (req, res) => {};

const getPost = (req, res) => {};

module.exports = {
  getAllPosts,
  createNewPost,
  updatePost,
  deletePost,
  getPost,
};
