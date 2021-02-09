let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
    stdin.on("data", (key) => {
      process.stdout.write(key);
      if (key === "\u0003") {
        process.exit();
      } else if (key === "w") {
        conn.write("Move: up");
      } else if (key === "a") {
        conn.write("Move: left");
      } else if (key === "s") {
        conn.write("Move: down");
      } else if (key === "d") {
        conn.write("Move: right");
      }
    });
  };
  handleUserInput();

  return stdin;
};

module.exports = { setupInput };
