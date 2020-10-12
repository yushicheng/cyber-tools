

module.exports = function parseHost(msg) {//转换域名
  let num = msg[0];
  let offset = 1;
  let host = "";
  while (num !== 0) {
    host += (msg.slice(offset, offset + num).toString());
    offset += num;
    num = msg[offset];
    offset += 1;
    if (num !== 0) host += (".");
  }
  return host;
}