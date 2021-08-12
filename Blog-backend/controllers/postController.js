var express = require("express");
const moment = require("moment");
var Blog = require("../models/PostModel");
var router = express.Router();

router.get("/", function (req, res) {
  // console.log("getting all blogs");
  Blog.find({}).exec(function (err, blogs) {
    if (err) {
      res.send("error has occured");
    } else {
      
      res.json(blogs);
    }
  });
});

router.get("/:id", function (req, res) {
  console.log("getting one blog");
  Blog.findOne({
    _id: req.params.id,
  }).exec(function (err, blog) {
    if (err) {
      res.send("error has occured");
    } else {
      console.log(blog);
      res.json(blog);
    }
  });
});

router.post("/", function (req, res) {
  var newBlog = new Blog();
  newBlog.title = req.body.title;
  newBlog.author = req.body.author;
  newBlog.body = req.body.body;
  newBlog.img_url = req.body.img_url;
  newBlog.created_at = moment().valueOf().toString();
  newBlog.updated_at = moment().valueOf().toString();
  newBlog.save(function (err, blog) {
    if (err) {
      res.send("error saving blog");
    } else {
      console.log(blog);
      res.send(blog);
    }
  });
});

router.put("/:id", function (req, res) {
  console.log("req", req.body);
  Blog.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        title: req.body.title,
        body: req.body.body,
        img_url: req.body.img_url,
        updated_at: moment().valueOf().toString(),
      },
    },
    {
      upsert: false,
    },
    function (err, newBlog) {
      if (err) {
        res.send("error updating blog");
      } else {
        console.log(newBlog);
        res.send(newBlog);
      }
    }
  );
});

router.delete("/:id", function (req, res) {
  Blog.findByIdAndRemove(
    {
      _id: req.params.id,
    },
    function (err, blog) {
      if (err) {
        res.send("error deleting blog");
      } else {
        console.log(blog);
        res.send(blog);
      }
    }
  );
});

// router.put("/:id/likePost", function (req, res) {
//   console.log("req", req.body);
//   Blog.findOneAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     {
//       $set: {
//         likeCount: likeCount+1,
//       },
//     },
//     {
//       upsert: false,
//     },
//     function (err, newBlog) {
//       if (err) {
//         res.send("error updating blog");
//       } else {
//         console.log(newBlog);
//         res.send(newBlog);
//       }
//     }
//   );
// });


module.exports = router;
