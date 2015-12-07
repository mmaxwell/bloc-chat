import Mirage from "ember-cli-mirage";

export default function() {
  const UUID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

  function uuid() {
    return UUID.replace(/[xy]/g, function (char) {
      let random = ((new Date()).getTime() + (Math.random() * 16)) % 16 | 0;

      if (char === "x") {
        return random.toString(16);
      } else {
        return (random & 0x3 | 0x8).toString(16);
      }
    });
  }

  function isTokenValid(authentication) {
    let { userName, token, db } = authentication,
      users = db.users.where({ userName, token });

    return users.length > 0;
  }

  this.get("/rooms");
  this.get("/rooms/:id");
  this.get("/messages/:id");
  this.get("/users/:id");
  this.post("/authenticate", function (db, request) {
    let { userName, password } = JSON.parse(request.requestBody),
      users = db.users.where({ userName, password }),
      user, token;

    if (users.length > 0) {
      token = uuid();
      user = users[0];

      db.users.update(user.id, { token });

      return new Mirage.Response(200, {}, { token });
    } else {
      return new Mirage.Response(400);
    }
  });

// test
  this.post("/validateToken", function (db, request) {
    let { userName, token } = JSON.parse(request.requestBody);

    if (isTokenValid({ userName, token, db })) {
      return new Mirage.Response(200);
    } else {
      return new Mirage.Response(400);
    }
  });
}
