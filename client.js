const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  //interpret incoming data as text
  conn.setEncoding("utf8");

  // on connect
  conn.on("connect", () => {
    console.log("Successfully connected to game server ");
    conn.write("Name: DP");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100);
  });

  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  return conn;
};

module.exports = { connect };
