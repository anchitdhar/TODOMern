const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')
const URI = require('../routes/block');
const db = mongojs(
    process.env.MONGODB_URI || URI,
    ['tasks']
)

//List Tasks
router.get('/tasks', function(req, res, next) {
  db.tasks.find({}, {_id:1,title:1}, function(err, tasks) {
    if (err) {
      res.send(err)
    }

    var data = []
    Object.keys(tasks).forEach(function(key) {
      var val = tasks[key]
      data.push([val.title, val._id, val.isDone])
    })
    res.send(data)
  })
})

//Add Task
router.post('/task', function(req, res) {
  var task = req.body
  if (!task.title) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    db.tasks.save(task, function(err, task) {
      if (err) {
        res.send(err)
      }
      res.json(task)
    })
  }
})

// Delete Task
router.delete('/task/:id', function(req, res) {
  db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    task
  ) {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
})


module.exports = router;
