export default function(server) {
  Array.from({ length: Math.floor(Math.random() * 5) + 1 }).forEach(() => {
    let room = server.create("room");
    room.messages = server.createList("message", Math.floor(Math.random() * 4) + 1, { room: room.id }).map((message) => message.id);
    server.db.rooms.update(room.id, room);
  });

  server.create("user", {
    firstName: "Matthew",
    lastName: "Maxwell",
    emailAddress: "matthew@maxwell.com",
    password: "Password123!",
    userName: "m"
  });
}
