/**
 * @description 将驼峰式转化为 -
 * @param str
 * @returns {*}
 */
export const toMidLine = str => str.replace(/[A-Z]/g, match => '-' + match.toLowerCase())

/**
 * @description 浅色
 * @param color
 * @returns {string}
 */
export const convertLightColor = color => toMidLine(color).split('-').reverse().join('-');

export default {
  toMidLine,
  convertLightColor
}
