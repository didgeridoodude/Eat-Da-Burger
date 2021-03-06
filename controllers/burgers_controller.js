var express = require("express")
var router = express.Router()
var orm = require("../config/orm")

router.get("/devour-burger/:id", function(req, res){
  var id = req.params.id
  orm.updateOne(id, function(response){
      res.send(response)
  })
})
  
router.post("/api/burgers", function(req, res) {
  burger.create(["name", "cheeseburger"], [req.body.name, req.body.cheeseburger], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
      var condition = "id = " + req.params.id;
    
      console.log("condition", condition);
    
      burger.update(
        {
          cheeseburger: req.body.cheeseburger
        },
        condition,
        function(result) {
          if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    
        }
      );
    });
  
  // Export routes for server.js to use.
  module.exports = router;