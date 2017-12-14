var path = require("path");

module.exports = function(app) {

    app.get("/dr_reg", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/dr_reg.html"));
      });
};