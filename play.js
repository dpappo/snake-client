const { connect } = require("./client");
console.log("Connecting ...");

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
    stdin.on("data", (key) => {
      process.stdout.write(key);
      if (key === "\u0003") {
        process.exit();
      }
    });
  };
  handleUserInput();

  return stdin;
};

setupInput();
connect();
