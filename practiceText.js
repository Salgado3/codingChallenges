createPost: async (req, res) => {
  if (Post.findOne({ activityName: req.body.activityName })) {
    try {
      await Post.findOneAndUpdate(
        { activityName: req.body.activityName },
        {
          $inc: { time: Number(req.body.time) },
        }
      );
      console.log("Likes +1");
      res.redirect(`/feed`);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      await Post.create({
        activityName: req.body.activityName,
        time: Number(req.body.time),

        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  }
};
