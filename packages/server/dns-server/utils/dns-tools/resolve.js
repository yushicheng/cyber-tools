

module.exports = function resolve(server, ip, msg, rinfo) {//响应
  let len = msg.length;
  let templet = [192, 12, 0, 1, 0, 1, 0, 0, 0, 218, 0, 4].concat(ip.split(".").map(i => Number(i)));//<===可以自定义
  const response = new ArrayBuffer(len + 16);
  var bufView = new Uint8Array(response);
  for (let i = 0; i < msg.length; i++)bufView[i] = msg[i];
  for (let i = 0; i < templet.length; i++)bufView[msg.length + i] = templet[i];
  bufView[2] = 129;
  bufView[3] = 128;
  bufView[7] = 1;
  server.send(bufView, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.log(err);
      server.close();
    }
  })
}