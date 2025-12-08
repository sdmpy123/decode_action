//Mon Dec 08 2025 01:32:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function printNotice() {
  console.log("===== 公告信息 =====");
  console.log("\n💻 青龙脚本：https://pan.quark.cn/s/a40df35868e3\n💬 企鹅群聊：https://qm.qq.com/q/ut7YMmoKYw\n📱 企鹅频道：https://pd.qq.com/s/9ymcqks13\n    ".trim());
  console.log("====================");
}
printNotice();
const fs = require("fs");
const path = require("path");
const REQUIRED_REG_LINK = "http://h5.yidingyuecheng.com/#/pages/register/index?promoCode=POC130159";
const CK_DIR = path.resolve(__dirname, "ydyc_ck");
const ENV_NAME = "ydyc_zm";
function desensitizeMobile(_0x3e5dea) {
  if (!_0x3e5dea || _0x3e5dea.length !== 11) {
    return _0x3e5dea;
  }
  return _0x3e5dea.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
function checkRegLink() {
  try {
    const _0x208b14 = /\/\*\s*注册链接:\s*(.+?)\s*\*\//;
    const _0x3fe438 = __filename;
    const _0x36b24f = fs.readFileSync(_0x3fe438, "utf-8");
    const _0x1f4952 = _0x36b24f.split(/\r?\n/);
    let _0x48d03f = "";
    for (let _0x4e4b88 of _0x1f4952) {
      const _0x505f8e = _0x4e4b88.trim().match(_0x208b14);
      if (_0x505f8e && _0x505f8e[1]) {
        _0x48d03f = _0x505f8e[1].trim();
        break;
      }
    }
    if (!_0x48d03f) {
      throw new Error("未找到「/* 注册链接: xxx */」格式的注释");
    }
    if (_0x48d03f !== REQUIRED_REG_LINK) {
      console.log("[❌ ERROR] 注册链接被修改！");
      console.log("[❌ ERROR] 合法链接：" + REQUIRED_REG_LINK);
      console.log("[❌ ERROR] 当前链接：" + _0x48d03f);
      throw new Error("注册链接校验失败\n请到作者网盘里下载正版");
    }
    console.log("[✅ SUCCESS] 注册链接校验通过");
  } catch (_0xca380e) {
    console.log("[❌ ERROR] 脚本校验失败：" + _0xca380e.message);
    process.exit(1);
  }
}
function commonHeaders(_0x39001f) {
  return {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36 EdgA/133.0.0.0",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "application/json",
    source: "h5",
    token: _0x39001f,
    Origin: "http://h5.yidingyuecheng.com",
    "X-Requested-With": "mark.via.gp",
    Referer: "http://h5.yidingyuecheng.com/",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  };
}
async function handleAccount(_0x30df42, _0x4c6efc) {
  const _0x233eed = desensitizeMobile(_0x30df42);
  console.log("\n====================================");
  console.log("[ℹ️ 开始处理账号：" + _0x233eed + "]");
  console.log("====================================");
  !fs.existsSync(CK_DIR) && fs.mkdirSync(CK_DIR, {
    recursive: true
  });
  const _0xc31206 = path.resolve(CK_DIR, _0x30df42 + ".txt");
  let _0xb1c840 = "";
  try {
    if (fs.existsSync(_0xc31206)) {
      _0xb1c840 = fs.readFileSync(_0xc31206, "utf-8").trim();
      console.log("[ℹ️ 读取到账号" + _0x233eed + "的CK文件，验证有效性...]");
      const _0x39c434 = await fetch("http://h5.yidingyuecheng.com/api/user/info", {
        method: "POST",
        headers: commonHeaders(_0xb1c840),
        body: JSON.stringify({})
      });
      const _0x3fb30d = await _0x39c434.json();
      _0x3fb30d.success && _0x3fb30d.code === 0 ? console.log("[✅ 账号" + _0x233eed + "的CK有效，直接使用]") : (console.log("[⚠️ 账号" + _0x233eed + "的CK过期/无效，准备重新登录...]"), _0xb1c840 = "");
    } else {
      console.log("[ℹ️ 未找到账号" + _0x233eed + "的CK文件，执行登录...]");
    }
  } catch (_0x57444d) {
    console.log("[⚠️ 账号" + _0x233eed + "读取/校验CK失败：" + _0x57444d.message + "，重新登录...]");
    _0xb1c840 = "";
  }
  if (!_0xb1c840) {
    try {
      console.log("[ℹ️ 账号" + _0x233eed + "开始登录...]");
      const _0x2de728 = {
        mobile: _0x30df42,
        password: _0x4c6efc
      };
      const _0x1b47e = await fetch("http://h5.yidingyuecheng.com/api/user/login", {
        method: "POST",
        headers: commonHeaders(""),
        body: JSON.stringify(_0x2de728)
      });
      const _0x2cce7a = await _0x1b47e.json();
      if (_0x2cce7a.success && _0x2cce7a.code === 0) {
        _0xb1c840 = _0x2cce7a.data;
        console.log("[✅ 账号" + _0x233eed + "登录成功]");
        fs.writeFileSync(_0xc31206, _0xb1c840, "utf-8");
        console.log("[✅ 账号" + _0x233eed + "的CK已保存到本地]");
      } else {
        throw new Error("登录失败：" + _0x2cce7a.msg + "（code：" + _0x2cce7a.code + "）");
      }
    } catch (_0x2332c6) {
      console.log("[❌ 账号" + _0x233eed + "登录出错：" + _0x2332c6.message + "]");
      return;
    }
  }
  let _0x93744d = 0;
  let _0xd5d7f7 = "";
  try {
    const _0x2f6efd = await fetch("http://h5.yidingyuecheng.com/api/user/info", {
      method: "POST",
      headers: commonHeaders(_0xb1c840),
      body: JSON.stringify({})
    });
    const _0x57d838 = await _0x2f6efd.json();
    if (_0x57d838.success && _0x57d838.code === 0) {
      const _0x5c3dff = _0x57d838.data;
      _0xd5d7f7 = _0x5c3dff.name.length > 1 ? _0x5c3dff.name[0] + "*".repeat(_0x5c3dff.name.length - 1) : _0x5c3dff.name;
      _0x93744d = Number(_0x5c3dff.point).toFixed(2);
      console.log("\n[✅ 账号" + _0x233eed + "初始信息]");
      console.log("脱敏姓名：" + _0xd5d7f7);
      console.log("签到前积分：" + _0x93744d + " 分");
    } else {
      throw new Error("查询初始信息失败：" + _0x57d838.msg);
    }
  } catch (_0x32f31b) {
    console.log("[❌ 账号" + _0x233eed + "查询初始积分出错：" + _0x32f31b.message + "]");
    return;
  }
  try {
    const _0x11f4e6 = await fetch("http://h5.yidingyuecheng.com/api/mission/sign", {
      method: "POST",
      headers: commonHeaders(_0xb1c840),
      body: JSON.stringify({})
    });
    const _0x172df5 = await _0x11f4e6.json();
    _0x172df5.success || _0x172df5.code === 0 ? console.log("\n[✅ 账号" + _0x233eed + "签到结果] " + _0x172df5.msg) : console.log("\n[⚠️ 账号" + _0x233eed + "签到提示] " + _0x172df5.msg);
  } catch (_0xc6a3ce) {
    console.log("[❌ 账号" + _0x233eed + "签到出错：" + _0xc6a3ce.message + "]");
  }
  try {
    const _0x2bd980 = await fetch("http://h5.yidingyuecheng.com/api/user/info", {
      method: "POST",
      headers: commonHeaders(_0xb1c840),
      body: JSON.stringify({})
    });
    const _0x2d7910 = await _0x2bd980.json();
    if (_0x2d7910.success && _0x2d7910.code === 0) {
      const _0x3611cb = Number(_0x2d7910.data.point).toFixed(2);
      const _0x19cf59 = (_0x3611cb - _0x93744d).toFixed(2);
      console.log("\n[✅ 账号" + _0x233eed + "最终信息汇总]");
      console.log("脱敏姓名：" + _0xd5d7f7);
      console.log("签到前积分：" + _0x93744d + " 分");
      console.log("签到后积分：" + _0x3611cb + " 分");
      console.log("积分变动：" + (_0x19cf59 > 0 ? "+" : "") + _0x19cf59 + " 分");
    } else {
      throw new Error("查询最终信息失败：" + _0x2d7910.msg);
    }
  } catch (_0x10d25c) {
    console.log("[❌ 账号" + _0x233eed + "查询最终积分出错：" + _0x10d25c.message + "]");
  }
}
async function main() {
  checkRegLink();
  const _0x55c639 = process.env[ENV_NAME] || "";
  !_0x55c639 && (console.log("[❌ ERROR] 未配置环境变量" + ENV_NAME + "，请添加账号密码（格式：手机号|密码 回车分隔）"), process.exit(1));
  const _0x254a32 = _0x55c639.split(/\r?\n/).filter(_0x138461 => _0x138461.trim());
  _0x254a32.length === 0 && (console.log("[❌ ERROR] 环境变量" + ENV_NAME + "配置为空，请检查"), process.exit(1));
  console.log("[ℹ️ 共检测到 " + _0x254a32.length + " 个账号，开始批量处理...]");
  for (const _0x5c13e9 of _0x254a32) {
    const [_0x291b78, _0x5094c5] = _0x5c13e9.split("|").map(_0x570265 => _0x570265.trim());
    if (!_0x291b78 || !_0x5094c5) {
      console.log("[⚠️ 账号格式错误：" + _0x5c13e9 + "，请按「手机号|密码」格式配置]");
      continue;
    }
    await handleAccount(_0x291b78, _0x5094c5);
  }
  console.log("\n[✅ 所有账号处理完成]");
}
main();