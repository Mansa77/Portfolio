const express = require("express");
const router = express.Router();
var Project = require("../src/models/project");

router.get("/", function(req, res) {
  res.render("admin.ejs");
});

router.get("/projets", function(req, res) {
  Project.find(function(err, projets) {
    console.log("es tu la");
    if (err) {
      req.render("pages/error404");
      console.log("les projets ne sont pas la");
    }
    console.log("coucou");
    res.render("projets", { projets: projets });

    //res.json(projets)
  });
});

//ROUTES POST
router.post("/post-projects", (req, res) => {
  var project = new Project(req.body);

  project.save(function(err, Project) {
    if (err) {
      res.send(err);
    }
    res.redirect("/admin/projets");
    //res.status(201).json(Project);
  });
});

module.exports = router;
