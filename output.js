//Mon Oct 28 2024 15:09:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("快手极速");
const notify = $.isNode() ? require("./sendNotify") : "";
let status;
status = (status = $.getval("ksstatus") || "1") > 1 ? "" + status : "";
let ksurlArr = [],
  kshdArr = [];
let ksurl = $.getdata("ksurl");
let kshd = $.isNode() ? process.env.kshd ? process.env.kshd : "" : $.getdata("kshd") ? $.getdata("kshd") : "";
let cash = ($.isNode() ? process.env.kscash : $.getval("kscash")) || 3;
let withdrawTime = ($.isNode() ? process.env.kstxtime : $.getval("kstxtime")) || 20;
let tz = ($.isNode() ? process.env.kstz : $.getval("kstz")) || 1;
let DD = RT(60000, 80000);
$.message = "";
let kshds = "";
let curTime = new Date();
let currentHour = curTime.getHours();
!(async () => {
  if (typeof $request !== "undefined") {
    await ksck();
  } else {
    if (!$.isNode()) {
      ksurlArr.push($.getdata("ksurl"));
      kshdArr.push($.getdata("kshd"));
      let _0x5e1bfa = $.getval("kscount") || "1";
      for (let _0xb6161d = 2; _0xb6161d <= _0x5e1bfa; _0xb6161d++) {
        {
          ksurlArr.push($.getdata("ksurl" + _0xb6161d));
          kshdArr.push($.getdata("kshd" + _0xb6161d));
        }
      }
      if (!kshdArr[0]) {
        $.log("\n【温馨提示】：请打开快手极速版 点击去赚钱获取CK");
        $.message += "\n【温馨提示】：请打开快手极速版 点击去赚钱获取CK";
      } else {
        console.log("\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " ===============================================\n");
        for (let _0x164a4c = 0; _0x164a4c < kshdArr.length; _0x164a4c++) {
          {
            if (kshdArr[_0x164a4c]) {
              {
                ksurl = ksurlArr[_0x164a4c];
                kshd = kshdArr[_0x164a4c];
                $.index = _0x164a4c + 1;
                console.log("\n\n开始【快手极速" + $.index + "】");
                await kzjb();
                await $.wait(1000);
                message();
              }
            }
          }
        }
      }
    } else {
      {
        if (process.env.kshd && process.env.kshd.indexOf("@") > -1) {
          kshdArr = process.env.kshd.split("@");
          console.log("您选择的是用\"@\"隔开\n");
        } else {
          kshds = [process.env.kshd];
        }
        Object.keys(kshds).forEach(_0x1118f0 => {
          if (kshds[_0x1118f0]) {
            kshdArr.push(kshds[_0x1118f0]);
          }
        });
        if (!kshdArr[0]) {
          $.log("\n【温馨提示】：请打开快手极速版 点击去赚钱获取CK");
          $.message += "\n【温馨提示】：请打开快手极速版 点击去赚钱获取CK";
        } else {
          {
            console.log("共" + kshdArr.length + "个cookie");
            for (let _0x4d3da8 = 0; _0x4d3da8 < kshdArr.length; _0x4d3da8++) {
              {
                $.message = "";
                kshd = kshdArr[_0x4d3da8];
                $.index = _0x4d3da8 + 1;
                console.log("\n开始【快手极速" + $.index + "】");
                await kzjb();
                await $.wait(1000);
                message();
              }
            }
          }
        }
      }
    }
  }
})().catch(_0x2daf58 => $.logErr(_0x2daf58)).finally(() => $.done());
function ksck() {
  if ($request.url.indexOf("basicInfo") > -1) {
    const _0x1fa310 = $request.url;
    if (_0x1fa310) $.setdata(_0x1fa310, "ksurl" + status);
    $.log(_0x1fa310);
    const _0x270aba = JSON.stringify($request.headers.Cookie);
    if (_0x270aba) $.setdata(_0x270aba, "kshd" + status);
    $.log(_0x270aba);
    $.msg($.name, "", "快手" + status + "获取ck成功");
  }
}
function kzjb(_0x4a9a5f = 0) {
  return new Promise(_0x4ba719 => {
    let _0x2a90dd = {
      "url": "https://liuqi6968.coding.net/p/jiaobenkongzhi/d/jbkzcode/git/raw/master/code.json",
      "headers": ""
    };
    $.get(_0x2a90dd, async (_0x27af53, _0x240676, _0xb3b60f) => {
      {
        try {
          _0xb3b60f = JSON.parse(_0xb3b60f);
          if (_0xb3b60f.ks_js == 1) {
            {
              console.log("脚本状态：" + _0xb3b60f.msgi);
              await yhxx();
              await $.wait(1000);
              await qd();
              await $.wait(3000);
              await yylj();
              await $.wait(3000);
              await yy();
              await $.wait(3000);
              await ksgj();
              await ggqq();
              await kbx();
              await $.wait(2000);
              await yhxx1();
              await $.wait(1000);
              await yl();
              await $.wait(1000);
            }
          } else {
            console.log("【脚本状态】" + _0xb3b60f.msg);
            $.message += "【脚本状态】" + _0xb3b60f.msg;
          }
        } catch (_0x49ee30) {
          $.logErr(_0x49ee30, _0x240676);
        } finally {
          _0x4ba719();
        }
      }
    }, 0);
  });
}
function yl(_0x40c294 = 0) {
  return new Promise(_0x531936 => {
    let _0x444d7f = {
      "url": "https://api.oick.cn/dutang/api.php",
      "headers": {
        "Accept": "application/json",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
      }
    };
    $.get(_0x444d7f, async (_0x3ea9d1, _0x1f1c9d, _0xcd12d8) => {
      try {
        {
          result = _0xcd12d8;
          if (result.length != 0) {
            {
              $.log("\n【营养鸡汤】：" + result);
              $.message += "\n【营养鸡汤】：" + result;
            }
          }
        }
      } catch (_0x2daad3) {
        {
          $.logErr(_0x2daad3, _0x1f1c9d);
        }
      } finally {
        _0x531936();
      }
    }, _0x40c294);
  });
}
function yhxx(_0x2b3e88 = 0) {
  return new Promise(_0x2ef60c => {
    let _0x41f804 = {
      "url": "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "Cookie": "" + kshd
      }
    };
    $.get(_0x41f804, async (_0x43ca4f, _0x3466d0, _0x355845) => {
      try {
        _0x355845 = JSON.parse(_0x355845);
        if (_0x355845.result == 1) {
          {
            console.log("\n【快手极速用户】: " + _0x355845.data.userData.nickname);
            $.message += "\n【快手极速用户】: " + _0x355845.data.userData.nickname;
          }
        } else {}
      } catch (_0x384bf5) {} finally {
        _0x2ef60c();
      }
    }, _0x2b3e88);
  });
}
function yhxx1(_0x26ae69 = 0) {
  return new Promise(_0x4cdead => {
    let _0x5ac95e = {
      "url": "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "Cookie": "" + kshd
      }
    };
    $.get(_0x5ac95e, async (_0x1a3a04, _0x313b28, _0x22d075) => {
      try {
        {
          _0x22d075 = JSON.parse(_0x22d075);
          if (_0x22d075.result == 1) {
            console.log("\n【账户余额】: " + _0x22d075.data.totalCash + "元");
            console.log("\n【今日账户金币】: " + _0x22d075.data.totalCoin + "个");
            jb = _0x22d075.data.totalCoin;
            $.message += "\n【账户余额】: " + _0x22d075.data.totalCash + "元";
            $.message += "\n【今日账户金币】: " + _0x22d075.data.totalCoin + "个";
            if (currentHour == withdrawTime) {
              {
                await $.wait(1000);
                await sddh();
                await $.wait(1000);
                await jbdh();
                if (_0x22d075.data.totalCash >= cash) {
                  console.log("当前余额大于" + cash + "元，开始提现");
                  await $.wait(1000);
                  await tx();
                } else {
                  {
                    console.log("余额不足" + cash + "元，不提现");
                  }
                }
              }
            } else {
              {
                console.log("非提现时间，当前设置为每天" + withdrawTime + "点提现");
              }
            }
          } else {}
        }
      } catch (_0x495fa8) {} finally {
        {
          _0x4cdead();
        }
      }
    }, _0x26ae69);
  });
}
function tx(_0xa2cd27 = 0) {
  return new Promise(_0xa72259 => {
    let _0x10d782 = {
      "url": "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply",
      "headers": {
        "Host": "www.kuaishoupay.com",
        "Content-Length": "136",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": "" + kshd
      },
      "body": "account_group_key=NEBULA_CASH_ACCOUNT&mobile_code=&fen=" + cash * 100 + "&provider=WECHAT&total_fen=" + cash * 100 + "&commission_fen=0&attach=&biz_content=&session_id="
    };
    $.post(_0x10d782, async (_0x5802f8, _0x5441d0, _0x20d765) => {
      {
        try {
          {
            _0x20d765 = JSON.parse(_0x20d765);
            if (_0x20d765.result == "SUCCESS") {
              console.log("\n【恭喜🎉】提现" + cash + "元成功: " + _0x20d765.title);
              $.message += "\n【恭喜🎉】提现" + cash + "元成功: " + _0x20d765.data.title;
            } else {
              {
                console.log("\n【失败😱😱】提现" + cash + "元失败: " + _0x20d765.msg);
                $.message += "\n【失败😱😱】提现" + cash + "元失败: " + _0x20d765.msg;
              }
            }
          }
        } catch (_0x1d2668) {} finally {
          {
            _0xa72259();
          }
        }
      }
    }, _0xa2cd27);
  });
}
function qd(_0x22dc6a = 0) {
  return new Promise(_0x58b4f9 => {
    let _0x335617 = {
      "url": "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "Cookie": "" + kshd
      }
    };
    $.get(_0x335617, async (_0x3f0cfe, _0x1aad9b, _0x2d0297) => {
      try {
        {
          _0x2d0297 = JSON.parse(_0x2d0297);
          if (_0x2d0297.result == 1) {
            console.log("\n【签到成功】: " + _0x2d0297.data.toast);
            $.message += "\n【签到成功】: " + _0x2d0297.data.toast;
          } else {
            console.log("\n【签到失败】: " + _0x2d0297.error_msg);
          }
        }
      } catch (_0x3b6d7b) {} finally {
        _0x58b4f9();
      }
    }, _0x22dc6a);
  });
}
function yy(_0x5d094c = 0) {
  return new Promise(_0x156e80 => {
    let _0xf4cba2 = {
      "url": "https://nebula.kuaishou.com/rest/n/nebula/reservation-task/reserve",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "Cookie": "" + kshd
      }
    };
    $.get(_0xf4cba2, async (_0x20fbb5, _0x304b07, _0x35830a) => {
      try {
        _0x35830a = JSON.parse(_0x35830a);
        if (_0x35830a.result == 1) {
          {
            console.log("\n" + _0x35830a.data.feedbackPopup.title);
            $.message += "\n" + _0x35830a.data.feedbackPopup.title;
            console.log("\n" + _0x35830a.data.feedbackPopup.subTitle);
            $.message += "\n" + _0x35830a.data.feedbackPopup.subTitle;
          }
        } else {
          {
            console.log("\n【预约失败】: " + _0x35830a.error_msg);
          }
        }
      } catch (_0x198bdf) {} finally {
        {
          _0x156e80();
        }
      }
    }, _0x5d094c);
  });
}
function yylj(_0x133067 = 0) {
  return new Promise(_0x42cd71 => {
    let _0x144619 = {
      "url": "https://nebula.kuaishou.com/rest/n/nebula/reservation-task/award",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "Cookie": "" + kshd
      }
    };
    $.get(_0x144619, async (_0x14af7e, _0x5d08b7, _0x3e4abc) => {
      {
        try {
          _0x3e4abc = JSON.parse(_0x3e4abc);
          if (_0x3e4abc.result == 1) {
            {
              console.log("\n" + _0x3e4abc.data.msg);
              $.message += "\n" + _0x3e4abc.data.msg;
            }
          } else {
            console.log("\n【失败】: " + _0x3e4abc.error_msg);
          }
        } catch (_0x321182) {} finally {
          {
            _0x42cd71();
          }
        }
      }
    }, _0x133067);
  });
}
function kbx(_0x33eeeb = 0) {
  return new Promise(_0x4b4be9 => {
    {
      let _0x197918 = {
        "url": "https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=true&isReadyOfAdPlay=true",
        "headers": {
          "Host": "nebula.kuaishou.com",
          "Cookie": "" + kshd
        }
      };
      $.get(_0x197918, async (_0x3eb5b6, _0x4ce5c1, _0x41e575) => {
        try {
          _0x41e575 = JSON.parse(_0x41e575);
          if (_0x41e575.result == 1) {
            console.log("\n【获得开宝箱金币】: " + _0x41e575.data.commonAwardPopup.awardAmount);
            $.message += "\n【获得开宝箱金币】: " + _0x41e575.data.commonAwardPopup.awardAmount;
            await ggqq1();
            await $.wait(DD);
            await gglq1();
          } else {
            console.log("\n【今日已完成】: " + _0x41e575.error_msg);
            $.message += "\n【今日已完成】: " + _0x41e575.error_msg;
          }
        } catch (_0x4146ba) {} finally {
          {
            _0x4b4be9();
          }
        }
      }, _0x33eeeb);
    }
  });
}
function ksgj(_0x4ca79f = 0) {
  return new Promise(_0x20a98b => {
    aa = "" + kshd;
    ksgjbody = aa.split("client_key=")[1].split("&")[0];
    let _0x1b1543 = {
      "url": "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward",
      "headers": {
        "Host": "api2.e.kuaishou.com",
        "Content-Length": "888",
        "Cookie": "" + kshd,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": "activityId=148&client_key=ksgjbody"
    };
    $.post(_0x1b1543, async (_0x3f2ad9, _0x284936, _0x43e4af) => {
      try {
        _0x43e4af = JSON.parse(_0x43e4af);
        if (_0x43e4af.result == 1) {
          console.log("\n【逛街成功】: " + _0x43e4af.message);
          console.log("\n【获得逛街金币】: " + _0x43e4af.data.amount);
          $.message += "\n【获得逛街金币】: " + _0x43e4af.data.amount;
          await $.wait(DD);
        } else {
          {
            console.log("\n【逛街失败】: " + _0x43e4af.message);
            $.message += "\n【逛街失败】: " + _0x43e4af.message;
          }
        }
      } catch (_0x240efa) {} finally {
        _0x20a98b();
      }
    }, _0x4ca79f);
  });
}
function ggqq(_0x293acc = 0) {
  return new Promise(_0x48e386 => {
    {
      let _0x17b5ad = {
        "url": "https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": "1076",
          "Host": "api.e.kuaishou.com"
        },
        "body": "sign=5a54eecde4d4ea61d1baedb906b832e7d38c96e547623a338d1377c886f7acb9&encData=WlTuzeTU6mGT9525bjJUVX1gdwAFTHljgjAw%2BtDz1mbEg%2FSVpHdJY%2B3iV5r3%2Fj4ozCxb3mLGNsZ%2F8IbMzSr5MXzlgFz9aSREPxWslOo0jRvgTWaoGXSA9WwL3xPz7291vbvHilZRRTcBWVfu67sQ6rMO0TSk2PmVrK4%2FUNyxUt%2BPaU77gUUrM8h8vqaa%2FqmcCgLq6FZ97gsf0rTMZUsi7ChrvOhV6hML0vfEp64jJcQmf7C7pFLbHtvHEP08ET2hv9VWafa%2Fv%2FQVCknzEPjDZq1hpfk6%2BnRgeAApDnzLAWJ489AH88%2F8PtvVROWjmH1MEqM693luqnINLWndBQUTpcNBUAtkTTEkBIhVpdXW9%2BYuhQj37SHa3GEK6AiL4nTbs2mKoy8Sh%2B3lYJLeaF7m4r34R9xu4KJd7NXJnNNdlK%2FimojhLIy6VYES0srnBS4AZz%2B1qAhnDT5gHxjF2P%2FIS%2BisSoHxY9qyiefMYhT8IbJCaoc76l7HSs45ik7s6CNSAW%2BcV%2FR%2BLy1cSv6OignZVnw%2F6eH0vEs8ow1qf9xgX8m4pyvpKJrZqBOb8Ggbavy8vcqdwNaCUyPHmpMB9Mq%2FZtaj29zqC68rFXjW016DEY3g%2B8fZJfh6XIoiUaN0LL8u56rWPsyPD3maRgYo8Gjb5HqkN558ndme8WIIsidUKMiBeUqfhmqozkQd7j%2FLbdoTtXsjPJdMDRF3pXaGzBQ1fxUOB5%2F7DBrSI79VI1VXSPrUDodFWdafQcG%2BtGl5s9zQos6yFrrF8m2il8LHo44g44zyXGlhFyKPd0EAdly0%2FDClvg9%2FD1EhRH7zNC58hqJ6nYy5ppR%2FfXMxFWq%2BWRSzh66laSX99WRyx24%2F0pTcYq8hBr%2Bf%2BB7ARdhxCAdRUtw3%2FK4QfOjTFJ5noZh6BDblUhO7SfcpO8l%2F"
      };
      $.post(_0x17b5ad, async (_0x407767, _0x1ee417, _0x5e4e1b) => {
        try {
          {
            _0x5e4e1b = JSON.parse(_0x5e4e1b);
            if (_0x5e4e1b.result == 1) {
              llsid = _0x5e4e1b.llsid;
              spid = _0x5e4e1b.impAdInfo[0].adInfo[0].adBaseInfo.creativeId;
              await gglq();
            } else {}
          }
        } catch (_0x136386) {} finally {
          _0x48e386();
        }
      }, _0x293acc);
    }
  });
}
function gglq(_0x4c8d0b = 0) {
  return new Promise(_0x4fc9a9 => {
    {
      let _0x182376 = {
        "url": "https://api.e.kuaishou.com/rest/r/ad/nebula/reward",
        "headers": {
          "Host": "api.e.kuaishou.com",
          "Connection": "keep-alive",
          "Content-Length": "1138",
          "Cookie": "" + kshd,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "body": "bizStr={\"endTime\":1636362292887,\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + spid + ",\"extInfo\":\"\",\"llsid\":" + llsid + ",\"taskType\":1}],\"startTime\":1636362253612,\"taskId\":0},ksgjbody"
      };
      $.post(_0x182376, async (_0xa5da53, _0xfb073e, _0x1b518e) => {
        try {
          _0x1b518e = JSON.parse(_0x1b518e);
          if (_0x1b518e.result == 1) {
            console.log("\n【获得看广告金币】: " + _0x1b518e.data.awardAmount);
            $.message += "\n【获得看广告金币】: " + _0x1b518e.data.awardAmount;
            if (_0x1b518e.data.awardAmount > 0) await $.wait(25000);
          } else {
            {
              console.log("\n【失败】: " + _0x1b518e.message);
              $.message += "\n【失败】: " + _0x1b518e.message;
            }
          }
        } catch (_0x46fce2) {} finally {
          {
            _0x4fc9a9();
          }
        }
      }, _0x4c8d0b);
    }
  });
}
function ggqq1(_0x4388bd = 0) {
  return new Promise(_0x38dadd => {
    let _0x227f3e = {
      "url": "https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": "1076",
        "Host": "api.e.kuaishou.com"
      },
      "body": "sign=5a54eecde4d4ea61d1baedb906b832e7d38c96e547623a338d1377c886f7acb9&encData=WlTuzeTU6mGT9525bjJUVX1gdwAFTHljgjAw%2BtDz1mbEg%2FSVpHdJY%2B3iV5r3%2Fj4ozCxb3mLGNsZ%2F8IbMzSr5MXzlgFz9aSREPxWslOo0jRvgTWaoGXSA9WwL3xPz7291vbvHilZRRTcBWVfu67sQ6rMO0TSk2PmVrK4%2FUNyxUt%2BPaU77gUUrM8h8vqaa%2FqmcCgLq6FZ97gsf0rTMZUsi7ChrvOhV6hML0vfEp64jJcQmf7C7pFLbHtvHEP08ET2hv9VWafa%2Fv%2FQVCknzEPjDZq1hpfk6%2BnRgeAApDnzLAWJ489AH88%2F8PtvVROWjmH1MEqM693luqnINLWndBQUTpcNBUAtkTTEkBIhVpdXW9%2BYuhQj37SHa3GEK6AiL4nTbs2mKoy8Sh%2B3lYJLeaF7m4r34R9xu4KJd7NXJnNNdlK%2FimojhLIy6VYES0srnBS4AZz%2B1qAhnDT5gHxjF2P%2FIS%2BisSoHxY9qyiefMYhT8IbJCaoc76l7HSs45ik7s6CNSAW%2BcV%2FR%2BLy1cSv6OignZVnw%2F6eH0vEs8ow1qf9xgX8m4pyvpKJrZqBOb8Ggbavy8vcqdwNaCUyPHmpMB9Mq%2FZtaj29zqC68rFXjW016DEY3g%2B8fZJfh6XIoiUaN0LL8u56rWPsyPD3maRgYo8Gjb5HqkN558ndme8WIIsidUKMiBeUqfhmqozkQd7j%2FLbdoTtXsjPJdMDRF3pXaGzBQ1fxUOB5%2F7DBrSI79VI1VXSPrUDodFWdafQcG%2BtGl5s9zQos6yFrrF8m2il8LHo44g44zyXGlhFyKPd0EAdly0%2FDClvg9%2FD1EhRH7zNC58hqJ6nYy5ppR%2FfXMxFWq%2BWRSzh66laSX99WRyx24%2F0pTcYq8hBr%2Bf%2BB7ARdhxCAdRUtw3%2FK4QfOjTFJ5noZh6BDblUhO7SfcpO8l%2F"
    };
    $.post(_0x227f3e, async (_0x1f3fd, _0x354c6d, _0x33f53f) => {
      try {
        {
          _0x33f53f = JSON.parse(_0x33f53f);
          if (_0x33f53f.result == 1) {
            llsid = _0x33f53f.llsid;
            spid = _0x33f53f.impAdInfo[0].adInfo[0].adBaseInfo.creativeId;
          } else {}
        }
      } catch (_0x2d6520) {} finally {
        {
          _0x38dadd();
        }
      }
    }, _0x4388bd);
  });
}
function gglq1(_0xefc5c6 = 0) {
  return new Promise(_0x2a52f2 => {
    let _0x23c715 = {
      "url": "https://api.e.kuaishou.com/rest/r/ad/nebula/reward",
      "headers": {
        "Host": "api.e.kuaishou.com",
        "Connection": "keep-alive",
        "Content-Length": "1138",
        "Cookie": "" + kshd,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": "bizStr={\"endTime\":1636362292887,\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + spid + ",\"extInfo\":\"\",\"llsid\":" + llsid + ",\"taskType\":1}],\"startTime\":1636362253612,\"taskId\":77},ksgjbody"
    };
    $.post(_0x23c715, async (_0x2db70b, _0x48db39, _0x4d2e10) => {
      {
        try {
          {
            _0x4d2e10 = JSON.parse(_0x4d2e10);
            if (_0x4d2e10.result == 1) {
              console.log("\n【获得宝箱翻倍金币】: " + _0x4d2e10.data.awardAmount);
              $.message += "\n【获得宝箱翻倍金币】: " + _0x4d2e10.data.awardAmount;
            } else {
              console.log("\n【失败】: " + _0x4d2e10.message);
              $.message += "\n【失败】: " + _0x4d2e10.message;
            }
          }
        } catch (_0x467b47) {} finally {
          _0x2a52f2();
        }
      }
    }, _0xefc5c6);
  });
}
function sddh(_0x4f9d1a = 0) {
  return new Promise(_0x206bbc => {
    let _0xa55c82 = {
      "url": "https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "Connection": "keep-alive",
        "Content-Length": "10",
        "Origin": "https://nebula.kuaishou.com",
        "content-type": "application/json",
        "Cookie": "" + kshd
      },
      "body": "{\"type\":2}"
    };
    $.post(_0xa55c82, async (_0xcc2ae0, _0x4d132b, _0x1c2c71) => {
      try {
        {
          _0x1c2c71 = JSON.parse(_0x1c2c71);
          if (_0x1c2c71.result == 1) {
            {
              console.log("\n【手动兑换金币开启成功】: " + _0x1c2c71.data);
            }
          } else {}
        }
      } catch (_0x27f416) {} finally {
        _0x206bbc();
      }
    }, _0x4f9d1a);
  });
}
function jbdh(_0x199bfb = 0) {
  return new Promise(_0x4d0a4e => {
    let _0x47341d = {
      "url": "https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "Connection": "keep-alive",
        "Content-Length": "83",
        "content-type": "application/json",
        "Cookie": "" + kshd
      },
      "body": "{\"coinAmount\":" + jb + ",\"token\":\"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw\"}"
    };
    $.post(_0x47341d, async (_0xd1f68, _0x155f6b, _0x3b12e7) => {
      try {
        _0x3b12e7 = JSON.parse(_0x3b12e7);
        if (_0x3b12e7.result == 1) {
          console.log("\n【兑换成功】: " + _0x3b12e7.data);
          $.message += "\n【兑换成功】: " + _0x3b12e7.data;
        } else {}
      } catch (_0x4c02fc) {} finally {
        {
          _0x4d0a4e();
        }
      }
    }, _0x199bfb);
  });
}
async function message() {
  if (tz == 1) {
    {
      $.msg($.name, "", $.message);
    }
  }
  if ($.isNode()) {
    {
      await notify.sendNotify($.name, $.message);
    }
  }
}
function RT(_0x26d640, _0x4dd958) {
  do rt = Math.floor(Math.random() * _0x4dd958); while (rt < _0x26d640);
  return rt;
}
_0xod7 = "jsjiami.com.v6";