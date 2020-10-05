var answerData = require("../data/answers");

module.exports = function(app){
  app.get("/api/answers", function(req,res){
    res.json(answerData)
  });
  app.post("/api/answers", function(req, res){
    if (answerData.length< 30) {
      answerData.push(req.body);
      res.json(true)
    }
  });
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    answerData.length = 0;
    res.json({ ok: true });
  });

}