const fs = require("fs");
const path = require("path");

// 文档所在绝对地址
const docPath =
  "/Users/ly/develop/WebProject/WeChatMiniProgram/mp-colorui-doc/";
// 打包完成所在地址
const distPath =
  "/Users/ly/develop/WebProject/WeChatMiniProgram/mp-colorui/docs/.vuepress/dist/";
// code 所在
const publicPath =
  "/Users/ly/develop/WebProject/WeChatMiniProgram/mp-colorui/docs/.vuepress/public";

// 删除/移动文件
const transfromFile = (relativePath, type) => {
  let files = [];
  if (fs.existsSync(relativePath)) {
    files = fs.readdirSync(relativePath);
    files.forEach((filename, index) => {
      const currentPath = path.join(relativePath, filename);
      if (fs.statSync(currentPath).isDirectory()) {
        if (type === "copy")
          fs.mkdirSync(
            path.join(docPath, relativePath.split(distPath)[1] || "", filename)
          );
        if (filename !== ".git") transfromFile(currentPath, type);
      } else {
        if (type === "copy") {
          fs.writeFileSync(
            path.join(docPath, relativePath.split(distPath)[1] || "", filename),
            fs.readFileSync(currentPath)
          );
        } else {
          if (filename.indexOf(".") === 0) return;
          fs.unlinkSync(currentPath);
        }
      }
    });
    if (relativePath !== docPath && type === "delete") {
      if (relativePath.indexOf(".git") > -1) return;
      fs.rmdirSync(relativePath);
    }
  }
};
// 删除文件
transfromFile(docPath, "delete");
console.log("删除文件成功");
// 写入文件
transfromFile(distPath, "copy");
console.log("写入文件成功");
// 更新存储桶

const COS = require("cos-nodejs-sdk-v5");

const cos = new COS({
  SecretId: "AKIDmUIJE0WJQYcblqJgMDvUI3rdIn7bf6xi",
  SecretKey: "tdsPqiS6MdpriUAjDbpsodKtSvFQWVM7"
});

const allcodeName = fs.readdirSync(publicPath);

// 循环上传
allcodeName.forEach(name => {
  cos.putObject(
    {
      Bucket: "mp-colorui-1255362963" /* 必须 */,
      Region: "ap-chengdu" /* 必须 */,
      Key: `code/${name}`,
      Body: fs.createReadStream(path.join(docPath, name)),
      // onProgress: function(progressData) {
      //   console.log(JSON.stringify(progressData));
      // }
    },
    (err, data) => {
      console.log(err || `${data.Location}上传成功`);
    }
  );
});
