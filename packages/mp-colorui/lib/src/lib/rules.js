/**
 * 手机号码正则校验
 * @param value 需要校验值
 * @returns {boolean}
 */
export const phone = (value) => /^[1]([3-9])[0-9]{9}$/.test(value);
/**
 * email 地址校验
 * @param value 需要校验值
 * @returns {boolean}
 */
export const email = (value) => /^([a-zA-Z0-9\u4e00-\u9fa5]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value);
/**
 * 数值范围校验
 * @param min 最小值
 * @param max 最大值
 * @param value 需要校验值
 * @returns {boolean}
 */
export const range = (min, max, value) => value >= min && value <= max;
/**
 * 是否为空
 * @param value 需要校验值
 * @returns {boolean}
 */
export const required = (value) => !!value;
/**
 * 是否为纯英文
 * @param value 需要校验值
 * @returns {boolean}
 */
export const en = (value) => /(^[A-Za-z]+$)/.test(value);
/**
 * 是否为纯中文
 * @param value 需要校验值
 * @returns {boolean}
 */
export const cn = (value) => /(^[\u4e00-\u9fa5]{0,}$)/.test(value);
/**
 * 是否为金钱数字
 * @param value 需要校验值
 * @returns {boolean}
 */
export const money = (value) => /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(`${value}`);
/**
 * 是否字母数字组合
 * @param value 需要校验值
 * @returns {boolean}
 */
export const code = (value) => /(^[A-Za-z0-9]+$)/.test(value);
/**
 * 是否为纯数字
 * @param value 需要校验值
 * @returns {boolean}
 */
export const number = (value) => /^[0-9]+.?[0-9]*$/.test(`${value}`);
/**
 * 是否为 ip 地址
 * @param value 需要校验值
 * @returns {boolean}
 */
export const ip = (value) => /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value);
/**
 * 是否为合法 url
 * @param value 需要校验值
 * @returns {boolean}
 */
export const url = (value) => /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value);
/**
 * 是否为合法身份证
 * @param value 需要校验值
 * @returns {boolean}
 */
export const idCard = (value) => {
    const aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    let iSum = 0;
    if (!/^\d{17}(\d|x)$/i.test(value)) {
        return false; //身份证长度或格式错误
    }
    let idCardValid = value.replace(/x$/i, "a");
    if (aCity[parseInt(idCardValid.substr(0, 2))] == null) {
        return false; //身份证地区非法;
    }
    const sBirthday = idCardValid.substr(6, 4) + "-" + Number(idCardValid.substr(10, 2)) + "-" + Number(idCardValid.substr(12, 2));
    const d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
        return false; //身份证上的出生日期非法;
    }
    for (let i = 17; i >= 0; i--) {
        iSum += (Math.pow(2, i) % 11) * parseInt(idCardValid.charAt(17 - i), 11);
    }
    if (iSum % 11 != 1) {
        return false; //身份证号非法;
    }
};
export default {
    phone,
    email,
    range,
    required,
    en,
    cn,
    money,
    number,
    ip,
    url,
    idCard
};
//# sourceMappingURL=rules.js.map