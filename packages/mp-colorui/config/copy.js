const path = require("path");
const fs = require("fs");

const file = fs.readFileSync(path.join(__dirname, "../dist/index.js"));
const css = fs.readFileSync(path.join(__dirname, "../dist/index.css"));

fs.writeFileSync(path.join(__dirname, "../../mp-colorui-demo/mp-colorui.js"), file);
fs.writeFileSync(path.join(__dirname, "../../mp-colorui-demo/mp-colorui.css"), css);
