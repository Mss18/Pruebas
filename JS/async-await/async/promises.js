"use strict";

function requestHandler(req, res) {
  User.findById(req.userId)
    .then(user => {
      return Task.findById(user.taskId);
    })
    .then(tasks => {
      tasks.completed = true;
      return tasks.save();
    })
    .then(() => {
      res.send("Tasks completed");
    })
    .catch(errors => {
      res.send(errors);
    });
}
