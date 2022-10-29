// File Name: faculties.js
// Name: Jacob Todasco
// ID: 301251200
// Date: Oct 28 2022


// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { create } = require("../models/faculties");
const faculties = require("../models/faculties");

// define the faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/index", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

//  GET the faculty Details page in order to add a new faculty
router.get("/views/faculties/details", (req, res, next) => {
  res.render("add", { title: "Add Faculty"});
});

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
  res.render("details");
  Object.create(faculty);
  res.render("/faculties");
  /* Creates a new Faculty object then redirects back to FacultyList page */
});

// GET the faculty  Details page in order to edit an existing faculty
router.get("/:id", (req, res, next) => {
  /*****************/
  res.render("/views/faculties/details");
  var identification = req.id;
  /* Gets Faculty id and then loads details page. */
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  /*****************/
  faculty.findById(faculties); /* find the faculty by the id in group */
  var identification = req.id; /* request id and store in var */
  create.faculty(identification); /* instantiate faculty (with the proper id) */
  res.render("/views/faculties/details"); /* redirect back to page */
  /*  */
});

// GET - process the delete
router.get("/delete/:id", (req, res, next) => {
  /*****************/
    res.render("faculties/index", {
      title: "Faculties",
      faculties: faculties,
    });
  /* Returns to index page after deletion */
});

module.exports = router;
