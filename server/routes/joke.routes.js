const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/test", JokeController.testRoute);
    app.get("/api/jokes/getAll", JokeController.getAll);
    app.get("/api/jokes/:_id/getOne", JokeController.getOne);
    app.post("/api/jokes/create", JokeController.create);
    app.delete("/api/jokes/:_id/deleteOne", JokeController.deleteOne);
    app.put("/api/jokes/:_id/update", JokeController.updateOne);

}