import Mirage from "ember-cli-mirage";

export default function() {
  this.get("/rooms");
  this.get("/rooms/:id");
  this.get("/messages/:id");
  this.get("/users/:id");
  this.post("/authenticate", function (db, request) {
    let { userName, password } = JSON.parse(request.requestBody),
      user = db.users.where({ userName, password });

    if (user.length > 0) {
      return new Mirage.Response(200);
    } else {
      return new Mirage.Response(400);
    }
  });
}
