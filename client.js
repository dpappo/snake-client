const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "192.168.0.14",
    port: 50541,
  });
  //interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  return conn;
};

module.exports = { connect };
