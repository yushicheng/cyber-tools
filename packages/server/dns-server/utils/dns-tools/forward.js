const dgram = require("dgram");

module.exports = function forward(server, fallbackServer, msg, rinfo) {
  const client = dgram.createSocket("udp4");
  client.on("error", (err) => {
    console.log(`client error:` + err.stack)
    client.close();
  })
  client.on("message", (fMsg, fbRinfo) => {
    server.send(fMsg, rinfo.port, rinfo.address, (err) => {
      err && console.log(err);
    });
    client.close();
  })
  client.send(msg, 53, fallbackServer, (err) => {
    if (err) {
      console.log(err);
      client.close();
    }
  });
}