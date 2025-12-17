//Wed Dec 17 2025 06:24:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios");
const https = require("https");
const {
  URLSearchParams
} = require("url");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
require("dotenv").config();
const LOCAL_VERSION = "1.0.1";
const VERSION_CHECK_URL = "http://43.138.107.29:39990/bbjc/wxyd";
const DEVELOPER_MODE = false;
const REQUEST_PARAMS = {
  sw: 440,
  sh: 839,
  dp: 2.909090995788574,
  fixedT: 0.46243924743171205
};
function getAccountConfigs() {
  const _0x4574b7 = [];
  const _0x26f109 = "+++";
  if (process.env.YDCS) {
    const [_0x4d7a53, _0x56a662, _0x14feca] = process.env.YDCS.split(_0x26f109);
    _0x4d7a53 && _0x56a662 && _0x14feca ? _0x4574b7.push({
      remark: _0x4d7a53.trim(),
      YDUA: _0x56a662.trim(),
      COOKIE: _0x14feca.trim()
    }) : (logError("YDCS格式错误，需满足 \"备注+++UA+++Cookie\"！"), process.exit(1));
  }
  for (let _0x160e7e = 1; _0x160e7e <= 10; _0x160e7e++) {
    {
      const _0x55b21f = "YDCS" + _0x160e7e;
      if (process.env[_0x55b21f]) {
        const [_0x18f341, _0x568a11, _0x1c298a] = process.env[_0x55b21f].split(_0x26f109);
        _0x18f341 && _0x568a11 && _0x1c298a ? _0x4574b7.push({
          remark: _0x18f341.trim(),
          YDUA: _0x568a11.trim(),
          COOKIE: _0x1c298a.trim()
        }) : (logError(_0x55b21f + "格式错误，需满足 \"备注+++UA+++Cookie\"！"), process.exit(1));
      }
    }
  }
  _0x4574b7.length === 0 && (logError("未配置账号！需在.env中设置YDCS（单账号）或YDCS1-YDCS10（多账号）"), process.exit(1));
  logInfo("成功加载 " + _0x4574b7.length + " 个账号配置");
  return _0x4574b7;
}
function logInfo(_0x1f6c3a) {
  console.log("[INFO] " + _0x1f6c3a);
}
function logSuccess(_0x5e134b) {
  console.log("[SUCCESS] " + _0x5e134b);
}
function logError(_0xb12cdd) {
  console.log("[ERROR] " + _0xb12cdd);
}
const ACCOUNT_CONFIGS = getAccountConfigs();
const JKEY_DIR = path.join(__dirname, "jkey_storage");
const DEFAULT_JKEY = "660b8d7eb89ff1db307c088f187eb84f";
if (!fs.existsSync(JKEY_DIR)) {
  const _0x266aee = {
    recursive: true
  };
  fs.mkdirSync(JKEY_DIR, _0x266aee);
  logInfo("创建JKEY存储目录：" + JKEY_DIR);
}
const _0x23a82c = {
  rejectUnauthorized: false
};
const axiosInstance = axios.create({
  httpsAgent: new https.Agent(_0x23a82c)
});
const JkeyManager = {
  encryptString(_0x16af2c) {
    return crypto.createHash("md5").update(_0x16af2c.trim()).digest("hex");
  },
  getJkeyFileName(_0x39c0f9) {
    const _0x2554dd = this.encryptString(_0x39c0f9);
    const _0x1dd0f4 = _0x39c0f9.replace(/[\\/:*?"<>|]/g, "_");
    return _0x1dd0f4 + "_" + _0x2554dd + ".json";
  },
  getJkeyPath(_0x38b3c5) {
    const _0x2c0bd4 = this.getJkeyFileName(_0x38b3c5);
    return path.join(JKEY_DIR, _0x2c0bd4);
  },
  initJkeyFile(_0x2ef9c7, _0xdc38e1) {
    const _0xf663e1 = this.getJkeyPath(_0x2ef9c7);
    try {
      {
        if (fs.existsSync(_0xf663e1)) {
          logInfo("账号[" + _0x2ef9c7 + "] 该账号JKEY文件已存在，无需重复创建");
          return;
        }
        const _0x41fffd = {
          jkey: DEFAULT_JKEY,
          remark: _0x2ef9c7.trim(),
          cookie: _0xdc38e1.trim(),
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString()
        };
        fs.writeFileSync(_0xf663e1, JSON.stringify(_0x41fffd, null, 2), "utf8");
        logInfo("账号[" + _0x2ef9c7 + "] 初始化JKEY文件成功：" + path.basename(_0xf663e1));
      }
    } catch (_0x437fce) {
      logError("账号[" + _0x2ef9c7 + "] 初始化JKEY文件失败：" + _0x437fce.message);
    }
  },
  readJkey(_0x3a0535) {
    const _0x35dce7 = this.getJkeyPath(_0x3a0535);
    try {
      {
        if (fs.existsSync(_0x35dce7)) {
          {
            const _0x3c8cbe = fs.readFileSync(_0x35dce7, "utf8");
            const _0x120e0e = JSON.parse(_0x3c8cbe);
            DEVELOPER_MODE ? logInfo("账号[" + _0x3a0535 + "] 读取JKEY成功：" + _0x120e0e.jkey) : logInfo("账号[" + _0x3a0535 + "] 获取阅读数据成功");
            return _0x120e0e.jkey;
          }
        }
        logInfo("账号[" + _0x3a0535 + "] 未找到JKEY文件，使用默认值：" + DEFAULT_JKEY);
        return DEFAULT_JKEY;
      }
    } catch (_0x46c61c) {
      {
        logError("账号[" + _0x3a0535 + "] 读取JKEY失败：" + _0x46c61c.message);
        return DEFAULT_JKEY;
      }
    }
  },
  updateJkey(_0x3da8a6, _0x47bdaa) {
    const _0x5f1a82 = this.getJkeyPath(_0x3da8a6);
    try {
      if (!fs.existsSync(_0x5f1a82)) {
        logInfo("账号[" + _0x3da8a6 + "] JKEY文件不存在，先初始化文件");
        const _0x16bd6d = ACCOUNT_CONFIGS.find(_0x56f89f => _0x56f89f.remark === _0x3da8a6);
        if (_0x16bd6d) {
          this.initJkeyFile(_0x3da8a6, _0x16bd6d.COOKIE);
        } else {
          throw new Error("无法找到备注对应的Cookie，无法初始化文件");
        }
      }
      const _0x42b2ea = fs.readFileSync(_0x5f1a82, "utf8");
      const _0x309a18 = JSON.parse(_0x42b2ea);
      _0x309a18.jkey = _0x47bdaa;
      _0x309a18.updatedAt = new Date().toLocaleString();
      fs.writeFileSync(_0x5f1a82, JSON.stringify(_0x309a18, null, 2), "utf8");
      logInfo("账号[" + _0x3da8a6 + "] 更新JKEY成功：" + _0x47bdaa);
    } catch (_0x32c1a7) {
      logError("账号[" + _0x3da8a6 + "] 更新JKEY失败：" + _0x32c1a7.message);
    }
  }
};
async function checkVersion() {
  logInfo("正在检测脚本版本...");
  try {
    const _0x352262 = {
      timeout: 10000
    };
    const _0x390a0f = await axiosInstance.get(VERSION_CHECK_URL, _0x352262);
    const _0x397d18 = _0x390a0f.data?.["version"];
    if (!_0x397d18) {
      throw new Error("服务器未返回版本信息  QQ群：1073504990");
    }
    logInfo("本地版本：" + LOCAL_VERSION + " | 服务器版本：" + _0x397d18);
    if (LOCAL_VERSION !== _0x397d18) {
      {
        logError("脚本版本与服务器不一致，需更新后再运行！QQ群：1073504990");
        process.exit(1);
      }
    }
    logInfo("版本检测通过！QQ群：1073504990");
  } catch (_0x175740) {
    logError("版本检测失败：" + _0x175740.message);
    process.exit(1);
  }
}
async function getUserInfo(_0x3c964b) {
  const {
    remark: _0x316610,
    YDUA: _0x1153a3,
    COOKIE: _0x371317
  } = _0x3c964b;
  try {
    logInfo("账号[" + _0x316610 + "] 正在获取用户信息...");
    const _0x7c1113 = {
      url: "https://vbn.xumgni.cn/shitu/get_user_credit",
      method: "POST",
      headers: {},
      timeout: 15000
    };
    _0x7c1113.headers["User-Agent"] = _0x1153a3;
    _0x7c1113.headers["X-Requested-With"] = "XMLHttpRequest";
    _0x7c1113.headers.Origin = "http://vbn.xumgni.cn";
    _0x7c1113.headers.Referer = "http://vbn.xumgni.cn/shitu?v=1764994878";
    _0x7c1113.headers.Cookie = _0x371317;
    _0x7c1113.headers.Accept = "application/json, text/javascript, */*; q=0.01";
    _0x7c1113.headers["Accept-Encoding"] = "gzip, deflate";
    _0x7c1113.headers["Accept-Language"] = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
    _0x7c1113.headers["Content-Length"] = 0;
    const _0x24c6a7 = _0x7c1113;
    const _0x1a1756 = await axiosInstance(_0x24c6a7);
    const _0x9c86 = _0x1a1756.data;
    if (_0x9c86?.["user"]) {
      const _0x820a1e = _0x9c86.user;
      logInfo("账号[" + _0x316610 + "] 用户信息获取成功");
      logInfo("账号[" + _0x316610 + "] 账户昵称：" + (_0x820a1e.nickname || "未知昵称"));
      logInfo("账号[" + _0x316610 + "] 今日金币：" + (_0x820a1e.day_credit || 0));
      logInfo("账号[" + _0x316610 + "] 账户金币：" + (_0x820a1e.total_credit || 0));
      JkeyManager.initJkeyFile(_0x316610, _0x371317);
      return true;
    } else {
      logError("账号[" + _0x316610 + "] 获取用户信息失败：响应缺少user字段");
      JkeyManager.initJkeyFile(_0x316610, _0x371317);
      return false;
    }
  } catch (_0x5e1061) {
    logError("账号[" + _0x316610 + "] 获取用户信息失败：" + _0x5e1061.message);
    JkeyManager.initJkeyFile(_0x316610, _0x371317);
    return false;
  }
}
async function fetchYDURL(_0x53cf19) {
  const {
    remark: _0x583ea7,
    YDUA: _0x52e5c1,
    COOKIE: _0x2f596d
  } = _0x53cf19;
  try {
    const _0x134af2 = {
      sw: REQUEST_PARAMS.sw,
      sh: REQUEST_PARAMS.sh,
      dp: REQUEST_PARAMS.dp
    };
    const _0xb106ca = new URLSearchParams(_0x134af2).toString();
    const _0x3b9fcf = {
      url: "https://vbn.xumgni.cn/shitu/get_read_url",
      method: "POST",
      headers: {},
      data: _0xb106ca,
      timeout: 15000
    };
    _0x3b9fcf.headers["User-Agent"] = _0x52e5c1;
    _0x3b9fcf.headers["X-Requested-With"] = "XMLHttpRequest";
    _0x3b9fcf.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    _0x3b9fcf.headers.Origin = "http://vbn.xumgni.cn";
    _0x3b9fcf.headers.Referer = "http://vbn.xumgni.cn/shitu?v=1764994878";
    _0x3b9fcf.headers.Cookie = _0x2f596d;
    _0x3b9fcf.headers.Accept = "*/*";
    _0x3b9fcf.headers["Accept-Encoding"] = "gzip, deflate";
    _0x3b9fcf.headers["Accept-Language"] = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
    const _0x509a27 = _0x3b9fcf;
    const _0x3359c5 = await axiosInstance(_0x509a27);
    const _0x572d82 = _0x3359c5.data;
    if (_0x572d82.code !== 0) {
      {
        logError("账号[" + _0x583ea7 + "] 获取URL失败：" + (_0x572d82.msg || "未知错误"));
        return null;
      }
    }
    if (!_0x572d82.read_url) {
      logError("账号[" + _0x583ea7 + "] 获取URL失败：接口未返回read_url字段");
      return null;
    }
    const _0xcbef53 = _0x572d82.read_url.trim();
    return _0xcbef53;
  } catch (_0x39611f) {
    logError("账号[" + _0x583ea7 + "] 获取YDURL失败：" + _0x39611f.message);
    return null;
  }
}
function parseUrlInfo(_0x13a9c4, _0x564675) {
  try {
    let _0x389405 = _0x13a9c4;
    try {
      _0x389405 = decodeURIComponent(decodeURIComponent(_0x13a9c4));
    } catch (_0x362e54) {
      _0x389405 = decodeURIComponent(_0x13a9c4);
    }
    let _0x9c1c1c = _0x389405;
    const _0x14e6d4 = ["path", "url", "query", "redirect", "target", "link"];
    _0x14e6d4.forEach(_0x123a8c => {
      {
        const _0x3b7737 = new RegExp(_0x123a8c + "=([^&]+)", "i");
        const _0x136397 = _0x389405.match(_0x3b7737);
        if (_0x136397 && _0x136397[1]) {
          let _0x226b23 = _0x136397[1];
          try {
            {
              _0x226b23 = decodeURIComponent(decodeURIComponent(_0x226b23));
            }
          } catch (_0x5432c7) {
            _0x226b23 = decodeURIComponent(_0x226b23);
          }
          _0x9c1c1c = _0x226b23;
        }
      }
    });
    const _0x44a28f = new URL(_0x9c1c1c);
    const _0x10f35b = _0x44a28f.searchParams.get("tk");
    if (!_0x10f35b) {
      throw new Error("URL及嵌套地址中均无有效tk参数");
    }
    const _0x2f1c97 = /(t\d+)\.([a-z0-9]+)\.([cC][nN])/i;
    const _0x3a9102 = _0x9c1c1c.match(_0x2f1c97);
    if (!_0x3a9102 || !_0x3a9102[1] || !_0x3a9102[2]) {
      throw new Error("未匹配到有效host格式");
    }
    const _0x2b62ca = _0x3a9102[1].toLowerCase();
    const _0x6b59a4 = _0x3a9102[2].toLowerCase();
    const _0x35f001 = "cn";
    const _0x13802e = _0x2b62ca + "." + _0x6b59a4 + "." + _0x35f001;
    const _0x4a169a = {
      tk: _0x10f35b,
      fullHost: _0x13802e,
      hostPrefix: _0x2b62ca,
      hostDomain: _0x6b59a4,
      hostSuffix: _0x35f001
    };
    return _0x4a169a;
  } catch (_0x1d9ed9) {
    {
      logError("账号[" + _0x564675 + "] URL解析失败：" + _0x1d9ed9.message);
      return null;
    }
  }
}
function sleepRandom() {
  const _0x454b5b = 5000 + Math.floor(Math.random() * 2000);
  logInfo("任务间隔休眠 " + _0x454b5b / 1000 + " 秒...");
  return new Promise(_0x25d07f => setTimeout(_0x25d07f, _0x454b5b));
}
async function fetchArticleRead(_0x2d3865, _0x3ead1e) {
  const {
    remark: _0x77cf74,
    YDUA: _0x2d0d7c,
    COOKIE: _0x3ec393
  } = _0x2d3865;
  const {
    tk: _0x4f5168,
    fullHost: _0x5c0fad
  } = _0x3ead1e;
  let _0x20a672 = JkeyManager.readJkey(_0x77cf74);
  let _0x4fd2e3 = 0;
  while (true) {
    try {
      logInfo("账号[" + _0x77cf74 + "]  第" + (_0x4fd2e3 + 1) + "次阅读");
      const _0x5898eb = {
        tk: _0x4f5168,
        sw: REQUEST_PARAMS.sw,
        sh: REQUEST_PARAMS.sh,
        dp: REQUEST_PARAMS.dp,
        t: REQUEST_PARAMS.fixedT,
        _jkey: _0x20a672,
        host: _0x5c0fad
      };
      const _0xa964b4 = new URLSearchParams(_0x5898eb).toString();
      const _0x269bf2 = BASE_REQUEST_CONFIG.url + "?" + _0xa964b4;
      const _0x2f6549 = {
        ...BASE_REQUEST_CONFIG,
        url: _0x269bf2,
        headers: {
          ...BASE_REQUEST_CONFIG.headers
        }
      };
      _0x2f6549.headers["User-Agent"] = _0x2d0d7c;
      _0x2f6549.headers.Cookie = _0x3ec393;
      _0x2f6549.headers.Origin = "http://" + _0x5c0fad;
      _0x2f6549.headers.Referer = "http://" + _0x5c0fad + "/";
      const _0x4bfdf5 = await axiosInstance(_0x2f6549);
      const _0x11f4ec = _0x4bfdf5.data;
      if (_0x11f4ec.code === 0) {
        _0x4fd2e3++;
        logSuccess("账号[" + _0x77cf74 + "] 阅读成功");
        _0x11f4ec.data?.["jkey"] && _0x11f4ec.data.jkey !== _0x20a672 && (_0x20a672 = _0x11f4ec.data.jkey, JkeyManager.updateJkey(_0x77cf74, _0x20a672));
        await sleepRandom();
      } else {
        logInfo("账号[" + _0x77cf74 + "] 当前账号脚本结束：" + (_0x11f4ec.msg || "未知状态"));
        logInfo("账号[" + _0x77cf74 + "] 当前账号总成功阅读次数：" + _0x4fd2e3);
        return _0x4fd2e3;
      }
    } catch (_0x2f4edd) {
      {
        const _0x38078d = _0x2f4edd.response ? "接口错误：" + _0x2f4edd.response.status + " " + _0x2f4edd.response.statusText : _0x2f4edd.code === "ECONNABORTED" ? "请求超时（15秒）" : "错误：" + _0x2f4edd.message;
        logError("账号[" + _0x77cf74 + "] 请求失败：" + _0x38078d);
        logInfo("5秒后重试...");
        await new Promise(_0x274ad4 => setTimeout(_0x274ad4, 5000));
      }
    }
  }
}
const _0x3ad6e1 = {
  Accept: "application/json, text/plain, */*",
  "X-Requested-With": "com.tencent.mm"
};
const BASE_REQUEST_CONFIG = {
  url: "https://www.ttxlq.cn/api/channel/getArticleRead",
  method: "GET",
  headers: _0x3ad6e1,
  timeout: 15000,
  withCredentials: true
};
async function startScript() {
  await checkVersion();
  logInfo("脚本启动成功！所有账号执行一次后自动结束");
  let _0x535232 = 0;
  for (const [_0x167d08, _0x4321f3] of ACCOUNT_CONFIGS.entries()) {
    {
      const _0x17eac3 = _0x167d08 + 1;
      const {
        remark: _0x43399f
      } = _0x4321f3;
      logInfo("\n==================================================");
      logInfo("正在执行第 " + _0x17eac3 + "/" + ACCOUNT_CONFIGS.length + " 个账号（备注：" + _0x43399f + "）");
      logInfo("==================================================");
      try {
        await getUserInfo(_0x4321f3);
        const _0x38da1f = await fetchYDURL(_0x4321f3);
        if (!_0x38da1f) {
          {
            logInfo("账号[" + _0x43399f + "] URL获取失败，跳过当前账号");
            continue;
          }
        }
        const _0x148982 = parseUrlInfo(_0x38da1f, _0x43399f);
        if (!_0x148982) {
          logInfo("账号[" + _0x43399f + "] URL解析失败，跳过当前账号");
          continue;
        }
        const _0x2cc634 = await fetchArticleRead(_0x4321f3, _0x148982);
        _0x535232 += _0x2cc634;
        logInfo("账号[" + _0x43399f + "] 第 " + _0x17eac3 + " 个账号执行完成");
        _0x17eac3 < ACCOUNT_CONFIGS.length && (logInfo("切换到下一个账号前，休眠5-7秒..."), await sleepRandom());
      } catch (_0x442001) {
        logError("账号[" + _0x43399f + "] 第 " + _0x17eac3 + " 个账号执行异常：" + _0x442001.message);
        _0x17eac3 < ACCOUNT_CONFIGS.length && (await sleepRandom());
      }
    }
  }
  logInfo("\n所有 " + ACCOUNT_CONFIGS.length + " 个账号均执行完成！");
  logInfo("所有账号累计总成功阅读次数：" + _0x535232);
  process.exit(0);
}
startScript();