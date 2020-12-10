// 文章参考 https://www.jianshu.com/p/8cdcbae986a8
const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const clearDNS = require("@/scripts/clearDNS");
// const initialDNS = require("@/scripts/initialDNS");
const getDNSRuntimeConfig = require("@/utils/getDNSRuntimeConfig");

const forward = require("@/utils/dns-tools/forward");
const resolve = require("@/utils/dns-tools/resolve");
const parseHost = require("@/utils/dns-tools/parseHost");


module.exports = async (configFilePath) => {
  // await initialDNS();
  const { hosts, fallbackServer } = await getDNSRuntimeConfig(configFilePath);

  server.on("message", (msg, rinfo) => {
    let host = parseHost(msg.slice(12));
    let ip = hosts[host];
    if (ip) {
      console.log("resolve:", host, "==>", ip);
      resolve(server, ip, msg, rinfo); //解析与响应
    } else {
      forward(server, fallbackServer, msg, rinfo);//转发
    }
  });

  server.on("error", async (err) => {
    console.log("server error:" + err.stack)
    server.close();
    await clearDNS();
  });

  server.on("listening", () => {
    const addr = server.address()
    console.log(`run ${addr.address}:${addr.port}`)
  });

  server.bind(53);
}
