const { connect } = require("./client");
const { setupInput } = require("./input");
console.log("Connecting ...");
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

setupInput();
