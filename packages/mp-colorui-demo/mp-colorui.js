'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Taro = require('@tarojs/taro');
var components = require('@tarojs/components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Taro__default = /*#__PURE__*/_interopDefaultLegacy(Taro);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var SIZE = {
    xsmall: 'xs',
    small: 'sm',
    normal: '',
    diff: 'df',
    large: 'lg',
    xlarge: 'xl',
    xxlarge: 'xxl',
    slarge: 'sl',
    xslarge: 'xsl'
};
var COLOR_LIST = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'cyan',
    'blue',
    'purple',
    'mauve',
    'pink',
    'brown',
    'grey',
    'gray',
    'black',
    'white'
];
var GRADUAL_COLOR_LIST = [
    'gradualRed',
    'gradualOrange',
    'gradualGreen',
    'gradualPurple',
    'gradualPink',
    'gradualBlue'
];
var COLOR = {};
COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = cur;
    return pre;
}, COLOR);
var BG_COLOR_LIST = {};
COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = "bg-" + cur;
    pre["light-" + cur] = "bg-" + cur + " light";
    return pre;
}, BG_COLOR_LIST);
GRADUAL_COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = "bg-" + cur.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
    return pre;
}, BG_COLOR_LIST);
var TEXT_COLOR_LIST = {};
COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = "text-" + cur;
    return pre;
}, TEXT_COLOR_LIST);
var SHADOW_LIST = {
    normal: 'shadow',
    large: 'shadow-lg',
    wrap: 'shadow-wrap',
    auto: 'shadow-blur'
};
var solids = 'solids';
var solid = 'solid';
var SOLID_LIST = {
    none: '',
    around: "" + solid,
    top: solid + "-top",
    left: solid + "-left",
    right: solid + "-right",
    bottom: solid + "-bottom",
    'bold-around': "" + solids,
    'bold-top': solids + "-top",
    'bold-left': solids + "-left",
    'bold-right': solids + "-right",
    'bold-bottom': solids + "-bottom"
};
var pxMap = {
    xsmall: 40,
    small: 48,
    normal: 56,
    large: 64,
    xlarge: 72,
    xxlarge: 88,
    slarge: 160,
    xslarge: 240
};

var model = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SIZE: SIZE,
    COLOR: COLOR,
    BG_COLOR_LIST: BG_COLOR_LIST,
    TEXT_COLOR_LIST: TEXT_COLOR_LIST,
    SHADOW_LIST: SHADOW_LIST,
    SOLID_LIST: SOLID_LIST,
    pxMap: pxMap
});

/**
 * 手机号码正则校验
 * @param value 需要校验值
 * @returns {boolean}
 */
var phone = function (value) { return /^[1]([3-9])[0-9]{9}$/.test(value); };
/**
 * email 地址校验
 * @param value 需要校验值
 * @returns {boolean}
 */
var email = function (value) { return /^([a-zA-Z0-9\u4e00-\u9fa5]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value); };
/**
 * 数值范围校验
 * @param min 最小值
 * @param max 最大值
 * @param value 需要校验值
 * @returns {boolean}
 */
var range = function (min, max, value) { return value >= min && value <= max; };
/**
 * 是否为空
 * @param value 需要校验值
 * @returns {boolean}
 */
var required = function (value) { return !!value; };
/**
 * 是否为纯英文
 * @param value 需要校验值
 * @returns {boolean}
 */
var en = function (value) { return /(^[A-Za-z]+$)/.test(value); };
/**
 * 是否为纯中文
 * @param value 需要校验值
 * @returns {boolean}
 */
var cn = function (value) { return /(^[\u4e00-\u9fa5]{0,}$)/.test(value); };
/**
 * 是否为金钱数字
 * @param value 需要校验值
 * @returns {boolean}
 */
var money = function (value) { return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test("" + value); };
/**
 * 是否为纯数字
 * @param value 需要校验值
 * @returns {boolean}
 */
var number = function (value) { return /^[0-9]+.?[0-9]*$/.test("" + value); };
/**
 * 是否为 ip 地址
 * @param value 需要校验值
 * @returns {boolean}
 */
var ip = function (value) { return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value); };
/**
 * 是否为合法 url
 * @param value 需要校验值
 * @returns {boolean}
 */
var url = function (value) { return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value); };
/**
 * 是否为合法身份证
 * @param value 需要校验值
 * @returns {boolean}
 */
var idCard = function (value) {
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    var iSum = 0;
    if (!/^\d{17}(\d|x)$/i.test(value)) {
        return false; //身份证长度或格式错误
    }
    var idCardValid = value.replace(/x$/i, "a");
    if (aCity[parseInt(idCardValid.substr(0, 2))] == null) {
        return false; //身份证地区非法;
    }
    var sBirthday = idCardValid.substr(6, 4) + "-" + Number(idCardValid.substr(10, 2)) + "-" + Number(idCardValid.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
        return false; //身份证上的出生日期非法;
    }
    for (var i = 17; i >= 0; i--) {
        iSum += (Math.pow(2, i) % 11) * parseInt(idCardValid.charAt(17 - i), 11);
    }
    if (iSum % 11 != 1) {
        return false; //身份证号非法;
    }
};
var defaultRules = {
    phone: phone,
    email: email,
    range: range,
    required: required,
    en: en,
    cn: cn,
    money: money,
    number: number,
    ip: ip,
    url: url,
    idCard: idCard
};

var classNames = classnames;
var fullDate = function (num) {
    if (num < 10)
        return "0" + num;
    return num;
};
/**
 * 获取当前日期
 * @param type 单位
 */
var getNowDate = function (type) {
    var date = new Date();
    var year = date.getFullYear();
    var month = fullDate(date.getMonth());
    var day = fullDate(date.getDate());
    if (type === "year")
        return "" + year;
    if (type === "month")
        return year + "-" + month;
    if (type === "day")
        return year + "-" + month + "-" + day;
    return year + "-" + month + "-" + day;
};
/**
 * 判断是否为 number
 * @param obj  参数值
 */
var isNumber = function (obj) {
    return typeof obj === "number" && !isNaN(obj);
};
/**
 * 按照 750 作为设计时的百分比
 */
var screenPercent = Taro__default['default'].getSystemInfoSync().screenWidth / 750;
/**
 * 随机生成 id
 * @param hashLength number 长度
 * @returns {string} id
 */
var generateId = function (hashLength) {
    if (hashLength === void 0) { hashLength = 24; }
    if (!hashLength || typeof Number(hashLength) != "number") {
        return "";
    }
    var ar = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    var hs = [];
    var hl = Number(hashLength);
    var al = ar.length;
    for (var i = 0; i < hl; i++) {
        var radom = Math.random() * al;
        var index = Math.floor(radom);
        var code = ar[index];
        hs.push(code);
    }
    return "id-" + hs.join("");
};
/**
 * 是否是 H5 环境
 * @type {boolean}
 */
var isH5 = Taro__default['default'].ENV_TYPE.WEB === Taro__default['default'].getEnv();
/**
 * 是否是 支付宝 环境
 * @type {boolean}
 */
var isAliPay = Taro__default['default'].ENV_TYPE.ALIPAY === Taro__default['default'].getEnv();
/**
 * 是否是 微信 环境
 * @type {boolean}
 */
var isWeApp = Taro__default['default'].ENV_TYPE.WEAPP === Taro__default['default'].getEnv();
/**
 * 获取 Rect
 * @returns {number}
 */
var getRectNumber = function () {
    if (isAliPay)
        return 0;
    return 1;
};
var utils = {
    model: model,
    getNowDate: getNowDate,
    rule: defaultRules
};

function ClAvatar(props) {
    var _a = __read(React.useState(props.headerArray || []), 2), headList = _a[0], setHeadList = _a[1];
    React.useEffect(function () {
        var list = props.headerArray || [];
        setHeadList(list.map(function (item) {
            item.cu_avatar_id = generateId();
            return item;
        }));
    }, [props.headerArray]);
    var onClick = function () {
        props.onClick && props.onClick();
    };
    var customSize = {
        small: 48,
        normal: 64,
        large: 96,
        xlarge: 128
    };
    var width = isNumber(props.size)
        ? Taro.pxTransform(props.size)
        : Taro.pxTransform(customSize[props.size || "normal"]);
    var height = isNumber(props.size)
        ? Taro.pxTransform(props.size)
        : Taro.pxTransform(customSize[props.size || "normal"]);
    var em = isNumber(props.size)
        ? props.size / 48
        : customSize[props.size || "normal"] / 48;
    var avatarArray = headList.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: item.cu_avatar_id || index, className: props.shape + " " + BG_COLOR_LIST[item.bgColor || "black"] + " " + (props.shadow ? "shadow" : "") + " cu-avatar", style: {
            width: width,
            height: height,
            fontSize: em + "em"
        } },
        React__default['default'].createElement(components.Image, { className: "" + props.shape, src: item.url, style: {
                width: width,
                height: height,
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }, mode: "aspectFill" }),
        React__default['default'].createElement(components.Text, { className: "cuIcon-" + item.icon }, item.text ? item.text.slice(0, 1) : ""),
        item.tag ? (React__default['default'].createElement(components.View, { className: "cu-tag badge cuIcon-" + item.tag + " " + (item.tagColor ? BG_COLOR_LIST[item.tagColor] : "") })) : (""))); });
    var avatarArrayComponent = (React__default['default'].createElement(components.View, { className: classNames("cu-avatar-group", props.className), style: Object.assign({}, props.style), onClick: function () {
            onClick();
        } }, avatarArray));
    return props.headerArray && props.headerArray.length > 1 ? (avatarArrayComponent) : (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({}, props.style), onClick: function () {
            onClick();
        } }, avatarArray));
}
ClAvatar.options = {
    addGlobalClass: true
};
ClAvatar.defaultProps = {
    size: "normal",
    shape: "radius",
    type: "normal",
    headerArray: [],
    shadow: true
};

function ClButton(props) {
    var onClick = function (e) {
        !props.disabled && props.onClick && props.onClick(e);
    };
    var onOpenSetting = function (e) {
        !props.disabled && props.onOpenSetting && props.onOpenSetting(e);
    };
    var onGetUserInfo = function (e) {
        !props.disabled && props.onGetUserInfo && props.onGetUserInfo(e);
    };
    var onContact = function (e) {
        !props.disabled && props.onContact && props.onContact(e);
    };
    var onGetPhoneNumber = function (e) {
        !props.disabled && props.onGetPhoneNumber && props.onGetPhoneNumber(e);
    };
    var onGetRealnameAuthInfo = function (e) {
        !props.disabled &&
            props.onGetRealnameAuthInfo &&
            props.onGetRealnameAuthInfo(e);
    };
    var onError = function (e) {
        !props.disabled && props.onError && props.onError(e);
    };
    var shapeClassName = props.shape || "radius";
    var sizeClassName = props.size || "normal";
    var colorClassName = props.bgColor || "blue";
    var disabledClassName = props.disabled;
    var loadingClassName = props.loading ? "cuIcon-loading iconfont-spin" : "";
    var plainClassName = props.plain;
    var plainSizeName = props.plainSize === "default" ? "line" : "lines";
    var shadowSizeName = props.shadow ? "shadow" : "";
    var buttonClassName = "cu-btn " + shapeClassName + " " + SIZE[sizeClassName] + " " + (plainClassName ? "" : BG_COLOR_LIST[colorClassName]) + " " + (plainClassName ? plainSizeName + "-" + colorClassName : "") + " " + shadowSizeName;
    var normalButton = (React__default['default'].createElement(components.Button, { "data-data": props.customData, className: classNames(buttonClassName + " " + (disabledClassName ? "disabled" : "")), 
        // disabled={disabledClassName}
        onClick: onClick.bind(this), openType: props.disabled ? undefined : props.openType, onOpenSetting: onOpenSetting, onGetUserInfo: onGetUserInfo, onContact: onContact, onGetPhoneNumber: onGetPhoneNumber, onGetRealnameAuthInfo: onGetRealnameAuthInfo, onError: onError, appParameter: props.appParameter, showMessageCard: props.showMessageCard, sessionFrom: props.sessionFrom, sendMessageTitle: props.sendMessageTitle, sendMessagePath: props.sendMessagePath, sendMessageImg: props.sendMessageImg, scope: props.scope, lang: props.lang },
        React__default['default'].createElement(components.Text, { className: loadingClassName }),
        React__default['default'].createElement(components.Text, null, props.text),
        props.children));
    var longButton = (React__default['default'].createElement(components.View, { className: classNames("flex flex-direction", props.className), style: Object.assign({}, props.style) }, normalButton));
    return props.long ? (longButton) : (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({ display: "inline-block" }, props.style) }, normalButton));
}
ClButton.options = {
    addGlobalClass: true
};
ClButton.defaultProps = {
    shape: "radius",
    size: "normal",
    bgColor: "blue",
    disabled: false,
    icon: undefined,
    loading: false,
    long: false,
    plain: false,
    plainSize: "default",
    shadow: true,
    openType: undefined,
    customData: {}
};

var SPECIAL_CLASS = {
    firstUpper: 'text-Abc',
    upper: 'text-ABC',
    lower: 'text-abc'
};
var LINE_SPACING = {
    small: 95 * screenPercent,
    normal: 115 * screenPercent,
    large: 155 * screenPercent
};
var FONT_SPACING = {
    small: 5,
    normal: 10,
    large: 20
};
function ClText(props) {
    var lineSpacing = props.lineSpacing || 'none';
    var fontSpacing = props.fontSpacing || 'none';
    var size = isNumber(props.size) ? props.size : props.size || 'normal';
    var fontSize = isNumber(size)
        ? Taro.pxTransform(size)
        : Taro.pxTransform(pxMap[size || 'normal'] * screenPercent);
    // const sizeClassName = `text-${SIZE[size === "normal" ? "df" : size]}`;
    var textColorClassName = props.textColor
        ? TEXT_COLOR_LIST[props.textColor || 'black']
        : '';
    var bgColorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor || 'white']
        : '';
    var cutClassName = props.cut ? 'text-cut' : '';
    var alignClassName = props.align ? "text-" + props.align : 'text-left';
    var specialClassName = props.special ? SPECIAL_CLASS[props.special] : '';
    return (React__default['default'].createElement(components.View, { className: classNames(textColorClassName + " " + bgColorClassName + " " + cutClassName + " " + alignClassName, props.className), style: Object.assign({
            lineHeight: lineSpacing === 'none'
                ? 'normal'
                : Taro.pxTransform(isNumber(lineSpacing)
                    ? lineSpacing
                    : LINE_SPACING[lineSpacing]),
            letterSpacing: fontSpacing === 'none'
                ? 'normal'
                : Taro.pxTransform(isNumber(fontSpacing)
                    ? fontSpacing
                    : FONT_SPACING[fontSpacing]),
            fontWeight: props.fontWeight,
            fontSize: fontSize
        }, props.style) },
        React__default['default'].createElement(components.Text, { className: classNames([
                {
                    'cl-text__wrap': props.wrap || !cutClassName
                },
                {
                    'cl-text__nowrap': !props.wrap || cutClassName
                }
            ], "" + specialClassName) },
            props.text,
            props.children)));
}
ClText.options = {
    addGlobalClass: true
};
ClText.defaultProps = {
    size: 'normal',
    textColor: undefined,
    bgColor: undefined,
    cut: false,
    align: 'left',
    special: undefined,
    text: '',
    lineSpacing: 'none',
    fontSpacing: 'none',
    fontWeight: 'normal',
    wrap: true
};

function ClCard(props) {
    var typeClassName = props.type === 'full' ? 'no-card' : '';
    var colorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor]
        : 'bg-white';
    return (React__default['default'].createElement(components.View, { className: classNames(["cu-card case " + typeClassName], props.className), style: Object.assign({}, props.style) },
        React__default['default'].createElement(components.View, { className: classNames([
                'cu-item',
                {
                    shadow: props.shadow
                },
                colorClassName,
                {
                    cu_card_active: props.active
                }
            ]) },
            props.title && props.title.text ? (React__default['default'].createElement(components.View, { className: 'cu_card__title-line padding' },
                React__default['default'].createElement(ClText, __assign({}, props.title)))) : (''),
            props.renderTitle,
            React__default['default'].createElement(components.View, { className: 'padding' }, props.children))));
}
ClCard.options = {
    addGlobalClass: true
};
ClCard.defaultProps = {
    type: 'card',
    bgColor: 'white',
    shadow: true,
    active: false,
    title: {}
};

var ClCheckboxH5 = /** @class */ (function (_super) {
    __extends(ClCheckboxH5, _super);
    function ClCheckboxH5(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list: []
        };
        return _this;
    }
    ClCheckboxH5.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.checkboxGroup !== this.props.checkboxGroup) {
            var currentCheckBox = this.props.checkboxGroup || [];
            this.setState({
                list: currentCheckBox.map(function (checkbox) {
                    var hasExit = _this.state.list.find(function (item) { return item.key === checkbox.key; });
                    return hasExit ? Object.assign(hasExit, checkbox) : checkbox;
                })
            });
        }
    };
    ClCheckboxH5.prototype.componentDidMount = function () {
        this.setState({
            list: this.props.checkboxGroup || []
        });
    };
    ClCheckboxH5.prototype.change = function () {
        var arr = this.state.list
            .filter(function (item) { return item.checked; })
            .map(function (item) { return item.value || ''; });
        this.props.onChange && this.props.onChange(arr);
    };
    ClCheckboxH5.prototype.render = function () {
        var _this = this;
        var colorClassName = this.props.color || 'green';
        var type = this.props.type === 'form' ? 'form' : '';
        var directionClassName = this.props.direction === 'horizontal' ? 'flex' : '';
        var title = this.props.title;
        var checkboxComponent = this.state.list.map(function (item) { return (React__default['default'].createElement(components.View, { className: 'padding-xs', key: item.value },
            item.key ? (React__default['default'].createElement(components.Text, { className: 'padding-right-sm', style: {
                    lineHeight: "" + Taro.pxTransform(46),
                    display: 'inline-block',
                    verticalAlign: 'text-bottom'
                } }, item.key)) : (''),
            React__default['default'].createElement(components.View, { className: classNames([
                    'h5-checkbox-input',
                    {
                        round: _this.props.shape,
                        checked: item.checked,
                        disabled: item.disabled,
                        more: _this.props.more
                    }
                ]), onClick: function () {
                    if (!item.disabled) {
                        var checkItem = _this.state.list &&
                            _this.state.list.find(function (has) { return has.value === item.value; });
                        if (checkItem)
                            checkItem.checked = !item.checked;
                        _this.setState({
                            list: __spread(_this.state.list)
                        });
                        _this.change();
                    }
                } }))); });
        var formComponent = (React__default['default'].createElement(components.View, { className: 'cu-form-group' },
            React__default['default'].createElement(components.View, { className: 'title' }, title),
            React__default['default'].createElement(components.View, { className: directionClassName }, checkboxComponent)));
        return (React__default['default'].createElement(components.View, { className: "h5-checkbox " + colorClassName }, type === 'form' ? formComponent : checkboxComponent));
    };
    ClCheckboxH5.options = {
        addGlobalClass: true
    };
    ClCheckboxH5.defaultProps = {
        color: 'green',
        type: 'normal',
        shape: 'normal',
        direction: 'vertical',
        checkboxGroup: [],
        title: ''
    };
    return ClCheckboxH5;
}(React.Component));

function ClCheckbox(props) {
    var colorClassName = props.color || "green";
    var type = props.type === "form" ? "form" : "";
    var shapeClassName = props.shape === "round" ? "round" : "";
    var directionClassName = props.direction === "horizontal" ? "flex" : "";
    var list = props.checkboxGroup ? props.checkboxGroup : [];
    var title = props.title;
    var checkboxComponent = list.map(function (item) { return (React__default['default'].createElement(components.View, { className: "padding-xs", key: item.value },
        item.key ? React__default['default'].createElement(components.Text, { className: "padding-right-sm" }, item.key) : "",
        React__default['default'].createElement(components.Checkbox, { className: classNames([
                colorClassName,
                shapeClassName,
                {
                    more: props.more
                }
            ]), value: item.value || "", checked: item.checked, disabled: item.disabled }))); });
    var formComponent = (React__default['default'].createElement(components.View, { className: "cu-form-group" },
        React__default['default'].createElement(components.View, { className: "title" }, title),
        React__default['default'].createElement(components.View, { className: directionClassName }, checkboxComponent)));
    var change = function (e) {
        props.onChange && props.onChange(e.detail.value);
    };
    var component = !isWeApp ? (React__default['default'].createElement(ClCheckboxH5, __assign({}, props))) : (React__default['default'].createElement(components.CheckboxGroup, { className: "" + (type === "form" ? "block" : ""), onChange: change }, type === "form" ? (formComponent) : (React__default['default'].createElement(components.View, { className: directionClassName }, checkboxComponent))));
    return (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({}, props.style) }, component));
}
ClCheckbox.options = {
    addGlobalClass: true
};

function ClDrawer(props) {
    var _a = __read(React.useState(props.show), 2), showModal = _a[0], setShowModal = _a[1];
    React.useMemo(function () {
        setShowModal(props.show);
    }, [props.show]);
    var hideModal = function () {
        props.closeWithShadow && setShowModal(false);
        props.onCancel && props.onCancel();
    };
    var leftComponent = (React__default['default'].createElement(components.View, { className: classNames("cu-modal drawer-modal justify-start " + (showModal ? 'show' : ''), props.className), style: Object.assign({}, props.style), onClick: function (e) {
            hideModal();
            e.stopPropagation();
        } },
        React__default['default'].createElement(components.View, { className: 'cu-dialog basis-lg', onClick: function (e) {
                e.stopPropagation();
            }, style: { height: '100vh' } }, props.children)));
    var rightComponent = (React__default['default'].createElement(components.View, { className: classNames("cu-modal drawer-modal justify-end " + (showModal ? 'show' : ''), props.className), style: Object.assign({}, props.style), onClick: function (e) {
            hideModal();
            e.stopPropagation();
        } },
        React__default['default'].createElement(components.View, { className: 'cu-dialog basis-lg', onClick: function (e) {
                e.stopPropagation();
            }, style: { height: '100vh' } }, props.children)));
    var bottomComponent = (React__default['default'].createElement(components.View, { className: classNames("cu-modal bottom-modal " + (showModal ? 'show' : ''), props.className), style: Object.assign({}, props.style), onClick: function (e) {
            hideModal();
            e.stopPropagation();
        } },
        React__default['default'].createElement(components.View, { className: 'cu-dialog', style: { maxHeight: '70vh' }, onClick: function (e) {
                e.stopPropagation();
            } }, props.children)));
    return props.direction === 'left'
        ? leftComponent
        : props.direction === 'right'
            ? rightComponent
            : bottomComponent;
}
ClDrawer.options = {
    addGlobalClass: true
};

function ClIcon(props) {
    var iconName = props.iconName || '';
    var iconNameClass = "cuIcon-" + props.iconName;
    if (props.other) {
        iconNameClass = iconName;
    }
    var sizeClassName = props.size || 'normal';
    var bgColorClassName = props.color ? "text-" + props.color : '';
    return (React__default['default'].createElement(components.Text, { className: classNames(bgColorClassName + " " + iconNameClass, props.className), style: Object.assign({
            fontSize: "" + (isNumber(sizeClassName)
                ? Taro.pxTransform(sizeClassName)
                : Taro.pxTransform(pxMap[sizeClassName]))
        }, props.style) }));
}
ClIcon.options = {
    addGlobalClass: true
};

/**
 * flex 问题
 * 浮动比例
 * flex-sub==>1, flex-twice==>2, flex-treble==>3
 */
function ClFlex(props) {
    var warpClassName = props.wrap ? 'flex-wrap' : '';
    var justifyClassName = props.justify ? "justify-" + props.justify : '';
    var alignClassName = props.align ? "align-" + props.align : '';
    var directionClassName = props.direction
        ? "flex-direction-" + props.direction
        : '';
    var flexComponent = (React__default['default'].createElement(components.View, { className: classNames("flex " + warpClassName + " " + justifyClassName + " " + alignClassName + " " + directionClassName, props.className), style: Object.assign({}, props.style) }, props.children));
    return flexComponent;
}
ClFlex.options = {
    addGlobalClass: true
};
ClFlex.defaultProps = {
    justify: 'start',
    align: 'start',
    direction: 'row',
    wrap: false
};

/**
 * 基础比例
 * basis-xs, basis-df, basis-lg, basis-xl
 */
function ClLayout(props) {
    var floatClassName = function () {
        if (props.float === 'left')
            return 'fl';
        if (props.float === 'right')
            return 'fr';
        return '';
    };
    var dealDirection = function (direction) {
        var dr;
        switch (direction) {
            case 'around': {
                dr = '';
                break;
            }
            case 'horizontal': {
                dr = '-lr';
                break;
            }
            case 'vertical': {
                dr = '-tb';
                break;
            }
            default: {
                dr = direction ? "-" + direction : '';
            }
        }
        return dr;
    };
    var dealSize = function (size) {
        if (!size || size === 'normal')
            return '';
        else
            return "-" + SIZE[size];
    };
    var paddingClassName = function () {
        var paddingDirection = props.paddingDirection;
        var size = props.padding;
        return "" + ((size ? 'padding' : '') + dealDirection(paddingDirection) + dealSize(size));
    };
    var marginClassName = function () {
        var marginDirection = props.marginDirection;
        var size = props.margin;
        return "" + ((size ? 'margin' : '') + dealDirection(marginDirection) + dealSize(size));
    };
    var normalComponent = (React__default['default'].createElement(components.View, { className: classNames(floatClassName() + " " + (props.padding ? paddingClassName() : '') + " " + (props.margin ? marginClassName() : ''), props.className), style: Object.assign({}, props.style) }, props.children));
    return normalComponent;
}
ClLayout.options = {
    addGlobalClass: true
};

function ClSearchResult(props) {
    var _a = __read(React.useState(props.result || []), 2), resultState = _a[0], setResultState = _a[1];
    React.useEffect(function () {
        var list = props.result || [];
        setResultState(list.map(function (item) {
            item.cu_search_bar_result_id = generateId();
            return item;
        }));
    }, [props.result]);
    var result = resultState || [];
    var showLoading = props.showLoading;
    var onTouchResult = props.onTouchResult;
    var resultComponent = result.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: 'key-' + index, className: 'cl_search_result solid-bottom', onClick: function () {
            onTouchResult(index);
        } },
        React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
            React__default['default'].createElement(ClText, { text: item.title, size: 'large' }),
            React__default['default'].createElement(ClText, { text: item.desc, size: 'xsmall', cut: true })))); });
    var loadingComponent = (React__default['default'].createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
        React__default['default'].createElement(components.View, { className: 'cl_search_loading' },
            React__default['default'].createElement(ClIcon, { iconName: 'loading2' }))));
    return (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({ width: '100%' }, props.style) },
        React__default['default'].createElement(ClFlex, { direction: 'column', align: 'center', justify: 'center' }, showLoading ? loadingComponent : resultComponent)));
}
ClSearchResult.options = {
    addGlobalClass: true
};

function ClInput(props) {
    var _a = __read(React.useState(false), 2), focus = _a[0], setFocus = _a[1];
    var _b = __read(React.useState(), 2), normalType = _b[0], setNormalType = _b[1];
    var _c = __read(React.useState(""), 2), tempInput = _c[0], setTempInput = _c[1];
    var _d = __read(React.useState(props.value), 2), initValue = _d[0], setInitValue = _d[1];
    var _e = __read(React.useState("cl-input-" + +new Date()), 1), inputId = _e[0];
    var _f = __read(React.useState("0px"), 2), materialWidth = _f[0], setMaterialWidth = _f[1];
    var _g = __read(React.useState(props.defaultValue), 2), defaultValue = _g[0], setDefaultValue = _g[1];
    var _h = __read(React.useState(false), 2), showComplete = _h[0], setShowComplete = _h[1];
    var _j = __read(React.useState(true), 2), firstInit = _j[0], setFirstInit = _j[1];
    var inputRef = React.useRef();
    React.useMemo(function () {
        if (props.defaultValue !== "" && defaultValue === "") {
            setDefaultValue(defaultValue);
        }
    }, [props.defaultValue]);
    var isH5 = Taro__default['default'].ENV_TYPE.WEB === Taro__default['default'].getEnv();
    var onChange = function (event) {
        setFirstInit(false);
        var input = event.detail.value;
        setInitValue(input);
        props.autoComplete && setShowComplete(true);
        if (props.type === "number") {
            if (Taro__default['default'].ENV_TYPE.WEB === Taro__default['default'].getEnv()) {
                if (!isNaN(event.data - 0)) {
                    if (event.data === null) {
                        input = tempInput.slice(0, tempInput.length - 1);
                    }
                    else {
                        input = tempInput + parseInt("" + (event.data - 0));
                    }
                }
                else {
                    input = tempInput;
                }
                setTempInput(input);
                setTimeout(function () {
                    setInitValue(input);
                });
            }
            else {
                input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
                if (input !== null) {
                    setTempInput(input);
                    setInitValue(input);
                }
                else {
                    setTimeout(function () {
                        setInitValue(tempInput);
                    });
                }
            }
        }
        else if (props.type === "digit") {
            if (Taro__default['default'].ENV_TYPE.WEB === Taro__default['default'].getEnv()) {
                if (!isNaN(event.data - 0)) {
                    if (event.data === null) {
                        input = tempInput.slice(0, tempInput.length - 1);
                    }
                    else {
                        input = tempInput + parseInt("" + (event.data - 0));
                    }
                }
                else {
                    input =
                        event.data === "." && tempInput.indexOf(".") === -1
                            ? tempInput + event.data
                            : tempInput;
                }
                setTempInput(input);
                setTimeout(function () {
                    setInitValue(input);
                });
            }
            else {
                input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
                if (input !== null) {
                    setTempInput(input);
                    setInitValue(input);
                }
                else {
                    setTimeout(function () {
                        setInitValue(tempInput);
                    });
                }
            }
        }
        else {
            setInitValue(input);
        }
        props.onChange && props.onChange(input);
    };
    var onBlur = function (event) {
        setFocus(false);
        props.onBlur && props.onBlur(event.detail.value);
    };
    var onFocus = function (event) {
        setFocus(true);
        props.onFocus && props.onFocus(event.detail.value);
    };
    var onIconClick = function (event) {
        props.onIconClick && props.onIconClick(event);
    };
    var onImageClick = function (event) {
        props.onImageClick && props.onImageClick(event);
    };
    if (props.type !== "password") {
        if (props.type !== normalType) {
            setNormalType(props.type);
        }
    }
    var iconComponent = props.icon ? (React__default['default'].createElement(components.View, { onClick: onIconClick },
        React__default['default'].createElement(ClIcon, __assign({}, props.icon)))) : ("");
    var buttonComponent = props.button ? React__default['default'].createElement(ClButton, __assign({}, props.button)) : "";
    var imageComponent = props.image ? (React__default['default'].createElement(components.View, { onClick: onImageClick, style: {} },
        React__default['default'].createElement(components.Image, { src: props.image || "", mode: "aspectFit", style: {
                maxWidth: Taro__default['default'].pxTransform(100),
                maxHeight: Taro__default['default'].pxTransform(100),
            } }))) : ("");
    var autoCompleteComponent = props.autoComplete ? (React__default['default'].createElement(components.View, { style: {
            position: "absolute",
            top: Taro.pxTransform(100),
            left: Taro.pxTransform(0),
            width: "100%",
            display: showComplete ? "" : "none",
        } },
        React__default['default'].createElement(ClCard, { shadow: false, type: "full" },
            React__default['default'].createElement(components.ScrollView, { scrollY: true, style: { maxHeight: "300px" } },
                React__default['default'].createElement(ClSearchResult, { showLoading: props.completeLoading, result: props.completes
                        ? props.completes.map(function (str) { return ({
                            title: str,
                        }); })
                        : [], onTouchResult: function (index) {
                        if (props.completes) {
                            setInitValue(props.completes[index]);
                            setTempInput(props.completes[index]);
                            props.onTouchResult &&
                                props.onTouchResult(props.completes[index], index);
                        }
                        setShowComplete(false);
                    } }))))) : ("");
    var title = props.title, placeholder = props.placeholder, value = props.value, adjustPosition = props.adjustPosition, type = props.type, maxLength = props.maxLength, disabled = props.disabled, renderCustomRight = props.renderCustomRight, autoFocus = props.autoFocus;
    var titleWidth = props.titleWidth === "auto"
        ? {}
        : {
            width: Taro.pxTransform(props.titleWidth || 200),
        };
    React.useMemo(function () {
        setInitValue(value);
    }, [props.value]);
    var initTitle = function () {
        if (props.pattern === "material") {
            if (isH5) {
                var content = document.querySelector("#" + inputId);
                var width = content.clientWidth;
                setMaterialWidth(Taro.pxTransform(width / screenPercent));
            }
            else {
                var query = Taro__default['default'].createSelectorQuery();
                var view = query.select("#" + inputId);
                view.boundingClientRect().exec(function (res) {
                    var data = res[0];
                    setMaterialWidth(Taro.pxTransform((data === null || data === void 0 ? void 0 : data.width) / screenPercent));
                });
            }
        }
    };
    React.useEffect(function () {
        initTitle();
    }, [props.title, props.pattern]);
    Taro.useReady(function () {
        initTitle();
    });
    var renderMaterialTitle = (React__default['default'].createElement(components.View, { className: "" + (focus || initValue ? "materialFocus" : "materialBlur"), style: titleWidth, id: inputId, ref: inputRef }, title));
    var normalTitle = (React__default['default'].createElement(components.View, { className: "title", style: titleWidth }, title));
    return (React__default['default'].createElement(components.View, { className: classNames("cu-form-group " + (focus ? "focus" : "blur"), props.className), style: Object.assign({ position: "relative" }, props.style) },
        title && props.pattern === "normal" ? normalTitle : null,
        title && props.pattern === "material" ? renderMaterialTitle : null,
        React__default['default'].createElement(components.View, { style: {
                position: "relative",
                display: "flex",
                width: "100%",
                alignItems: "center",
                flex: 1,
            } },
            React__default['default'].createElement(components.Input, { autoFocus: autoFocus, placeholder: placeholder, value: firstInit && defaultValue ? defaultValue : initValue, onInput: onChange, onBlur: onBlur, onFocus: onFocus, adjustPosition: adjustPosition, type: normalType, password: type === "password", maxlength: maxLength || -1, disabled: disabled, style: {
                    textAlign: props.align === "none" ? undefined : props.align,
                    flex: "1 0 auto",
                    paddingLeft: "" + (props.pattern === "material" && !(focus || initValue)
                        ? materialWidth
                        : 0),
                    paddingRight: props.clear ? Taro.pxTransform(60) : "",
                } }),
            React__default['default'].createElement(components.View, { style: {
                    position: "absolute",
                    right: 0,
                    display: props.clear && initValue !== "" && !firstInit
                        ? "relative"
                        : "none",
                }, onClick: function (e) {
                    e.stopPropagation();
                    setInitValue("");
                } },
                React__default['default'].createElement(ClIcon, { iconName: "roundclosefill", size: "xsmall", color: "gray" }))),
        iconComponent,
        buttonComponent,
        imageComponent,
        renderCustomRight,
        autoCompleteComponent));
}
ClInput.options = {
    addGlobalClass: true,
};
ClInput.defaultProps = {
    autoFocus: false,
    titleWidth: "auto",
    align: "left",
    pattern: "normal",
    value: undefined,
    placeholder: "",
    type: "text",
    adjustPosition: true,
    defaultValue: "",
    completeLoading: false,
    completes: [],
    autoComplete: false,
    onTouchResult: function () { },
};

function ClLoading(props) {
    var _a = __read(React.useState(0), 2), loadProgress = _a[0], setLoadProgress = _a[1];
    var loadProgressFn = function () {
        setLoadProgress(100);
    };
    var contentViewStyle = { position: props.content ? "relative" : "inherit" };
    var contentLoadingStyle = {
        display: props.show ? "flex" : "none",
        flexDirection: "column",
        position: props.content ? "absolute" : "fixed",
        width: props.content ? "100%" : "100vw",
        height: props.content ? "100%" : "100vh",
    };
    React.useEffect(function () {
        if (props.show) {
            loadProgressFn();
        }
    }, []);
    React.useEffect(function () {
        if (props.show)
            loadProgressFn();
        else {
            setLoadProgress(0);
        }
    }, [props.show]);
    var bgColorClassName = function () {
        return props.bgColor ? BG_COLOR_LIST[props.bgColor] : "bg-blue";
    };
    var commonComponent = (React__default['default'].createElement(components.View, { style: Object.assign(contentViewStyle) },
        props.children,
        React__default['default'].createElement(components.View, { className: "cu-load load-image", style: Object.assign(contentLoadingStyle), onClick: function (e) {
                e.stopPropagation();
            } },
            React__default['default'].createElement(components.View, { style: {
                    animationIterationCount: "infinite",
                    animationTimingFunction: "linear",
                    animationDuration: "0.5s",
                    animationName: "rotate-0-360",
                } },
                React__default['default'].createElement(components.Text, { className: classNames([
                        "cuIcon-loading1",
                        "text-white",
                        "text-xxl",
                    ]), style: {
                        fontSize: Taro.pxTransform(44),
                    } })),
            React__default['default'].createElement(ClText, { textColor: "white", text: props.commonText, size: "xsmall" }))));
    var modalComponent = (React__default['default'].createElement(components.View, { className: "cu-load load-modal", onClick: function (e) {
            e.stopPropagation();
        } },
        React__default['default'].createElement(components.Image, { src: props.imgUrl || "", mode: "aspectFit" }),
        React__default['default'].createElement(components.Text, { className: "text-gray" }, props.modalText)));
    var imageComponent = (React__default['default'].createElement(components.View, { style: Object.assign(contentViewStyle) },
        React__default['default'].createElement(components.View, { className: "cu-load load-image", style: Object.assign(contentLoadingStyle) },
            React__default['default'].createElement(components.Image, { src: props.imgUrl || "", mode: "widthFix", style: {
                    width: props.imgWidth ? Taro.pxTransform(props.imgWidth) : "",
                } })),
        props.children));
    var lineComponent = (React__default['default'].createElement(components.View, { className: "cu-load " + (props.loadingError ? "bg-red erro" : bgColorClassName()) + " " + (props.noMore || props.loadingError ? "over" : "loading") }));
    var barComponent = (React__default['default'].createElement(components.View, { style: Object.assign(contentViewStyle) },
        React__default['default'].createElement(components.View, { className: classNames("load-progress " + (props.show ? "show" : "hide"), props.className), style: Object.assign({ top: "0" }, contentLoadingStyle, props.style) },
            React__default['default'].createElement(components.View, { className: "load-progress-bar " + bgColorClassName(), style: {
                    transform: "translate3d(-" + (100 - loadProgress) + "%, 0px, 0px)",
                    transition: "all 5s ease 0s",
                } }),
            React__default['default'].createElement(components.View, { className: "load-progress-spinner text-" + props.bgColor })),
        props.children));
    var renderLoading = function () {
        var renderContent = function () {
            if (props.type === "bar")
                return barComponent;
            if (props.type === "line")
                return lineComponent;
            if (props.type === "modal")
                return modalComponent;
            if (props.type === "image")
                return imageComponent;
            return commonComponent;
        };
        return props.content || props.show ? renderContent() : null;
    };
    return renderLoading();
}
ClLoading.options = {
    addGlobalClass: true,
};
ClLoading.defaultProps = {
    type: "bar",
    bgColor: "blue",
    modalText: "加载中...",
    loadingError: false,
    noMore: false,
    show: false,
};

function ClMenuList(props) {
    var shortLineClassName = props.shortBorder ? 'sm-border' : '';
    var cardClassName = props.card ? 'card-menu' : '';
    var list = props.list || [];
    var click = function (index) {
        props.onClick && props.onClick(index);
    };
    var itemComponent = list.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: item.title, className: classNames([
            'cu-item',
            {
                arrow: !!item.arrow,
                disabled: item.disabled
            }
        ]), onClick: function () {
            !item.disabled && click(index);
        } },
        React__default['default'].createElement(components.View, { className: 'content flex justify-between' },
            React__default['default'].createElement(components.View, { className: 'content flex align-center' },
                item.icon && item.icon.iconName ? (React__default['default'].createElement(components.View, { className: 'margin-right-xs flex align-center' },
                    React__default['default'].createElement(ClIcon, __assign({}, item.icon)))) : (''),
                item.imgUrl ? (React__default['default'].createElement(components.Image, { src: item.imgUrl, className: 'png margin-right-xs', mode: 'aspectFit' })) : (''),
                React__default['default'].createElement(components.Text, { className: "" + TEXT_COLOR_LIST[item.titleColor || 'black'] }, item.title)),
            React__default['default'].createElement(components.View, { className: 'flex align-center' }, item.value)))); });
    return (React__default['default'].createElement(components.View, { className: classNames("cu-list menu " + shortLineClassName + " " + cardClassName, props.className), style: Object.assign({}, props.style) }, itemComponent));
}
ClMenuList.defaultProps = {
    shortBorder: false,
    card: false,
    list: []
};
ClMenuList.options = {
    addGlobalClass: true
};

var ClModal = /** @class */ (function (_super) {
    __extends(ClModal, _super);
    function ClModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showModal: _this.props.show
        };
        return _this;
    }
    ClModal.prototype.componentWillReceiveProps = function (nextProps) {
        var show = nextProps.show;
        if (show !== this.state.showModal) {
            this.setState({
                showModal: show
            });
        }
    };
    ClModal.prototype.render = function () {
        var _this = this;
        var titleBgColorClassName = this.props.titleBgColor
            ? BG_COLOR_LIST[this.props.titleBgColor]
            : '';
        var actionColor = this.props.actionColor
            ? BG_COLOR_LIST[this.props.actionColor]
            : '';
        var title = this.props.title;
        var actions = this.props.actions || [];
        var onClick = function (index) {
            _this.props.onClick && _this.props.onClick(index);
        };
        var actionsComponent = actions.map(function (item, index) { return (React__default['default'].createElement(components.View, { className: (index > 0 ? 'solid-left' : '') + " action margin-0 flex-sub", key: 'key-' + item.text, onClick: function () {
                onClick(index);
            } },
            React__default['default'].createElement(components.Text, { className: "" + (item.color ? TEXT_COLOR_LIST[item.color] : '') }, item.text))); });
        var dealSize = function (size) {
            if (!size || size === 'normal')
                return '';
            else
                return "-" + SIZE[size];
        };
        return (React__default['default'].createElement(components.View, { className: classNames("cu-modal " + (this.state.showModal ? 'show' : ''), this.props.className), style: Object.assign({}, this.props.style), onClick: function () {
                _this.props.closeWithShadow &&
                    _this.setState({
                        showModal: false
                    });
                _this.props.onCancel && _this.props.onCancel();
            } },
            React__default['default'].createElement(components.View, { className: 'cu-dialog', onClick: function (e) {
                    e.stopPropagation();
                } },
                this.props.custom ? (this.props.renderTitle) : (React__default['default'].createElement(components.View, { className: "cu-bar justify-end " + titleBgColorClassName },
                    React__default['default'].createElement(components.View, { className: 'content' }, title),
                    this.props.close ? (React__default['default'].createElement(components.View, { className: 'action', onClick: function () {
                            _this.setState({
                                showModal: false
                            });
                            _this.props.onClose && _this.props.onClose();
                        } },
                        React__default['default'].createElement(components.Text, { className: 'cuIcon-close text-black' }))) : (''))),
                React__default['default'].createElement(components.View, { className: "padding" + dealSize(this.props.padding) }, this.props.children),
                this.props.custom ? (this.props.renderAction) : (React__default['default'].createElement(components.View, { className: "cu-bar " + actionColor }, actionsComponent)))));
    };
    ClModal.options = {
        addGlobalClass: true
    };
    return ClModal;
}(React.Component));

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.14.0";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});
var react_development_1 = react_development.Children;
var react_development_2 = react_development.Component;
var react_development_3 = react_development.Fragment;
var react_development_4 = react_development.Profiler;
var react_development_5 = react_development.PureComponent;
var react_development_6 = react_development.StrictMode;
var react_development_7 = react_development.Suspense;
var react_development_8 = react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_development_9 = react_development.cloneElement;
var react_development_10 = react_development.createContext;
var react_development_11 = react_development.createElement;
var react_development_12 = react_development.createFactory;
var react_development_13 = react_development.createRef;
var react_development_14 = react_development.forwardRef;
var react_development_15 = react_development.isValidElement;
var react_development_16 = react_development.lazy;
var react_development_17 = react_development.memo;
var react_development_18 = react_development.useCallback;
var react_development_19 = react_development.useContext;
var react_development_20 = react_development.useDebugValue;
var react_development_21 = react_development.useEffect;
var react_development_22 = react_development.useImperativeHandle;
var react_development_23 = react_development.useLayoutEffect;
var react_development_24 = react_development.useMemo;
var react_development_25 = react_development.useReducer;
var react_development_26 = react_development.useRef;
var react_development_27 = react_development.useState;
var react_development_28 = react_development.version;

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

var ClNavBar = /** @class */ (function (_super) {
    __extends(ClNavBar, _super);
    function ClNavBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClNavBar.prototype.onClickLeftIcon = function (index) {
        this.props.onClickLeftIcon && this.props.onClickLeftIcon(index);
    };
    ClNavBar.prototype.onClickRightIcon = function (index) {
        this.props.onClickRightIcon && this.props.onClickRightIcon(index);
    };
    ClNavBar.prototype.render = function () {
        var _this = this;
        var bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : 'bg-white';
        var leftComponent = this.props.leftIcon &&
            this.props.leftIcon.map(function (item, index) { return (react.createElement(components.Block, { key: index },
                react.createElement(components.Text, { className: (item.icon ? 'cuIcon-' + item.icon : '') + " " + (item.color ? TEXT_COLOR_LIST[item.color] : ''), onClick: _this.onClickLeftIcon.bind(_this, index) }),
                react.createElement(components.Text, { className: "" + (item.color ? TEXT_COLOR_LIST[item.color] : ''), onClick: _this.onClickLeftIcon.bind(_this, index) }, item.text))); });
        var rightComponent = this.props.rightIcon &&
            this.props.rightIcon.map(function (item, index) { return (react.createElement(components.Block, { key: index },
                react.createElement(components.Text, { className: (item.icon ? 'cuIcon-' + item.icon : '') + " " + (item.color ? TEXT_COLOR_LIST[item.color] : ''), onClick: _this.onClickRightIcon.bind(_this, index) }))); });
        return (react.createElement(components.View, { className: classNames("cu-bar " + bgColorClassName, this.props.className), style: Object.assign({}, this.props.style) },
            react.createElement(components.View, { className: 'action' }, leftComponent),
            react.createElement(components.View, { className: 'content text-bold' }, this.props.title),
            react.createElement(components.View, { className: 'action' }, rightComponent)));
    };
    ClNavBar.options = {
        addGlobalClass: true
    };
    ClNavBar.defaultProps = {
        title: '',
        leftIcon: [],
        rightIcon: [],
        bgColor: 'white'
    };
    return ClNavBar;
}(react.Component));

var ClProgress = /** @class */ (function (_super) {
    __extends(ClProgress, _super);
    function ClProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClProgress.prototype.render = function () {
        var _this = this;
        var shapeClassName = function () {
            return _this.props.shape
                ? _this.props.shape === 'normal'
                    ? ''
                    : _this.props.shape
                : '';
        };
        var bgColorClassName = function () {
            return _this.props.bgColor ? BG_COLOR_LIST[_this.props.bgColor] : 'bg-blue';
        };
        var sizeClassName = function () { return (_this.props.size ? SIZE[_this.props.size] : ''); };
        var stripeClassName = function () { return (_this.props.stripe ? 'striped' : ''); };
        var animationClassName = function () { return (_this.props.animation ? 'active' : ''); };
        return (React__default['default'].createElement(components.View, { className: classNames("cu-progress " + shapeClassName() + " " + sizeClassName() + " " + stripeClassName() + " " + animationClassName(), this.props.className), style: Object.assign({}, this.props.style) },
            React__default['default'].createElement(components.View, { className: "" + bgColorClassName(), style: { width: this.props.percent + "%" } })));
    };
    ClProgress.options = {
        addGlobalClass: true
    };
    ClProgress.defaultProps = {
        shape: 'normal',
        bgColor: 'blue',
        size: 'normal',
        stripe: false,
        animation: false,
        percent: 0
    };
    return ClProgress;
}(React.Component));

function ListRadio(props) {
    var _a = __read(React.useState(props.list || []), 2), listState = _a[0], setListState = _a[1];
    React.useEffect(function () {
        var list = props.list || [];
        setListState(list.map(function (item) {
            item.cu_radio_list_id = generateId();
            return item;
        }));
    }, [props.list]);
    var list = listState || [];
    var checkedValue = props.checkedValue;
    var _b = __read(React.useState(checkedValue), 2), checked = _b[0], setChecked = _b[1];
    var listComponent = list.map(function (item) { return (React__default['default'].createElement(components.View, { key: item.cu_radio_list_id, className: classNames([
            'cu-item',
            {
                checked: checked === item.value,
                disabled: props.disabled
            }
        ]), onClick: function () {
            if (!props.disabled) {
                setChecked(item.value || '');
                props.onChange && props.onChange(item.value);
            }
        } },
        React__default['default'].createElement(components.View, { className: 'content flex align-center' },
            React__default['default'].createElement(components.Text, null, item.key)))); });
    return React__default['default'].createElement(components.View, { className: "cu-list menu" }, listComponent);
}
ListRadio.defaultProps = {
    list: [],
    checkedValue: '',
    onChange: function () { },
    disabled: false
};
ListRadio.options = {
    addGlobalClass: true
};

function RadioH5(props) {
    var type = props.type || 'normal';
    var shapeClassName = props.shape || 'normal';
    var title = props.title || '';
    var colorClassName = props.color || 'green';
    var directionClassName = props.direction === 'horizontal' ? 'flex' : '';
    var list = props.radioGroup || [];
    var _a = __read(React.useState(props.checkedValue), 2), activeValue = _a[0], setActiveValue = _a[1];
    var clickRadio = function (name) {
        setActiveValue(name);
    };
    React.useEffect(function () {
        props.onChange && props.onChange(activeValue);
    }, [activeValue]);
    var radioComponent = list.map(function (item) { return (React__default['default'].createElement(components.View, { className: 'padding-xs', key: item.value },
        React__default['default'].createElement(components.Text, { className: 'padding-right-sm' }, item.key),
        React__default['default'].createElement(components.View, { onClick: function () {
                if (!props.disabled) {
                    clickRadio(item.value);
                }
            }, className: classNames([
                'h5-radio',
                colorClassName,
                shapeClassName,
                {
                    checked: activeValue === item.value,
                    disabled: props.disabled
                }
            ]) },
            React__default['default'].createElement(components.View, { className: 'h5-radio-wrapper' },
                React__default['default'].createElement(components.View, { className: 'h5-radio-input h5-radio-input-checked' }))))); });
    var formRadioComponent = (React__default['default'].createElement(components.View, { className: 'cu-form-group' },
        React__default['default'].createElement(components.View, { className: 'title' }, title),
        React__default['default'].createElement(components.View, { className: directionClassName }, radioComponent)));
    var renderListComponent = function () { return (React__default['default'].createElement(ListRadio, { onChange: function (value) {
            setActiveValue(value);
        }, list: list, checkedValue: activeValue, disabled: props.disabled })); };
    var formOrNormalComponent = (React__default['default'].createElement(components.View, { className: 'h5-radio-group' }, type === 'form' ? (formRadioComponent) : (React__default['default'].createElement(components.View, { className: directionClassName }, radioComponent))));
    var weappComponent = type === 'list' ? renderListComponent() : formOrNormalComponent;
    return React__default['default'].createElement(components.View, null, weappComponent);
}
RadioH5.defaultProps = {
    type: 'normal',
    shape: 'normal',
    title: '',
    colorClassName: 'green',
    directionClassName: '',
    radioGroup: []
};
RadioH5.options = {
    addGlobalClass: true
};

function ClRadio(props) {
    var type = props.type || 'normal';
    var shapeClassName = function () { return props.shape || 'normal'; };
    var title = props.title || '';
    var colorClassName = function () { return props.color || 'green'; };
    var directionClassName = props.direction === 'horizontal' ? 'flex' : '';
    var list = props.radioGroup || [];
    var _a = __read(React.useState(props.checkedValue), 2), checkedValue = _a[0], setCheckedValue = _a[1];
    React.useEffect(function () {
        setCheckedValue(checkedValue);
    }, [props.checkedValue]);
    var changeRadio = function (e) {
        props.onChange && props.onChange(e.detail.value);
    };
    var radioComponent = list.map(function (item) { return (React__default['default'].createElement(components.View, { className: 'padding-xs', key: 'radio-' + item.value, onClick: function () {
            !props.disabled && setCheckedValue(item.value);
        } },
        React__default['default'].createElement(components.Text, { className: 'padding-right-sm' }, item.key),
        React__default['default'].createElement(components.Radio, { className: colorClassName() + " " + shapeClassName(), checked: item.value === checkedValue, value: item.value || '', disabled: props.disabled }))); });
    var formRadioComponent = (React__default['default'].createElement(components.View, { className: 'cu-form-group' },
        React__default['default'].createElement(components.View, { className: 'title' }, title),
        React__default['default'].createElement(components.View, { className: directionClassName }, radioComponent)));
    var renderListComponent = function () { return (React__default['default'].createElement(ListRadio, { onChange: function (value) {
            changeRadio({ detail: { value: value } });
        }, list: list, checkedValue: props.checkedValue, disabled: props.disabled })); };
    var formOrNormalComponent = (React__default['default'].createElement(components.RadioGroup, { onChange: changeRadio, className: "" + (type === 'form' ? 'block' : '') }, type === 'form' ? (formRadioComponent) : (React__default['default'].createElement(components.View, { className: directionClassName }, radioComponent))));
    var weappComponent = type === 'list' ? renderListComponent() : formOrNormalComponent;
    var RadioComponent = !isWeApp ? React__default['default'].createElement(RadioH5, __assign({}, props)) : weappComponent;
    return (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({}, props.style) }, RadioComponent));
}
ClRadio.defaultProps = {
    type: 'normal',
    shape: 'normal',
    title: '',
    colorClassName: 'green',
    directionClassName: '',
    radioGroup: []
};
ClRadio.options = {
    addGlobalClass: true
};

function ClScreenDrawer(props) {
    var hideModal = function () {
        props.onHide && props.onHide();
    };
    return (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({}, props.style) },
        React__default['default'].createElement(components.ScrollView, { scrollY: true, className: "DrawerPage " + (props.show ? 'show' : '') }, props.renderPage),
        React__default['default'].createElement(components.View, { className: "DrawerClose " + (props.show ? 'show' : ''), onClick: hideModal },
            React__default['default'].createElement(components.Text, { className: 'cuIcon-pullright' })),
        React__default['default'].createElement(components.ScrollView, { scrollY: true, className: "DrawerWindow " + (props.show ? 'show' : '') }, props.renderDrawer)));
}
ClScreenDrawer.options = {
    addGlobalClass: true
};

var index = (function (props) {
    var _a = __read(React.useState(false), 2), showSearch = _a[0], setShowSearch = _a[1];
    var _b = __read(React.useState(''), 2), value = _b[0], setValue = _b[1];
    var onIconClick = function (index) {
        props.onIconClick && props.onIconClick(index);
    };
    var onSearch = function (e) {
        e.stopPropagation();
        props.onSearch && props.onSearch(value || '');
    };
    var onFocus = function (e) {
        props.onFocus && props.onFocus(value || '');
        setShowSearch(true);
        setValue(e.detail.value);
    };
    var onBlur = function (e) {
        props.onBlur && props.onBlur(value || '');
        setShowSearch(false);
        setValue(e.detail.value);
    };
    var onInput = function (e) {
        setValue(e.detail.value);
        props.onInput && props.onInput(e.detail.value);
    };
    var onPreventProp = function (e) {
        e.stopPropagation();
    };
    var bgColor = props.bgColor, rightButtonColor = props.rightButtonColor, rightTextColor = props.rightTextColor, leftIcons = props.leftIcons, shape = props.shape, placeholder = props.placeholder, clear = props.clear, fix = props.fix, className = props.className, style = props.style, searchType = props.searchType, showResult = props.showResult, result = props.result, showLoading = props.showLoading, onScrollToLower = props.onScrollToLower, onScrollToUpper = props.onScrollToUpper, onTouchResult = props.onTouchResult;
    var bgColorClassName = bgColor ? BG_COLOR_LIST[bgColor] : '';
    var buttonColorClassName = rightButtonColor
        ? BG_COLOR_LIST[rightButtonColor]
        : '';
    var textColorClassName = rightTextColor
        ? TEXT_COLOR_LIST[rightTextColor]
        : '';
    var leftIconComponent = leftIcons
        ? leftIcons.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: 'key-' + index, className: "cu-avatar round cuIcon-" + item, onClick: function () { return onIconClick(index); } })); })
        : '';
    var searchComponent = (React__default['default'].createElement(components.View, { className: "search-form " + shape },
        React__default['default'].createElement(components.Text, { className: 'cuIcon-search' }),
        React__default['default'].createElement(components.Input, { placeholder: placeholder, confirmType: 'search', type: 'text', onFocus: onFocus, onBlur: onBlur, focus: showSearch, adjustPosition: true, autoFocus: props.autoFocus, value: value, onConfirm: onSearch, onInput: onInput }),
        clear && value ? (React__default['default'].createElement(components.View, { onClick: function (e) {
                var onClear = props.onClear;
                e.stopPropagation();
                setValue('');
                onClear && onClear();
            } },
            React__default['default'].createElement(ClIcon, { iconName: 'close', size: 32, style: {
                    display: 'flex',
                    alignItems: 'center'
                } }))) : ('')));
    var buttonComponent = (React__default['default'].createElement(components.View, { className: 'action', onClick: onPreventProp },
        React__default['default'].createElement(components.Button, { className: "cu-btn shadow-blur " + shape + " " + buttonColorClassName + " " + textColorClassName, onClick: onSearch }, "\u641C\u7D22")));
    var textComponent = (React__default['default'].createElement(components.View, { className: 'action', onClick: onPreventProp },
        React__default['default'].createElement(components.Text, { className: "" + textColorClassName, onClick: onSearch }, "\u641C\u7D22")));
    return (React__default['default'].createElement(components.View, { style: fix ? { position: 'fixed', top: '0', width: '100vw', zIndex: 10 } : '' },
        React__default['default'].createElement(components.View, { className: classNames("cu-bar " + bgColorClassName, className), style: Object.assign({ position: 'relative' }, style) },
            leftIconComponent,
            searchComponent,
            searchType === 'text'
                ? textComponent
                : searchType === 'none'
                    ? ''
                    : buttonComponent,
            showResult ? (React__default['default'].createElement(components.View, { style: {
                    position: 'absolute',
                    width: '100%',
                    zIndex: 11,
                    top: Taro.pxTransform(100)
                } }, (result && result.length) || showLoading ? (React__default['default'].createElement(ClCard, { shadow: false, bgColor: bgColor },
                React__default['default'].createElement(components.ScrollView, { scrollY: true, style: { maxHeight: '300px' }, onScrollToLower: function () {
                        onScrollToLower && onScrollToLower();
                    }, onScrollToUpper: function () {
                        onScrollToUpper && onScrollToUpper();
                    } },
                    React__default['default'].createElement(ClSearchResult, { result: result, showLoading: showLoading, onTouchResult: function (index) {
                            onTouchResult && onTouchResult(index);
                        } })))) : (''))) : (''))));
});

var pcaa={"86":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","910000":"港澳"},"110000":{"110100":"市辖区"},"110100":{"110101":"东城区","110102":"西城区","110105":"朝阳区","110106":"丰台区","110107":"石景山区","110108":"海淀区","110109":"门头沟区","110111":"房山区","110112":"通州区","110113":"顺义区","110114":"昌平区","110115":"大兴区","110116":"怀柔区","110117":"平谷区","110118":"密云区","110119":"延庆区"},"120000":{"120100":"市辖区"},"120100":{"120101":"和平区","120102":"河东区","120103":"河西区","120104":"南开区","120105":"河北区","120106":"红桥区","120110":"东丽区","120111":"西青区","120112":"津南区","120113":"北辰区","120114":"武清区","120115":"宝坻区","120116":"滨海新区","120117":"宁河区","120118":"静海区","120119":"蓟州区"},"130000":{"130100":"石家庄市","130200":"唐山市","130300":"秦皇岛市","130400":"邯郸市","130500":"邢台市","130600":"保定市","130700":"张家口市","130800":"承德市","130900":"沧州市","131000":"廊坊市","131100":"衡水市","139001":"定州市","139002":"辛集市"},"130100":{"130102":"长安区","130104":"桥西区","130105":"新华区","130107":"井陉矿区","130108":"裕华区","130109":"藁城区","130110":"鹿泉区","130111":"栾城区","130121":"井陉县","130123":"正定县","130125":"行唐县","130126":"灵寿县","130127":"高邑县","130128":"深泽县","130129":"赞皇县","130130":"无极县","130131":"平山县","130132":"元氏县","130133":"赵县","130183":"晋州市","130184":"新乐市"},"130200":{"130202":"路南区","130203":"路北区","130204":"古冶区","130205":"开平区","130207":"丰南区","130208":"丰润区","130209":"曹妃甸区","130223":"滦县","130224":"滦南县","130225":"乐亭县","130227":"迁西县","130229":"玉田县","130281":"遵化市","130283":"迁安市"},"130300":{"130302":"海港区","130303":"山海关区","130304":"北戴河区","130306":"抚宁区","130321":"青龙满族自治县","130322":"昌黎县","130324":"卢龙县"},"130400":{"130402":"邯山区","130403":"丛台区","130404":"复兴区","130406":"峰峰矿区","130421":"邯郸县","130423":"临漳县","130424":"成安县","130425":"大名县","130426":"涉县","130427":"磁县","130428":"肥乡县","130429":"永年县","130430":"邱县","130431":"鸡泽县","130432":"广平县","130433":"馆陶县","130434":"魏县","130435":"曲周县","130481":"武安市"},"130500":{"130502":"桥东区","130503":"桥西区","130521":"邢台县","130522":"临城县","130523":"内丘县","130524":"柏乡县","130525":"隆尧县","130526":"任县","130527":"南和县","130528":"宁晋县","130529":"巨鹿县","130530":"新河县","130531":"广宗县","130532":"平乡县","130533":"威县","130534":"清河县","130535":"临西县","130581":"南宫市","130582":"沙河市"},"130600":{"130602":"竞秀区","130606":"莲池区","130607":"满城区","130608":"清苑区","130609":"徐水区","130623":"涞水县","130624":"阜平县","130626":"定兴县","130627":"唐县","130628":"高阳县","130629":"容城县","130630":"涞源县","130631":"望都县","130632":"安新县","130633":"易县","130634":"曲阳县","130635":"蠡县","130636":"顺平县","130637":"博野县","130638":"雄县","130681":"涿州市","130683":"安国市","130684":"高碑店市"},"130700":{"130702":"桥东区","130703":"桥西区","130705":"宣化区","130706":"下花园区","130708":"万全区","130709":"崇礼区","130722":"张北县","130723":"康保县","130724":"沽源县","130725":"尚义县","130726":"蔚县","130727":"阳原县","130728":"怀安县","130730":"怀来县","130731":"涿鹿县","130732":"赤城县"},"130800":{"130802":"双桥区","130803":"双滦区","130804":"鹰手营子矿区","130821":"承德县","130822":"兴隆县","130823":"平泉县","130824":"滦平县","130825":"隆化县","130826":"丰宁满族自治县","130827":"宽城满族自治县","130828":"围场满族蒙古族自治县"},"130900":{"130902":"新华区","130903":"运河区","130921":"沧县","130922":"青县","130923":"东光县","130924":"海兴县","130925":"盐山县","130926":"肃宁县","130927":"南皮县","130928":"吴桥县","130929":"献县","130930":"孟村回族自治县","130981":"泊头市","130982":"任丘市","130983":"黄骅市","130984":"河间市"},"131000":{"131002":"安次区","131003":"广阳区","131022":"固安县","131023":"永清县","131024":"香河县","131025":"大城县","131026":"文安县","131028":"大厂回族自治县","131081":"霸州市","131082":"三河市"},"131100":{"131102":"桃城区","131103":"冀州区","131121":"枣强县","131122":"武邑县","131123":"武强县","131124":"饶阳县","131125":"安平县","131126":"故城县","131127":"景县","131128":"阜城县","131182":"深州市"},"139001":{"1390011":"留早镇","13900111":"邢邑镇","139001001":"南城区街道","139001002":"北城区街道","139001003":"西城区街道","139001004":"长安路街道","139001101":"清风店镇","139001102":"庞村镇","139001103":"砖路镇","139001104":"明月店镇","139001105":"叮咛店镇","139001106":"东亭镇","139001107":"大辛庄镇","139001108":"东旺镇","139001109":"高蓬镇","139001111":"李亲顾镇","139001112":"子位镇","139001113":"开元镇","139001115":"周村镇","139001116":"息冢镇","139001203":"东留春乡","139001204":"号头庄回族乡","139001205":"杨家庄乡","139001206":"大鹿庄乡","139001208":"西城乡"},"139002":{"1390021":"辛集镇","1390022":"天宫营乡","1390025":"辛集经济开发区","139002101":"旧城镇","139002102":"张古庄镇","139002103":"位伯镇","139002104":"新垒头镇","139002105":"新城镇","139002106":"南智邱镇","139002107":"王口镇","139002201":"前营乡","139002202":"马庄乡","139002203":"和睦井乡","139002204":"田家庄乡","139002205":"中里厢乡","139002206":"小辛庄乡"},"140000":{"140100":"太原市","140200":"大同市","140300":"阳泉市","140400":"长治市","140500":"晋城市","140600":"朔州市","140700":"晋中市","140800":"运城市","140900":"忻州市","141000":"临汾市","141100":"吕梁市"},"140100":{"140105":"小店区","140106":"迎泽区","140107":"杏花岭区","140108":"尖草坪区","140109":"万柏林区","140110":"晋源区","140121":"清徐县","140122":"阳曲县","140123":"娄烦县","140181":"古交市"},"140200":{"140202":"城区","140203":"矿区","140211":"南郊区","140212":"新荣区","140221":"阳高县","140222":"天镇县","140223":"广灵县","140224":"灵丘县","140225":"浑源县","140226":"左云县","140227":"大同县"},"140300":{"140302":"城区","140303":"矿区","140311":"郊区","140321":"平定县","140322":"盂县"},"140400":{"140402":"城区","140411":"郊区","140421":"长治县","140423":"襄垣县","140424":"屯留县","140425":"平顺县","140426":"黎城县","140427":"壶关县","140428":"长子县","140429":"武乡县","140430":"沁县","140431":"沁源县","140481":"潞城市"},"140500":{"140502":"城区","140521":"沁水县","140522":"阳城县","140524":"陵川县","140525":"泽州县","140581":"高平市"},"140600":{"140602":"朔城区","140603":"平鲁区","140621":"山阴县","140622":"应县","140623":"右玉县","140624":"怀仁县"},"140700":{"140702":"榆次区","140721":"榆社县","140722":"左权县","140723":"和顺县","140724":"昔阳县","140725":"寿阳县","140726":"太谷县","140727":"祁县","140728":"平遥县","140729":"灵石县","140781":"介休市"},"140800":{"140802":"盐湖区","140821":"临猗县","140822":"万荣县","140823":"闻喜县","140824":"稷山县","140825":"新绛县","140826":"绛县","140827":"垣曲县","140828":"夏县","140829":"平陆县","140830":"芮城县","140881":"永济市","140882":"河津市"},"140900":{"140902":"忻府区","140921":"定襄县","140922":"五台县","140923":"代县","140924":"繁峙县","140925":"宁武县","140926":"静乐县","140927":"神池县","140928":"五寨县","140929":"岢岚县","140930":"河曲县","140931":"保德县","140932":"偏关县","140981":"原平市"},"141000":{"141002":"尧都区","141021":"曲沃县","141022":"翼城县","141023":"襄汾县","141024":"洪洞县","141025":"古县","141026":"安泽县","141027":"浮山县","141028":"吉县","141029":"乡宁县","141030":"大宁县","141031":"隰县","141032":"永和县","141033":"蒲县","141034":"汾西县","141081":"侯马市","141082":"霍州市"},"141100":{"141102":"离石区","141121":"文水县","141122":"交城县","141123":"兴县","141124":"临县","141125":"柳林县","141126":"石楼县","141127":"岚县","141128":"方山县","141129":"中阳县","141130":"交口县","141181":"孝义市","141182":"汾阳市"},"150000":{"150100":"呼和浩特市","150200":"包头市","150300":"乌海市","150400":"赤峰市","150500":"通辽市","150600":"鄂尔多斯市","150700":"呼伦贝尔市","150800":"巴彦淖尔市","150900":"乌兰察布市","152200":"兴安盟","152500":"锡林郭勒盟","152900":"阿拉善盟"},"150100":{"150102":"新城区","150103":"回民区","150104":"玉泉区","150105":"赛罕区","150121":"土默特左旗","150122":"托克托县","150123":"和林格尔县","150124":"清水河县","150125":"武川县"},"150200":{"150202":"东河区","150203":"昆都仑区","150204":"青山区","150205":"石拐区","150206":"白云鄂博矿区","150207":"九原区","150221":"土默特右旗","150222":"固阳县","150223":"达尔罕茂明安联合旗"},"150300":{"150302":"海勃湾区","150303":"海南区","150304":"乌达区"},"150400":{"150402":"红山区","150403":"元宝山区","150404":"松山区","150421":"阿鲁科尔沁旗","150422":"巴林左旗","150423":"巴林右旗","150424":"林西县","150425":"克什克腾旗","150426":"翁牛特旗","150428":"喀喇沁旗","150429":"宁城县","150430":"敖汉旗"},"150500":{"150502":"科尔沁区","150521":"科尔沁左翼中旗","150522":"科尔沁左翼后旗","150523":"开鲁县","150524":"库伦旗","150525":"奈曼旗","150526":"扎鲁特旗","150581":"霍林郭勒市"},"150600":{"150602":"东胜区","150603":"康巴什区","150621":"达拉特旗","150622":"准格尔旗","150623":"鄂托克前旗","150624":"鄂托克旗","150625":"杭锦旗","150626":"乌审旗","150627":"伊金霍洛旗"},"150700":{"150702":"海拉尔区","150703":"扎赉诺尔区","150721":"阿荣旗","150722":"莫力达瓦达斡尔族自治旗","150723":"鄂伦春自治旗","150724":"鄂温克族自治旗","150725":"陈巴尔虎旗","150726":"新巴尔虎左旗","150727":"新巴尔虎右旗","150781":"满洲里市","150782":"牙克石市","150783":"扎兰屯市","150784":"额尔古纳市","150785":"根河市"},"150800":{"150802":"临河区","150821":"五原县","150822":"磴口县","150823":"乌拉特前旗","150824":"乌拉特中旗","150825":"乌拉特后旗","150826":"杭锦后旗"},"150900":{"150902":"集宁区","150921":"卓资县","150922":"化德县","150923":"商都县","150924":"兴和县","150925":"凉城县","150926":"察哈尔右翼前旗","150927":"察哈尔右翼中旗","150928":"察哈尔右翼后旗","150929":"四子王旗","150981":"丰镇市"},"152200":{"152201":"乌兰浩特市","152202":"阿尔山市","152221":"科尔沁右翼前旗","152222":"科尔沁右翼中旗","152223":"扎赉特旗","152224":"突泉县"},"152500":{"152501":"二连浩特市","152502":"锡林浩特市","152522":"阿巴嘎旗","152523":"苏尼特左旗","152524":"苏尼特右旗","152525":"东乌珠穆沁旗","152526":"西乌珠穆沁旗","152527":"太仆寺旗","152528":"镶黄旗","152529":"正镶白旗","152530":"正蓝旗","152531":"多伦县"},"152900":{"152921":"阿拉善左旗","152922":"阿拉善右旗","152923":"额济纳旗"},"210000":{"210100":"沈阳市","210200":"大连市","210300":"鞍山市","210400":"抚顺市","210500":"本溪市","210600":"丹东市","210700":"锦州市","210800":"营口市","210900":"阜新市","211000":"辽阳市","211100":"盘锦市","211200":"铁岭市","211300":"朝阳市","211400":"葫芦岛市"},"210100":{"210102":"和平区","210103":"沈河区","210104":"大东区","210105":"皇姑区","210106":"铁西区","210111":"苏家屯区","210112":"浑南区","210113":"沈北新区","210114":"于洪区","210115":"辽中区","210123":"康平县","210124":"法库县","210181":"新民市"},"210200":{"210202":"中山区","210203":"西岗区","210204":"沙河口区","210211":"甘井子区","210212":"旅顺口区","210213":"金州区","210214":"普兰店区","210224":"长海县","210281":"瓦房店市","210283":"庄河市"},"210300":{"210302":"铁东区","210303":"铁西区","210304":"立山区","210311":"千山区","210321":"台安县","210323":"岫岩满族自治县","210381":"海城市"},"210400":{"210402":"新抚区","210403":"东洲区","210404":"望花区","210411":"顺城区","210421":"抚顺县","210422":"新宾满族自治县","210423":"清原满族自治县"},"210500":{"210502":"平山区","210503":"溪湖区","210504":"明山区","210505":"南芬区","210521":"本溪满族自治县","210522":"桓仁满族自治县"},"210600":{"210602":"元宝区","210603":"振兴区","210604":"振安区","210624":"宽甸满族自治县","210681":"东港市","210682":"凤城市"},"210700":{"210702":"古塔区","210703":"凌河区","210711":"太和区","210726":"黑山县","210727":"义县","210781":"凌海市","210782":"北镇市"},"210800":{"210802":"站前区","210803":"西市区","210804":"鲅鱼圈区","210811":"老边区","210881":"盖州市","210882":"大石桥市"},"210900":{"210902":"海州区","210903":"新邱区","210904":"太平区","210905":"清河门区","210911":"细河区","210921":"阜新蒙古族自治县","210922":"彰武县"},"211000":{"211002":"白塔区","211003":"文圣区","211004":"宏伟区","211005":"弓长岭区","211011":"太子河区","211021":"辽阳县","211081":"灯塔市"},"211100":{"211102":"双台子区","211103":"兴隆台区","211104":"大洼区","211122":"盘山县"},"211200":{"211202":"银州区","211204":"清河区","211221":"铁岭县","211223":"西丰县","211224":"昌图县","211281":"调兵山市","211282":"开原市"},"211300":{"211302":"双塔区","211303":"龙城区","211321":"朝阳县","211322":"建平县","211324":"喀喇沁左翼蒙古族自治县","211381":"北票市","211382":"凌源市"},"211400":{"211402":"连山区","211403":"龙港区","211404":"南票区","211421":"绥中县","211422":"建昌县","211481":"兴城市"},"220000":{"220100":"长春市","220200":"吉林市","220300":"四平市","220400":"辽源市","220500":"通化市","220600":"白山市","220700":"松原市","220800":"白城市","222400":"延边朝鲜族自治州"},"220100":{"220102":"南关区","220103":"宽城区","220104":"朝阳区","220105":"二道区","220106":"绿园区","220112":"双阳区","220113":"九台区","220122":"农安县","220182":"榆树市","220183":"德惠市"},"220200":{"220202":"昌邑区","220203":"龙潭区","220204":"船营区","220211":"丰满区","220221":"永吉县","220281":"蛟河市","220282":"桦甸市","220283":"舒兰市","220284":"磐石市"},"220300":{"220302":"铁西区","220303":"铁东区","220322":"梨树县","220323":"伊通满族自治县","220381":"公主岭市","220382":"双辽市"},"220400":{"220402":"龙山区","220403":"西安区","220421":"东丰县","220422":"东辽县"},"220500":{"220502":"东昌区","220503":"二道江区","220521":"通化县","220523":"辉南县","220524":"柳河县","220581":"梅河口市","220582":"集安市"},"220600":{"220602":"浑江区","220605":"江源区","220621":"抚松县","220622":"靖宇县","220623":"长白朝鲜族自治县","220681":"临江市"},"220700":{"220702":"宁江区","220721":"前郭尔罗斯蒙古族自治县","220722":"长岭县","220723":"乾安县","220781":"扶余市"},"220800":{"220802":"洮北区","220821":"镇赉县","220822":"通榆县","220881":"洮南市","220882":"大安市"},"222400":{"222401":"延吉市","222402":"图们市","222403":"敦化市","222404":"珲春市","222405":"龙井市","222406":"和龙市","222424":"汪清县","222426":"安图县"},"230000":{"230100":"哈尔滨市","230200":"齐齐哈尔市","230300":"鸡西市","230400":"鹤岗市","230500":"双鸭山市","230600":"大庆市","230700":"伊春市","230800":"佳木斯市","230900":"七台河市","231000":"牡丹江市","231100":"黑河市","231200":"绥化市","232700":"大兴安岭地区"},"230100":{"230102":"道里区","230103":"南岗区","230104":"道外区","230108":"平房区","230109":"松北区","230110":"香坊区","230111":"呼兰区","230112":"阿城区","230113":"双城区","230123":"依兰县","230124":"方正县","230125":"宾县","230126":"巴彦县","230127":"木兰县","230128":"通河县","230129":"延寿县","230183":"尚志市","230184":"五常市"},"230200":{"230202":"龙沙区","230203":"建华区","230204":"铁锋区","230205":"昂昂溪区","230206":"富拉尔基区","230207":"碾子山区","230208":"梅里斯达斡尔族区","230221":"龙江县","230223":"依安县","230224":"泰来县","230225":"甘南县","230227":"富裕县","230229":"克山县","230230":"克东县","230231":"拜泉县","230281":"讷河市"},"230300":{"230302":"鸡冠区","230303":"恒山区","230304":"滴道区","230305":"梨树区","230306":"城子河区","230307":"麻山区","230321":"鸡东县","230381":"虎林市","230382":"密山市"},"230400":{"230402":"向阳区","230403":"工农区","230404":"南山区","230405":"兴安区","230406":"东山区","230407":"兴山区","230421":"萝北县","230422":"绥滨县"},"230500":{"230502":"尖山区","230503":"岭东区","230505":"四方台区","230506":"宝山区","230521":"集贤县","230522":"友谊县","230523":"宝清县","230524":"饶河县"},"230600":{"230602":"萨尔图区","230603":"龙凤区","230604":"让胡路区","230605":"红岗区","230606":"大同区","230621":"肇州县","230622":"肇源县","230623":"林甸县","230624":"杜尔伯特蒙古族自治县"},"230700":{"230702":"伊春区","230703":"南岔区","230704":"友好区","230705":"西林区","230706":"翠峦区","230707":"新青区","230708":"美溪区","230709":"金山屯区","230710":"五营区","230711":"乌马河区","230712":"汤旺河区","230713":"带岭区","230714":"乌伊岭区","230715":"红星区","230716":"上甘岭区","230722":"嘉荫县","230781":"铁力市"},"230800":{"230803":"向阳区","230804":"前进区","230805":"东风区","230811":"郊区","230822":"桦南县","230826":"桦川县","230828":"汤原县","230881":"同江市","230882":"富锦市","230883":"抚远市"},"230900":{"230902":"新兴区","230903":"桃山区","230904":"茄子河区","230921":"勃利县"},"231000":{"231002":"东安区","231003":"阳明区","231004":"爱民区","231005":"西安区","231025":"林口县","231081":"绥芬河市","231083":"海林市","231084":"宁安市","231085":"穆棱市","231086":"东宁市"},"231100":{"231102":"爱辉区","231121":"嫩江县","231123":"逊克县","231124":"孙吴县","231181":"北安市","231182":"五大连池市"},"231200":{"231202":"北林区","231221":"望奎县","231222":"兰西县","231223":"青冈县","231224":"庆安县","231225":"明水县","231226":"绥棱县","231281":"安达市","231282":"肇东市","231283":"海伦市"},"232700":{"232721":"呼玛县","232722":"塔河县","232723":"漠河县"},"310000":{"310100":"市辖区"},"310100":{"310101":"黄浦区","310104":"徐汇区","310105":"长宁区","310106":"静安区","310107":"普陀区","310109":"虹口区","310110":"杨浦区","310112":"闵行区","310113":"宝山区","310114":"嘉定区","310115":"浦东新区","310116":"金山区","310117":"松江区","310118":"青浦区","310120":"奉贤区","310151":"崇明区"},"320000":{"320100":"南京市","320200":"无锡市","320300":"徐州市","320400":"常州市","320500":"苏州市","320600":"南通市","320700":"连云港市","320800":"淮安市","320900":"盐城市","321000":"扬州市","321100":"镇江市","321200":"泰州市","321300":"宿迁市"},"320100":{"320102":"玄武区","320104":"秦淮区","320105":"建邺区","320106":"鼓楼区","320111":"浦口区","320113":"栖霞区","320114":"雨花台区","320115":"江宁区","320116":"六合区","320117":"溧水区","320118":"高淳区"},"320200":{"320205":"锡山区","320206":"惠山区","320211":"滨湖区","320213":"梁溪区","320214":"新吴区","320281":"江阴市","320282":"宜兴市"},"320300":{"320302":"鼓楼区","320303":"云龙区","320305":"贾汪区","320311":"泉山区","320312":"铜山区","320321":"丰县","320322":"沛县","320324":"睢宁县","320381":"新沂市","320382":"邳州市"},"320400":{"320402":"天宁区","320404":"钟楼区","320411":"新北区","320412":"武进区","320413":"金坛区","320481":"溧阳市"},"320500":{"320505":"虎丘区","320506":"吴中区","320507":"相城区","320508":"姑苏区","320509":"吴江区","320581":"常熟市","320582":"张家港市","320583":"昆山市","320585":"太仓市"},"320600":{"320602":"崇川区","320611":"港闸区","320612":"通州区","320621":"海安县","320623":"如东县","320681":"启东市","320682":"如皋市","320684":"海门市"},"320700":{"320703":"连云区","320706":"海州区","320707":"赣榆区","320722":"东海县","320723":"灌云县","320724":"灌南县"},"320800":{"320803":"淮安区","320804":"淮阴区","320812":"清江浦区","320813":"洪泽区","320826":"涟水县","320830":"盱眙县","320831":"金湖县"},"320900":{"320902":"亭湖区","320903":"盐都区","320904":"大丰区","320921":"响水县","320922":"滨海县","320923":"阜宁县","320924":"射阳县","320925":"建湖县","320981":"东台市"},"321000":{"321002":"广陵区","321003":"邗江区","321012":"江都区","321023":"宝应县","321081":"仪征市","321084":"高邮市"},"321100":{"321102":"京口区","321111":"润州区","321112":"丹徒区","321181":"丹阳市","321182":"扬中市","321183":"句容市"},"321200":{"321202":"海陵区","321203":"高港区","321204":"姜堰区","321281":"兴化市","321282":"靖江市","321283":"泰兴市"},"321300":{"321302":"宿城区","321311":"宿豫区","321322":"沭阳县","321323":"泗阳县","321324":"泗洪县"},"330000":{"330100":"杭州市","330200":"宁波市","330300":"温州市","330400":"嘉兴市","330500":"湖州市","330600":"绍兴市","330700":"金华市","330800":"衢州市","330900":"舟山市","331000":"台州市","331100":"丽水市"},"330100":{"330102":"上城区","330103":"下城区","330104":"江干区","330105":"拱墅区","330106":"西湖区","330108":"滨江区","330109":"萧山区","330110":"余杭区","330111":"富阳区","330122":"桐庐县","330127":"淳安县","330182":"建德市","330185":"临安市"},"330200":{"330203":"海曙区","330204":"江东区","330205":"江北区","330206":"北仑区","330211":"镇海区","330212":"鄞州区","330225":"象山县","330226":"宁海县","330281":"余姚市","330282":"慈溪市","330283":"奉化市"},"330300":{"330302":"鹿城区","330303":"龙湾区","330304":"瓯海区","330305":"洞头区","330324":"永嘉县","330326":"平阳县","330327":"苍南县","330328":"文成县","330329":"泰顺县","330381":"瑞安市","330382":"乐清市"},"330400":{"330402":"南湖区","330411":"秀洲区","330421":"嘉善县","330424":"海盐县","330481":"海宁市","330482":"平湖市","330483":"桐乡市"},"330500":{"330502":"吴兴区","330503":"南浔区","330521":"德清县","330522":"长兴县","330523":"安吉县"},"330600":{"330602":"越城区","330603":"柯桥区","330604":"上虞区","330624":"新昌县","330681":"诸暨市","330683":"嵊州市"},"330700":{"330702":"婺城区","330703":"金东区","330723":"武义县","330726":"浦江县","330727":"磐安县","330781":"兰溪市","330782":"义乌市","330783":"东阳市","330784":"永康市"},"330800":{"330802":"柯城区","330803":"衢江区","330822":"常山县","330824":"开化县","330825":"龙游县","330881":"江山市"},"330900":{"330902":"定海区","330903":"普陀区","330921":"岱山县","330922":"嵊泗县"},"331000":{"331002":"椒江区","331003":"黄岩区","331004":"路桥区","331021":"玉环县","331022":"三门县","331023":"天台县","331024":"仙居县","331081":"温岭市","331082":"临海市"},"331100":{"331102":"莲都区","331121":"青田县","331122":"缙云县","331123":"遂昌县","331124":"松阳县","331125":"云和县","331126":"庆元县","331127":"景宁畲族自治县","331181":"龙泉市"},"340000":{"340100":"合肥市","340200":"芜湖市","340300":"蚌埠市","340400":"淮南市","340500":"马鞍山市","340600":"淮北市","340700":"铜陵市","340800":"安庆市","341000":"黄山市","341100":"滁州市","341200":"阜阳市","341300":"宿州市","341500":"六安市","341600":"亳州市","341700":"池州市","341800":"宣城市"},"340100":{"340102":"瑶海区","340103":"庐阳区","340104":"蜀山区","340111":"包河区","340121":"长丰县","340122":"肥东县","340123":"肥西县","340124":"庐江县","340181":"巢湖市"},"340200":{"340202":"镜湖区","340203":"弋江区","340207":"鸠江区","340208":"三山区","340221":"芜湖县","340222":"繁昌县","340223":"南陵县","340225":"无为县"},"340300":{"340302":"龙子湖区","340303":"蚌山区","340304":"禹会区","340311":"淮上区","340321":"怀远县","340322":"五河县","340323":"固镇县"},"340400":{"340402":"大通区","340403":"田家庵区","340404":"谢家集区","340405":"八公山区","340406":"潘集区","340421":"凤台县","340422":"寿县"},"340500":{"340503":"花山区","340504":"雨山区","340506":"博望区","340521":"当涂县","340522":"含山县","340523":"和县"},"340600":{"340602":"杜集区","340603":"相山区","340604":"烈山区","340621":"濉溪县"},"340700":{"340705":"铜官区","340706":"义安区","340711":"郊区","340722":"枞阳县"},"340800":{"340802":"迎江区","340803":"大观区","340811":"宜秀区","340822":"怀宁县","340824":"潜山县","340825":"太湖县","340826":"宿松县","340827":"望江县","340828":"岳西县","340881":"桐城市"},"341000":{"341002":"屯溪区","341003":"黄山区","341004":"徽州区","341021":"歙县","341022":"休宁县","341023":"黟县","341024":"祁门县"},"341100":{"341102":"琅琊区","341103":"南谯区","341122":"来安县","341124":"全椒县","341125":"定远县","341126":"凤阳县","341181":"天长市","341182":"明光市"},"341200":{"341202":"颍州区","341203":"颍东区","341204":"颍泉区","341221":"临泉县","341222":"太和县","341225":"阜南县","341226":"颍上县","341282":"界首市"},"341300":{"341302":"埇桥区","341321":"砀山县","341322":"萧县","341323":"灵璧县","341324":"泗县"},"341500":{"341502":"金安区","341503":"裕安区","341504":"叶集区","341522":"霍邱县","341523":"舒城县","341524":"金寨县","341525":"霍山县"},"341600":{"341602":"谯城区","341621":"涡阳县","341622":"蒙城县","341623":"利辛县"},"341700":{"341702":"贵池区","341721":"东至县","341722":"石台县","341723":"青阳县"},"341800":{"341802":"宣州区","341821":"郎溪县","341822":"广德县","341823":"泾县","341824":"绩溪县","341825":"旌德县","341881":"宁国市"},"350000":{"350100":"福州市","350200":"厦门市","350300":"莆田市","350400":"三明市","350500":"泉州市","350600":"漳州市","350700":"南平市","350800":"龙岩市","350900":"宁德市"},"350100":{"350102":"鼓楼区","350103":"台江区","350104":"仓山区","350105":"马尾区","350111":"晋安区","350121":"闽侯县","350122":"连江县","350123":"罗源县","350124":"闽清县","350125":"永泰县","350128":"平潭县","350181":"福清市","350182":"长乐市"},"350200":{"350203":"思明区","350205":"海沧区","350206":"湖里区","350211":"集美区","350212":"同安区","350213":"翔安区"},"350300":{"350302":"城厢区","350303":"涵江区","350304":"荔城区","350305":"秀屿区","350322":"仙游县"},"350400":{"350402":"梅列区","350403":"三元区","350421":"明溪县","350423":"清流县","350424":"宁化县","350425":"大田县","350426":"尤溪县","350427":"沙县","350428":"将乐县","350429":"泰宁县","350430":"建宁县","350481":"永安市"},"350500":{"350502":"鲤城区","350503":"丰泽区","350504":"洛江区","350505":"泉港区","350521":"惠安县","350524":"安溪县","350525":"永春县","350526":"德化县","350527":"金门县","350581":"石狮市","350582":"晋江市","350583":"南安市"},"350600":{"350602":"芗城区","350603":"龙文区","350622":"云霄县","350623":"漳浦县","350624":"诏安县","350625":"长泰县","350626":"东山县","350627":"南靖县","350628":"平和县","350629":"华安县","350681":"龙海市"},"350700":{"350702":"延平区","350703":"建阳区","350721":"顺昌县","350722":"浦城县","350723":"光泽县","350724":"松溪县","350725":"政和县","350781":"邵武市","350782":"武夷山市","350783":"建瓯市"},"350800":{"350802":"新罗区","350803":"永定区","350821":"长汀县","350823":"上杭县","350824":"武平县","350825":"连城县","350881":"漳平市"},"350900":{"350902":"蕉城区","350921":"霞浦县","350922":"古田县","350923":"屏南县","350924":"寿宁县","350925":"周宁县","350926":"柘荣县","350981":"福安市","350982":"福鼎市"},"360000":{"360100":"南昌市","360200":"景德镇市","360300":"萍乡市","360400":"九江市","360500":"新余市","360600":"鹰潭市","360700":"赣州市","360800":"吉安市","360900":"宜春市","361000":"抚州市","361100":"上饶市"},"360100":{"360102":"东湖区","360103":"西湖区","360104":"青云谱区","360105":"湾里区","360111":"青山湖区","360112":"新建区","360121":"南昌县","360123":"安义县","360124":"进贤县"},"360200":{"360202":"昌江区","360203":"珠山区","360222":"浮梁县","360281":"乐平市"},"360300":{"360302":"安源区","360313":"湘东区","360321":"莲花县","360322":"上栗县","360323":"芦溪县"},"360400":{"360402":"濂溪区","360403":"浔阳区","360421":"九江县","360423":"武宁县","360424":"修水县","360425":"永修县","360426":"德安县","360428":"都昌县","360429":"湖口县","360430":"彭泽县","360481":"瑞昌市","360482":"共青城市","360483":"庐山市"},"360500":{"360502":"渝水区","360521":"分宜县"},"360600":{"360602":"月湖区","360622":"余江县","360681":"贵溪市"},"360700":{"360702":"章贡区","360703":"南康区","360721":"赣县","360722":"信丰县","360723":"大余县","360724":"上犹县","360725":"崇义县","360726":"安远县","360727":"龙南县","360728":"定南县","360729":"全南县","360730":"宁都县","360731":"于都县","360732":"兴国县","360733":"会昌县","360734":"寻乌县","360735":"石城县","360781":"瑞金市"},"360800":{"360802":"吉州区","360803":"青原区","360821":"吉安县","360822":"吉水县","360823":"峡江县","360824":"新干县","360825":"永丰县","360826":"泰和县","360827":"遂川县","360828":"万安县","360829":"安福县","360830":"永新县","360881":"井冈山市"},"360900":{"360902":"袁州区","360921":"奉新县","360922":"万载县","360923":"上高县","360924":"宜丰县","360925":"靖安县","360926":"铜鼓县","360981":"丰城市","360982":"樟树市","360983":"高安市"},"361000":{"361002":"临川区","361021":"南城县","361022":"黎川县","361023":"南丰县","361024":"崇仁县","361025":"乐安县","361026":"宜黄县","361027":"金溪县","361028":"资溪县","361029":"东乡县","361030":"广昌县"},"361100":{"361102":"信州区","361103":"广丰区","361121":"上饶县","361123":"玉山县","361124":"铅山县","361125":"横峰县","361126":"弋阳县","361127":"余干县","361128":"鄱阳县","361129":"万年县","361130":"婺源县","361181":"德兴市"},"370000":{"370100":"济南市","370200":"青岛市","370300":"淄博市","370400":"枣庄市","370500":"东营市","370600":"烟台市","370700":"潍坊市","370800":"济宁市","370900":"泰安市","371000":"威海市","371100":"日照市","371200":"莱芜市","371300":"临沂市","371400":"德州市","371500":"聊城市","371600":"滨州市","371700":"菏泽市"},"370100":{"370102":"历下区","370103":"市中区","370104":"槐荫区","370105":"天桥区","370112":"历城区","370113":"长清区","370124":"平阴县","370125":"济阳县","370126":"商河县","370181":"章丘市"},"370200":{"370202":"市南区","370203":"市北区","370211":"黄岛区","370212":"崂山区","370213":"李沧区","370214":"城阳区","370281":"胶州市","370282":"即墨市","370283":"平度市","370285":"莱西市"},"370300":{"370302":"淄川区","370303":"张店区","370304":"博山区","370305":"临淄区","370306":"周村区","370321":"桓台县","370322":"高青县","370323":"沂源县"},"370400":{"370402":"市中区","370403":"薛城区","370404":"峄城区","370405":"台儿庄区","370406":"山亭区","370481":"滕州市"},"370500":{"370502":"东营区","370503":"河口区","370505":"垦利区","370522":"利津县","370523":"广饶县"},"370600":{"370602":"芝罘区","370611":"福山区","370612":"牟平区","370613":"莱山区","370634":"长岛县","370681":"龙口市","370682":"莱阳市","370683":"莱州市","370684":"蓬莱市","370685":"招远市","370686":"栖霞市","370687":"海阳市"},"370700":{"370702":"潍城区","370703":"寒亭区","370704":"坊子区","370705":"奎文区","370724":"临朐县","370725":"昌乐县","370781":"青州市","370782":"诸城市","370783":"寿光市","370784":"安丘市","370785":"高密市","370786":"昌邑市"},"370800":{"370811":"任城区","370812":"兖州区","370826":"微山县","370827":"鱼台县","370828":"金乡县","370829":"嘉祥县","370830":"汶上县","370831":"泗水县","370832":"梁山县","370881":"曲阜市","370883":"邹城市"},"370900":{"370902":"泰山区","370911":"岱岳区","370921":"宁阳县","370923":"东平县","370982":"新泰市","370983":"肥城市"},"371000":{"371002":"环翠区","371003":"文登区","371082":"荣成市","371083":"乳山市"},"371100":{"371102":"东港区","371103":"岚山区","371121":"五莲县","371122":"莒县"},"371200":{"371202":"莱城区","371203":"钢城区"},"371300":{"371302":"兰山区","371311":"罗庄区","371312":"河东区","371321":"沂南县","371322":"郯城县","371323":"沂水县","371324":"兰陵县","371325":"费县","371326":"平邑县","371327":"莒南县","371328":"蒙阴县","371329":"临沭县"},"371400":{"371402":"德城区","371403":"陵城区","371422":"宁津县","371423":"庆云县","371424":"临邑县","371425":"齐河县","371426":"平原县","371427":"夏津县","371428":"武城县","371481":"乐陵市","371482":"禹城市"},"371500":{"371502":"东昌府区","371521":"阳谷县","371522":"莘县","371523":"茌平县","371524":"东阿县","371525":"冠县","371526":"高唐县","371581":"临清市"},"371600":{"371602":"滨城区","371603":"沾化区","371621":"惠民县","371622":"阳信县","371623":"无棣县","371625":"博兴县","371626":"邹平县"},"371700":{"371702":"牡丹区","371703":"定陶区","371721":"曹县","371722":"单县","371723":"成武县","371724":"巨野县","371725":"郓城县","371726":"鄄城县","371728":"东明县"},"410000":{"410100":"郑州市","410200":"开封市","410300":"洛阳市","410400":"平顶山市","410500":"安阳市","410600":"鹤壁市","410700":"新乡市","410800":"焦作市","410900":"濮阳市","411000":"许昌市","411100":"漯河市","411200":"三门峡市","411300":"南阳市","411400":"商丘市","411500":"信阳市","411600":"周口市","411700":"驻马店市","419001":"济源市"},"410100":{"410102":"中原区","410103":"二七区","410104":"管城回族区","410105":"金水区","410106":"上街区","410108":"惠济区","410122":"中牟县","410181":"巩义市","410182":"荥阳市","410183":"新密市","410184":"新郑市","410185":"登封市"},"410200":{"410202":"龙亭区","410203":"顺河回族区","410204":"鼓楼区","410205":"禹王台区","410211":"金明区","410212":"祥符区","410221":"杞县","410222":"通许县","410223":"尉氏县","410225":"兰考县"},"410300":{"410302":"老城区","410303":"西工区","410304":"瀍河回族区","410305":"涧西区","410306":"吉利区","410311":"洛龙区","410322":"孟津县","410323":"新安县","410324":"栾川县","410325":"嵩县","410326":"汝阳县","410327":"宜阳县","410328":"洛宁县","410329":"伊川县","410381":"偃师市"},"410400":{"410402":"新华区","410403":"卫东区","410404":"石龙区","410411":"湛河区","410421":"宝丰县","410422":"叶县","410423":"鲁山县","410425":"郏县","410481":"舞钢市","410482":"汝州市"},"410500":{"410502":"文峰区","410503":"北关区","410505":"殷都区","410506":"龙安区","410522":"安阳县","410523":"汤阴县","410526":"滑县","410527":"内黄县","410581":"林州市"},"410600":{"410602":"鹤山区","410603":"山城区","410611":"淇滨区","410621":"浚县","410622":"淇县"},"410700":{"410702":"红旗区","410703":"卫滨区","410704":"凤泉区","410711":"牧野区","410721":"新乡县","410724":"获嘉县","410725":"原阳县","410726":"延津县","410727":"封丘县","410728":"长垣县","410781":"卫辉市","410782":"辉县市"},"410800":{"410802":"解放区","410803":"中站区","410804":"马村区","410811":"山阳区","410821":"修武县","410822":"博爱县","410823":"武陟县","410825":"温县","410882":"沁阳市","410883":"孟州市"},"410900":{"410902":"华龙区","410922":"清丰县","410923":"南乐县","410926":"范县","410927":"台前县","410928":"濮阳县"},"411000":{"411002":"魏都区","411023":"许昌县","411024":"鄢陵县","411025":"襄城县","411081":"禹州市","411082":"长葛市"},"411100":{"411102":"源汇区","411103":"郾城区","411104":"召陵区","411121":"舞阳县","411122":"临颍县"},"411200":{"411202":"湖滨区","411203":"陕州区","411221":"渑池县","411224":"卢氏县","411281":"义马市","411282":"灵宝市"},"411300":{"411302":"宛城区","411303":"卧龙区","411321":"南召县","411322":"方城县","411323":"西峡县","411324":"镇平县","411325":"内乡县","411326":"淅川县","411327":"社旗县","411328":"唐河县","411329":"新野县","411330":"桐柏县","411381":"邓州市"},"411400":{"411402":"梁园区","411403":"睢阳区","411421":"民权县","411422":"睢县","411423":"宁陵县","411424":"柘城县","411425":"虞城县","411426":"夏邑县","411481":"永城市"},"411500":{"411502":"浉河区","411503":"平桥区","411521":"罗山县","411522":"光山县","411523":"新县","411524":"商城县","411525":"固始县","411526":"潢川县","411527":"淮滨县","411528":"息县"},"411600":{"411602":"川汇区","411621":"扶沟县","411622":"西华县","411623":"商水县","411624":"沈丘县","411625":"郸城县","411626":"淮阳县","411627":"太康县","411628":"鹿邑县","411681":"项城市"},"411700":{"411702":"驿城区","411721":"西平县","411722":"上蔡县","411723":"平舆县","411724":"正阳县","411725":"确山县","411726":"泌阳县","411727":"汝南县","411728":"遂平县","411729":"新蔡县"},"419001":{"4190011":"济源市克井镇","41900111":"济源市下冶镇","419001001":"济源市沁园街道","419001002":"济源市济水街道","419001003":"济源市北海街道","419001004":"济源市天坛街道","419001005":"济源市玉泉街道","419001101":"济源市五龙口镇","419001102":"济源市轵城镇","419001103":"济源市承留镇","419001104":"济源市邵原镇","419001105":"济源市坡头镇","419001106":"济源市梨林镇","419001107":"济源市大峪镇","419001108":"济源市思礼镇","419001109":"济源市王屋镇"},"420000":{"420100":"武汉市","420200":"黄石市","420300":"十堰市","420500":"宜昌市","420600":"襄阳市","420700":"鄂州市","420800":"荆门市","420900":"孝感市","421000":"荆州市","421100":"黄冈市","421200":"咸宁市","421300":"随州市","422800":"恩施土家族苗族自治州","429004":"仙桃市","429005":"潜江市","429006":"天门市","429021":"神农架林区"},"420100":{"420102":"江岸区","420103":"江汉区","420104":"硚口区","420105":"汉阳区","420106":"武昌区","420107":"青山区","420111":"洪山区","420112":"东西湖区","420113":"汉南区","420114":"蔡甸区","420115":"江夏区","420116":"黄陂区","420117":"新洲区"},"420200":{"420202":"黄石港区","420203":"西塞山区","420204":"下陆区","420205":"铁山区","420222":"阳新县","420281":"大冶市"},"420300":{"420302":"茅箭区","420303":"张湾区","420304":"郧阳区","420322":"郧西县","420323":"竹山县","420324":"竹溪县","420325":"房县","420381":"丹江口市"},"420500":{"420502":"西陵区","420503":"伍家岗区","420504":"点军区","420505":"猇亭区","420506":"夷陵区","420525":"远安县","420526":"兴山县","420527":"秭归县","420528":"长阳土家族自治县","420529":"五峰土家族自治县","420581":"宜都市","420582":"当阳市","420583":"枝江市"},"420600":{"420602":"襄城区","420606":"樊城区","420607":"襄州区","420624":"南漳县","420625":"谷城县","420626":"保康县","420682":"老河口市","420683":"枣阳市","420684":"宜城市"},"420700":{"420702":"梁子湖区","420703":"华容区","420704":"鄂城区"},"420800":{"420802":"东宝区","420804":"掇刀区","420821":"京山县","420822":"沙洋县","420881":"钟祥市"},"420900":{"420902":"孝南区","420921":"孝昌县","420922":"大悟县","420923":"云梦县","420981":"应城市","420982":"安陆市","420984":"汉川市"},"421000":{"421002":"沙市区","421003":"荆州区","421022":"公安县","421023":"监利县","421024":"江陵县","421081":"石首市","421083":"洪湖市","421087":"松滋市"},"421100":{"421102":"黄州区","421121":"团风县","421122":"红安县","421123":"罗田县","421124":"英山县","421125":"浠水县","421126":"蕲春县","421127":"黄梅县","421181":"麻城市","421182":"武穴市"},"421200":{"421202":"咸安区","421221":"嘉鱼县","421222":"通城县","421223":"崇阳县","421224":"通山县","421281":"赤壁市"},"421300":{"421303":"曾都区","421321":"随县","421381":"广水市"},"422800":{"422801":"恩施市","422802":"利川市","422822":"建始县","422823":"巴东县","422825":"宣恩县","422826":"咸丰县","422827":"来凤县","422828":"鹤峰县"},"429004":{"4290041":"郑场镇","4290044":"工业园区","42900411":"张沟镇","429004001":"沙嘴街道","429004002":"干河街道","429004003":"龙华山","429004101":"毛嘴镇","429004102":"豆河镇","429004103":"三伏潭镇","429004104":"胡场镇","429004105":"长倘口镇","429004106":"西流河镇","429004107":"沙湖镇","429004108":"杨林尾镇","429004109":"彭场镇","429004111":"郭河镇","429004112":"沔城回族镇","429004113":"通海口镇","429004114":"陈场镇","429004401":"九合垸原种场","429004402":"沙湖原种场","429004404":"五湖渔场","429004405":"赵西垸林场","429004407":"畜禽良种场","429004408":"排湖风景区"},"429005":{"4290051":"竹根滩镇","4290054":"江汉石油管理局","42900545":"周矶管理区","429005001":"园林","429005002":"杨市","429005003":"周矶","429005004":"广华","429005005":"泰丰","429005006":"高场","429005101":"渔洋镇","429005102":"王场镇","429005103":"高石碑镇","429005104":"熊口镇","429005105":"老新镇","429005106":"浩口镇","429005107":"积玉口镇","429005108":"张金镇","429005109":"龙湾镇","429005401":"潜江经济开发区","429005451":"后湖管理区","429005452":"熊口管理区","429005453":"总口管理区","429005454":"白鹭湖管理区","429005455":"运粮湖管理区","429005457":"浩口原种场"},"429006":{"4290061":"多宝镇","42900611":"麻洋镇","42900612":"石河镇","42900645":"蒋湖农场","429006001":"竟陵街道","429006002":"侨乡街道开发区","429006003":"杨林街道","429006101":"拖市镇","429006102":"张港镇","429006103":"蒋场镇","429006104":"汪场镇","429006105":"渔薪镇","429006106":"黄潭镇","429006107":"岳口镇","429006108":"横林镇","429006109":"彭市镇","429006111":"多祥镇","429006112":"干驿镇","429006113":"马湾镇","429006114":"卢市镇","429006115":"小板镇","429006116":"九真镇","429006118":"皂市镇","429006119":"胡市镇","429006121":"佛子山镇","429006201":"净潭乡","429006451":"白茅湖农场","429006452":"沉湖管委会"},"429021":{"4290211":"松柏镇","4290212":"宋洛乡","429021101":"阳日镇","429021102":"木鱼镇","429021103":"红坪镇","429021104":"新华镇","429021105":"九湖镇","429021202":"下谷坪土家族乡"},"430000":{"430100":"长沙市","430200":"株洲市","430300":"湘潭市","430400":"衡阳市","430500":"邵阳市","430600":"岳阳市","430700":"常德市","430800":"张家界市","430900":"益阳市","431000":"郴州市","431100":"永州市","431200":"怀化市","431300":"娄底市","433100":"湘西土家族苗族自治州"},"430100":{"430102":"芙蓉区","430103":"天心区","430104":"岳麓区","430105":"开福区","430111":"雨花区","430112":"望城区","430121":"长沙县","430124":"宁乡县","430181":"浏阳市"},"430200":{"430202":"荷塘区","430203":"芦淞区","430204":"石峰区","430211":"天元区","430221":"株洲县","430223":"攸县","430224":"茶陵县","430225":"炎陵县","430281":"醴陵市"},"430300":{"430302":"雨湖区","430304":"岳塘区","430321":"湘潭县","430381":"湘乡市","430382":"韶山市"},"430400":{"430405":"珠晖区","430406":"雁峰区","430407":"石鼓区","430408":"蒸湘区","430412":"南岳区","430421":"衡阳县","430422":"衡南县","430423":"衡山县","430424":"衡东县","430426":"祁东县","430481":"耒阳市","430482":"常宁市"},"430500":{"430502":"双清区","430503":"大祥区","430511":"北塔区","430521":"邵东县","430522":"新邵县","430523":"邵阳县","430524":"隆回县","430525":"洞口县","430527":"绥宁县","430528":"新宁县","430529":"城步苗族自治县","430581":"武冈市"},"430600":{"430602":"岳阳楼区","430603":"云溪区","430611":"君山区","430621":"岳阳县","430623":"华容县","430624":"湘阴县","430626":"平江县","430681":"汨罗市","430682":"临湘市"},"430700":{"430702":"武陵区","430703":"鼎城区","430721":"安乡县","430722":"汉寿县","430723":"澧县","430724":"临澧县","430725":"桃源县","430726":"石门县","430781":"津市市"},"430800":{"430802":"永定区","430811":"武陵源区","430821":"慈利县","430822":"桑植县"},"430900":{"430902":"资阳区","430903":"赫山区","430921":"南县","430922":"桃江县","430923":"安化县","430981":"沅江市"},"431000":{"431002":"北湖区","431003":"苏仙区","431021":"桂阳县","431022":"宜章县","431023":"永兴县","431024":"嘉禾县","431025":"临武县","431026":"汝城县","431027":"桂东县","431028":"安仁县","431081":"资兴市"},"431100":{"431102":"零陵区","431103":"冷水滩区","431121":"祁阳县","431122":"东安县","431123":"双牌县","431124":"道县","431125":"江永县","431126":"宁远县","431127":"蓝山县","431128":"新田县","431129":"江华瑶族自治县"},"431200":{"431202":"鹤城区","431221":"中方县","431222":"沅陵县","431223":"辰溪县","431224":"溆浦县","431225":"会同县","431226":"麻阳苗族自治县","431227":"新晃侗族自治县","431228":"芷江侗族自治县","431229":"靖州苗族侗族自治县","431230":"通道侗族自治县","431281":"洪江市"},"431300":{"431302":"娄星区","431321":"双峰县","431322":"新化县","431381":"冷水江市","431382":"涟源市"},"433100":{"433101":"吉首市","433122":"泸溪县","433123":"凤凰县","433124":"花垣县","433125":"保靖县","433126":"古丈县","433127":"永顺县","433130":"龙山县"},"440000":{"440100":"广州市","440200":"韶关市","440300":"深圳市","440400":"珠海市","440500":"汕头市","440600":"佛山市","440700":"江门市","440800":"湛江市","440900":"茂名市","441200":"肇庆市","441300":"惠州市","441400":"梅州市","441500":"汕尾市","441600":"河源市","441700":"阳江市","441800":"清远市","441900":"东莞市","442000":"中山市","445100":"潮州市","445200":"揭阳市","445300":"云浮市"},"440100":{"440103":"荔湾区","440104":"越秀区","440105":"海珠区","440106":"天河区","440111":"白云区","440112":"黄埔区","440113":"番禺区","440114":"花都区","440115":"南沙区","440117":"从化区","440118":"增城区"},"440200":{"440203":"武江区","440204":"浈江区","440205":"曲江区","440222":"始兴县","440224":"仁化县","440229":"翁源县","440232":"乳源瑶族自治县","440233":"新丰县","440281":"乐昌市","440282":"南雄市"},"440300":{"440303":"罗湖区","440304":"福田区","440305":"南山区","440306":"宝安区","440307":"龙岗区","440308":"盐田区"},"440400":{"440402":"香洲区","440403":"斗门区","440404":"金湾区"},"440500":{"440507":"龙湖区","440511":"金平区","440512":"濠江区","440513":"潮阳区","440514":"潮南区","440515":"澄海区","440523":"南澳县"},"440600":{"440604":"禅城区","440605":"南海区","440606":"顺德区","440607":"三水区","440608":"高明区"},"440700":{"440703":"蓬江区","440704":"江海区","440705":"新会区","440781":"台山市","440783":"开平市","440784":"鹤山市","440785":"恩平市"},"440800":{"440802":"赤坎区","440803":"霞山区","440804":"坡头区","440811":"麻章区","440823":"遂溪县","440825":"徐闻县","440881":"廉江市","440882":"雷州市","440883":"吴川市"},"440900":{"440902":"茂南区","440904":"电白区","440981":"高州市","440982":"化州市","440983":"信宜市"},"441200":{"441202":"端州区","441203":"鼎湖区","441204":"高要区","441223":"广宁县","441224":"怀集县","441225":"封开县","441226":"德庆县","441284":"四会市"},"441300":{"441302":"惠城区","441303":"惠阳区","441322":"博罗县","441323":"惠东县","441324":"龙门县"},"441400":{"441402":"梅江区","441403":"梅县区","441422":"大埔县","441423":"丰顺县","441424":"五华县","441426":"平远县","441427":"蕉岭县","441481":"兴宁市"},"441500":{"441502":"城区","441521":"海丰县","441523":"陆河县","441581":"陆丰市"},"441600":{"441602":"源城区","441621":"紫金县","441622":"龙川县","441623":"连平县","441624":"和平县","441625":"东源县"},"441700":{"441702":"江城区","441704":"阳东区","441721":"阳西县","441781":"阳春市"},"441800":{"441802":"清城区","441803":"清新区","441821":"佛冈县","441823":"阳山县","441825":"连山壮族瑶族自治县","441826":"连南瑶族自治县","441881":"英德市","441882":"连州市"},"441900":{"441900003":"东城街道","441900004":"南城街道","441900005":"万江街道","441900006":"莞城街道","441900101":"石碣镇","441900102":"石龙镇","441900103":"茶山镇","441900104":"石排镇","441900105":"企石镇","441900106":"横沥镇","441900107":"桥头镇","441900108":"谢岗镇","441900109":"东坑镇","441900110":"常平镇","441900111":"寮步镇","441900112":"樟木头镇","441900113":"大朗镇","441900114":"黄江镇","441900115":"清溪镇","441900116":"塘厦镇","441900117":"凤岗镇","441900118":"大岭山镇","441900119":"长安镇","441900121":"虎门镇","441900122":"厚街镇","441900123":"沙田镇","441900124":"道滘镇","441900125":"洪梅镇","441900126":"麻涌镇","441900127":"望牛墩镇","441900128":"中堂镇","441900129":"高埗镇","441900401":"松山湖管委会","441900402":"虎门港管委会","441900403":"东莞生态园"},"442000":{"442000001":"石岐区街道","442000002":"东区街道","442000003":"火炬开发区街道","442000004":"西区街道","442000005":"南区街道","442000006":"五桂山街道","442000100":"小榄镇","442000101":"黄圃镇","442000102":"民众镇","442000103":"东凤镇","442000104":"东升镇","442000105":"古镇镇","442000106":"沙溪镇","442000107":"坦洲镇","442000108":"港口镇","442000109":"三角镇","442000110":"横栏镇","442000111":"南头镇","442000112":"阜沙镇","442000113":"南朗镇","442000114":"三乡镇","442000115":"板芙镇","442000116":"大涌镇","442000117":"神湾镇"},"445100":{"445102":"湘桥区","445103":"潮安区","445122":"饶平县"},"445200":{"445202":"榕城区","445203":"揭东区","445222":"揭西县","445224":"惠来县","445281":"普宁市"},"445300":{"445302":"云城区","445303":"云安区","445321":"新兴县","445322":"郁南县","445381":"罗定市"},"450000":{"450100":"南宁市","450200":"柳州市","450300":"桂林市","450400":"梧州市","450500":"北海市","450600":"防城港市","450700":"钦州市","450800":"贵港市","450900":"玉林市","451000":"百色市","451100":"贺州市","451200":"河池市","451300":"来宾市","451400":"崇左市"},"450100":{"450102":"兴宁区","450103":"青秀区","450105":"江南区","450107":"西乡塘区","450108":"良庆区","450109":"邕宁区","450110":"武鸣区","450123":"隆安县","450124":"马山县","450125":"上林县","450126":"宾阳县","450127":"横县"},"450200":{"450202":"城中区","450203":"鱼峰区","450204":"柳南区","450205":"柳北区","450206":"柳江区","450222":"柳城县","450223":"鹿寨县","450224":"融安县","450225":"融水苗族自治县","450226":"三江侗族自治县"},"450300":{"450302":"秀峰区","450303":"叠彩区","450304":"象山区","450305":"七星区","450311":"雁山区","450312":"临桂区","450321":"阳朔县","450323":"灵川县","450324":"全州县","450325":"兴安县","450326":"永福县","450327":"灌阳县","450328":"龙胜各族自治县","450329":"资源县","450330":"平乐县","450331":"荔浦县","450332":"恭城瑶族自治县"},"450400":{"450403":"万秀区","450405":"长洲区","450406":"龙圩区","450421":"苍梧县","450422":"藤县","450423":"蒙山县","450481":"岑溪市"},"450500":{"450502":"海城区","450503":"银海区","450512":"铁山港区","450521":"合浦县"},"450600":{"450602":"港口区","450603":"防城区","450621":"上思县","450681":"东兴市"},"450700":{"450702":"钦南区","450703":"钦北区","450721":"灵山县","450722":"浦北县"},"450800":{"450802":"港北区","450803":"港南区","450804":"覃塘区","450821":"平南县","450881":"桂平市"},"450900":{"450902":"玉州区","450903":"福绵区","450921":"容县","450922":"陆川县","450923":"博白县","450924":"兴业县","450981":"北流市"},"451000":{"451002":"右江区","451021":"田阳县","451022":"田东县","451023":"平果县","451024":"德保县","451026":"那坡县","451027":"凌云县","451028":"乐业县","451029":"田林县","451030":"西林县","451031":"隆林各族自治县","451081":"靖西市"},"451100":{"451102":"八步区","451103":"平桂区","451121":"昭平县","451122":"钟山县","451123":"富川瑶族自治县"},"451200":{"451202":"金城江区","451221":"南丹县","451222":"天峨县","451223":"凤山县","451224":"东兰县","451225":"罗城仫佬族自治县","451226":"环江毛南族自治县","451227":"巴马瑶族自治县","451228":"都安瑶族自治县","451229":"大化瑶族自治县","451281":"宜州市"},"451300":{"451302":"兴宾区","451321":"忻城县","451322":"象州县","451323":"武宣县","451324":"金秀瑶族自治县","451381":"合山市"},"451400":{"451402":"江州区","451421":"扶绥县","451422":"宁明县","451423":"龙州县","451424":"大新县","451425":"天等县","451481":"凭祥市"},"460000":{"460100":"海口市","460200":"三亚市","460300":"三沙市","460400":"儋州市","469001":"五指山市","469002":"琼海市","469005":"文昌市","469006":"万宁市","469007":"东方市","469021":"定安县","469022":"屯昌县","469023":"澄迈县","469024":"临高县","469025":"白沙黎族自治县","469026":"昌江黎族自治县","469027":"乐东黎族自治县","469028":"陵水黎族自治县","469029":"保亭黎族苗族自治县","469030":"琼中黎族苗族自治县"},"460100":{"460105":"秀英区","460106":"龙华区","460107":"琼山区","460108":"美兰区"},"460200":{"460202":"海棠区","460203":"吉阳区","460204":"天涯区","460205":"崖州区"},"460300":{"460321":"西沙群岛","460322":"南沙群岛","460323":"中沙群岛的岛礁及其海域"},"460400":{"4604001":"那大镇","4604004":"国营西培农场","4604005":"华南热作学院","46040011":"三都镇","460400101":"和庆镇","460400102":"南丰镇","460400103":"大成镇","460400104":"雅星镇","460400105":"兰洋镇","460400106":"光村镇","460400107":"木棠镇","460400108":"海头镇","460400109":"峨蔓镇","460400111":"王五镇","460400112":"白马井镇","460400113":"中和镇","460400114":"排浦镇","460400115":"东成镇","460400116":"新州镇","460400404":"国营西联农场","460400405":"国营蓝洋农场","460400407":"国营八一农场","460400499":"洋浦经济开发区"},"469001":{"4690011":"通什镇","4690012":"畅好乡","4690014":"畅好农场","469001101":"南圣镇","469001102":"毛阳镇","469001103":"番阳镇","469001201":"毛道乡","469001202":"水满乡"},"469002":{"4690021":"嘉积镇","4690024":"国营东太农场","4690025":"彬村山华侨农场","46900211":"大路镇","469002101":"万泉镇","469002102":"石壁镇","469002103":"中原镇","469002104":"博鳌镇","469002105":"阳江镇","469002106":"龙江镇","469002107":"潭门镇","469002108":"塔洋镇","469002109":"长坡镇","469002111":"会山镇","469002402":"国营东红农场","469002403":"国营东升农场"},"469005":{"4690051":"文城镇","4690054":"国营东路农场","46900511":"昌洒镇","469005101":"重兴镇","469005102":"蓬莱镇","469005103":"会文镇","469005104":"东路镇","469005105":"潭牛镇","469005106":"东阁镇","469005107":"文教镇","469005108":"东郊镇","469005109":"龙楼镇","469005111":"翁田镇","469005112":"抱罗镇","469005113":"冯坡镇","469005114":"锦山镇","469005115":"铺前镇","469005116":"公坡镇","469005401":"国营南阳农场","469005402":"国营罗豆农场"},"469006":{"4690061":"万城镇","4690064":"国营东兴农场","4690065":"兴隆华侨农场","46900611":"南桥镇","469006101":"龙滚镇","469006102":"和乐镇","469006103":"后安镇","469006104":"大茂镇","469006105":"东澳镇","469006106":"礼纪镇","469006107":"长丰镇","469006108":"山根镇","469006109":"北大镇","469006111":"三更罗镇","469006401":"国营东和农场","469006404":"国营新中农场","469006501":"地方国营六连林场"},"469007":{"4690071":"八所镇","4690072":"天安乡","4690074":"国营广坝农场","4690075":"东方华侨农场","469007101":"东河镇","469007102":"大田镇","469007103":"感城镇","469007104":"板桥镇","469007105":"三家镇","469007106":"四更镇","469007107":"新龙镇","469007201":"江边乡"},"469021":{"4690211":"定城镇","4690214":"国营中瑞农场","469021101":"新竹镇","469021102":"龙湖镇","469021103":"黄竹镇","469021104":"雷鸣镇","469021105":"龙门镇","469021106":"龙河镇","469021107":"岭口镇","469021108":"翰林镇","469021109":"富文镇","469021401":"国营南海农场","469021402":"国营金鸡岭农场"},"469022":{"4690221":"屯城镇","4690224":"国营中建农场","469022101":"新兴镇","469022102":"枫木镇","469022103":"乌坡镇","469022104":"南吕镇","469022105":"南坤镇","469022106":"坡心镇","469022107":"西昌镇","469022401":"国营中坤农场"},"469023":{"4690231":"金江镇","4690234":"国营红光农场","46902311":"大丰镇","469023101":"老城镇","469023102":"瑞溪镇","469023103":"永发镇","469023104":"加乐镇","469023105":"文儒镇","469023106":"中兴镇","469023107":"仁兴镇","469023108":"福山镇","469023109":"桥头镇","469023402":"国营西达农场","469023405":"国营金安农场"},"469024":{"4690241":"临城镇","4690244":"国营红华农场","469024101":"波莲镇","469024102":"东英镇","469024103":"博厚镇","469024104":"皇桐镇","469024105":"多文镇","469024106":"和舍镇","469024107":"南宝镇","469024108":"新盈镇","469024109":"调楼镇","469024401":"国营加来农场"},"469025":{"4690251":"牙叉镇","4690252":"细水乡","469025101":"七坊镇","469025102":"邦溪镇","469025103":"打安镇","469025201":"元门乡","469025202":"南开乡","469025203":"阜龙乡","469025204":"青松乡","469025205":"金波乡","469025206":"荣邦乡","469025401":"国营白沙农场","469025404":"国营龙江农场","469025408":"国营邦溪农场"},"469026":{"4690261":"石碌镇","4690262":"王下乡","4690265":"国营霸王岭林场","469026101":"叉河镇","469026102":"十月田镇","469026103":"乌烈镇","469026104":"昌化镇","469026105":"海尾镇","469026106":"七叉镇","469026401":"国营红林农场","469026501":"海南矿业联合有限公司"},"469027":{"4690271":"抱由镇","4690275":"国营尖峰岭林业公司","46902711":"莺歌海镇","469027101":"万冲镇","469027102":"大安镇","469027103":"志仲镇","469027104":"千家镇","469027105":"九所镇","469027106":"利国镇","469027107":"黄流镇","469027108":"佛罗镇","469027109":"尖峰镇","469027401":"国营山荣农场","469027402":"国营乐光农场","469027405":"国营保国农场","469027501":"国营莺歌海盐场"},"469028":{"4690281":"椰林镇","4690282":"提蒙乡","4690284":"国营岭门农场","4690285":"国营吊罗山林业公司","469028101":"光坡镇","469028102":"三才镇","469028103":"英州镇","469028104":"隆广镇","469028105":"文罗镇","469028106":"本号镇","469028107":"新村镇","469028108":"黎安镇","469028201":"群英乡","469028401":"国营南平农场"},"469029":{"4690291":"保城镇","4690292":"六弓乡","469029101":"什玲镇","469029102":"加茂镇","469029103":"响水镇","469029104":"新政镇","469029105":"三道镇","469029201":"南林乡","469029202":"毛感乡","469029401":"国营新星农场","469029402":"海南保亭热带作物研究所","469029403":"国营金江农场","469029405":"国营三道农场"},"469030":{"4690301":"营根镇","4690302":"吊罗山乡","4690305":"海南黎母山省级自然保护区管理站","469030101":"湾岭镇","469030102":"黎母山镇","469030103":"和平镇","469030104":"长征镇","469030105":"红毛镇","469030106":"中平镇","469030201":"上安乡","469030202":"什运乡","469030402":"国营阳江农场","469030403":"国营乌石农场","469030406":"国营加钗农场","469030407":"国营长征农场"},"500000":{"500100":"市辖区","500228":"梁平县","500229":"城口县","500230":"丰都县","500231":"垫江县","500232":"武隆县","500233":"忠县","500235":"云阳县","500236":"奉节县","500237":"巫山县","500238":"巫溪县","500240":"石柱土家族自治县","500241":"秀山土家族苗族自治县","500242":"酉阳土家族苗族自治县","500243":"彭水苗族土家族自治县"},"500100":{"500101":"万州区","500102":"涪陵区","500103":"渝中区","500104":"大渡口区","500105":"江北区","500106":"沙坪坝区","500107":"九龙坡区","500108":"南岸区","500109":"北碚区","500110":"綦江区","500111":"大足区","500112":"渝北区","500113":"巴南区","500114":"黔江区","500115":"长寿区","500116":"江津区","500117":"合川区","500118":"永川区","500119":"南川区","500120":"璧山区","500151":"铜梁区","500152":"潼南区","500153":"荣昌区","500154":"开州区"},"500228":{"5002282":"安胜乡","5002284":"梁平县农场","50022811":"聚奎镇","50022812":"合兴镇","500228001":"梁平县梁山街道","500228002":"梁平县双桂街道","500228101":"仁贤镇","500228102":"礼让镇","500228103":"云龙镇","500228104":"屏锦镇","500228106":"袁驿镇","500228107":"新盛镇","500228108":"福禄镇","500228109":"金带镇","500228111":"明达镇","500228112":"荫平镇","500228113":"和林镇","500228114":"回龙镇","500228115":"碧山镇","500228116":"虎城镇","500228117":"七星镇","500228118":"龙门镇","500228119":"文化镇","500228121":"石安镇","500228122":"柏家镇","500228123":"大观镇","500228124":"竹山镇","500228125":"蟠龙镇","500228126":"星桥镇","500228127":"曲水镇","500228201":"铁门乡","500228202":"龙胜乡","500228203":"复平乡","500228205":"紫照乡","500228401":"梁平县双桂工业园区"},"500229":{"50022911":"咸宜镇","50022921":"双河乡","50022922":"厚坪乡","500229001":"葛城街道","500229002":"复兴街道","500229102":"巴山镇","500229103":"坪坝镇","500229104":"庙坝镇","500229105":"明通镇","500229106":"修齐镇","500229107":"高观镇","500229108":"高燕镇","500229109":"东安镇","500229111":"高楠镇","500229201":"龙田乡","500229202":"北屏乡","500229205":"左岚乡","500229208":"沿河乡","500229211":"蓼子乡","500229212":"鸡鸣乡","500229214":"周溪乡","500229216":"明中乡","500229217":"治平乡","500229219":"岚天乡","500229221":"河鱼乡"},"500230":{"500230":"名山街道","50023011":"兴义镇","50023012":"兴龙镇","50023021":"三建乡","500230101":"虎威镇","500230102":"社坛镇","500230103":"三元镇","500230104":"许明寺镇","500230105":"董家镇","500230106":"树人镇","500230107":"十直镇","500230109":"高家镇","500230111":"双路镇","500230112":"江池镇","500230113":"龙河镇","500230114":"武平镇","500230115":"包鸾镇","500230116":"湛普镇","500230118":"南天湖镇","500230119":"保合镇","500230121":"仁沙镇","500230122":"龙孔镇","500230123":"暨龙镇","500230124":"双龙镇","500230125":"仙女湖镇","500230202":"青龙乡","500230206":"太平坝乡","500230207":"都督乡","500230209":"栗子乡"},"500231":{"50023111":"太平镇","50023112":"裴兴镇","500231001":"桂溪街道","500231002":"桂阳街道","500231101":"新民镇","500231102":"沙坪镇","500231103":"周嘉镇","500231104":"普顺镇","500231105":"永安镇","500231106":"高安镇","500231107":"高峰镇","500231108":"五洞镇","500231109":"澄溪镇","500231111":"鹤游镇","500231112":"坪山镇","500231113":"砚台镇","500231114":"曹回镇","500231115":"杠家镇","500231116":"包家镇","500231117":"白家镇","500231118":"永平镇","500231119":"三溪镇","500231121":"黄沙镇","500231122":"长龙镇","500231202":"沙河乡","500231204":"大石乡"},"500232":{"5002321":"巷口镇","5002322":"凤来乡","50023211":"土坎镇","50023221":"后坪苗族土家族乡","500232101":"火炉镇","500232102":"白马镇","500232103":"鸭江镇","500232104":"长坝镇","500232105":"江口镇","500232106":"平桥镇","500232107":"羊角镇","500232108":"仙女山镇","500232109":"桐梓镇","500232111":"和顺镇","500232112":"双河镇","500232202":"庙垭乡","500232203":"石桥苗族土家族乡","500232205":"黄莺乡","500232206":"沧沟乡","500232207":"文复苗族土家族乡","500232208":"土地乡","500232209":"白云乡","500232211":"浩口苗族仡佬族乡","500232212":"接龙乡","500232213":"赵家乡","500232214":"大洞河乡"},"500233":{"50023311":"官坝镇","50023312":"白石镇","50023321":"兴峰乡","500233001":"忠州街道","500233002":"白公街道","500233101":"新生镇","500233102":"任家镇","500233103":"乌杨镇","500233104":"洋渡镇","500233105":"东溪镇","500233106":"复兴镇","500233107":"石宝镇","500233108":"汝溪镇","500233109":"野鹤镇","500233111":"石黄镇","500233112":"马灌镇","500233113":"金鸡镇","500233114":"新立镇","500233115":"双桂镇","500233116":"拔山镇","500233117":"花桥镇","500233118":"永丰镇","500233119":"三汇镇","500233122":"黄金镇","500233201":"善广乡","500233203":"石子乡","500233204":"磨子土家族乡","500233206":"涂井乡","500233208":"金声乡"},"500235":{"50023513":"桑坪镇","50023514":"蔈草镇","500235001":"双江街道","500235002":"青龙街道","500235003":"人和街道","500235004":"盘龙街道","500235105":"龙角镇","500235107":"故陵镇","500235108":"红狮镇","500235115":"路阳镇","500235116":"农坝镇","500235118":"渠马镇","500235121":"黄石镇","500235122":"巴阳镇","500235123":"沙市镇","500235124":"鱼泉镇","500235125":"凤鸣镇","500235127":"宝坪镇","500235128":"南溪镇","500235129":"双土镇","500235131":"江口镇","500235132":"高阳镇","500235133":"平安镇","500235135":"云阳镇","500235136":"云安镇","500235137":"栖霞镇","500235138":"双龙镇","500235139":"泥溪镇","500235141":"养鹿镇","500235142":"水口镇","500235143":"堰坪镇","500235144":"龙洞镇","500235145":"后叶镇","500235146":"耀灵镇","500235147":"大阳镇","500235208":"外郎乡","500235215":"新津乡","500235216":"普安乡","500235218":"洞鹿乡","500235219":"石门乡","500235239":"上坝乡","500235242":"清水土家族自治乡"},"500236":{"50023612":"康乐镇","50023613":"新民镇","50023627":"康坪乡","500236001":"永安街道","500236002":"鱼复街道","500236003":"夔门街道","500236117":"白帝镇","500236118":"草堂镇","500236119":"汾河镇","500236121":"大树镇","500236122":"竹园镇","500236123":"公平镇","500236124":"朱衣镇","500236125":"甲高镇","500236126":"羊市镇","500236127":"吐祥镇","500236128":"兴隆镇","500236129":"青龙镇","500236131":"永乐镇","500236132":"安坪镇","500236133":"五马镇","500236134":"青莲镇","500236265":"岩湾乡","500236266":"平安乡","500236267":"红土乡","500236269":"石岗乡","500236272":"太和土家族乡","500236274":"鹤峰乡","500236275":"冯坪乡","500236276":"长安土家族乡","500236277":"龙桥土家族乡","500236278":"云雾土家族乡"},"500237":{"5002372":"红椿乡","50023711":"铜鼓镇","50023721":"建坪乡","500237001":"高唐街道","500237002":"龙门街道","500237101":"庙宇镇","500237102":"大昌镇","500237103":"福田镇","500237104":"龙溪镇","500237105":"双龙镇","500237106":"官阳镇","500237107":"骡坪镇","500237108":"抱龙镇","500237109":"官渡镇","500237111":"巫峡镇","500237207":"两坪乡","500237208":"曲尺乡","500237211":"大溪乡","500237214":"金坪乡","500237216":"平河乡","500237219":"当阳乡","500237222":"竹贤乡","500237225":"三溪乡","500237227":"培石乡","500237229":"笃坪乡","500237231":"邓家乡"},"500238":{"5002381":"城厢镇","5002384":"红池坝经济开发区","50023811":"峰灵镇","50023821":"长桂乡","50023824":"双阳乡","500238001":"宁河街道","500238002":"柏杨街道","500238101":"凤凰镇","500238102":"宁厂镇","500238103":"上磺镇","500238104":"古路镇","500238105":"文峰镇","500238106":"徐家镇","500238107":"白鹿镇","500238108":"尖山镇","500238109":"下堡镇","500238111":"塘坊镇","500238112":"朝阳镇","500238113":"田坝镇","500238114":"通城镇","500238115":"菱角镇","500238116":"蒲莲镇","500238117":"土城镇","500238204":"胜利乡","500238207":"大河乡","500238208":"天星乡","500238226":"鱼鳞乡","500238227":"乌龙乡","500238234":"中岗乡","500238237":"花台乡","500238239":"兰英乡","500238242":"中梁乡","500238243":"天元乡"},"500240":{"500240":"下路街道","50024011":"龙沙镇","50024021":"石家乡","500240101":"西沱镇","500240103":"悦崃镇","500240104":"临溪镇","500240105":"黄水镇","500240106":"马武镇","500240107":"沙子镇","500240108":"王场镇","500240109":"沿溪镇","500240111":"鱼池镇","500240112":"三河镇","500240113":"大歇镇","500240114":"桥头镇","500240115":"万朝镇","500240116":"冷水镇","500240117":"黄鹤镇","500240203":"黎场乡","500240204":"三星乡","500240205":"六塘乡","500240207":"三益乡","500240208":"王家乡","500240209":"河嘴乡","500240212":"枫木乡","500240213":"中益乡","500240214":"洗新乡","500240216":"龙潭乡","500240217":"新乐乡","500240218":"金铃乡","500240219":"金竹乡"},"500241":{"50024111":"雅江镇","500241001":"中和街道","500241002":"乌杨街道","500241003":"平凯街道","500241102":"清溪场镇","500241103":"隘口镇","500241104":"溶溪镇","500241105":"官庄镇","500241106":"龙池镇","500241107":"石堤镇","500241108":"峨溶镇","500241109":"洪安镇","500241111":"石耶镇","500241112":"梅江镇","500241113":"兰桥镇","500241114":"膏田镇","500241115":"溪口镇","500241116":"妙泉镇","500241117":"宋农镇","500241118":"里仁镇","500241119":"钟灵镇","500241201":"孝溪乡","500241207":"海洋乡","500241208":"大溪乡","500241211":"涌洞乡","500241214":"中平乡","500241215":"岑溪乡"},"500242":{"5002422":"涂市乡","50024211":"泔溪镇","50024221":"后坪乡","50024222":"清泉乡","500242001":"桃花源街道","500242002":"钟多街道","500242101":"龙潭镇","500242102":"麻旺镇","500242103":"酉酬镇","500242104":"大溪镇","500242105":"兴隆镇","500242106":"黑水镇","500242107":"丁市镇","500242108":"龚滩镇","500242109":"李溪镇","500242111":"酉水河镇","500242112":"苍岭镇","500242113":"小河镇","500242114":"板溪镇","500242202":"铜鼓乡","500242204":"可大乡","500242205":"偏柏乡","500242206":"五福乡","500242207":"木叶乡","500242208":"毛坝乡","500242209":"花田乡","500242211":"天馆乡","500242212":"宜居乡","500242213":"万木乡","500242214":"两罾乡","500242215":"板桥乡","500242216":"官清乡","500242217":"南腰界乡","500242218":"车田乡","500242219":"腴地乡","500242221":"庙溪乡","500242222":"浪坪乡","500242223":"双泉乡","500242224":"楠木乡"},"500243":{"50024311":"万足镇","50024321":"走马乡","500243001":"汉葭街道","500243002":"绍庆街道","500243003":"靛水街道","500243101":"保家镇","500243102":"郁山镇","500243103":"高谷镇","500243104":"桑柘镇","500243105":"鹿角镇","500243106":"黄家镇","500243107":"普子镇","500243108":"龙射镇","500243109":"连湖镇","500243111":"平安镇","500243112":"长生镇","500243113":"新田镇","500243114":"鞍子镇","500243115":"太原镇","500243116":"龙溪镇","500243117":"梅子垭镇","500243118":"大同镇","500243201":"岩东乡","500243202":"鹿鸣乡","500243204":"棣棠乡","500243206":"三义乡","500243207":"联合乡","500243208":"石柳乡","500243211":"芦塘乡","500243213":"乔梓乡","500243217":"诸佛乡","500243219":"桐楼乡","500243222":"善感乡","500243223":"双龙乡","500243224":"石盘乡","500243225":"大垭乡","500243226":"润溪乡","500243227":"朗溪乡","500243228":"龙塘乡"},"510000":{"510100":"成都市","510300":"自贡市","510400":"攀枝花市","510500":"泸州市","510600":"德阳市","510700":"绵阳市","510800":"广元市","510900":"遂宁市","511000":"内江市","511100":"乐山市","511300":"南充市","511400":"眉山市","511500":"宜宾市","511600":"广安市","511700":"达州市","511800":"雅安市","511900":"巴中市","512000":"资阳市","513200":"阿坝藏族羌族自治州","513300":"甘孜藏族自治州","513400":"凉山彝族自治州"},"510100":{"510104":"锦江区","510105":"青羊区","510106":"金牛区","510107":"武侯区","510108":"成华区","510112":"龙泉驿区","510113":"青白江区","510114":"新都区","510115":"温江区","510116":"双流区","510121":"金堂县","510124":"郫县","510129":"大邑县","510131":"蒲江县","510132":"新津县","510181":"都江堰市","510182":"彭州市","510183":"邛崃市","510184":"崇州市","510185":"简阳市"},"510300":{"510302":"自流井区","510303":"贡井区","510304":"大安区","510311":"沿滩区","510321":"荣县","510322":"富顺县"},"510400":{"510402":"东区","510403":"西区","510411":"仁和区","510421":"米易县","510422":"盐边县"},"510500":{"510502":"江阳区","510503":"纳溪区","510504":"龙马潭区","510521":"泸县","510522":"合江县","510524":"叙永县","510525":"古蔺县"},"510600":{"510603":"旌阳区","510623":"中江县","510626":"罗江县","510681":"广汉市","510682":"什邡市","510683":"绵竹市"},"510700":{"510703":"涪城区","510704":"游仙区","510705":"安州区","510722":"三台县","510723":"盐亭县","510725":"梓潼县","510726":"北川羌族自治县","510727":"平武县","510781":"江油市"},"510800":{"510802":"利州区","510811":"昭化区","510812":"朝天区","510821":"旺苍县","510822":"青川县","510823":"剑阁县","510824":"苍溪县"},"510900":{"510903":"船山区","510904":"安居区","510921":"蓬溪县","510922":"射洪县","510923":"大英县"},"511000":{"511002":"市中区","511011":"东兴区","511024":"威远县","511025":"资中县","511028":"隆昌县"},"511100":{"511102":"市中区","511111":"沙湾区","511112":"五通桥区","511113":"金口河区","511123":"犍为县","511124":"井研县","511126":"夹江县","511129":"沐川县","511132":"峨边彝族自治县","511133":"马边彝族自治县","511181":"峨眉山市"},"511300":{"511302":"顺庆区","511303":"高坪区","511304":"嘉陵区","511321":"南部县","511322":"营山县","511323":"蓬安县","511324":"仪陇县","511325":"西充县","511381":"阆中市"},"511400":{"511402":"东坡区","511403":"彭山区","511421":"仁寿县","511423":"洪雅县","511424":"丹棱县","511425":"青神县"},"511500":{"511502":"翠屏区","511503":"南溪区","511521":"宜宾县","511523":"江安县","511524":"长宁县","511525":"高县","511526":"珙县","511527":"筠连县","511528":"兴文县","511529":"屏山县"},"511600":{"511602":"广安区","511603":"前锋区","511621":"岳池县","511622":"武胜县","511623":"邻水县","511681":"华蓥市"},"511700":{"511702":"通川区","511703":"达川区","511722":"宣汉县","511723":"开江县","511724":"大竹县","511725":"渠县","511781":"万源市"},"511800":{"511802":"雨城区","511803":"名山区","511822":"荥经县","511823":"汉源县","511824":"石棉县","511825":"天全县","511826":"芦山县","511827":"宝兴县"},"511900":{"511902":"巴州区","511903":"恩阳区","511921":"通江县","511922":"南江县","511923":"平昌县"},"512000":{"512002":"雁江区","512021":"安岳县","512022":"乐至县"},"513200":{"513201":"马尔康市","513221":"汶川县","513222":"理县","513223":"茂县","513224":"松潘县","513225":"九寨沟县","513226":"金川县","513227":"小金县","513228":"黑水县","513230":"壤塘县","513231":"阿坝县","513232":"若尔盖县","513233":"红原县"},"513300":{"513301":"康定市","513322":"泸定县","513323":"丹巴县","513324":"九龙县","513325":"雅江县","513326":"道孚县","513327":"炉霍县","513328":"甘孜县","513329":"新龙县","513330":"德格县","513331":"白玉县","513332":"石渠县","513333":"色达县","513334":"理塘县","513335":"巴塘县","513336":"乡城县","513337":"稻城县","513338":"得荣县"},"513400":{"513401":"西昌市","513422":"木里藏族自治县","513423":"盐源县","513424":"德昌县","513425":"会理县","513426":"会东县","513427":"宁南县","513428":"普格县","513429":"布拖县","513430":"金阳县","513431":"昭觉县","513432":"喜德县","513433":"冕宁县","513434":"越西县","513435":"甘洛县","513436":"美姑县","513437":"雷波县"},"520000":{"520100":"贵阳市","520200":"六盘水市","520300":"遵义市","520400":"安顺市","520500":"毕节市","520600":"铜仁市","522300":"黔西南布依族苗族自治州","522600":"黔东南苗族侗族自治州","522700":"黔南布依族苗族自治州"},"520100":{"520102":"南明区","520103":"云岩区","520111":"花溪区","520112":"乌当区","520113":"白云区","520115":"观山湖区","520121":"开阳县","520122":"息烽县","520123":"修文县","520181":"清镇市"},"520200":{"520201":"钟山区","520203":"六枝特区","520221":"水城县","520222":"盘县"},"520300":{"520302":"红花岗区","520303":"汇川区","520304":"播州区","520322":"桐梓县","520323":"绥阳县","520324":"正安县","520325":"道真仡佬族苗族自治县","520326":"务川仡佬族苗族自治县","520327":"凤冈县","520328":"湄潭县","520329":"余庆县","520330":"习水县","520381":"赤水市","520382":"仁怀市"},"520400":{"520402":"西秀区","520403":"平坝区","520422":"普定县","520423":"镇宁布依族苗族自治县","520424":"关岭布依族苗族自治县","520425":"紫云苗族布依族自治县"},"520500":{"520502":"七星关区","520521":"大方县","520522":"黔西县","520523":"金沙县","520524":"织金县","520525":"纳雍县","520526":"威宁彝族回族苗族自治县","520527":"赫章县"},"520600":{"520602":"碧江区","520603":"万山区","520621":"江口县","520622":"玉屏侗族自治县","520623":"石阡县","520624":"思南县","520625":"印江土家族苗族自治县","520626":"德江县","520627":"沿河土家族自治县","520628":"松桃苗族自治县"},"522300":{"522301":"兴义市","522322":"兴仁县","522323":"普安县","522324":"晴隆县","522325":"贞丰县","522326":"望谟县","522327":"册亨县","522328":"安龙县"},"522600":{"522601":"凯里市","522622":"黄平县","522623":"施秉县","522624":"三穗县","522625":"镇远县","522626":"岑巩县","522627":"天柱县","522628":"锦屏县","522629":"剑河县","522630":"台江县","522631":"黎平县","522632":"榕江县","522633":"从江县","522634":"雷山县","522635":"麻江县","522636":"丹寨县"},"522700":{"522701":"都匀市","522702":"福泉市","522722":"荔波县","522723":"贵定县","522725":"瓮安县","522726":"独山县","522727":"平塘县","522728":"罗甸县","522729":"长顺县","522730":"龙里县","522731":"惠水县","522732":"三都水族自治县"},"530000":{"530100":"昆明市","530300":"曲靖市","530400":"玉溪市","530500":"保山市","530600":"昭通市","530700":"丽江市","530800":"普洱市","530900":"临沧市","532300":"楚雄彝族自治州","532500":"红河哈尼族彝族自治州","532600":"文山壮族苗族自治州","532800":"西双版纳傣族自治州","532900":"大理白族自治州","533100":"德宏傣族景颇族自治州","533300":"怒江傈僳族自治州","533400":"迪庆藏族自治州"},"530100":{"530102":"五华区","530103":"盘龙区","530111":"官渡区","530112":"西山区","530113":"东川区","530114":"呈贡区","530122":"晋宁县","530124":"富民县","530125":"宜良县","530126":"石林彝族自治县","530127":"嵩明县","530128":"禄劝彝族苗族自治县","530129":"寻甸回族彝族自治县","530181":"安宁市"},"530300":{"530302":"麒麟区","530303":"沾益区","530321":"马龙县","530322":"陆良县","530323":"师宗县","530324":"罗平县","530325":"富源县","530326":"会泽县","530381":"宣威市"},"530400":{"530402":"红塔区","530403":"江川区","530422":"澄江县","530423":"通海县","530424":"华宁县","530425":"易门县","530426":"峨山彝族自治县","530427":"新平彝族傣族自治县","530428":"元江哈尼族彝族傣族自治县"},"530500":{"530502":"隆阳区","530521":"施甸县","530523":"龙陵县","530524":"昌宁县","530581":"腾冲市"},"530600":{"530602":"昭阳区","530621":"鲁甸县","530622":"巧家县","530623":"盐津县","530624":"大关县","530625":"永善县","530626":"绥江县","530627":"镇雄县","530628":"彝良县","530629":"威信县","530630":"水富县"},"530700":{"530702":"古城区","530721":"玉龙纳西族自治县","530722":"永胜县","530723":"华坪县","530724":"宁蒗彝族自治县"},"530800":{"530802":"思茅区","530821":"宁洱哈尼族彝族自治县","530822":"墨江哈尼族自治县","530823":"景东彝族自治县","530824":"景谷傣族彝族自治县","530825":"镇沅彝族哈尼族拉祜族自治县","530826":"江城哈尼族彝族自治县","530827":"孟连傣族拉祜族佤族自治县","530828":"澜沧拉祜族自治县","530829":"西盟佤族自治县"},"530900":{"530902":"临翔区","530921":"凤庆县","530922":"云县","530923":"永德县","530924":"镇康县","530925":"双江拉祜族佤族布朗族傣族自治县","530926":"耿马傣族佤族自治县","530927":"沧源佤族自治县"},"532300":{"532301":"楚雄市","532322":"双柏县","532323":"牟定县","532324":"南华县","532325":"姚安县","532326":"大姚县","532327":"永仁县","532328":"元谋县","532329":"武定县","532331":"禄丰县"},"532500":{"532501":"个旧市","532502":"开远市","532503":"蒙自市","532504":"弥勒市","532523":"屏边苗族自治县","532524":"建水县","532525":"石屏县","532527":"泸西县","532528":"元阳县","532529":"红河县","532530":"金平苗族瑶族傣族自治县","532531":"绿春县","532532":"河口瑶族自治县"},"532600":{"532601":"文山市","532622":"砚山县","532623":"西畴县","532624":"麻栗坡县","532625":"马关县","532626":"丘北县","532627":"广南县","532628":"富宁县"},"532800":{"532801":"景洪市","532822":"勐海县","532823":"勐腊县"},"532900":{"532901":"大理市","532922":"漾濞彝族自治县","532923":"祥云县","532924":"宾川县","532925":"弥渡县","532926":"南涧彝族自治县","532927":"巍山彝族回族自治县","532928":"永平县","532929":"云龙县","532930":"洱源县","532931":"剑川县","532932":"鹤庆县"},"533100":{"533102":"瑞丽市","533103":"芒市","533122":"梁河县","533123":"盈江县","533124":"陇川县"},"533300":{"533301":"泸水市","533323":"福贡县","533324":"贡山独龙族怒族自治县","533325":"兰坪白族普米族自治县"},"533400":{"533401":"香格里拉市","533422":"德钦县","533423":"维西傈僳族自治县"},"540000":{"540100":"拉萨市","540200":"日喀则市","540300":"昌都市","540400":"林芝市","540500":"山南市","542400":"那曲地区","542500":"阿里地区"},"540100":{"540102":"城关区","540103":"堆龙德庆区","540121":"林周县","540122":"当雄县","540123":"尼木县","540124":"曲水县","540126":"达孜县","540127":"墨竹工卡县"},"540200":{"540202":"桑珠孜区","540221":"南木林县","540222":"江孜县","540223":"定日县","540224":"萨迦县","540225":"拉孜县","540226":"昂仁县","540227":"谢通门县","540228":"白朗县","540229":"仁布县","540230":"康马县","540231":"定结县","540232":"仲巴县","540233":"亚东县","540234":"吉隆县","540235":"聂拉木县","540236":"萨嘎县","540237":"岗巴县"},"540300":{"540302":"卡若区","540321":"江达县","540322":"贡觉县","540323":"类乌齐县","540324":"丁青县","540325":"察雅县","540326":"八宿县","540327":"左贡县","540328":"芒康县","540329":"洛隆县","540330":"边坝县"},"540400":{"540402":"巴宜区","540421":"工布江达县","540422":"米林县","540423":"墨脱县","540424":"波密县","540425":"察隅县","540426":"朗县"},"540500":{"540502":"乃东区","540521":"扎囊县","540522":"贡嘎县","540523":"桑日县","540524":"琼结县","540525":"曲松县","540526":"措美县","540527":"洛扎县","540528":"加查县","540529":"隆子县","540530":"错那县","540531":"浪卡子县"},"542400":{"542421":"那曲县","542422":"嘉黎县","542423":"比如县","542424":"聂荣县","542425":"安多县","542426":"申扎县","542427":"索县","542428":"班戈县","542429":"巴青县","542430":"尼玛县","542431":"双湖县"},"542500":{"542521":"普兰县","542522":"札达县","542523":"噶尔县","542524":"日土县","542525":"革吉县","542526":"改则县","542527":"措勤县"},"610000":{"610100":"西安市","610200":"铜川市","610300":"宝鸡市","610400":"咸阳市","610500":"渭南市","610600":"延安市","610700":"汉中市","610800":"榆林市","610900":"安康市","611000":"商洛市"},"610100":{"610102":"新城区","610103":"碑林区","610104":"莲湖区","610111":"灞桥区","610112":"未央区","610113":"雁塔区","610114":"阎良区","610115":"临潼区","610116":"长安区","610117":"高陵区","610122":"蓝田县","610124":"周至县","610125":"户县"},"610200":{"610202":"王益区","610203":"印台区","610204":"耀州区","610222":"宜君县"},"610300":{"610302":"渭滨区","610303":"金台区","610304":"陈仓区","610322":"凤翔县","610323":"岐山县","610324":"扶风县","610326":"眉县","610327":"陇县","610328":"千阳县","610329":"麟游县","610330":"凤县","610331":"太白县"},"610400":{"610402":"秦都区","610403":"杨陵区","610404":"渭城区","610422":"三原县","610423":"泾阳县","610424":"乾县","610425":"礼泉县","610426":"永寿县","610427":"彬县","610428":"长武县","610429":"旬邑县","610430":"淳化县","610431":"武功县","610481":"兴平市"},"610500":{"610502":"临渭区","610503":"华州区","610522":"潼关县","610523":"大荔县","610524":"合阳县","610525":"澄城县","610526":"蒲城县","610527":"白水县","610528":"富平县","610581":"韩城市","610582":"华阴市"},"610600":{"610602":"宝塔区","610603":"安塞区","610621":"延长县","610622":"延川县","610623":"子长县","610625":"志丹县","610626":"吴起县","610627":"甘泉县","610628":"富县","610629":"洛川县","610630":"宜川县","610631":"黄龙县","610632":"黄陵县"},"610700":{"610702":"汉台区","610721":"南郑县","610722":"城固县","610723":"洋县","610724":"西乡县","610725":"勉县","610726":"宁强县","610727":"略阳县","610728":"镇巴县","610729":"留坝县","610730":"佛坪县"},"610800":{"610802":"榆阳区","610803":"横山区","610821":"神木县","610822":"府谷县","610824":"靖边县","610825":"定边县","610826":"绥德县","610827":"米脂县","610828":"佳县","610829":"吴堡县","610830":"清涧县","610831":"子洲县"},"610900":{"610902":"汉滨区","610921":"汉阴县","610922":"石泉县","610923":"宁陕县","610924":"紫阳县","610925":"岚皋县","610926":"平利县","610927":"镇坪县","610928":"旬阳县","610929":"白河县"},"611000":{"611002":"商州区","611021":"洛南县","611022":"丹凤县","611023":"商南县","611024":"山阳县","611025":"镇安县","611026":"柞水县"},"620000":{"620100":"兰州市","620200":"嘉峪关市","620300":"金昌市","620400":"白银市","620500":"天水市","620600":"武威市","620700":"张掖市","620800":"平凉市","620900":"酒泉市","621000":"庆阳市","621100":"定西市","621200":"陇南市","622900":"临夏回族自治州","623000":"甘南藏族自治州"},"620100":{"620102":"城关区","620103":"七里河区","620104":"西固区","620105":"安宁区","620111":"红古区","620121":"永登县","620122":"皋兰县","620123":"榆中县"},"620200":{},"620300":{"620302":"金川区","620321":"永昌县"},"620400":{"620402":"白银区","620403":"平川区","620421":"靖远县","620422":"会宁县","620423":"景泰县"},"620500":{"620502":"秦州区","620503":"麦积区","620521":"清水县","620522":"秦安县","620523":"甘谷县","620524":"武山县","620525":"张家川回族自治县"},"620600":{"620602":"凉州区","620621":"民勤县","620622":"古浪县","620623":"天祝藏族自治县"},"620700":{"620702":"甘州区","620721":"肃南裕固族自治县","620722":"民乐县","620723":"临泽县","620724":"高台县","620725":"山丹县"},"620800":{"620802":"崆峒区","620821":"泾川县","620822":"灵台县","620823":"崇信县","620824":"华亭县","620825":"庄浪县","620826":"静宁县"},"620900":{"620902":"肃州区","620921":"金塔县","620922":"瓜州县","620923":"肃北蒙古族自治县","620924":"阿克塞哈萨克族自治县","620981":"玉门市","620982":"敦煌市"},"621000":{"621002":"西峰区","621021":"庆城县","621022":"环县","621023":"华池县","621024":"合水县","621025":"正宁县","621026":"宁县","621027":"镇原县"},"621100":{"621102":"安定区","621121":"通渭县","621122":"陇西县","621123":"渭源县","621124":"临洮县","621125":"漳县","621126":"岷县"},"621200":{"621202":"武都区","621221":"成县","621222":"文县","621223":"宕昌县","621224":"康县","621225":"西和县","621226":"礼县","621227":"徽县","621228":"两当县"},"622900":{"622901":"临夏市","622921":"临夏县","622922":"康乐县","622923":"永靖县","622924":"广河县","622925":"和政县","622926":"东乡族自治县","622927":"积石山保安族东乡族撒拉族自治县"},"623000":{"623001":"合作市","623021":"临潭县","623022":"卓尼县","623023":"舟曲县","623024":"迭部县","623025":"玛曲县","623026":"碌曲县","623027":"夏河县"},"630000":{"630100":"西宁市","630200":"海东市","632200":"海北藏族自治州","632300":"黄南藏族自治州","632500":"海南藏族自治州","632600":"果洛藏族自治州","632700":"玉树藏族自治州","632800":"海西蒙古族藏族自治州"},"630100":{"630102":"城东区","630103":"城中区","630104":"城西区","630105":"城北区","630121":"大通回族土族自治县","630122":"湟中县","630123":"湟源县"},"630200":{"630202":"乐都区","630203":"平安区","630222":"民和回族土族自治县","630223":"互助土族自治县","630224":"化隆回族自治县","630225":"循化撒拉族自治县"},"632200":{"632221":"门源回族自治县","632222":"祁连县","632223":"海晏县","632224":"刚察县"},"632300":{"632321":"同仁县","632322":"尖扎县","632323":"泽库县","632324":"河南蒙古族自治县"},"632500":{"632521":"共和县","632522":"同德县","632523":"贵德县","632524":"兴海县","632525":"贵南县"},"632600":{"632621":"玛沁县","632622":"班玛县","632623":"甘德县","632624":"达日县","632625":"久治县","632626":"玛多县"},"632700":{"632701":"玉树市","632722":"杂多县","632723":"称多县","632724":"治多县","632725":"囊谦县","632726":"曲麻莱县"},"632800":{"632801":"格尔木市","632802":"德令哈市","632821":"乌兰县","632822":"都兰县","632823":"天峻县"},"640000":{"640100":"银川市","640200":"石嘴山市","640300":"吴忠市","640400":"固原市","640500":"中卫市"},"640100":{"640104":"兴庆区","640105":"西夏区","640106":"金凤区","640121":"永宁县","640122":"贺兰县","640181":"灵武市"},"640200":{"640202":"大武口区","640205":"惠农区","640221":"平罗县"},"640300":{"640302":"利通区","640303":"红寺堡区","640323":"盐池县","640324":"同心县","640381":"青铜峡市"},"640400":{"640402":"原州区","640422":"西吉县","640423":"隆德县","640424":"泾源县","640425":"彭阳县"},"640500":{"640502":"沙坡头区","640521":"中宁县","640522":"海原县"},"650000":{"650100":"乌鲁木齐市","650200":"克拉玛依市","650400":"吐鲁番市","650500":"哈密市","652300":"昌吉回族自治州","652700":"博尔塔拉蒙古自治州","652800":"巴音郭楞蒙古自治州","652900":"阿克苏地区","653000":"克孜勒苏柯尔克孜自治州","653100":"喀什地区","653200":"和田地区","654000":"伊犁哈萨克自治州","654200":"塔城地区","654300":"阿勒泰地区","659001":"石河子市","659002":"阿拉尔市","659003":"图木舒克市","659004":"五家渠市","659006":"铁门关市"},"650100":{"650102":"天山区","650103":"沙依巴克区","650104":"新市区","650105":"水磨沟区","650106":"头屯河区","650107":"达坂城区","650109":"米东区","650121":"乌鲁木齐县"},"650200":{"650202":"独山子区","650203":"克拉玛依区","650204":"白碱滩区","650205":"乌尔禾区"},"650400":{"650402":"高昌区","650421":"鄯善县","650422":"托克逊县"},"650500":{"650502":"伊州区","650521":"巴里坤哈萨克自治县","650522":"伊吾县"},"652300":{"652301":"昌吉市","652302":"阜康市","652323":"呼图壁县","652324":"玛纳斯县","652325":"奇台县","652327":"吉木萨尔县","652328":"木垒哈萨克自治县"},"652700":{"652701":"博乐市","652702":"阿拉山口市","652722":"精河县","652723":"温泉县"},"652800":{"652801":"库尔勒市","652822":"轮台县","652823":"尉犁县","652824":"若羌县","652825":"且末县","652826":"焉耆回族自治县","652827":"和静县","652828":"和硕县","652829":"博湖县"},"652900":{"652901":"阿克苏市","652922":"温宿县","652923":"库车县","652924":"沙雅县","652925":"新和县","652926":"拜城县","652927":"乌什县","652928":"阿瓦提县","652929":"柯坪县"},"653000":{"653001":"阿图什市","653022":"阿克陶县","653023":"阿合奇县","653024":"乌恰县"},"653100":{"653101":"喀什市","653121":"疏附县","653122":"疏勒县","653123":"英吉沙县","653124":"泽普县","653125":"莎车县","653126":"叶城县","653127":"麦盖提县","653128":"岳普湖县","653129":"伽师县","653130":"巴楚县","653131":"塔什库尔干塔吉克自治县"},"653200":{"653201":"和田市","653221":"和田县","653222":"墨玉县","653223":"皮山县","653224":"洛浦县","653225":"策勒县","653226":"于田县","653227":"民丰县"},"654000":{"654002":"伊宁市","654003":"奎屯市","654004":"霍尔果斯市","654021":"伊宁县","654022":"察布查尔锡伯自治县","654023":"霍城县","654024":"巩留县","654025":"新源县","654026":"昭苏县","654027":"特克斯县","654028":"尼勒克县"},"654200":{"654201":"塔城市","654202":"乌苏市","654221":"额敏县","654223":"沙湾县","654224":"托里县","654225":"裕民县","654226":"和布克赛尔蒙古自治县"},"654300":{"654301":"阿勒泰市","654321":"布尔津县","654322":"富蕴县","654323":"福海县","654324":"哈巴河县","654325":"青河县","654326":"吉木乃县"},"659001":{"6590011":"北泉镇","6590015":"兵团一五二团","659001001":"新城街道","659001002":"向阳街道","659001003":"红山街道","659001004":"老街街道","659001005":"东城街道","659001101":"石河子镇"},"659002":{"6590022":"托喀依乡","6590025":"兵团七团","65900252":"兵团三团","659002001":"金银川路街道","659002002":"幸福路街道","659002003":"青松路街道","659002004":"南口街道","659002402":"工业园区","659002501":"兵团八团","659002503":"兵团十团","659002504":"兵团十一团","659002505":"兵团十二团","659002506":"兵团十三团","659002507":"兵团十四团","659002509":"兵团十六团","659002511":"兵团第一师水利水电工程处","659002512":"兵团第一师塔里木灌区水利管理处","659002513":"阿拉尔农场","659002514":"兵团第一师幸福农场","659002515":"中心监狱","659002516":"兵团一团","659002517":"兵团农一师沙井子水利管理处","659002518":"西工业园区管理委员会","659002519":"兵团二团"},"659003":{"65900351":"兵团五十团","659003001":"齐干却勒街道","659003002":"前海街道","659003003":"永安坝街道","659003504":"兵团四十四团","659003509":"兵团四十九团","659003511":"兵团五十一团","659003513":"兵团五十三团","659003514":"兵团图木舒克市喀拉拜勒镇"},"659004":{"6590045":"兵团一零一团","659004001":"军垦路街道","659004002":"青湖路街道","659004003":"人民路街道","659004501":"兵团一零二团","659004502":"兵团一零三团"},"659006":{"6590061":"博古其镇","659006101":"双丰镇"},"710000":{"710100":"台湾省"},"710100":{"710101":"金门","710102":"连江","710103":"苗栗","710104":"南投","710105":"澎湖","710106":"屏东","710107":"台东","710108":"台中","710109":"台南","710110":"台北","710111":"桃园","710112":"云林","710113":"新北","710114":"彰化","710115":"嘉义","710116":"新竹","710117":"花莲","710118":"宜兰","710119":"高雄","710120":"基隆"},"810000":{"810101":"中西区","810102":"东区","810103":"九龙城区","810104":"观塘区","810105":"深水埗区","810106":"湾仔区","810107":"黄大仙区","810108":"油尖旺区","810109":"离岛区","810110":"葵青区","810111":"北区","810112":"西贡区","810113":"沙田区","810114":"屯门区","810115":"大埔区","810116":"荃湾区","810117":"元朗区","810118":"香港","810119":"九龙","810120":"新界"},"820000":{"820101":"离岛","820102":"澳门半岛","820103":"凼仔","820104":"路凼城","820105":"路环"},"910000":{"810000":"香港特别行政区","820000":"澳门特别行政区"}};

var provinceObj = pcaa['86'];
var provinceArr = Object.entries(provinceObj);
var getAreaData = function (province, city) {
    var tempProvice = province;
    if (!province)
        tempProvice = {
            key: provinceArr[0][0],
            value: provinceArr[0][1]
        };
    var cityArr = Object.entries(pcaa[tempProvice.key]);
    var districtArr = Object.entries(pcaa[city ? city.key : cityArr[0][0]]);
    return {
        province: provinceArr,
        city: cityArr,
        district: districtArr
    };
};

var AlipayMutiSelect = /** @class */ (function (_super) {
    __extends(AlipayMutiSelect, _super);
    function AlipayMutiSelect(props) {
        return _super.call(this, props) || this;
    }
    AlipayMutiSelect.prototype.updateData = function () {
        var multiSelector = this.props.multiSelector;
        var range = (multiSelector && multiSelector.range) || [];
        var rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        var value = (multiSelector && multiSelector.value) || [];
        if (value.length) {
            var selected = range.map(function (list, index) { return list[value[index]]; });
            this.setState({
                selectedValue: selected
                    .map(function (item) { return (typeof item === 'string' ? item : item[rangeKey]); })
                    .join(',')
            });
        }
        else {
            this.setState({
                selectedValue: range
                    .map(function (item) { return item[0]; })
                    .map(function (item) { return (typeof item === 'string' ? item : item[rangeKey]); })
                    .join(',')
            });
        }
        this.setState({
            lastSelected: value.length ? value : range.map(function () { return 0; })
        });
    };
    AlipayMutiSelect.prototype.componentDidMount = function () {
        this.updateData();
    };
    AlipayMutiSelect.prototype.onClick = function () {
        this.setState({
            show: true
        });
    };
    AlipayMutiSelect.prototype.onConfirm = function () {
        var multiSelector = this.props.multiSelector;
        var range = (multiSelector && multiSelector.range) || [];
        var rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        var current = range.map(function (item) {
            return typeof item[0] === 'string' ? item : item[rangeKey];
        });
        this.props.onChange && this.props.onChange(this.state.tempSelected);
        this.setState({
            show: false,
            selectedValue: this.state.tempSelected
                .map(function (num, index) { return current[index][num]; })
                .join(','),
            lastSelected: this.state.tempSelected
        });
    };
    AlipayMutiSelect.prototype.onCancel = function () {
        this.props.onCancel && this.props.onCancel(this.state.lastSelected);
        this.setState({
            show: false,
            tempSelected: this.state.lastSelected
        });
    };
    AlipayMutiSelect.prototype.tempChangeValue = function (e) {
        var value = e.detail.value;
        this.props.onColumnChange && this.props.onColumnChange(value);
        this.setState({
            tempSelected: value
        });
    };
    AlipayMutiSelect.prototype.render = function () {
        var _this = this;
        var multiSelector = this.props.multiSelector;
        var range = (multiSelector && multiSelector.range) || [];
        var rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        var value = (multiSelector && multiSelector.value) || [];
        return (React__default['default'].createElement(components.View, { className: classNames(['cu-form-picker']), onClick: this.onClick.bind(this) },
            React__default['default'].createElement(components.View, { className: 'picker' }, this.state.selectedValue),
            React__default['default'].createElement(ClDrawer, { closeWithShadow: true, show: this.state.show, onCancel: function () {
                    _this.setState({
                        show: false
                    });
                } },
                React__default['default'].createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
                    React__default['default'].createElement(ClLayout, { padding: 'large', paddingDirection: 'horizontal' },
                        React__default['default'].createElement(ClFlex, { justify: 'between' },
                            React__default['default'].createElement(components.View, { onClick: this.onCancel.bind(this) },
                                React__default['default'].createElement(ClText, { text: '\u53D6\u6D88', textColor: 'green' })),
                            React__default['default'].createElement(components.View, { onClick: this.onConfirm.bind(this) },
                                React__default['default'].createElement(ClText, { text: '\u786E\u5B9A', textColor: 'green' }))))),
                React__default['default'].createElement(components.PickerView, { value: value, onChange: this.tempChangeValue.bind(this) }, range.map(function (itemList, index) {
                    return (React__default['default'].createElement(components.PickerViewColumn, { key: 'key-' + index }, itemList.map(function (item, index) {
                        var name = typeof item !== 'string' ? item[rangeKey] : item;
                        return React__default['default'].createElement(components.View, { key: 'key-' + index }, name);
                    })));
                })))));
    };
    AlipayMutiSelect.options = {
        addGlobalClass: true
    };
    AlipayMutiSelect.state = {
        show: false,
        selectedValue: '',
        tempSelected: [],
        lastSelected: []
    };
    return AlipayMutiSelect;
}(React.Component));

function ClSelect(props) {
    var selector = {
        range: (props.selector && props.selector.range) || [],
        value: (props.selector && props.selector.value) || 0,
        rangeKey: (props.selector && props.selector.rangeKey) || undefined
    };
    var mutiSelector = {
        range: (props.multiSelector && props.multiSelector.range) || [],
        value: (props.multiSelector && props.multiSelector.value) || [0, 0],
        rangeKey: (props.multiSelector && props.multiSelector.rangeKey) || undefined
    };
    var timeSelector = {
        value: (props.time && props.time.value) || '00:00',
        start: (props.time && props.time.start) || '00:00',
        end: (props.time && props.time.end) || '23:59'
    };
    var dateSelector = {
        value: (props.date && props.date.value) ||
            getNowDate((props.date && props.date.fields) || 'day'),
        fields: (props.date && props.date.fields) || 'day',
        start: (props.date && props.date.start) || '',
        end: (props.date && props.date.end) || ''
    };
    var getRegionData = function (province, city) {
        var regionObjData = getAreaData(province, city);
        var provinceArr = regionObjData.province.map(function (item) { return ({
            key: item[0],
            value: item[1]
        }); });
        var cityArr = regionObjData.city.map(function (item) { return ({
            key: item[0],
            value: item[1]
        }); });
        var districtArr = regionObjData.district.map(function (item) { return ({
            key: item[0],
            value: item[1]
        }); });
        return [provinceArr, cityArr, districtArr];
    };
    var regionSelector = {
        value: (props.region && props.region.value) ||
            getRegionData().map(function (item) { return item[0]; })
    };
    // 单选
    var getSelectorValue = function (index) {
        return selector.rangeKey
            ? selector.range[index][selector.rangeKey]
            : selector.range[index];
    };
    var _a = __read(React.useState(function () {
        return getSelectorValue(selector.value);
    }), 2), selected = _a[0], setSelected = _a[1];
    var setSelect = function (index) {
        var value = getSelectorValue(index);
        setSelected(value);
    };
    // 多选
    var getMutiSelectorValue = function (mutiIndex) {
        var value = [];
        mutiSelector.range.forEach(function (item, index) {
            var rangeValue = mutiIndex[index];
            var temp = mutiSelector.rangeKey
                ? item[rangeValue][mutiSelector.rangeKey]
                : item[rangeValue];
            value.push(temp);
        });
        return value.join(',');
    };
    var _b = __read(React.useState(function () {
        return getMutiSelectorValue(mutiSelector.value);
    }), 2), mutiSelected = _b[0], setMutiSelected = _b[1];
    var setMutiSelect = function (index) {
        setMutiSelected(getMutiSelectorValue(index));
    };
    // 时间选择
    var getTimeSelectorValue = function (value) { return value; };
    var _c = __read(React.useState(function () {
        return getTimeSelectorValue(timeSelector.value);
    }), 2), timeSelected = _c[0], setTimeSelected = _c[1];
    var setTimeSelect = function (value) {
        setTimeSelected(getTimeSelectorValue(value));
    };
    // 日期选择
    var getDateSelectorValue = function (value) { return value; };
    var _d = __read(React.useState(function () {
        return getDateSelectorValue(dateSelector.value);
    }), 2), dateSelected = _d[0], setDateSelected = _d[1];
    var setDateSelect = function (value) {
        setDateSelected(getDateSelectorValue(value));
    };
    // 地区选择
    var _e = __read(React.useState(getRegionData.apply(void 0, __spread(regionSelector.value))), 2), areaData = _e[0], setAreaData = _e[1];
    var getRegionSelectorValue = function (value) {
        return value.map(function (item) { return item.value; }).join(',');
    };
    var _f = __read(React.useState(function () {
        return getRegionSelectorValue(regionSelector.value);
    }), 2), regionSelected = _f[0], setRegionSelected = _f[1];
    var _g = __read(React.useState(regionSelector.value), 2), confirmRegion = _g[0], setConfirmRegion = _g[1];
    var _h = __read(React.useState(areaData), 2), originAreaData = _h[0], setOriginAreaData = _h[1];
    var setRegionSelect = function (value) {
        setRegionSelected(getRegionSelectorValue(value));
    };
    // 单选触发
    var onSelectorChange = function (e) {
        var index = e.detail.value;
        setSelect(index);
        props.onChange && props.onChange(index);
    };
    // 多选触发
    var onMutiSelectorChange = function (e) {
        var index = e.detail.value;
        setMutiSelect(index);
        props.onChange && props.onChange(index);
    };
    // 多选滚动触发
    var onMutiSelectorColumChange = function (e) {
        props.onColumnChange && props.onColumnChange(e.detail);
    };
    // 时间触发
    var onTimeSelectorChange = function (e) {
        var index = e.detail.value;
        setTimeSelect(index);
        props.onChange && props.onChange(index);
    };
    // 日期触发
    var onDateSelectorChange = function (e) {
        var index = e.detail.value;
        setDateSelect(index);
        props.onChange && props.onChange(index);
    };
    var origin = regionSelector.value.map(function (item, index) {
        return originAreaData[index].findIndex(function (obj) { return obj.key === item.key; });
    });
    var onCancel = function (e) {
        setAreaData(originAreaData);
        setTempSelect(confirmRegion.map(function (item, index) {
            return originAreaData[index].findIndex(function (origin) { return origin.key === item.key; });
        }));
        props.onCancel && props.onCancel(e);
    };
    // 地区触发
    var onRegionSelectorChange = function (e) {
        var detail = e.detail.value;
        var dataSelected = detail.map(function (key, index) { return areaData[index][key]; });
        setRegionSelect(dataSelected);
        setOriginAreaData(areaData);
        setConfirmRegion(dataSelected);
        props.onChange && props.onChange(dataSelected);
    };
    var _j = __read(React.useState(origin), 2), tempSelect = _j[0], setTempSelect = _j[1];
    var onRegionMutiSelectorColumChange = function (e) {
        var detail = e.detail;
        var column = detail.column;
        var index = e.detail.value;
        tempSelect[column] = index;
        if (column !== 2) {
            if (column === 0) {
                tempSelect[1] = 0;
                tempSelect[2] = 0;
                setAreaData(getRegionData(areaData[0][tempSelect[0]]));
            }
            if (column === 1) {
                tempSelect[2] = 0;
                setAreaData(getRegionData(areaData[0][tempSelect[0]], areaData[1][tempSelect[1]]));
            }
        }
        setTempSelect(tempSelect);
    };
    React.useMemo(function () {
        switch (props.mode) {
            case 'selector': {
                setSelected(getSelectorValue(selector.value));
                break;
            }
            case 'multiSelector': {
                setMutiSelected(getMutiSelectorValue(mutiSelector.value));
                break;
            }
            case 'region': {
                setRegionSelected(getRegionSelectorValue(regionSelector.value));
                var area_1 = getRegionData.apply(void 0, __spread(regionSelector.value));
                setAreaData(area_1);
                var origin_1 = regionSelector.value.map(function (item, index) {
                    return area_1[index].findIndex(function (obj) { return obj.key === item.key; });
                });
                setTempSelect(origin_1);
                break;
            }
            case 'date': {
                setDateSelected(getDateSelectorValue(dateSelector.value));
                break;
            }
            case 'time': {
                setTimeSelected(getTimeSelectorValue(timeSelector.value));
                break;
            }
        }
    }, [
        props.selector,
        props.region,
        props.date,
        props.time,
        props.multiSelector
    ]);
    // 单选组件
    var selectorComponent = (React__default['default'].createElement(components.Picker, { mode: 'selector', range: selector.range, rangeKey: selector.rangeKey, value: selector.value || 0, onChange: onSelectorChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        React__default['default'].createElement(components.View, { className: 'picker' }, selected)));
    // 多选组件
    var mutiSelectorComponent = (React__default['default'].createElement(components.Picker, { mode: 'multiSelector', range: mutiSelector.range, rangeKey: mutiSelector.rangeKey, value: mutiSelector.value, onChange: onMutiSelectorChange, onColumnChange: onMutiSelectorColumChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        React__default['default'].createElement(components.View, { className: 'picker' }, mutiSelected)));
    // alipay 多选
    var alipayMutiSelectorComponent = React__default['default'].createElement(AlipayMutiSelect, __assign({}, props));
    // 时间选择组件
    var timeSelectorComponent = (React__default['default'].createElement(components.Picker, { mode: 'time', value: timeSelector.value, start: timeSelector.start, end: timeSelector.end, onChange: onTimeSelectorChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        React__default['default'].createElement(components.View, { className: 'picker' }, timeSelected)));
    // 日期选择组件
    var dateSelectorComponent = (React__default['default'].createElement(components.Picker, { mode: 'date', value: dateSelector.value, start: dateSelector.start, end: dateSelector.end, fields: dateSelector.fields, onCancel: onCancel, onChange: onDateSelectorChange, className: 'longSelect' },
        React__default['default'].createElement(components.View, { className: 'picker' }, dateSelected)));
    // 地区选择组件
    var regionSelectorComponent = (React__default['default'].createElement(components.Picker, { mode: 'multiSelector', range: areaData, rangeKey: 'value', value: tempSelect, onChange: onRegionSelectorChange, onColumnChange: onRegionMutiSelectorColumChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        React__default['default'].createElement(components.View, { className: 'picker' }, regionSelected)));
    var title = props.title;
    return (React__default['default'].createElement(components.View, { className: classNames("cu-form-group " + (props.disabled ? 'text-gray' : ''), props.className), style: Object.assign({}, props.style) },
        React__default['default'].createElement(components.View, { className: 'title' }, title || ''),
        props.mode === 'selector' ? selectorComponent : '',
        props.mode === 'multiSelector' && !isAliPay ? mutiSelectorComponent : '',
        props.mode === 'multiSelector' && isAliPay
            ? alipayMutiSelectorComponent
            : '',
        props.mode === 'time' ? timeSelectorComponent : '',
        props.mode === 'date' ? dateSelectorComponent : '',
        props.mode === 'region' ? regionSelectorComponent : ''));
}
ClSelect.options = {
    addGlobalClass: true
};
ClSelect.defaultProps = {
    mode: 'selector',
    selector: [],
    multiSelector: [],
    time: [],
    date: [],
    region: []
};

function ClShopBar(props) {
    var _a = __read(React.useState(props.tabs || []), 2), tabs = _a[0], setTabs = _a[1];
    var _b = __read(React.useState(props.buttons || []), 2), buttons = _b[0], setButtons = _b[1];
    var onClickTab = function (index) {
        props.onClickTab && props.onClickTab(index);
    };
    var onClickButton = function (index) {
        props.onClickButton && props.onClickButton(index);
    };
    var bgColorClassName = BG_COLOR_LIST[props.bgColor || 'white'];
    React.useMemo(function () {
        var initTabs = props.tabs || [];
        var tabs = initTabs.map(function (item) { return (__assign({ id: generateId() }, item)); });
        setTabs(tabs);
    }, [props.tabs]);
    React.useMemo(function () {
        var initButtons = props.buttons || [];
        var buttons = initButtons.map(function (item) { return (__assign({ id: generateId() }, item)); });
        setButtons(buttons);
    }, [props.buttons]);
    var tabsComponent = tabs.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: item.id, className: 'ClShopBar__tab' },
        React__default['default'].createElement(ClButton, __assign({ bgColor: props.bgColor, shadow: false }, item.moreAction, { onClick: function () {
                onClickTab(index);
            } }),
            React__default['default'].createElement(components.View, { className: 'action', style: {
                    background: 'transparent'
                } },
                React__default['default'].createElement(components.View, { className: "" + (item.icon ? 'cuIcon-' + item.icon : '') }, item.badge !== false ? (React__default['default'].createElement(components.View, { className: 'cu-tag badge' }, item.badge === true ? '' : item.badge)) : ('')),
                React__default['default'].createElement(components.View, null, item.title))))); });
    var buttonsComponent = buttons.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: item.id, className: BG_COLOR_LIST[item.bgColor || 'red'] + " submit", onClick: function () {
            onClickButton(index);
        } }, item.text)); });
    return (React__default['default'].createElement(components.View, { className: classNames("cu-bar " + bgColorClassName + " tabbar " + (props.safeArea ? 'safe-area' : '') + " shop " + (props.border ? 'border' : ''), props.className), style: Object.assign(props.fix
            ? { position: 'fixed', bottom: '0', width: '100vw', zIndex: '10' }
            : {}, props.style) },
        tabsComponent,
        buttonsComponent));
}
ClShopBar.options = {
    addGlobalClass: true
};
ClShopBar.defaultProps = {
    bgColor: 'white',
    tabs: [],
    buttons: [],
    border: false,
    onClickButton: function () { },
    onClickTab: function () { },
    safeArea: true
};

var ClStep = /** @class */ (function (_super) {
    __extends(ClStep, _super);
    function ClStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ClStep.prototype.render = function () {
        var _this = this;
        var stepTypeClassName = this.props.type === 'arrow' ? 'steps-arrow' : '';
        var activeColorClassName = this.props.activeColor
            ? TEXT_COLOR_LIST[this.props.activeColor]
            : '';
        var step = this.props.step || 0;
        var tabsComponents = this.props.steps.map(function (item, index) { return (React__default['default'].createElement(components.View, { className: "cu-item " + (step > index ? activeColorClassName : ''), key: index },
            _this.props.stepTitlePosition === 'top' ? item.title : '',
            React__default['default'].createElement(components.Text, { className: (_this.props.stepIconType === 'number' ? 'num' : '') + " " + (_this.props.stepIconType === 'custom' ? 'cuIcon-' + item.icon : ''), "data-index": index + 1 }),
            _this.props.stepTitlePosition === 'bottom' ? item.title : '')); });
        return (React__default['default'].createElement(components.View, { className: classNames("cu-steps " + stepTypeClassName + "  " + (this.props.stepTitlePosition === 'top' ? 'steps-bottom' : ''), this.props.className), style: Object.assign({}, this.props.style) }, tabsComponents));
    };
    ClStep.options = {
        addGlobalClass: true
    };
    ClStep.defaultProps = {
        steps: [],
        type: 'line',
        activeColor: 'blue',
        step: 0,
        stepIconType: 'number',
        stepTitlePosition: 'bottom'
    };
    return ClStep;
}(React__default['default'].Component));

function ClSwiper(props) {
    var _a = __read(React.useState(props.list || []), 2), listState = _a[0], setListState = _a[1];
    React.useEffect(function () {
        var list = props.list || [];
        setListState(list.map(function (item) {
            item.cu_swiper_id = generateId();
            return item;
        }));
    }, [props.list]);
    var swiperTypeClassName = function (type) {
        return type ? type + "-swiper" : 'screen-swiper';
    };
    var dotClassName = function (type) { return (type === 'round' ? type + "-dot" : 'square-dot'); };
    var duration = props.duration || 500;
    var interval = props.interval || 5000;
    var indicatorDots = !!props.indicatorDots;
    var indicatorColor = props.indicatorColor || '#000';
    var indicatorActiveColor = props.indicatorActiveColor || '#FFF';
    var circular = !!props.circular;
    var autoplay = function (autoplayData) { return !!autoplayData; };
    var loop = function (loopData) { return !!loopData; };
    var muted = function (mutedData) { return !!mutedData; };
    var showPlayBtn = function (showPlayBtnData) { return !!showPlayBtnData; };
    var controls = function (controlsData) { return !!controlsData; };
    var title = function (titleData) { return titleData; };
    var poster = function (posterData) { return posterData; };
    var list = listState || [];
    var autoplaySwiper = props.autoplay;
    var _b = __read(React.useState(0), 2), cur = _b[0], setCur = _b[1];
    var onChange = function (e) {
        var current = e.detail.current;
        setCur(current);
        props.onChange && props.onChange(current);
    };
    var onClick = function (index) {
        props.onClick && props.onClick(index);
    };
    // const onTouchMove = e => {}
    // const onTouchStart = e => {}
    // const onTouchEnd = e => {}
    var renderImg = function (item) { return (React__default['default'].createElement(components.Image, { src: item.url || '', mode: 'aspectFill' })); };
    var renderVideo = function (item) { return (React__default['default'].createElement(components.Video, { src: item.url || '', autoplay: autoplay(item.autoplay), loop: loop(item.loop), muted: muted(item.muted), showPlayBtn: showPlayBtn(item.showPlayBtn), controls: controls(item.controls), objectFit: 'cover', title: title(item.title), poster: poster(item.poster) })); };
    var screenComponent = (React__default['default'].createElement(components.Swiper, { className: classNames(dotClassName(props.dot) + " " + swiperTypeClassName(props.type), props.className), style: Object.assign({}, props.style), circular: circular, indicatorDots: indicatorDots, indicatorColor: indicatorColor, indicatorActiveColor: indicatorActiveColor, interval: interval, duration: duration, onChange: onChange, autoplay: autoplaySwiper }, list.map(function (item, index) { return (React__default['default'].createElement(components.SwiperItem, { key: 'key-' + index, onClick: function () {
            onClick(index);
        } },
        item.type !== 'video' ? renderImg(item) : '',
        item.type === 'video' ? renderVideo(item) : '')); })));
    var cardComponent = (React__default['default'].createElement(components.Swiper, { className: classNames(dotClassName(props.dot) + " " + swiperTypeClassName(props.type), props.className), style: Object.assign({}, props.style), circular: circular, indicatorDots: indicatorDots, indicatorColor: indicatorColor, indicatorActiveColor: indicatorActiveColor, interval: interval, duration: duration, onChange: onChange, autoplay: autoplaySwiper, nextMargin: Taro.pxTransform(isAliPay ? 70 * screenPercent : 70), previousMargin: Taro.pxTransform(isAliPay ? 70 * screenPercent : 70) }, list.map(function (item, index) { return (React__default['default'].createElement(components.SwiperItem, { key: 'key-' + index, className: "" + (cur === index ? 'cur' : ''), onClick: function () {
            onClick(index);
        } },
        React__default['default'].createElement(components.View, { className: 'swiper-item' },
            item.type === 'image' ? renderImg(item) : '',
            item.type === 'video' ? renderVideo(item) : ''))); })));
    // const towerComponent = (
    //   <View className={swiperTypeClassName(props.type)} onTouchMove={onTouchMove} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    //     <View className={`tower-item ${}`}></View>
    //   </View>
    // );
    return props.type === 'card' ? cardComponent : screenComponent;
}
ClSwiper.options = {
    addGlobalClass: true
};
ClSwiper.defaultProps = {
    autoplay: false,
    type: 'screen',
    list: [],
    dot: 'square',
    duration: 500,
    onClick: function () { },
    indicatorDots: false,
    indicatorColor: '#000',
    indicatorActiveColor: '#FFF',
    interval: 5000,
    circular: false,
    onChange: function () { }
};

var ClSwitch_h5 = /** @class */ (function (_super) {
    __extends(ClSwitch_h5, _super);
    function ClSwitch_h5(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checkedSwitch: !!_this.props.checked
        };
        return _this;
    }
    ClSwitch_h5.prototype.onChange = function (flag) {
        this.props.onChange && this.props.onChange(flag);
    };
    ClSwitch_h5.prototype.render = function () {
        var _this = this;
        var title = this.props.title;
        var color = this.props.color || 'green';
        var shapeClassName = this.props.shape !== 'radius' ? '' : 'radius';
        var type = this.props.type === 'form' ? 'form' : 'normal';
        var checkedSwitch = this.state.checkedSwitch;
        var switchComponent = (React__default['default'].createElement(components.View, { className: classNames([
                'h5-switch',
                color,
                {
                    checked: checkedSwitch,
                    disabled: this.props.disabled
                },
                this.props.className
            ]), style: Object.assign({}, this.props.style), onClick: function () {
                if (!_this.props.disabled) {
                    var currentCheck = !checkedSwitch;
                    _this.setState({
                        checkedSwitch: currentCheck
                    });
                    _this.onChange(currentCheck);
                }
            } },
            React__default['default'].createElement(components.View, { className: "h5-switch-input sm " + shapeClassName })));
        var formSwitchComponent = (React__default['default'].createElement(components.View, { className: classNames('cu-form-group', this.props.className), style: Object.assign({}, this.props.style) },
            React__default['default'].createElement(components.View, { className: 'title' }, title),
            switchComponent));
        return type === 'form' ? formSwitchComponent : switchComponent;
    };
    ClSwitch_h5.options = {
        addGlobalClass: true
    };
    ClSwitch_h5.defaultProps = {
        title: '',
        color: 'green',
        shape: 'normal',
        type: 'normal',
        checked: false,
        onChange: function () { }
    };
    return ClSwitch_h5;
}(React.Component));

function ClSwitch(props) {
    var title = props.title;
    var color = props.color || 'green';
    var shapeClassName = props.shape !== 'radius' ? '' : 'radius';
    var type = props.type === 'form' ? 'form' : 'normal';
    var checked = !!props.checked;
    var hasChecked = checked ? 'checked' : '';
    var onChange = function (e) {
        props.onChange && props.onChange(e.detail.value);
    };
    var switchComponent = (React__default['default'].createElement(components.Switch, { className: classNames(color + " " + hasChecked + " " + shapeClassName + " sm", props.className), style: Object.assign({}, props.style), checked: checked, onChange: onChange, disabled: props.disabled }));
    var formSwitchComponent = (React__default['default'].createElement(components.View, { className: classNames('cu-form-group', props.className), style: Object.assign({}, props.style) },
        React__default['default'].createElement(components.View, { className: 'title' }, title),
        switchComponent));
    return Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.WEB ? (React__default['default'].createElement(ClSwitch_h5, __assign({}, this.props))) : type === 'form' ? (formSwitchComponent) : (switchComponent);
}
ClSwitch.options = {
    addGlobalClass: true
};

var ClTabBar = /** @class */ (function (_super) {
    __extends(ClTabBar, _super);
    function ClTabBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeIndex: 0
        };
        _this.options = {
            addGlobalClass: true
        };
        _this.defaultProps = {
            bgColor: 'white',
            activeColor: 'blue',
            active: 0,
            tabs: [],
            safeArea: true
        };
        return _this;
    }
    ClTabBar.prototype.onClick = function (index) {
        var props = this.props;
        this.setState({
            activeIndex: index
        });
        props.onClick && props.onClick(index);
    };
    ClTabBar.prototype.componentWillReceiveProps = function (prevProps) {
        if (prevProps.active !== this.props.active) {
            this.setState({ activeIndex: this.props.active });
        }
    };
    ClTabBar.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var colorClassName = props.bgColor
            ? BG_COLOR_LIST[props.bgColor]
            : 'bg-white';
        var activeColorClassName = props.activeColor
            ? TEXT_COLOR_LIST[props.activeColor]
            : 'text-blue';
        var barComponent = props.tabs.map(function (item, index) {
            var _a;
            return (React__default['default'].createElement(components.View, { onClick: function () {
                    _this.onClick(index);
                }, key: 'key-' + item.icon, className: "action " + (item.action ? 'add-action' : '') + " " + (_this.state.activeIndex === index ? activeColorClassName : '') },
                React__default['default'].createElement(components.View, { className: classNames([
                        (_a = { 'cuIcon-cu-image': item.img }, _a["cuIcon-" + item.icon] = item.icon, _a)
                    ]) },
                    item.img ? React__default['default'].createElement(components.Image, { mode: 'aspectFit', src: item.img }) : '',
                    item.badge !== false ? (React__default['default'].createElement(components.View, { className: 'cu-tag badge' }, isNumber(item.badge) ? item.badge : '')) : ('')),
                React__default['default'].createElement(components.Text, null, item.title)));
        });
        return (React__default['default'].createElement(components.View, { className: classNames([
                'cu-bar tabbar',
                {
                    'safe-area': props.safeArea
                },
                colorClassName
            ], props.className), style: Object.assign(props.fix
                ? { position: 'fixed', width: '100vw', bottom: '0', zIndex: 10 }
                : {}, props.style) }, barComponent));
    };
    return ClTabBar;
}(React__default['default'].Component));
// export default function ClTabBar(
//   props: IProps = {
//     bgColor: 'white',
//     activeColor: 'blue',
//     active: 0,
//     tabs: [],
//     safeArea: true
//   }
// ) {
//   const [activeIndex, setActiveIndex] = useState(props.active)
//
//   useEffect(() => {
//     setActiveIndex(props.active || 0)
//   }, [props.active])
//
//   const onClick = (index: number) => {
//     setActiveIndex(index)
//     props.onClick && props.onClick(index)
//   }
//
//   const colorClassName = props.bgColor
//     ? BG_COLOR_LIST[props.bgColor]
//     : 'bg-white'
//   const activeColorClassName = props.activeColor
//     ? TEXT_COLOR_LIST[props.activeColor]
//     : 'text-blue'
//   const barComponent = props.tabs.map((item, index) => (
//     <View
//       onClick={() => {
//         onClick(index)
//       }}
//       key={'key-' + item.icon}
//       className={`action ${item.action ? 'add-action' : ''} ${
//         activeIndex === index ? activeColorClassName : ''
//       }`}
//     >
//       <View
//         className={classNames([
//           { 'cuIcon-cu-image': item.img, [`cuIcon-${item.icon}`]: item.icon }
//         ])}
//       >
//         {item.img ? <Image mode='aspectFit' src={item.img} /> : ''}
//         {item.badge !== false ? (
//           <View className='cu-tag badge'>
//             {isNumber(item.badge) ? item.badge : ''}
//           </View>
//         ) : (
//           ''
//         )}
//       </View>
//       <Text>{item.title}</Text>
//     </View>
//   ))
//   return (
//     <View
//       className={classNames(
//         [
//           'cu-bar tabbar',
//           {
//             'safe-area': props.safeArea
//           },
//           colorClassName
//         ],
//         props.className
//       )}
//       style={Object.assign(
//         props.fix
//           ? { position: 'fixed', width: '100vw', bottom: '0', zIndex: 10 }
//           : {},
//         props.style
//       )}
//     >
//       {barComponent}
//     </View>
//   )
// }
// ClTabBar.options = {
//   addGlobalClass: true
// }

var move = 0;
var scrollLeftContent = 0;
var duration = 0.3;
var distance = 0;
var ClTabs = /** @class */ (function (_super) {
    __extends(ClTabs, _super);
    function ClTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeTab: 0,
            scrollLeft: 0,
            contentScrollLeft: 0
        };
        return _this;
    }
    ClTabs.prototype.componentDidMount = function () {
        this.props.tabs.length && this.onClickTab(this.props.active || 0);
    };
    ClTabs.prototype.componentWillReceiveProps = function (nextProps) {
        var nextActive = nextProps.active;
        var thisActive = this.props.active;
        if (nextActive !== thisActive) {
            this.onClickTab(nextActive || 0);
        }
    };
    ClTabs.prototype.onClickTab = function (index) {
        var _this = this;
        var id = this.props.tabs[index].id;
        var id0 = this.props.tabs[0].id;
        var query = Taro__default['default'].createSelectorQuery();
        var view = query.select("#" + id);
        var view0 = query.select("#" + id0);
        var left = 0;
        var promise = new Promise(function (resolve) {
            new Promise(function (resolve1) {
                view0.boundingClientRect().exec(function (res) {
                    var data = res[0];
                    left = data.left;
                    resolve1();
                });
            }).then(function () {
                view.boundingClientRect().exec(function (res) {
                    var data = res[getRectNumber()];
                    if (isAliPay) {
                        left = data.width * index;
                    }
                    else {
                        left = Math.abs(left - data.left);
                    }
                    resolve(left);
                });
            });
        });
        promise.then(function () {
            _this.setState({
                activeTab: index,
                scrollLeft: (index - 1) * 60,
                contentScrollLeft: left + Math.random() / 10
            });
        });
        this.props.onClick && this.props.onClick(index);
    };
    ClTabs.prototype.renderDefaultComponent = function (paramters) {
        var _this = this;
        var bgColorClassName = paramters.bgColorClassName, activeColor = paramters.activeColor, tabs = paramters.tabs, activeTab = paramters.activeTab, scrollLeft = paramters.scrollLeft;
        return (React__default['default'].createElement(components.ScrollView, { scrollX: true, className: bgColorClassName + " nav", scrollWithAnimation: true, scrollLeft: scrollLeft }, tabs.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: index, className: "cu-item " + (activeTab === index ? activeColor + " cur" : ''), onClick: _this.onClickTab.bind(_this, index) },
            item.icon ? (React__default['default'].createElement(components.Text, { className: "cuIcon-" + item.icon + " margin-right-xs" })) : (''),
            React__default['default'].createElement(components.Text, null, item.text))); })));
    };
    ClTabs.prototype.renderVerbComponent = function (paramters) {
        var _this = this;
        var bgColorClassName = paramters.bgColorClassName, activeColor = paramters.activeColor, tabs = paramters.tabs, activeTab = paramters.activeTab;
        return (React__default['default'].createElement(components.ScrollView, { scrollX: true, className: bgColorClassName + " nav" },
            React__default['default'].createElement(components.View, { className: 'flex text-center' }, tabs.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: index, className: "cu-item flex-sub " + (activeTab === index ? activeColor + " cur" : ''), onClick: _this.onClickTab.bind(_this, index) },
                item.icon ? (React__default['default'].createElement(components.Text, { className: "cuIcon-" + item.icon + " margin-right-xs" })) : (''),
                React__default['default'].createElement(components.Text, null, item.text))); }))));
    };
    ClTabs.prototype.renderCenterComponent = function (paramters) {
        var _this = this;
        var bgColorClassName = paramters.bgColorClassName, activeColor = paramters.activeColor, tabs = paramters.tabs, activeTab = paramters.activeTab;
        return (React__default['default'].createElement(components.ScrollView, { scrollX: true, className: bgColorClassName + " nav text-center" }, tabs.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: index, className: "cu-item " + (activeTab === index ? activeColor + " cur" : ''), onClick: _this.onClickTab.bind(_this, index) },
            item.icon ? (React__default['default'].createElement(components.Text, { className: "cuIcon-" + item.icon + " margin-right-xs" })) : (''),
            React__default['default'].createElement(components.Text, null, item.text))); })));
    };
    ClTabs.prototype.render = function () {
        var _this = this;
        var contentScrollLeft = this.state.contentScrollLeft;
        var bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : '';
        var activeColor = this.props.activeColor
            ? TEXT_COLOR_LIST[this.props.activeColor]
            : '';
        // 空组件镇压邪魔
        var centerComponent = React__default['default'].createElement(components.View, null);
        var renderComponent = function () {
            var _a = _this.props, type = _a.type, tabs = _a.tabs;
            var _b = _this.state, activeTab = _b.activeTab, scrollLeft = _b.scrollLeft;
            var defaultParameter = {
                bgColorClassName: bgColorClassName,
                activeColor: activeColor,
                tabs: tabs,
                activeTab: activeTab,
                scrollLeft: scrollLeft
            };
            if (type === 'default')
                return _this.renderDefaultComponent(defaultParameter);
            else if (type === 'verb')
                return _this.renderVerbComponent(defaultParameter);
            else if (type === 'center')
                return _this.renderCenterComponent(defaultParameter);
            else
                return React__default['default'].createElement(components.View, null);
        };
        return (React__default['default'].createElement(components.View, { className: classNames(this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) },
            centerComponent,
            renderComponent(),
            React__default['default'].createElement(components.ScrollView, { scrollY: true },
                React__default['default'].createElement(components.View, { className: 'scrollx', style: {
                        width: 'auto',
                        transform: "translateX(-" + Taro.pxTransform(contentScrollLeft / screenPercent) + ")",
                        transitionDuration: duration + "s"
                    }, onTouchStart: function (e) {
                        if (!_this.props.touchMove)
                            return;
                        scrollLeftContent = 0;
                        duration = 0;
                        move = e.touches[0].pageX;
                    }, onTouchMove: function (e) {
                        if (!_this.props.touchMove)
                            return;
                        if (scrollLeftContent === 0)
                            scrollLeftContent = e.touches[0].pageX;
                        distance = e.touches[0].pageX - scrollLeftContent;
                        _this.setState({
                            contentScrollLeft: contentScrollLeft - distance
                        });
                        scrollLeftContent = e.touches[0].pageX;
                    }, onTouchEnd: function (e) {
                        if (!_this.props.touchMove)
                            return;
                        duration = 0.3;
                        var changedTouches = e.changedTouches[0];
                        move = changedTouches.pageX - move;
                        var maxIndex = _this.props.tabs.length - 1;
                        if (move < -50)
                            _this.onClickTab(_this.state.activeTab + 1 > maxIndex
                                ? maxIndex
                                : _this.state.activeTab + 1);
                        else if (move > 50)
                            _this.onClickTab(_this.state.activeTab - 1);
                        else
                            _this.onClickTab(_this.state.activeTab);
                    } }, this.props.children))));
    };
    ClTabs.options = {
        addGlobalClass: true
    };
    ClTabs.defaultProps = {
        type: 'default',
        bgColor: undefined,
        activeColor: 'black',
        active: 0,
        tabs: [],
        touchMove: false
    };
    return ClTabs;
}(React.Component));

var ClTag = /** @class */ (function (_super) {
    __extends(ClTag, _super);
    function ClTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClTag.prototype.onClick = function (index) {
        this.props.onClick && this.props.onClick(index);
    };
    ClTag.prototype.render = function () {
        var _this = this;
        var shapeClassName = this.props.shape
            ? this.props.shape === 'normal'
                ? ''
                : this.props.shape
            : '';
        var colorClassName = function (color) {
            return BG_COLOR_LIST[color || 'blue'];
        };
        var plainClassName = function (color) {
            return "line-" + color;
        };
        var sizeClassName = function () {
            if (_this.props.size === 'normal')
                return '';
            else
                return 'sm';
        };
        var badgeClassName = function (badge) {
            return badge ? 'badge' : '';
        };
        var normalComponent;
        var capsuleComponent;
        if (this.props.tags.length > 0) {
            var tag = this.props.tags[0];
            normalComponent = (React__default['default'].createElement(components.View, { className: classNames("cu-tag " + shapeClassName + " " + (tag.plain ? plainClassName(tag.color) : colorClassName(tag.color)) + " " + sizeClassName() + " " + badgeClassName(this.props.badge), this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) },
                tag.icon ? (React__default['default'].createElement(ClIcon, { iconName: tag.icon, size: 'inherit', style: {
                        paddingRight: Taro.pxTransform(8)
                    } })) : (''),
                React__default['default'].createElement(components.Text, { style: {
                        height: 'inherit',
                        lineHeight: Taro.pxTransform(this.props.size === 'normal' ? 48 : 40)
                    } }, tag.text)));
            this.props.tags.length > 1 &&
                (capsuleComponent = (React__default['default'].createElement(components.View, { className: classNames("cu-capsule " + shapeClassName + "  " + sizeClassName(), this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) }, this.props.tags.map(function (tag, index) { return (React__default['default'].createElement(components.View, { key: tag.text, className: "cu-tag " + (tag.plain
                        ? plainClassName(tag.color)
                        : colorClassName(tag.color)), onClick: _this.onClick.bind(_this, index) },
                    tag.icon ? (React__default['default'].createElement(ClIcon, { iconName: tag.icon, size: 'inherit', style: {
                            paddingRight: Taro.pxTransform(8)
                        } })) : (''),
                    React__default['default'].createElement(components.Text, { style: {
                            height: 'inherit',
                            lineHeight: Taro.pxTransform(_this.props.size === 'normal' ? 48 : 40)
                        } }, tag.text))); }))));
        }
        return this.props.tags.length > 1 ? capsuleComponent : normalComponent;
    };
    ClTag.options = {
        addGlobalClass: true
    };
    ClTag.defaultProps = {
        shape: 'normal',
        size: 'normal',
        tags: []
    };
    return ClTag;
}(React.Component));

function ClTimeline(props) {
    var times = props.times || [];
    var iconColorClassName = function (color) { return (color ? TEXT_COLOR_LIST[color] : ''); };
    var iconClassName = function (icon) { return (icon ? "cuIcon-" + icon : ''); };
    var bgColorClassName = function (color) { return (color ? BG_COLOR_LIST[color] : ''); };
    var onClick = function (index) {
        props.onClick && props.onClick(index);
    };
    var items = times.map(function (item, index) {
        return item.node ? (React__default['default'].createElement(components.View, { className: 'cu-time', key: generateId(), onClick: function () {
                onClick(index);
            } }, item.node)) : (React__default['default'].createElement(components.View, { className: "cu-item " + iconColorClassName(item.iconColor) + " " + iconClassName(item.icon), key: generateId(), onClick: function () {
                onClick(index);
            } },
            React__default['default'].createElement(components.View, { className: bgColorClassName(item.bgColor) + " content" },
                React__default['default'].createElement(ClFlex, { justify: 'between', align: 'end' },
                    React__default['default'].createElement(components.View, { style: { fontSize: Taro.pxTransform(36) } }, item.title),
                    React__default['default'].createElement(components.View, null, item.time)),
                item.content
                    ? item.content.map(function (desc, index) { return (React__default['default'].createElement(components.View, { key: 'key-' + index }, desc)); })
                    : '')));
    });
    return (React__default['default'].createElement(components.View, { className: classNames('cu-timeline', props.className), style: Object.assign({}, props.style) }, items));
}
ClTimeline.options = {
    addGlobalClass: true
};
ClTimeline.defaultProps = {
    times: [],
    onClick: function () { }
};

var ClTitleBar = /** @class */ (function (_super) {
    __extends(ClTitleBar, _super);
    function ClTitleBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClTitleBar.prototype.render = function () {
        var textColorClassName = this.props.textColor
            ? "text-" + this.props.textColor
            : "";
        var borderColorClassName = this.props.borderColor
            ? BG_COLOR_LIST[this.props.borderColor]
            : 'bg-green';
        var bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : "bg-white";
        var iconClassName = this.props.icon ? "cuIcon-" + this.props.icon : "";
        var iconColorClassName = this.props.iconColor
            ? "text-" + this.props.iconColor
            : "";
        var borderComponent = (React__default['default'].createElement(components.View, { className: 'action border-title justify-between' },
            React__default['default'].createElement(components.View, null,
                React__default['default'].createElement(components.Text, { className: textColorClassName + " text-bold text-xl" }, this.props.title),
                React__default['default'].createElement(components.Text, { className: "" + borderColorClassName, style: { width: "" + Taro.pxTransform(this.props.borderLong || 20) } })),
            React__default['default'].createElement(components.View, null, this.props.renderRight)));
        var subComponent = (React__default['default'].createElement(components.View, { className: 'action sub-title justify-between' },
            React__default['default'].createElement(components.View, null,
                React__default['default'].createElement(components.Text, { className: "text-xl text-bold " + textColorClassName }, this.props.title),
                this.props.subTitle ? (React__default['default'].createElement(components.Text, { className: "text-" + this.props.subTitleColor }, this.props.subTitle)) : (React__default['default'].createElement(components.Text, { className: "" + borderColorClassName }))),
            React__default['default'].createElement(components.View, null, this.props.renderRight)));
        var iconComponent = (React__default['default'].createElement(components.View, { className: 'action justify-between' },
            React__default['default'].createElement(components.View, null,
                React__default['default'].createElement(components.Text, { className: iconClassName + " " + iconColorClassName }),
                React__default['default'].createElement(components.Text, { className: "text-xl text-bold " + textColorClassName }, this.props.title)),
            React__default['default'].createElement(components.View, null, this.props.renderRight)));
        return (React__default['default'].createElement(components.View, { className: classNames(bgColorClassName + " cu-bar", this.props.className), style: Object.assign({}, this.props.style) },
            this.props.type === 'border-title' ? borderComponent : '',
            this.props.type === 'sub-title' ? subComponent : '',
            this.props.type === 'icon' ? iconComponent : ''));
    };
    ClTitleBar.options = {
        addGlobalClass: true
    };
    ClTitleBar.defaultProps = {
        bgColor: 'white',
        textColor: 'green',
        type: 'border-title',
        borderLong: 20,
        borderColor: 'green',
        icon: 'title',
        iconColor: 'green',
        title: '',
        subTitle: '',
        subTitleColor: 'gray'
    };
    return ClTitleBar;
}(React.Component));

var ClImagePicker = /** @class */ (function (_super) {
    __extends(ClImagePicker, _super);
    function ClImagePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            imgList: props.imgList || []
        };
        return _this;
    }
    ClImagePicker.prototype.ChooseImage = function () {
        var _this = this;
        var _a = this.props, chooseImgObj = _a.chooseImgObj, max = _a.max;
        var imgList = this.state.imgList;
        var maxPic = max || 0;
        var chooseImg = chooseImgObj;
        Taro__default['default'].chooseImage({
            count: chooseImg.count || 9,
            sizeType: chooseImg.sizeType || ['original', 'compressed'],
            sourceType: chooseImg.sourceType || ['album'],
            success: function (res) {
                var selectArray = res.tempFilePaths.map(function (url) { return ({
                    url: url,
                    status: 'none'
                }); });
                selectArray.forEach(function (item) {
                    if (!imgList.find(function (obj) { return item.url === obj.url; })) {
                        if (maxPic) {
                            maxPic > imgList.length && imgList.push(item);
                        }
                        else {
                            imgList.push(item);
                        }
                    }
                });
                _this.setState({
                    imgList: imgList
                });
                chooseImg.success && chooseImg.success.call(_this, imgList);
            },
            fail: function () {
                chooseImg.fail && chooseImg.fail.call(this, imgList);
            },
            complete: function () {
                chooseImg.complete && chooseImg.complete.call(this, imgList);
            }
        });
    };
    ClImagePicker.prototype.viewImage = function (url) {
        Taro__default['default'].previewImage({
            urls: this.state.imgList.map(function (item) { return item.url; }),
            current: url
        });
    };
    ClImagePicker.prototype.delImg = function (index) {
        var _this = this;
        var flag = true;
        var imgList = this.state.imgList;
        var del = function (index) {
            imgList.splice(index, 1);
            _this.setState({
                imgList: imgList
            });
        };
        new Promise(function (resolve) {
            if (_this.props.beforeDel) {
                resolve(_this.props.beforeDel(index));
            }
            else {
                del(index);
            }
        }).then(function (res) {
            flag = res;
            if (flag) {
                del(index);
            }
        });
    };
    ClImagePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, max = _a.max;
        var imgList = this.state.imgList;
        // const chooseImg = chooseImgObj || {};
        var maxPic = max || 0;
        var imgComponent = imgList.map(function (item, index) { return (React__default['default'].createElement(components.View, { className: 'padding-xs bg-img bg-gray', key: item.url, style: { borderRadius: '6px', position: 'relative' }, onClick: function () {
                _this.viewImage.call(_this, item.url);
            } },
            React__default['default'].createElement(components.Image, { src: item.url, mode: 'widthFix', style: {
                    width: '100%',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    right: '0',
                    bottom: '0',
                    transform: 'translate(-50%, -50%)'
                } }),
            item.status === 'none' && !item.disabled ? (React__default['default'].createElement(components.View, { className: 'cu-tag bg-red', onClick: function (e) {
                    e.stopPropagation();
                    _this.delImg.call(_this, index);
                }, style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)'
                } },
                React__default['default'].createElement(ClIcon, { iconName: 'close', color: 'black', size: 'xsmall' }))) : (''),
            React__default['default'].createElement(components.View, { className: 'cu-tag', style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)',
                    display: "" + (item.status === 'fail' ? '' : 'none')
                } },
                React__default['default'].createElement(ClIcon, { iconName: 'warnfill', size: 'xsmall', color: 'red' })),
            React__default['default'].createElement(components.View, { className: 'cu-tag', style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)',
                    display: "" + (item.status === 'success' ? '' : 'none')
                } },
                React__default['default'].createElement(ClIcon, { iconName: 'roundcheckfill', size: 'xsmall', color: 'olive' })),
            React__default['default'].createElement(components.View, { className: 'cu-tag', style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)',
                    display: "" + (item.status === 'loading' ? '' : 'none')
                } },
                React__default['default'].createElement(components.View, { className: 'imagePicker-rotate-360' },
                    React__default['default'].createElement(ClIcon, { iconName: 'loading', size: 'xsmall', color: 'blue' }))))); });
        return (React__default['default'].createElement(components.View, { className: classNames('cu-form-group', className), style: Object.assign({}, style) },
            React__default['default'].createElement(components.View, { className: 'grid col-4 grid-square flex-sub' },
                imgComponent,
                (maxPic === 0 || maxPic !== imgList.length) && (React__default['default'].createElement(components.View, { className: 'padding-xs bg-gray', onClick: this.ChooseImage.bind(this), style: { borderRadius: '6px' } },
                    React__default['default'].createElement(components.Text, { className: 'cuIcon-cameraadd' }))))));
    };
    ClImagePicker.options = {
        addGlobalClass: true
    };
    ClImagePicker.defaultProps = {
        beforeDel: function () { return true; },
        max: 0
    };
    return ClImagePicker;
}(React__default['default'].Component));
// export default function ClImagePicker(props: IProps) {
//   const chooseImgObj = props.chooseImgObj || {};
//   const maxPic = props.max || 0;
//   const [imgList, setImgList] = useState(() => {
//     const tempImg = props.imgList || [];
//     return [...tempImg];
//   });
//   const ChooseImage = () => {
//     Taro.chooseImage({
//       count: chooseImgObj.count || 9,
//       sizeType: chooseImgObj.sizeType || ["original", "compressed"],
//       sourceType: chooseImgObj.sourceType || ["album"],
//       success: res => {
//         console.log(res);
//         const selectArray: imgListType = res.tempFilePaths.map(url => ({
//           url,
//           status: "none"
//         }));
//         selectArray.forEach(item => {
//           if (!imgList.find(obj => item.url === obj.url)) {
//             if (maxPic) {
//               maxPic > imgList.length && imgList.push(item);
//             } else {
//               imgList.push(item);
//             }
//           }
//         });
//         setImgList(imgList);
//         chooseImgObj.success && chooseImgObj.success.call(this, imgList);
//       },
//       fail() {
//         chooseImgObj.fail && chooseImgObj.fail.call(this, imgList);
//       },
//       complete() {
//         chooseImgObj.complete && chooseImgObj.complete.call(this, imgList);
//       }
//     });
//   };
//   const viewImage = (url: string) => {
//     Taro.previewImage({
//       urls: imgList.map(item => item.url),
//       current: url
//     });
//   };
//   const delImg = (index: number) => {
//     let flag = true;
//     const del = (index: number) => {
//       imgList.splice(index, 1);
//       setImgList(imgList);
//     };
//     new Promise(resolve => {
//       if (props.beforeDel) {
//         resolve(props.beforeDel(index));
//       } else {
//         del(index);
//       }
//     }).then((res: boolean) => {
//       flag = res;
//       if (flag) {
//         del(index);
//       }
//     });
//   };
//   const imgComponent = imgList.map((item, index) => (
//     <View
//       className="padding-xs bg-img bg-gray"
//       key={item.url}
//       style={{ borderRadius: "6px", position: "relative" }}
//       onClick={() => {
//         viewImage(item.url);
//       }}
//     >
//       <Image
//         src={item.url}
//         mode="widthFix"
//         style={{
//           width: "100%",
//           position: "absolute",
//           left: "0",
//           top: "0",
//           right: "0",
//           bottom: "0",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       />
//       {item.status === "none" ? (
//         <View
//           className="cu-tag bg-red"
//           onClick={e => {
//             e.stopPropagation();
//             delImg(index);
//           }}
//           style={{ backgroundColor: "rgba(355, 355, 355, 0.8)" }}
//         >
//           <ClIcon iconName="close" color="black" size="xsmall" />
//         </View>
//       ) : (
//         ""
//       )}
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "fail" ? "" : "none"}`
//           }}
//         >
//           <ClIcon iconName="warnfill" size="xsmall" color="red" />
//         </View>
//       }
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "success" ? "" : "none"}`
//           }}
//         >
//           <ClIcon iconName="roundcheckfill" size="xsmall" color="olive" />
//         </View>
//       }
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "loading" ? "" : "none"}`
//           }}
//         >
//           <View className="imagePicker-rotate-360">
//             <ClIcon iconName="loading" size="xsmall" color="blue" />
//           </View>
//         </View>
//       }
//     </View>
//   ));
//   return (
//     <View
//       className={classNames("cu-form-group", props.className)}
//       style={Object.assign({}, props.style)}
//     >
//       <View className="grid col-4 grid-square flex-sub">
//         {imgComponent}
//         {(maxPic === 0 || maxPic !== imgList.length) && (
//           <View
//             className="padding-xs bg-gray"
//             onClick={ChooseImage}
//             style={{ borderRadius: "6px" }}
//           >
//             <Text className="cuIcon-cameraadd" />
//           </View>
//         )}
//       </View>
//     </View>
//   );
// }
// ClImagePicker.defaultProps = {
//   beforeDel: index => true,
//   max: 0
// } as IProps;
// ClImagePicker.options = {
//   addGlobalClass: true
// };

function ClGrid(props) {
    var colClassName = "col-" + props.col;
    var squareClassName = props.mode === 'square' ? 'grid-square' : '';
    var gridComponent = (React__default['default'].createElement(components.View, { className: classNames("grid " + colClassName + " " + squareClassName, props.className), style: Object.assign({}, props.style) }, props.children));
    return gridComponent;
}
ClGrid.options = {
    addGlobalClass: true
};
ClGrid.defaultProps = {
    col: 3,
    mode: 'normal'
};

function ClAnimation(props) {
    var type = props.type;
    var reverse = props.reverse ? "animation-reverse" : "";
    return (React__default['default'].createElement(components.View, { className: classnames("animation-" + type + " " + reverse, props.className), style: Object.assign({
            animationDelay: props.delay + "s",
            animationDuration: props.duration + "s"
        }, props.style), onAnimationStart: function (e) {
            props.onAnimationStart && props.onAnimationStart(e);
        }, onAnimationEnd: function (e) {
            props.onAnimationEnd && props.onAnimationEnd(e);
        } }, props.children));
}
ClAnimation.options = {
    addGlobalClass: true
};
ClAnimation.defaultProps = {
    type: "fade",
    reverse: false,
    delay: 0,
    duration: 0.5
};

var scrollTimer = undefined;
function ClVerticalTab(props) {
    var scrollTab = false;
    var id = '';
    var _a = __read(React.useState(props.tabs || []), 2), tabsState = _a[0], setTabsState = _a[1];
    var currentId = props.current ? props.current : props.tabs[0].id;
    var _b = __read(React.useState(currentId), 2), current = _b[0], setCurrent = _b[1];
    var _c = __read(React.useState(tabsState.findIndex(function (item) { return item.name === props.tabs[0].name; })), 2), verticalNavTop = _c[0], setVerticalNavTop = _c[1];
    var _d = __read(React.useState(currentId), 2), scrollId = _d[0], setScrollId = _d[1];
    var _e = __read(React.useState(0), 2), scrollContent = _e[0], setScrollContent = _e[1];
    var _f = __read(React.useState(false), 2), clickTab = _f[0], setClickTab = _f[1];
    React.useEffect(function () {
        var list = props.tabs || [];
        setTabsState(list.map(function (item) {
            item.cu_vertical_tab_id = generateId();
            return item;
        }));
    }, [props.tabs]);
    var tabs = tabsState || [];
    // const [scrollTimer, setScrollTimer] = useState(0);
    var isH5 = Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.WEB;
    var onScroll = function (e) {
        if (clickTab)
            return;
        var tabHeight = 0;
        var _loop_1 = function (i) {
            var query = Taro__default['default'].createSelectorQuery();
            var view = query.select('#' + tabs[i].id);
            view.boundingClientRect().exec(function (res) {
                var data = res[0];
                tabs[i].top = tabHeight;
                tabHeight = tabHeight + data.height;
                tabs[i].bottom = tabHeight;
            });
        };
        for (var i = 0; i < tabs.length; i++) {
            _loop_1(i);
        }
        var scrollTop = e.detail.scrollTop + 20;
        isH5 && setScrollContent(e.detail.scrollTop);
        if (!scrollTab) {
            for (var i = 0; i < tabs.length; i++) {
                if (scrollTop > (tabs[i].top || 0) &&
                    scrollTop < (tabs[i].bottom || 0)) {
                    // console.log(i)
                    setVerticalNavTop(i);
                    setCurrent(tabs[i].id);
                    return false;
                }
            }
        }
    };
    var onH5Scroll = function (e) {
        if (clickTab)
            return;
        if (scrollTimer)
            clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            onScroll(e);
            clearTimeout(scrollTimer);
        }, 300);
    };
    var tabsComponent = tabs.map(function (item) { return (React__default['default'].createElement(components.View, { key: item.cu_vertical_tab_id, className: "cu-item " + (current === item.id ? 'cur' : ''), onClick: function () {
            id = item.id;
            scrollTab = true;
            changeTop(id);
            setCurrent(item.id);
            setVerticalNavTop(tabs.findIndex(function (tab) { return tab.name === item.name; }));
            setClickTab(true);
            !isH5 && setScrollId(item.id);
            setTimeout(function () {
                setClickTab(false);
            }, 800);
        } }, item.name)); });
    var changeTop = function (id) {
        var query = Taro__default['default'].createSelectorQuery();
        var view = query.select('#' + id);
        var topView = query.select('#' + tabs[0].id);
        var top = 0;
        new Promise(function (resolve) {
            topView.boundingClientRect().exec(function (res) {
                var data = res[0];
                resolve(data.top);
            });
        }).then(function (res) {
            top = res;
            new Promise(function (resolve) {
                view.boundingClientRect().exec(function (res) {
                    var data = res[getRectNumber()];
                    setTimeout(function () {
                        var endTop = Math.abs(top - data.top);
                        setScrollContent(endTop);
                        scrollTab = false;
                        resolve();
                    }, 300);
                });
            });
        });
    };
    var weappComponent = (React__default['default'].createElement(components.ScrollView, { scrollY: true, scrollWithAnimation: true, 
        // scrollAnimationDuration={200}
        style: {
            height: props.height === 'full' ? '100%' : Taro.pxTransform(props.height),
            maxHeight: '100vh',
            width: '100%'
        }, scrollIntoView: scrollId, onScroll: onScroll, scrollTop: isAliPay ? undefined : scrollContent, enableBackToTop: props.backTop }, this.props.children));
    var h5Component = (React__default['default'].createElement(components.ScrollView, { scrollY: true, scrollWithAnimation: true, 
        // scrollAnimationDuration={200}
        style: {
            height: props.height === 'full' ? '100%' : Taro.pxTransform(props.height),
            maxHeight: '100vh',
            width: '100%'
        }, onScroll: onH5Scroll, scrollTop: scrollContent, enableBackToTop: props.backTop }, this.props.children));
    return (React__default['default'].createElement(components.View, { className: classNames('flex', props.className), style: Object.assign({}, props.style) },
        React__default['default'].createElement(components.ScrollView, { scrollY: true, scrollWithAnimation: true, className: 'VerticalNav nav', style: {
                height: props.height === 'full' ? '100%' : Taro.pxTransform(props.height),
                maxHeight: '100vh'
            }, scrollTop: (verticalNavTop - 1) * screenPercent * 100, enableBackToTop: props.backTop }, tabsComponent),
        isH5 ? h5Component : weappComponent));
}
ClVerticalTab.options = {
    addGlobalClass: true
};
ClVerticalTab.defaultProps = {
    tabs: [{ name: '', id: '' }],
    height: 0,
    current: '',
    backTop: false
};

function ClVerticalTabCell(props) {
    return React__default['default'].createElement(ClCard, null, props.children);
}
ClVerticalTabCell.options = {
    addGlobalClass: true
};

function ClAccordion(props) {
    var open = props.open, title = props.title, animation = props.animation, onClick = props.onClick, card = props.card;
    var _a = __read(React.useState(open), 2), show = _a[0], setShow = _a[1];
    var _b = __read(React.useState(0), 2), height = _b[0], setHeight = _b[1];
    var _c = __read(React.useState("cl-accordion-content-" + +new Date()), 1), id = _c[0];
    React.useEffect(function () {
        if (show) {
            var query = Taro__default['default'].createSelectorQuery();
            var view = query.select("#" + id);
            view.boundingClientRect().exec(function (res) {
                var data = res[0];
                setHeight(data.height);
            });
        }
        else {
            setHeight(0);
        }
    }, [show]);
    return (React__default['default'].createElement(components.View, { className: classnames("cu-list menu", {
            "card-menu": card,
        }, props.className), style: Object.assign({
            overflow: "hidden",
            height: Taro.pxTransform(98 + height / screenPercent),
            transition: "all " + (animation ? props.speed + "s" : 0) + " linear",
            color: "black",
        }, props.style) },
        React__default['default'].createElement(components.View, { className: "cu-item", onClick: function () {
                onClick && onClick(!show);
                setShow(!show);
            } },
            React__default['default'].createElement(components.View, { className: "flex justify-between align-center", style: { width: "100%" } },
                React__default['default'].createElement(components.View, null, title),
                React__default['default'].createElement(components.View, { style: {
                        transition: "all " + props.speed + "s linear",
                        transform: "rotate(" + (show ? "90deg" : "0") + ")",
                    } },
                    React__default['default'].createElement(ClIcon, { iconName: "right", size: "small" })))),
        React__default['default'].createElement(components.View, { id: id, className: "bg-white" },
            React__default['default'].createElement(components.ScrollView, { scrollY: true, style: {
                    height: props.height ? Taro.pxTransform(props.height) : "100%",
                } }, props.children))));
}
ClAccordion.options = {
    addGlobalClass: true,
};
ClAccordion.defaultProps = {
    open: false,
    title: "",
    animation: true,
    onClick: function () { },
    card: false,
    speed: 0.15,
    height: 0,
};

var tempPageX = 0;
var tempPageY = 0;
var pageX = 25;
var pageY = 100;
function ClFloatButton(props) {
    var _a = __read(React.useState(false), 2), show = _a[0], setShow = _a[1];
    var _b = __read(React.useState(0), 2), rotate = _b[0], setRotate = _b[1];
    var _c = __read(React.useState({}), 2), animation = _c[0], setAnimation = _c[1];
    var _d = __read(React.useState(props.actionList), 2), actionListState = _d[0], setActionListState = _d[1];
    var move = props.move, open = props.open, icon = props.icon, bgColor = props.bgColor, iconColor = props.iconColor, direction = props.direction, shadow = props.shadow, shape = props.shape, size = props.size, actionList = props.actionList, onClick = props.onClick, onActionClick = props.onActionClick, closeWithShadow = props.closeWithShadow;
    React.useEffect(function () {
        var list = actionList || [];
        setActionListState(list.map(function (item) {
            item.cu_float_button_id = generateId();
            return item;
        }));
    }, [props.actionList]);
    var dealSize = utils.model.SIZE[size || 'normal'];
    var dealBgColor = utils.model.BG_COLOR_LIST[bgColor || 'blue'];
    var dealShadow = shadow ? 'shadow' : '';
    var dealIconColor = iconColor || '';
    var dealActionList = actionListState || [];
    var len = dealActionList.length;
    var type = function () {
        if (direction === 'vertical') {
            return show ? 'slide-bottom' : 'slide-top';
        }
        else {
            return show ? 'slide-right' : 'slide-left';
        }
    };
    var actionListComponent = dealActionList.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: item.cu_float_button_id, style: { position: show ? 'relative' : 'absolute' } },
        React__default['default'].createElement(ClAnimation, { type: type(), delay: show ? (len - index - 1) / 10 : 0, duration: 0.2 },
            React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: direction === 'vertical' ? 'bottom' : 'right' },
                React__default['default'].createElement(components.View, { className: "cu-avatar " + shape + " " + dealSize + " " + (item.bgColor
                        ? utils.model.BG_COLOR_LIST[item.bgColor]
                        : dealBgColor) + " " + dealShadow, onClick: function (e) {
                        e.stopPropagation();
                        clickButton();
                        onActionClick && onActionClick(index);
                    } },
                    React__default['default'].createElement(components.View, { className: "" + (item.iconColor || dealIconColor) },
                        React__default['default'].createElement(ClIcon, { iconName: item.icon, size: size }))))))); });
    var directionClass = direction === 'vertical' ? '' : 'flex';
    var clickButton = function () {
        open && setShow(!show);
        open && setRotate(rotate ? 0 : 45);
    };
    var position = props.position || {
        top: 'auto',
        right: 50,
        bottom: 200,
        left: 'auto'
    };
    return (React__default['default'].createElement(components.View, { className: classNames("" + (show ? 'float_button__mask' : ''), props.className), style: Object.assign({}, props.style), onClick: function () {
            closeWithShadow && clickButton();
        } },
        React__default['default'].createElement(components.View, { className: 'float_button__fixed', style: {
                top: position.top && position.top !== 'auto'
                    ? Taro.pxTransform(position.top)
                    : 'auto',
                right: position.right && position.right !== 'auto'
                    ? Taro.pxTransform(position.right)
                    : 'auto',
                bottom: position.bottom && position.bottom !== 'auto'
                    ? Taro.pxTransform(position.bottom)
                    : 'auto',
                left: position.left && position.left !== 'auto'
                    ? Taro.pxTransform(position.left)
                    : 'auto'
            }, animation: animation, onTouchStart: function (e) {
                if (!move)
                    return;
                var touchs = e.touches[0];
                tempPageX = touchs.pageX;
                tempPageY = touchs.pageY;
            }, onTouchMove: function (e) {
                e.stopPropagation();
                if (!move)
                    return;
                var touchs = e.touches[0];
                var newAnimation = Taro__default['default'].createAnimation(animation);
                pageX = pageX - (touchs.pageX - tempPageX);
                pageY = pageY - (touchs.pageY - tempPageY);
                var length = Math.sqrt(Math.pow(pageX, 2) + Math.pow(pageY, 2));
                newAnimation.right(pageX);
                newAnimation.bottom(pageY).step({
                    duration: (13 * length) / 100
                });
                setAnimation(newAnimation.export());
                tempPageX = touchs.pageX;
                tempPageY = touchs.pageY;
            }, onTouchCancel: function (e) {
                e.stopPropagation();
            } },
            React__default['default'].createElement(components.View, { className: "float_button__content " + directionClass },
                actionListComponent,
                React__default['default'].createElement(components.View, { className: "cu-avatar " + shape + " " + dealSize + " " + dealBgColor + " " + dealShadow, onClick: function (e) {
                        e.stopPropagation();
                        clickButton();
                        onClick && onClick();
                    } },
                    React__default['default'].createElement(components.View, { className: "" + dealIconColor, style: {
                            transform: "rotate(" + rotate + "deg)",
                            transition: 'all 0.15s linear'
                        } },
                        React__default['default'].createElement(ClIcon, { iconName: icon, size: size })))))));
}
ClFloatButton.options = {
    addGlobalClass: true
};
ClFloatButton.defaultProps = {
    move: false,
    open: true,
    icon: 'add',
    bgColor: 'blue',
    iconColor: undefined,
    direction: 'vertical',
    onClick: function () { },
    shadow: true,
    onActionClick: function () { },
    actionList: [],
    size: 'normal',
    shape: 'round',
    closeWithShadow: false,
    position: {
        top: 'auto',
        right: 50,
        bottom: 200,
        left: 'auto'
    }
};

var timer;
var firstTimer;
function ClMessage(props) {
    var tempHeight = 500;
    var _a = props.bgColor, bgColor = _a === void 0 ? "light-grey" : _a, _b = props.type, type = _b === void 0 ? "info" : _b, _c = props.onClose, onClose = _c === void 0 ? function () { } : _c, _d = props.message, message = _d === void 0 ? "" : _d, _e = props.show, show = _e === void 0 ? false : _e, _f = props.duration, duration = _f === void 0 ? 3 : _f;
    var _g = __read(React.useState(show), 2), showMessage = _g[0], setShowMessage = _g[1];
    var _h = __read(React.useState(tempHeight), 2), contentHeight = _h[0], setContentHeight = _h[1];
    var _j = __read(React.useState(""), 2), tempMessage = _j[0], setTempMessage = _j[1];
    var _k = __read(React.useState(), 2), tempType = _k[0], setTempType = _k[1];
    var durationTime = duration || 3;
    var mapColor = {
        success: "light-green",
        error: "light-red",
        warn: "light-yellow",
        info: "light-grey",
        custom: bgColor,
    };
    var calculateHeight = function () {
        var view = Taro__default['default'].createSelectorQuery();
        var query = view.select("#cl_message_content");
        return new Promise(function (resolve) {
            query.boundingClientRect().exec(function (res) {
                var data = res[0];
                resolve(data === null || data === void 0 ? void 0 : data.height);
            });
        });
    };
    var clickClose = function () {
        new Promise(function (resolve) {
            resolve(calculateHeight());
        }).then(function (res) {
            var height = res;
            clearTimeout(timer);
            timer = null;
            setContentHeight(height);
            setShowMessage(false);
            onClose && onClose();
        });
    };
    React.useEffect(function () {
        (function () {
            if (!showMessage) {
                new Promise(function (resolve) {
                    resolve(calculateHeight());
                }).then(function (res) {
                    var height = res;
                    tempHeight = height;
                    setContentHeight(tempHeight);
                    setShowMessage(false);
                });
            }
            else {
                tempHeight = 0;
                setTempType(type);
                setTempMessage(message || "");
                if (duration !== 0) {
                    if (timer) {
                        clickClose();
                        clearTimeout(timer);
                        timer = null;
                        return;
                    }
                    timer = setTimeout(function () {
                        clickClose();
                        clearTimeout(timer);
                        timer = null;
                        props.message = "";
                    }, durationTime * 1000);
                }
                setContentHeight(tempHeight);
                setShowMessage(true);
            }
        })();
    }, [showMessage]);
    React.useEffect(function () {
        show && setShowMessage(!!show);
        props.show = false;
    }, [show]);
    React.useEffect(function () {
        if (show) {
            clearTimeout(timer);
            clearTimeout(firstTimer);
            timer = null;
            clickClose();
            firstTimer = setTimeout(function () {
                setShowMessage(true);
                setTempMessage(message || "");
                setTempType(type);
                console.log("tempType====>", props.type);
            }, 300);
        }
    }, [message, show]);
    return (React__default['default'].createElement(components.View, { className: classNames("cu-cl-message", props.className), style: Object.assign({
            transition: "all 0.2s linear",
            top: "" + (showMessage ? "0" : "-" + contentHeight + "px"),
        }, props.style) },
        React__default['default'].createElement(components.View, { className: "cu-cl-message__content", id: "cl_message_content" },
            React__default['default'].createElement(ClCard, { bgColor: mapColor[tempType || 0] || "light-grey", shadow: false },
                React__default['default'].createElement(ClFlex, { justify: "between", align: "center" },
                    React__default['default'].createElement(ClText, { text: tempMessage }),
                    React__default['default'].createElement(components.View, { onClick: function () {
                            clickClose();
                        } },
                        React__default['default'].createElement(ClIcon, { iconName: "close", size: "xsmall" })))))));
}

function ClDivider(props) {
    var color = props.color, size = props.size;
    var colorClassName = TEXT_COLOR_LIST[color || 'grey'];
    var sizeClassName = "text-" + SIZE[size || 'normal'];
    return (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({}, props.style) },
        React__default['default'].createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
            React__default['default'].createElement(components.View, { className: colorClassName + " " + sizeClassName + " cu-divider" }, props.children))));
}
ClDivider.options = {
    addGlobalClass: true
};
ClDivider.defaultProps = {
    color: 'grey',
    size: 'normal'
};

var context = {
    provider: {},
    inject: function (key) {
        return this.provider[key] || null;
    },
    focus: ''
};

var date = {};
var FormContext = React.createContext(date);
var ClForm = /** @class */ (function (_super) {
    __extends(ClForm, _super);
    function ClForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClForm.prototype.validate = function (fn) {
        var flag = true;
        var _a = this.props, model = _a.model, rules = _a.rules;
        var modelData = model || {};
        var rulesData = rules || {};
        var ruleKeys = Object.keys(rules || {}) || [];
        ruleKeys.forEach(function (key) {
            var ruleFunc = rulesData[key];
            var value = modelData[key];
            flag = flag && ruleFunc(defaultRules, value, function () { });
        });
        return fn(flag);
    };
    ClForm.prototype.render = function () {
        var _a = this.props, model = _a.model, rules = _a.rules;
        context.provider = {
            model: model,
            rules: rules,
        };
        return (React__default['default'].createElement(components.View, { className: classNames(this.props.className), style: Object.assign({}, this.props.style) },
            React__default['default'].createElement(FormContext.Provider, { value: { model: model, rules: rules } }, this.props.children)));
    };
    ClForm.contextType = FormContext;
    ClForm.defaultProps = {
        model: {},
        rules: {},
    };
    ClForm.options = {
        addGlobalClass: true,
    };
    return ClForm;
}(React__default['default'].Component));

function ClFormItem(props) {
    if (props === void 0) { props = {
        prop: "",
        required: false,
    }; }
    var _a = __read(React.useState(""), 2), tip = _a[0], setTip = _a[1];
    var _b = __read(React.useState(false), 2), err = _b[0], setErr = _b[1];
    var _c = __read(React.useState(true), 2), firstInit = _c[0], setFirstInit = _c[1];
    var _d = __read(React.useState(true), 2), flag = _d[0], setFlag = _d[1];
    var _e = __read(React.useState(""), 2), message = _e[0], setMessage = _e[1];
    var _f = __read(React.useState({}), 2), beforeModelData = _f[0], setBeforeModelData = _f[1];
    var prop = props.prop, required = props.required;
    var modelData = context.inject("model") || {};
    var rulesData = context.inject("rules") || {};
    console.log("modelData", modelData);
    var value = modelData[prop || ""] || "";
    var ruleFunc = rulesData[prop || ""] ||
        function () {
            return true;
        };
    // let message = ''
    var callback = function (str) {
        if (str === void 0) { str = ""; }
        setMessage(str);
        // message = str
    };
    // let flag = true;
    React.useEffect(function () {
        if (firstInit)
            setFirstInit(false);
    }, []);
    React.useEffect(function () {
        if (firstInit) {
            setBeforeModelData(modelData);
        }
        else {
            Object.keys(modelData).forEach(function (key) {
                if (beforeModelData[key] !== modelData[key] && prop === key) {
                    setFlag(ruleFunc(defaultRules, value, callback));
                }
            });
            setBeforeModelData(modelData);
        }
    }, [modelData]);
    React.useEffect(function () {
        setErr(!flag);
    }, [flag]);
    React.useEffect(function () {
        setTip(message);
    }, [message]);
    return (React__default['default'].createElement(components.View, { className: classNames(err ? "cu-formItem-err" : "cu-formItem", props.className), style: Object.assign({}, props.style) },
        props.children,
        err ? React__default['default'].createElement(components.View, { className: "cu-formItem-err-tip" }, tip) : "",
        required ? React__default['default'].createElement(components.View, { className: "cu-formItem-required" }) : ""));
}

function ClTip_H5(props) {
    var _a = __read(React.useState(props.show), 2), showTip = _a[0], setShowTip = _a[1];
    var _b = __read(React.useState({
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        transform: '',
        arrowTransform: ''
    }), 2), distance = _b[0], setDistance = _b[1];
    var _c = __read(React.useState(function () { return "cl-tip-content-" + Math.random().toString().replace('.', ''); }), 1), id = _c[0];
    var _d = __read(React.useState(function () { return "cl-tip-message-" + Math.random().toString().replace('.', ''); }), 1), idMessage = _d[0];
    var resver2Zero = function (params) {
        distance.top = 'auto';
        distance.left = 'auto';
        distance.right = 'auto';
        distance.bottom = 'auto';
        params.forEach(function (item) {
            distance[item.direction] = item.long + "px";
        });
        return distance;
    };
    React.useEffect(function () {
        setShowTip(props.show);
    }, [props.show]);
    React.useEffect(function () {
        var idContentQuery = document.querySelector("#" + id);
        var idMessageQuery = document.querySelector("#" + idMessage);
        var systemInfo = Taro__default['default'].getSystemInfoSync();
        var res = {
            width: idContentQuery.clientWidth,
            height: idContentQuery.clientHeight,
            left: idContentQuery.offsetLeft,
            top: idContentQuery.offsetTop,
            bottom: systemInfo.windowHeight -
                idContentQuery.clientHeight -
                idContentQuery.offsetTop,
            right: systemInfo.windowWidth -
                idContentQuery.clientWidth -
                idContentQuery.offsetLeft
        };
        var messageData = {
            width: idMessageQuery.clientWidth,
            height: idMessageQuery.clientHeight
        };
        var contentWidth = props.width || 100;
        var screenWidth = 750 * screenPercent;
        var customDirection = [];
        var bottomDistance = res.bottom;
        var leftDistance = res.right;
        var sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2;
        if (props.direction === 'top') {
            if (res.top < bottomDistance && res.top < messageData.height)
                props.direction = 'bottom';
            customDirection = [{ direction: 'bottom', long: 0 }];
            var translateX = (res.width - contentWidth) / 2;
            if (res.left < res.right && res.left < screenWidth / 2) {
                if (Math.abs(translateX) > res.left)
                    translateX = -res.left;
                distance.transform = "translateX(" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(0)";
            }
            else {
                var maxRight = screenWidth - res.left;
                if (maxRight < contentWidth)
                    translateX = contentWidth - maxRight;
                distance.transform = "translateX(-" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(30%)";
            }
        }
        else if (props.direction === 'bottom') {
            console.log(res, messageData);
            if (res.top > bottomDistance && bottomDistance < messageData.height)
                props.direction = 'bottom';
            customDirection = [{ direction: 'left', long: 0 }];
            var translateX = (res.width - contentWidth) / 2;
            if (res.left < res.right && res.left < screenWidth / 2) {
                if (Math.abs(translateX) > res.left)
                    translateX = -res.left;
                distance.transform = "translateX(" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - 10) + "px) rotate(45deg) translateY(0)";
            }
            else {
                var maxRight = screenWidth - res.left;
                if (maxRight < contentWidth)
                    translateX = contentWidth - maxRight;
                distance.transform = "translateX(-" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - 10) + "px) rotate(45deg) translateY(-30%)";
            }
        }
        else if (props.direction === "left") {
            var diffHeight = messageData.height - res.height;
            if (res.left < contentWidth + 10 && leftDistance > res.left)
                props.direction = 'right';
            customDirection = [
                {
                    direction: 'right',
                    long: 0
                }
            ];
            var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
            var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
            if (moveTop > 0)
                moveTop = 0;
            if (moveBottom > 0)
                moveBottom = 0;
            distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(30%) rotate(45deg)";
            distance.transform = "translateX(" + (-res.width - 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
        }
        else if (props.direction === 'right') {
            if (leftDistance - 10 < contentWidth && leftDistance < res.left)
                props.direction = 'left';
            var diffHeight = messageData.height - res.height;
            if (res.left < contentWidth + 10)
                props.direction = 'right';
            customDirection = [
                {
                    direction: 'left',
                    long: 0
                }
            ];
            var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
            var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
            if (moveTop > 0)
                moveTop = 0;
            if (moveBottom > 0)
                moveBottom = 0;
            distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(-30%) rotate(45deg)";
            distance.transform = "translateX(" + (res.width + 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
        }
        Object.assign(distance, resver2Zero(customDirection));
        setDistance(distance);
    }, [props.width, props.direction, showTip]);
    return (React__default['default'].createElement(components.View, { id: id, onClick: function () {
            if (props.mode === 'click') {
                var show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, onTouchStart: function () {
            if (props.mode === 'touch') {
                var show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, onTouchEnd: function () {
            if (props.mode === 'touch') {
                var show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, className: "cl-tip " + (showTip ? 'cl-tip__showZindex' : ''), style: { position: 'relative', display: 'inline-block' } },
        React__default['default'].createElement(components.View, { id: idMessage, className: "cl-tip__content  shadow " + (showTip ? 'show' : 'hide') + " " + (showTip ? 'true' : 'false'), style: {
                width: (showTip ? props.width : 0) + "px",
                left: distance.left,
                right: distance.right,
                top: distance.top,
                bottom: distance.bottom,
                transform: distance.transform
            } },
            React__default['default'].createElement(components.View, { className: "cl-tip__arrow " + props.direction + " " + BG_COLOR_LIST[props.bgColor || 'white'] + " " + (showTip ? 'showArrow' : 'hideArrow'), style: {
                    left: distance.left,
                    right: distance.right,
                    top: distance.top,
                    bottom: distance.bottom,
                    transform: distance.arrowTransform
                } }),
            React__default['default'].createElement(components.View, { className: "cl-tip__message " + BG_COLOR_LIST[props.bgColor || 'white'] },
                React__default['default'].createElement(components.View, { style: { width: props.width + "px", padding: '10px' } },
                    React__default['default'].createElement(ClText, { text: props.message }),
                    React__default['default'].createElement(components.View, { onClick: function (e) {
                            e.stopPropagation();
                        } }, this.props.renderMessage)))),
        this.props.children));
}
ClTip_H5.defaultProps = {
    show: false,
    direction: 'bottom',
    bgColor: 'white',
    mode: 'touch',
    width: 150
};
ClTip_H5.options = {
    addGlobalClass: true
};

ClTip.defaultProps = {
    show: false,
    direction: "bottom",
    bgColor: "white",
    mode: "touch",
    width: 150,
};
function ClTip(props) {
    var _this = this;
    var _a = props.show, show = _a === void 0 ? false : _a, _b = props.direction, direction = _b === void 0 ? "bottom" : _b, _c = props.bgColor, bgColor = _c === void 0 ? "white" : _c, _d = props.mode, mode = _d === void 0 ? "touch" : _d, _e = props.width, width = _e === void 0 ? 150 : _e;
    var _f = __read(React.useState(show), 2), showTip = _f[0], setShowTip = _f[1];
    var _g = __read(React.useState({
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto",
        transform: "",
        arrowTransform: "",
    }), 2), distance = _g[0], setDistance = _g[1];
    var _h = __read(React.useState(generateId()), 1), contentId = _h[0];
    var _j = __read(React.useState(generateId()), 1), messageId = _j[0];
    var _k = __read(React.useState(direction), 2), currentDirection = _k[0], setCurrentDirection = _k[1];
    var isH5 = Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.WEB;
    var resver2Zero = function (params) {
        distance.top = "auto";
        distance.left = "auto";
        distance.right = "auto";
        distance.bottom = "auto";
        params.forEach(function (item) {
            distance[item.direction] = item.long + "px";
        });
        return distance;
    };
    React.useEffect(function () {
        setShowTip(show);
    }, [show]);
    React.useEffect(function () {
        setCurrentDirection(props.direction || "bottom");
    }, [props.direction]);
    React.useEffect(function () {
        function reRender() {
            if (Taro__default['default'].ENV_TYPE.WEB === Taro__default['default'].getEnv())
                return;
            var query = Taro__default['default'].createSelectorQuery();
            new Promise(function (resolve) {
                query
                    .select("#" + contentId)
                    .boundingClientRect()
                    .exec(function (res) {
                    resolve(res[0]);
                });
            }).then(function (res) {
                query
                    .select("#" + messageId)
                    .boundingClientRect()
                    .exec(function (data) {
                    var messageData = data[0];
                    var contentWidth = width || 100;
                    var screenWidth = 750 * screenPercent;
                    var customDirection = [];
                    var systemInfo = Taro__default['default'].getSystemInfoSync();
                    var bottomDistance = systemInfo.windowHeight - res.top - res.height;
                    var leftDistance = screenWidth - res.left - res.width;
                    var sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2;
                    if (currentDirection === "top") {
                        if (res.top < bottomDistance && res.top < messageData.height)
                            setCurrentDirection("bottom");
                        // props.direction = 'bottom'
                        customDirection = [{ direction: "bottom", long: 0 }];
                        console.log(res);
                        var translateX = (res.width - contentWidth) / 2;
                        if (res.left < res.right && res.left < screenWidth / 2) {
                            if (Math.abs(translateX) > res.left)
                                translateX = -res.left;
                            distance.transform = "translateX(" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(0)";
                        }
                        else {
                            var maxRight = screenWidth - res.left;
                            if (maxRight < contentWidth)
                                translateX = contentWidth - maxRight;
                            distance.transform = "translateX(-" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(30%)";
                        }
                    }
                    else if (currentDirection === "bottom") {
                        if (res.top > bottomDistance &&
                            bottomDistance < messageData.height)
                            setCurrentDirection("bottom");
                        // props.direction = 'bottom'
                        customDirection = [{ direction: "left", long: 0 }];
                        var translateX = (res.width - contentWidth) / 2;
                        if (res.left < res.right && res.left < screenWidth / 2) {
                            if (Math.abs(translateX) > res.left)
                                translateX = -res.left;
                            distance.transform = "translateX(" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(0)";
                        }
                        else {
                            var maxRight = screenWidth - res.left;
                            if (maxRight < contentWidth)
                                translateX = contentWidth - maxRight;
                            distance.transform = "translateX(-" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(-30%)";
                        }
                    }
                    else if (currentDirection === "left") {
                        var diffHeight = messageData.height - res.height;
                        if (res.left < contentWidth + 10 && leftDistance > res.left)
                            setCurrentDirection("right");
                        // props.direction = 'right'
                        customDirection = [
                            {
                                direction: "right",
                                long: 0,
                            },
                        ];
                        var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
                        var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
                        if (moveTop > 0)
                            moveTop = 0;
                        if (moveBottom > 0)
                            moveBottom = 0;
                        distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(30%) rotate(45deg)";
                        distance.transform = "translateX(" + (-res.width - 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
                    }
                    else if (currentDirection === "right") {
                        if (leftDistance - 10 < contentWidth && leftDistance < res.left)
                            setCurrentDirection("left");
                        // props.direction = 'left'
                        var diffHeight = messageData.height - res.height;
                        if (res.left < contentWidth + 10)
                            setCurrentDirection("right");
                        // props.direction = 'right'
                        customDirection = [
                            {
                                direction: "left",
                                long: 0,
                            },
                        ];
                        var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
                        var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
                        if (moveTop > 0)
                            moveTop = 0;
                        if (moveBottom > 0)
                            moveBottom = 0;
                        distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(-30%) rotate(45deg)";
                        distance.transform = "translateX(" + (res.width + 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
                    }
                    Object.assign(distance, resver2Zero(customDirection));
                    setDistance(distance);
                });
            });
        }
        reRender.call(_this);
    }, [width, currentDirection, showTip]);
    var ClTip = (React__default['default'].createElement(components.View, { id: contentId, onClick: function () {
            if (mode === "click") {
                var show_1 = !showTip;
                setShowTip(show_1);
                props.onChange && props.onChange(show_1);
            }
        }, onTouchStart: function () {
            if (mode === "touch") {
                var show_2 = !showTip;
                setShowTip(show_2);
                props.onChange && props.onChange(show_2);
            }
        }, onTouchEnd: function () {
            if (mode === "touch") {
                var show_3 = !showTip;
                setShowTip(show_3);
                props.onChange && props.onChange(show_3);
            }
        }, className: "cl-tip " + (showTip ? "cl-tip__showZindex" : ""), style: { position: "relative", display: "inline-block" } },
        React__default['default'].createElement(components.View, { id: messageId, className: "cl-tip__content  shadow " + (showTip ? "show" : "hide"), style: {
                width: (showTip ? width : 0) + "px",
                left: distance.left,
                right: distance.right,
                top: distance.top,
                bottom: distance.bottom,
                transform: distance.transform,
            } },
            React__default['default'].createElement(components.View, { className: "cl-tip__arrow " + currentDirection + " " + BG_COLOR_LIST[bgColor || "white"] + " " + (showTip ? "showArrow" : "hideArrow"), style: {
                    left: distance.left,
                    right: distance.right,
                    top: distance.top,
                    bottom: distance.bottom,
                    transform: distance.arrowTransform,
                } }),
            React__default['default'].createElement(components.View, { className: "cl-tip__message " + BG_COLOR_LIST[bgColor || "white"] },
                React__default['default'].createElement(components.View, { style: { width: width + "px", padding: "10px" } },
                    React__default['default'].createElement(ClText, { text: props.message }),
                    React__default['default'].createElement(components.View, { onClick: function (e) {
                            e.stopPropagation();
                        } }, props.renderMessage)))),
        props.children));
    return (React__default['default'].createElement(components.View, { className: classNames(props.className), style: Object.assign({}, props.style) }, isH5 ? React__default['default'].createElement(ClTip_H5, __assign({}, props)) : ClTip));
}

function ClSwiperAction(props) {
    var _a = __read(React.useState(props.options || []), 2), initOptions = _a[0], setInitOptions = _a[1];
    var _b = __read(React.useState(generateId()), 1), contentId = _b[0];
    var _c = __read(React.useState(0), 2), actionWidth = _c[0], setActionWidth = _c[1];
    var _d = __read(React.useState(0), 2), lastPoint = _d[0], setLastPoint = _d[1];
    var _e = __read(React.useState(0), 2), translateX = _e[0], setTranslateX = _e[1];
    var _f = __read(React.useState(0), 2), lastTranslateX = _f[0], setLastTranslateX = _f[1];
    var _g = __read(React.useState(0), 2), beforeMove = _g[0], setBeforeMove = _g[1];
    var _h = __read(React.useState(false), 2), init = _h[0], setInit = _h[1];
    React.useEffect(function () {
        var list = props.options || [];
        var newOptions = list.map(function (item) {
            item.cu_index_id = generateId();
            return item;
        });
        setInitOptions(newOptions);
        if (isH5) {
            var query = document.querySelector("#" + contentId);
            if (query) {
                var width = query.clientWidth;
                setActionWidth(width);
            }
        }
        else {
            var query_1 = Taro__default['default'].createSelectorQuery();
            setTimeout(function () {
                var view = query_1.select("#" + contentId);
                try {
                    view.boundingClientRect().exec(function (rect) {
                        var res = rect[0];
                        var width = res.width;
                        setActionWidth(width);
                        setInit(true);
                    });
                }
                catch (e) {
                    throw e;
                }
            }, 500);
        }
    }, [props.options]);
    var actionsComponent = initOptions.map(function (item, index) { return (React__default['default'].createElement(components.View, { className: BG_COLOR_LIST[item.bgColor || "white"] + " flex justify-center align-center cl-swiper-action__action__item", style: { height: "100%" }, key: item.cu_index_id, onClick: function () {
            props.onClick && props.onClick(index);
            if (props.autoClose)
                setTranslateX(0);
        } },
        React__default['default'].createElement(ClLayout, { padding: "small", paddingDirection: "horizontal" }, item.text))); });
    React.useEffect(function () {
        if (translateX === 0) {
            props.onClose && props.onClose();
        }
        else if (Math.abs(translateX) === actionWidth) {
            setTimeout(function () { }, 300);
            props.onOpened && props.onOpened();
        }
    }, [translateX]);
    React.useEffect(function () {
        if (props.show) {
            if (props.direction === "left") {
                setTranslateX(actionWidth);
            }
            else {
                setTranslateX(-actionWidth);
            }
        }
    }, [props.show, actionWidth]);
    return (React__default['default'].createElement(components.View, { className: classNames("cl-swiper-action", props.className), style: Object.assign({}, props.style), onClick: function (e) {
            e.stopPropagation();
        }, onTouchStart: function (e) {
            if (props.disabled)
                return;
            setLastPoint(e.touches[0].clientX);
            setBeforeMove(e.touches[0].clientX);
            setLastTranslateX(translateX);
        }, onTouchMove: function (e) {
            if (props.disabled)
                return;
            var nowPoint = e.touches[0].clientX;
            // 为正则右，为负则左
            var distance = nowPoint - lastPoint;
            if (props.direction === "right") {
                distance =
                    Math.abs(lastTranslateX) === actionWidth
                        ? distance < 0
                            ? 0
                            : distance
                        : lastTranslateX === 0
                            ? distance > 0
                                ? 0
                                : distance
                            : distance;
            }
            if (props.direction === "left") {
                distance =
                    Math.abs(lastTranslateX) === actionWidth
                        ? distance > 0
                            ? 0
                            : distance
                        : lastTranslateX === 0
                            ? distance < 0
                                ? 0
                                : distance
                            : distance;
            }
            setTranslateX(lastTranslateX + distance * screenPercent);
        }, onTouchEnd: function (e) {
            if (props.disabled)
                return;
            var touches = e.changedTouches[0];
            var nowClientX = touches.clientX;
            var move = beforeMove - nowClientX;
            var isRight = props.direction === "right";
            // 向左滑动一定距离
            if (move > 20) {
                setTranslateX(isRight ? -actionWidth : 0);
                setLastTranslateX(isRight ? -actionWidth : 0);
                // 向右滑动一定距离
            }
            else if (move < -20) {
                setTranslateX(isRight ? 0 : actionWidth);
                setLastTranslateX(isRight ? 0 : actionWidth);
            }
            else {
                setLastTranslateX(lastTranslateX);
                setTranslateX(lastTranslateX);
            }
        } },
        React__default['default'].createElement(components.View, { style: {
                transform: "translateX(" + Taro.pxTransform(translateX / screenPercent) + ")",
                transition: "all 0.3s ease-in",
                position: "relative",
            } },
            props.children,
            isH5 ? (React__default['default'].createElement(components.View, { className: "cl-swiper-action__action", id: contentId, style: {
                    right: "" + (props.direction === "right"
                        ? Taro.pxTransform(-actionWidth / screenPercent)
                        : "auto"),
                    left: "" + (props.direction === "left"
                        ? Taro.pxTransform(-actionWidth / screenPercent)
                        : "auto"),
                    zIndex: init ? 1 : -1,
                } }, actionsComponent)) : (React__default['default'].createElement(components.View, { className: "cl-swiper-action__action", id: contentId, style: {
                    right: "" + (props.direction === "right"
                        ? Taro.pxTransform(-actionWidth / screenPercent)
                        : "auto"),
                    left: "" + (props.direction === "left"
                        ? Taro.pxTransform(-actionWidth / screenPercent)
                        : "auto"),
                    zIndex: init ? 1 : -1,
                } }, actionsComponent)))));
}
ClSwiperAction.options = {
    addGlobalClass: true,
};
ClSwiperAction.defaultProps = {
    show: false,
    disabled: false,
    autoClose: false,
    options: [],
    direction: "right",
    onClick: function () { },
    onClose: function () { },
    onOpened: function () { },
};

function ClActionSheet(props) {
    var _this = this;
    var type = props.type, tip = props.tip, isOpened = props.isOpened, closeWithShadow = props.closeWithShadow, options = props.options, cancelText = props.cancelText, showCancel = props.showCancel, cancelBgColor = props.cancelBgColor, cancelFontColor = props.cancelFontColor, onClick = props.onClick, onCancel = props.onCancel;
    var _a = __read(React.useState([]), 2), actionsArr = _a[0], setActionsArr = _a[1];
    var _b = __read(React.useState(false), 2), show = _b[0], setShow = _b[1];
    React.useMemo(function () {
        var list = options || [];
        setActionsArr(list.map(function (item) {
            item.cu_action_sheet_id = generateId();
            return item;
        }));
    }, [options]);
    React.useMemo(function () {
        setShow(!!isOpened);
    }, [isOpened]);
    var click = function (index) {
        onClick && onClick(index);
    };
    var cancelComponent = (React__default['default'].createElement(components.View, null,
        React__default['default'].createElement(components.View, { onClick: function (e) {
                e.stopPropagation();
                onCancel && onCancel();
            }, style: {
                marginTop: Taro.pxTransform(20)
            }, className: classnames([
                {
                    cu_action_sheet_card: type === "card"
                }
            ]) },
            React__default['default'].createElement(ClCard, { bgColor: cancelBgColor, type: "full", active: true },
                React__default['default'].createElement(ClText, { text: cancelText, textColor: cancelFontColor, align: "center" })))));
    var tipComponent = (React__default['default'].createElement(ClText, { align: "center", bgColor: "gray", textColor: "grey" },
        React__default['default'].createElement(ClLayout, { padding: "xsmall", paddingDirection: "vertical" }, tip)));
    var actionsComponents = actionsArr.map(function (item, index) { return (React__default['default'].createElement(components.View, { onClick: click.bind(_this, index), className: classnames([
            {
                cu_action_sheet_line: index !== actionsArr.length - 1
            },
            BG_COLOR_LIST[item.bgColor]
        ]), key: item.cu_action_sheet_id },
        React__default['default'].createElement(ClCard, { bgColor: item.bgColor, type: "full", active: true }, item.text))); });
    return (React__default['default'].createElement(components.View, { className: classnames([
            "cu-modal bottom-modal",
            {
                show: show
            }
        ], props.className), style: Object.assign({}, props.style), onClick: function (e) {
            closeWithShadow && setShow(false);
            onCancel && onCancel();
            e.stopPropagation();
        } },
        React__default['default'].createElement(components.View, { className: "cu-dialog", style: {
                maxHeight: "70vh",
                backgroundColor: "" + (type === "card" ? "transparent" : "#f8f8f8")
            }, onClick: function (e) {
                e.stopPropagation();
            } },
            React__default['default'].createElement(components.View, { className: classnames([
                    {
                        cu_action_sheet_card: type === "card"
                    }
                ]) },
                tip ? tipComponent : "",
                actionsComponents),
            showCancel ? cancelComponent : "",
            React__default['default'].createElement(components.View, { style: { height: "20px", width: "100%" } }))));
}
ClActionSheet.options = {
    addGlobalClass: true
};
ClActionSheet.defaultProps = {
    tip: "",
    isOpened: false,
    closeWithShadow: true,
    actions: [],
    cancelText: "取消",
    showCancel: false,
    cancelBgColor: "white",
    cancelFontColor: undefined,
    onClick: function () { },
    onCancel: function () { }
};

function ClCurtain(props) {
    var _a = props.show, show = _a === void 0 ? false : _a, _b = props.closeWithShadow, closeWithShadow = _b === void 0 ? false : _b, _c = props.closeBtnPosition, closeBtnPosition = _c === void 0 ? 'bottom' : _c;
    var _d = __read(React.useState(show), 2), showImage = _d[0], setShowImage = _d[1];
    React.useEffect(function () {
        setShowImage(show);
    }, [show]);
    var renderImage = function () {
        var commonComponent = React__default['default'].createElement(components.View, { className: classNames('cu-load load-image', props.className), style: Object.assign({}, props.style), onClick: function (e) {
                e.stopPropagation();
                if (closeWithShadow) {
                    setShowImage(false);
                    props.onClose && props.onClose();
                }
            } },
            React__default['default'].createElement(components.View, { className: 'cu-curtain__content', onClick: function () {
                    props.onClick && props.onClick();
                } },
                props.children,
                React__default['default'].createElement(components.View, { className: closeBtnPosition, onClick: function (e) {
                        e.stopPropagation();
                        setShowImage(false);
                        props.onClose && props.onClose();
                    } },
                    React__default['default'].createElement(ClIcon, { iconName: 'close', color: 'white' }))));
        return showImage && commonComponent;
    };
    return renderImage();
}

function ClNoticeBar(props) {
    var text = props.text, bgColor = props.bgColor, single = props.single, marquee = props.marquee, speed = props.speed, showMore = props.showMore, moreText = props.moreText, icon = props.icon, close = props.close, onClose = props.onClose, onMore = props.onMore;
    var _a = __read(React.useState('100%'), 2), singleContentWidth = _a[0], setSingleContentWidth = _a[1];
    var _b = __read(React.useState(0), 2), contentWidth = _b[0], setContentWidth = _b[1];
    var _c = __read(React.useState(speed), 2), marqueeSpeed = _c[0], setMarqueeSpeed = _c[1];
    var _d = __read(React.useState(generateId()), 1), textId = _d[0];
    var _e = __read(React.useState(generateId()), 1), contentId = _e[0];
    var _f = __read(React.useState(single && marquee), 2), marqueeClass = _f[0], setMarqueeClass = _f[1];
    var _g = __read(React.useState(true), 2), show = _g[0], setShow = _g[1];
    var cut = single && !marquee;
    React.useEffect(function () {
        setMarqueeClass(single && marquee);
        if (single) {
            var width = 180;
            if (!showMore)
                width = 50;
            if (close)
                width += 50;
            setSingleContentWidth("calc(100vw - " + Taro.pxTransform(width) + ")");
        }
        var query = Taro__default['default'].createSelectorQuery();
        var promise = new Promise(function (resolve) {
            query
                .select("#" + contentId)
                .boundingClientRect(function (content) {
                resolve(content);
            })
                .exec();
        });
        promise.then(function (content) {
            query
                .select("#" + textId)
                .boundingClientRect(function (res) {
                if (res.width < content.width) {
                    setMarqueeClass(false);
                    setMarqueeSpeed(0);
                    return;
                }
                setContentWidth(-res.width);
                function beginInterval(time) {
                    var timer;
                    timer = setInterval(function () {
                        setContentWidth(res.width);
                        setMarqueeSpeed(0);
                        clearInterval(timer);
                        var timeout;
                        timeout = setTimeout(function () {
                            setContentWidth(-res.width);
                            var percentSpeed = res.width / speed;
                            var speedNow = speed + content.width / percentSpeed;
                            setMarqueeSpeed(speedNow);
                            beginInterval(speedNow);
                            clearTimeout(timeout);
                        }, 50);
                    }, time * 1000);
                }
                beginInterval(marqueeSpeed);
            })
                .exec();
        });
    }, [props.showMore, props.single, props.speed]);
    var showMoreComponent = showMore ? (React__default['default'].createElement(components.View, { style: {
            flex: '0 0 auto',
            zIndex: 1,
            paddingRight: Taro.pxTransform(10),
            paddingLeft: Taro.pxTransform(10)
        }, onClick: function () {
            onMore && onMore();
        } },
        React__default['default'].createElement(ClFlex, { align: 'center' },
            React__default['default'].createElement(ClText, { text: moreText, textColor: 'gray', size: 'small' }),
            React__default['default'].createElement(ClIcon, { iconName: 'right', color: 'gray', size: 24 })))) : ('');
    var showCloseComponent = close ? (React__default['default'].createElement(components.View, { onClick: function () {
            setShow(false);
            onClose && onClose();
        } },
        React__default['default'].createElement(ClIcon, { iconName: 'close', size: 24, color: 'gray' }))) : ('');
    return (React__default['default'].createElement(components.View, { className: classnames('cu-notice', "" + BG_COLOR_LIST[bgColor || 'yellow']) }, show ? (React__default['default'].createElement(ClFlex, { align: 'center', justify: 'between', style: { minHeight: Taro.pxTransform(40) } },
        React__default['default'].createElement(ClLayout, { margin: 'xsmall', marginDirection: 'right', style: { zIndex: 10, flex: '0 0 auto' } },
            React__default['default'].createElement(components.View, null,
                React__default['default'].createElement(ClLayout, { padding: 'xsmall', paddingDirection: 'horizontal' },
                    React__default['default'].createElement(ClFlex, null,
                        showCloseComponent,
                        React__default['default'].createElement(ClIcon, { iconName: icon || 'notificationfill', size: 24 }))))),
        React__default['default'].createElement(components.View, { id: contentId, style: {
                flex: '1 1 auto',
                overflow: 'hidden',
                minHeight: Taro.pxTransform(40)
            } },
            React__default['default'].createElement(components.View, { className: classnames([
                    'text-sm',
                    {
                        'text-cut': cut
                    }
                ]), style: {
                    lineHeight: Taro.pxTransform(42),
                    transition: "all " + (marqueeClass ? marqueeSpeed : 0) + "s linear",
                    transform: "translateX(" + (marqueeClass ? Taro.pxTransform(contentWidth / screenPercent) : 0) + ")",
                    whiteSpace: 'nowrap',
                    width: singleContentWidth
                } },
                React__default['default'].createElement(components.Text, { id: textId, className: classnames([
                        {
                            'cl-text__nowrap': single,
                            'cl-text__wrap': !single
                        }
                    ]) }, text))),
        showMoreComponent)) : ('')));
}
ClNoticeBar.options = {
    addGlobalClass: true
};
ClNoticeBar.defaultProps = {
    text: '',
    bgColor: 'light-yellow',
    single: false,
    marquee: false,
    speed: 5,
    showMore: false,
    moreText: '查看详情',
    icon: 'notificationfill',
    close: false,
    onClose: function () { },
    onMore: function () { }
};

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
});

var FORMAT_DATE = 'YYYY-MM-DD';
var THIS_WEEK = 'thisWeek';
var PRE_WEEK = 'preWeek';
var NEXT_WEEK = 'nextWeek';
var PRE_MONTH = 'preMonth';
var THIS_MONTH = 'thisMonth';
var NEXT_MONTH = 'nextMonth';
var mapChangeWeekIndex = [PRE_WEEK, THIS_WEEK, NEXT_WEEK];
var mapChangeMonthIndex = [PRE_MONTH, THIS_MONTH, NEXT_MONTH];
var render = false;
function dealYearMonth(day) {
    return day.year() + "\u5E74" + (day.month() + 1) + "\u6708";
}
var Calendar_h5 = /** @class */ (function (_super) {
    __extends(Calendar_h5, _super);
    function Calendar_h5(props) {
        var _this = _super.call(this, props) || this;
        var today = dayjs_min().format(FORMAT_DATE);
        _this.state = {
            thisWeek: [],
            preWeek: [],
            nextWeek: [],
            thisMonth: [],
            nextMonth: [],
            preMonth: [],
            currentYear: dayjs_min().year(),
            chooseDate: today,
            currentDate: dealYearMonth(dayjs_min(today)),
            currentActive: 1,
            currentActiveLines: 5,
            showMonths: false,
            today: today
        };
        return _this;
    }
    Calendar_h5.prototype.selectDate = function (month) {
        var year = this.state.currentYear;
        var date = year + "-" + (month + 1) + "-01";
        this.changeMonth(date);
        this.setState({
            showMonths: false,
            currentDate: dealYearMonth(dayjs_min(date))
        });
    };
    Calendar_h5.prototype.clickDate = function (_a) {
        var item = _a.item;
        if (item.disabled)
            return;
        if (item.empty)
            return;
        if (this.props.calendarType === 'week') {
            var weeks_1 = {
                thisWeek: this.state.thisWeek,
                preWeek: this.state.preWeek,
                nextWeek: this.state.nextWeek
            };
            Object.keys(weeks_1).forEach(function (week) {
                weeks_1[week].forEach(function (item) { return (item.active = false); });
            });
        }
        else {
            var months_1 = {
                thisMonth: this.state.thisMonth,
                preMonth: this.state.preMonth,
                nextMonth: this.state.nextMonth
            };
            Object.keys(months_1).forEach(function (month) {
                months_1[month].forEach(function (item) { return (item.active = false); });
            });
        }
        item.active = true;
        this.setState({
            chooseDate: item.date
        });
        this.props.onClick && this.props.onClick(item.date);
    };
    Calendar_h5.prototype.getPreNextArray = function (index, data) {
        var _a;
        var varChange = this.props.calendarType === 'week'
            ? {
                PRE: PRE_WEEK,
                THIS: THIS_WEEK,
                NEXT: NEXT_WEEK
            }
            : {
                PRE: PRE_MONTH,
                THIS: THIS_MONTH,
                NEXT: NEXT_MONTH
            };
        var dataChange = this.props.calendarType === 'week'
            ? {
                PRE: 'tempPreWeek',
                THIS: 'tempThisWeek',
                NEXT: 'tempNextWeek'
            }
            : {
                PRE: 'tempPreMonth',
                THIS: 'tempThisMonth',
                NEXT: 'tempNextMonth'
            };
        var current = (_a = {},
            _a[varChange.PRE] = data[dataChange.PRE],
            _a[varChange.THIS] = data[dataChange.THIS],
            _a[varChange.NEXT] = data[dataChange.NEXT],
            _a);
        if (index === 0) {
            current[varChange.PRE] = data[dataChange.THIS];
            current[varChange.THIS] = data[dataChange.NEXT];
            current[varChange.NEXT] = data[dataChange.PRE];
        }
        if (index === 2) {
            current[varChange.PRE] = data[dataChange.NEXT];
            current[varChange.THIS] = data[dataChange.PRE];
            current[varChange.NEXT] = data[dataChange.THIS];
        }
        return current;
    };
    Calendar_h5.prototype.changeDate = function (e) {
        var arrayIndex = e.detail.current;
        if (render) {
            arrayIndex = 1;
            render = false;
        }
        var currentChangeDate = '';
        if (this.props.calendarType === 'week') {
            var oldWeeks = {
                thisWeek: this.state.thisWeek,
                preWeek: this.state.preWeek,
                nextWeek: this.state.nextWeek
            };
            var showWeeks = oldWeeks[mapChangeWeekIndex[arrayIndex]];
            if (showWeeks && showWeeks.length) {
                this.setState({
                    currentDate: dealYearMonth(dayjs_min(showWeeks[3].date))
                });
                currentChangeDate = dayjs_min(showWeeks[3].date).format('YYYY-MM');
                var newWeeks = this.getWeeks(oldWeeks[mapChangeWeekIndex[arrayIndex]][3].date);
                var current = this.getPreNextArray(arrayIndex, newWeeks);
                this.setState({
                    preWeek: current[PRE_WEEK],
                    nextWeek: current[NEXT_WEEK],
                    thisWeek: current[THIS_WEEK]
                });
            }
        }
        else {
            var oldMonths = {
                thisMonth: this.state.thisMonth,
                preMonth: this.state.preMonth,
                nextMonth: this.state.nextMonth
            };
            var showMonths = oldMonths[mapChangeMonthIndex[arrayIndex]];
            if (showMonths && showMonths.length) {
                currentChangeDate = dayjs_min(showMonths[8].date).format('YYYY-MM');
                this.setState({
                    currentDate: dealYearMonth(dayjs_min(showMonths[8].date)),
                    currentActiveLines: Math.ceil(showMonths.length / 7)
                });
                var newMonths = this.getMonths(oldMonths[mapChangeMonthIndex[arrayIndex]][8].date);
                var current = this.getPreNextArray(arrayIndex, newMonths);
                this.setState({
                    preMonth: current[PRE_MONTH],
                    nextMonth: current[NEXT_MONTH],
                    thisMonth: current[THIS_MONTH]
                });
            }
        }
        this.setState({
            currentActive: arrayIndex
        });
        this.props.onChange && this.props.onChange(currentChangeDate);
    };
    Calendar_h5.prototype.changeMonth = function (date) {
        if (this.props.calendarType === 'week') {
            var weeks = this.getWeeks(date);
            var newIndex = this.state.currentActive + 1 > 2 ? 0 : this.state.currentActive + 1;
            var current = this.getPreNextArray(newIndex, weeks);
            this.setState({
                currentActive: newIndex,
                preWeek: current[PRE_WEEK],
                nextWeek: current[NEXT_WEEK],
                thisWeek: current[THIS_WEEK]
            });
        }
        else {
            var months = this.getMonths(date);
            var newIndex = this.state.currentActive + 1 > 2 ? 0 : this.state.currentActive + 1;
            var current = this.getPreNextArray(newIndex, months);
            this.setState({
                currentActive: newIndex,
                preMonth: current[PRE_MONTH],
                nextMonth: current[NEXT_MONTH],
                thisMonth: current[THIS_MONTH]
            });
        }
    };
    Calendar_h5.prototype.handleBackToToday = function () {
        this.setState({
            chooseDate: this.state.today
        });
        this.changeMonth(this.state.today);
    };
    Calendar_h5.prototype.dealEveryDay = function (_a) {
        var i = _a.i, currentDay = _a.currentDay, date = _a.date;
        var thisNum = i - currentDay;
        var method = thisNum > 0 ? 'add' : 'subtract';
        var day = dayjs_min(date)[method](Math.abs(thisNum), 'day');
        var tipDayArray = this.props.tipDay || [];
        var dateData = {
            timeStamp: day.valueOf(),
            date: day.format(FORMAT_DATE),
            month: day.get('month'),
            day: day.get('date'),
            year: day.get('year'),
            today: this.state.today === day.format(FORMAT_DATE),
            old: dayjs_min(this.state.today).valueOf() - day.valueOf() > 0,
            active: this.state.chooseDate === day.format(FORMAT_DATE),
            tipTop: '',
            tipBottom: '',
            badge: {
                show: false,
                color: 'red',
                num: ''
            },
            disabled: false,
            special: {
                show: false,
                color: 'green'
            },
            highlight: this.props.highlightWeekend
                ? [0, 6].includes(day.get('day'))
                : false
        };
        // tip
        var tipIndex = tipDayArray.findIndex(function (item) { return item.date === dateData.date; });
        if (tipIndex >= 0) {
            var tipData = tipDayArray[tipIndex];
            dateData = Object.assign(dateData, {
                tipTop: tipData.tipTop || '',
                tipBottom: tipData.tipBottom || '',
                tipTopColor: tipData.tipTopColor,
                tipBottomColor: tipData.tipBottomColor
            });
        }
        // badge
        if (typeof this.props.badge === 'string' &&
            dateData.date === this.props.badge) {
            Object.assign(dateData.badge, { show: true });
        }
        else if (this.props.badge instanceof Array) {
            this.props.badge.forEach(function (item) {
                if (item.date === dateData.date) {
                    Object.assign(dateData.badge, {
                        show: true,
                        color: item.color || 'red',
                        num: item.num || ''
                    });
                }
            });
        }
        // disabledDay
        if (this.props.disabledDay instanceof Array) {
            this.props.disabledDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.disabled = dateData.date === item;
                }
                else if (item instanceof Array) {
                    var minDate = item[0] && dayjs_min(item[0]).valueOf();
                    var maxDate = item[1] && dayjs_min(item[1]).valueOf();
                    if (minDate && maxDate) {
                        dateData.disabled =
                            dateData.timeStamp > minDate && dateData.timeStamp < maxDate;
                    }
                    else if (minDate) {
                        dateData.disabled = dateData.timeStamp > minDate;
                    }
                    else if (maxDate) {
                        dateData.disabled = dateData.timeStamp < maxDate;
                    }
                }
            });
        }
        // specialDay
        if (this.props.specialDay instanceof Array) {
            this.props.specialDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.special.show = item === dateData.date;
                }
                else if (typeof item === 'object') {
                    var date_1 = item.date;
                    var color = item.color;
                    Object.assign(dateData.special, {
                        date: date_1 === dateData.date,
                        color: color
                    });
                }
            });
        }
        return dateData;
    };
    Calendar_h5.prototype.getWeeks = function (date) {
        var weekday = dayjs_min(date).day();
        var tempThisWeek = [];
        var tempPreWeek = [];
        var tempNextWeek = [];
        var i = -7;
        while (1) {
            if (i >= 14)
                break;
            var dateData = this.dealEveryDay({
                i: i,
                currentDay: weekday,
                date: date
            });
            if (i < 0) {
                tempPreWeek.push(dateData);
            }
            else if (i >= 7) {
                tempNextWeek.push(dateData);
            }
            else {
                tempThisWeek.push(dateData);
            }
            i++;
        }
        return {
            tempThisWeek: tempThisWeek,
            tempPreWeek: tempPreWeek,
            tempNextWeek: tempNextWeek
        };
    };
    Calendar_h5.prototype.fillMonths = function (months) {
        var firstDay = months[0];
        var weekday = dayjs_min(firstDay.date).day();
        while (weekday) {
            months.unshift({
                timeStamp: weekday,
                date: '',
                month: '',
                day: '',
                year: '',
                today: false,
                old: false,
                active: false,
                tipTop: '',
                tipBottom: '',
                badge: {
                    show: false,
                    color: 'red',
                    num: ''
                },
                disabled: false,
                special: {
                    show: false,
                    color: 'green'
                },
                empty: true
            });
            weekday--;
        }
        return months;
    };
    Calendar_h5.prototype.getMonths = function (date) {
        var tempThisMonth = [];
        var tempPreMonth = [];
        var tempNextMonth = [];
        var preMonthDays = dayjs_min(date).subtract(1, 'month').daysInMonth();
        var thisMonthDays = dayjs_min(date).daysInMonth();
        var nextMonthDays = dayjs_min(date).add(1, 'month').daysInMonth();
        var thisDays = dayjs_min(date).date();
        var i = -preMonthDays + 1;
        while (1) {
            if (i > nextMonthDays + thisMonthDays)
                break;
            var dateData = this.dealEveryDay({
                i: i,
                currentDay: thisDays,
                date: date
            });
            if (i <= 0) {
                tempPreMonth.push(dateData);
            }
            else if (i > thisMonthDays) {
                tempNextMonth.push(dateData);
            }
            else {
                tempThisMonth.push(dateData);
            }
            i++;
        }
        return {
            tempThisMonth: this.fillMonths(tempThisMonth),
            tempPreMonth: this.fillMonths(tempPreMonth),
            tempNextMonth: this.fillMonths(tempNextMonth)
        };
    };
    Calendar_h5.prototype.initCalendar = function () {
        if (this.props.calendarType === 'week') {
            var weeks = this.getWeeks(this.state.today);
            this.setState({
                preWeek: weeks.tempPreWeek,
                thisWeek: weeks.tempThisWeek,
                nextWeek: weeks.tempNextWeek
            });
        }
        else {
            var months = this.getMonths(this.state.today);
            this.setState({
                preMonth: months.tempPreMonth,
                thisMonth: months.tempThisMonth,
                nextMonth: months.tempNextMonth
            });
        }
        render = true;
    };
    Calendar_h5.prototype.componentDidMount = function () {
        this.initCalendar();
    };
    Calendar_h5.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.calendarType !== this.props.calendarType) {
            this.initCalendar();
        }
    };
    Calendar_h5.prototype.render = function () {
        var _this = this;
        var _a = this.state, thisWeek = _a.thisWeek, thisMonth = _a.thisMonth, preWeek = _a.preWeek, preMonth = _a.preMonth, nextWeek = _a.nextWeek, nextMonth = _a.nextMonth, showMonths = _a.showMonths, currentDate = _a.currentDate, currentActiveLines = _a.currentActiveLines, currentYear = _a.currentYear;
        var _b = this.props, highlightWeekend = _b.highlightWeekend, highlightWeekendColor = _b.highlightWeekendColor, activeColor = _b.activeColor, showType = _b.showType, backToToday = _b.backToToday, calendarType = _b.calendarType;
        var weekGridComponent = [
            '周日',
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六'
        ].map(function (week, index) { return (React__default['default'].createElement(components.View, { key: week },
            React__default['default'].createElement(ClText, { align: 'center', size: 'small', lineSpacing: 'small', textColor: highlightWeekend
                    ? [0, 6].includes(index)
                        ? highlightWeekendColor
                        : 'black'
                    : 'black' }, week))); });
        var BGClassName = BG_COLOR_LIST[activeColor || 'blue'];
        var oldTextClassName = TEXT_COLOR_LIST['gray'];
        var weeksComponent = preWeek.length
            ? [preWeek, thisWeek, nextWeek].map(function (week) { return (React__default['default'].createElement(components.SwiperItem, { key: week[3].date },
                React__default['default'].createElement(ClGrid, { col: 7 }, week.map(function (item) {
                    var _a, _b;
                    return (React__default['default'].createElement(components.View, { key: item.timeStamp, onClick: function () {
                            _this.clickDate({
                                item: item
                            });
                        } },
                        React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                            React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center' },
                                React__default['default'].createElement(components.View, { style: {
                                        position: 'relative'
                                    }, className: classNames([
                                        'day-normal',
                                        "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                        "" + (item.special.show && !item.active
                                            ? BG_COLOR_LIST[item.special.color]
                                            : ''),
                                        (_a = {},
                                            _a[BGClassName] = !item.disabled && item.active,
                                            _a[oldTextClassName] = item.old,
                                            _a)
                                    ]) },
                                    React__default['default'].createElement(components.View, { className: classNames([
                                            (_b = {},
                                                _b['cu-tag badge'] = item.badge.show,
                                                _b),
                                            BG_COLOR_LIST[item.badge.color]
                                        ]) }, item.badge.num),
                                    React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                        React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipTopColor, text: item.tipTop }),
                                        React__default['default'].createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                                ? highlightWeekendColor
                                                : undefined }),
                                        React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipBottomColor, text: item.tipBottom })))))));
                })))); })
            : '';
        var monthsComponent = [preMonth, thisMonth, nextMonth].every(function (item) { return item.length > 0; })
            ? [preMonth, thisMonth, nextMonth].map(function (month) { return (React__default['default'].createElement(components.SwiperItem, { key: month[3].date },
                React__default['default'].createElement(ClGrid, { col: 7 }, month.map(function (item) {
                    var _a, _b;
                    return (React__default['default'].createElement(components.View, { key: item.timeStamp, onClick: function () {
                            _this.clickDate({
                                item: item
                            });
                        } },
                        React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                            React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center' },
                                React__default['default'].createElement(components.View, { style: {
                                        position: 'relative'
                                    }, className: classNames([
                                        'day-normal',
                                        "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                        "" + (item.special.show && !item.active
                                            ? BG_COLOR_LIST[item.special.color]
                                            : ''),
                                        (_a = {},
                                            _a[BGClassName] = !item.disabled && item.active,
                                            _a[oldTextClassName] = item.old,
                                            _a)
                                    ]) },
                                    React__default['default'].createElement(components.View, { className: classNames([
                                            (_b = {},
                                                _b['cu-tag badge'] = item.badge.show,
                                                _b),
                                            BG_COLOR_LIST[item.badge.color]
                                        ]) }, item.badge.num),
                                    React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                        React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipTopColor, text: item.tipTop }),
                                        React__default['default'].createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                                ? highlightWeekendColor
                                                : undefined }),
                                        React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipBottomColor, text: item.tipBottom })))))));
                })))); })
            : '';
        var months = Array.from(Array(12)).map(function (_item, index) { return index + 1 + "\u6708"; });
        return (React__default['default'].createElement(ClCard, { type: showType },
            React__default['default'].createElement(components.View, { className: classNames([BG_COLOR_LIST['white'], 'cuCalendar']) },
                React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: 'bottom' },
                    React__default['default'].createElement(ClFlex, { justify: 'between', align: 'center' },
                        React__default['default'].createElement(ClTip, { renderMessage: React__default['default'].createElement(components.View, null,
                                React__default['default'].createElement(ClLayout, null,
                                    React__default['default'].createElement(ClFlex, { align: 'center', justify: 'between' },
                                        React__default['default'].createElement(components.View, { onClick: function () {
                                                _this.setState({
                                                    currentYear: currentYear - 1
                                                });
                                            } },
                                            React__default['default'].createElement(ClIcon, { iconName: 'pullleft' })),
                                        React__default['default'].createElement(ClText, { text: currentYear + '' }),
                                        React__default['default'].createElement(components.View, { onClick: function () {
                                                _this.setState({
                                                    currentYear: currentYear + 1
                                                });
                                            } },
                                            React__default['default'].createElement(ClIcon, { iconName: 'pullright' })))),
                                React__default['default'].createElement(ClGrid, { col: 4 }, months.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: item, className: classNames([
                                        'flex justify-center align-center'
                                    ]) },
                                    React__default['default'].createElement(ClLayout, { margin: 'small', marginDirection: 'vertical' },
                                        React__default['default'].createElement(ClButton, { size: 'small', bgColor: 'light-gray', shadow: false, long: true, text: item, onClick: function () {
                                                _this.selectDate(index);
                                            } })))); }))), mode: 'click', width: 300, show: this.state.showMonths, onChange: function () {
                                var currentShow = !showMonths;
                                _this.setState({
                                    showMonths: currentShow
                                });
                            } },
                            React__default['default'].createElement(ClButton, { shape: 'round', shadow: false, size: 'small' },
                                React__default['default'].createElement(ClText, { className: 'chooseDate', lineSpacing: 'normal', text: currentDate }))),
                        backToToday ? (React__default['default'].createElement(components.View, { onClick: function () {
                                _this.handleBackToToday();
                            } },
                            React__default['default'].createElement(ClButton, { shadow: false, size: 'small' },
                                React__default['default'].createElement(ClText, { className: 'backToToday', lineSpacing: 'normal' }, "\u4ECA")))) : (''))),
                React__default['default'].createElement(components.View, { className: 'week' },
                    React__default['default'].createElement(ClGrid, { col: 7, className: 'solid-bottom' }, weekGridComponent),
                    React__default['default'].createElement(components.Swiper, { current: this.state.currentActive, skipHiddenItemLayout: true, circular: true, key: 'key-' + Math.random(), style: {
                            width: '100%',
                            height: calendarType === 'week'
                                ? Taro.pxTransform(120)
                                : Taro.pxTransform(120 * currentActiveLines)
                        }, onChange: function (e) {
                            if (_this.state.currentActive !== e.detail.current)
                                _this.changeDate(e);
                        } }, calendarType === 'week' ? weeksComponent : monthsComponent)))));
    };
    Calendar_h5.options = {
        addGlobalClass: true
    };
    return Calendar_h5;
}(React__default['default'].Component));

function Calendar_weapp(props) {
    var _this = this;
    var highlightWeekendColor = props.highlightWeekendColor, calendarType = props.calendarType, showType = props.showType, activeColor = props.activeColor, tipDay = props.tipDay, backToToday = props.backToToday, disabledDay = props.disabledDay, badge = props.badge, onChange = props.onChange, onClick = props.onClick, highlightWeekend = props.highlightWeekend, specialDay = props.specialDay;
    var FORMAT_DATE = 'YYYY-MM-DD';
    var THIS_WEEK = 'thisWeek';
    var PRE_WEEK = 'preWeek';
    var NEXT_WEEK = 'nextWeek';
    var PRE_MONTH = 'preMonth';
    var THIS_MONTH = 'thisMonth';
    var NEXT_MONTH = 'nextMonth';
    var today = dayjs_min().format(FORMAT_DATE);
    var mapChangeWeekIndex = [PRE_WEEK, THIS_WEEK, NEXT_WEEK];
    var mapChangeMonthIndex = [PRE_MONTH, THIS_MONTH, NEXT_MONTH];
    var _a = __read(React.useState([]), 2), thisWeek = _a[0], setThisWeek = _a[1];
    var _b = __read(React.useState([]), 2), preWeek = _b[0], setPreWeek = _b[1];
    var _c = __read(React.useState([]), 2), nextWeek = _c[0], setNextWeek = _c[1];
    var _d = __read(React.useState([]), 2), thisMonth = _d[0], setThisMonth = _d[1];
    var _e = __read(React.useState([]), 2), preMonth = _e[0], setPreMonth = _e[1];
    var _f = __read(React.useState([]), 2), nextMonth = _f[0], setNextMonth = _f[1];
    var _g = __read(React.useState(today), 2), chooseDate = _g[0], setChooseDate = _g[1];
    var _h = __read(React.useState(dealYearMonth(dayjs_min(today))), 2), currentDate = _h[0], setCurrentDate = _h[1];
    var _j = __read(React.useState(1), 2), currentActive = _j[0], setCurrentActive = _j[1];
    var _k = __read(React.useState(5), 2), currentActiveLines = _k[0], setCurrentActiveLines = _k[1];
    var _l = __read(React.useState(false), 2), showMonths = _l[0], setShowMonths = _l[1];
    var _m = __read(React.useState(dayjs_min().year()), 2), currentYear = _m[0], setCurrentYear = _m[1];
    var selectDate = function (month) {
        var date = currentYear + "-" + (month + 1) + "-01";
        changeMonth(date);
        setShowMonths(false);
        setCurrentDate(dealYearMonth(dayjs_min(date)));
    };
    function dealYearMonth(day) {
        return day.year() + "\u5E74" + (day.month() + 1) + "\u6708";
    }
    var clickDate = function (_a) {
        var item = _a.item;
        if (item.disabled)
            return;
        if (item.empty)
            return;
        if (calendarType === 'week') {
            var weeks_1 = {
                thisWeek: thisWeek,
                preWeek: preWeek,
                nextWeek: nextWeek
            };
            Object.keys(weeks_1).forEach(function (week) {
                weeks_1[week].forEach(function (item) { return (item.active = false); });
            });
        }
        else {
            var months_1 = {
                thisMonth: thisMonth,
                preMonth: preMonth,
                nextMonth: nextMonth
            };
            Object.keys(months_1).forEach(function (month) {
                months_1[month].forEach(function (item) { return (item.active = false); });
            });
        }
        item.active = true;
        setChooseDate(item.date);
        onClick && onClick(item.date);
    };
    var getPreNextArray = function (index, data) {
        var _a;
        var varChange = calendarType === 'week'
            ? {
                PRE: PRE_WEEK,
                THIS: THIS_WEEK,
                NEXT: NEXT_WEEK
            }
            : {
                PRE: PRE_MONTH,
                THIS: THIS_MONTH,
                NEXT: NEXT_MONTH
            };
        var dataChange = calendarType === 'week'
            ? {
                PRE: 'tempPreWeek',
                THIS: 'tempThisWeek',
                NEXT: 'tempNextWeek'
            }
            : {
                PRE: 'tempPreMonth',
                THIS: 'tempThisMonth',
                NEXT: 'tempNextMonth'
            };
        var current = (_a = {},
            _a[varChange.PRE] = data[dataChange.PRE],
            _a[varChange.THIS] = data[dataChange.THIS],
            _a[varChange.NEXT] = data[dataChange.NEXT],
            _a);
        if (index === 0) {
            current[varChange.PRE] = data[dataChange.THIS];
            current[varChange.THIS] = data[dataChange.NEXT];
            current[varChange.NEXT] = data[dataChange.PRE];
        }
        if (index === 2) {
            current[varChange.PRE] = data[dataChange.NEXT];
            current[varChange.THIS] = data[dataChange.PRE];
            current[varChange.NEXT] = data[dataChange.THIS];
        }
        return current;
    };
    var changeDate = function (arrayIndex) {
        var currentDate = '';
        if (calendarType === 'week') {
            var oldWeeks = {
                thisWeek: thisWeek,
                preWeek: preWeek,
                nextWeek: nextWeek
            };
            var showWeeks = oldWeeks[mapChangeWeekIndex[arrayIndex]];
            setCurrentDate(dealYearMonth(dayjs_min(showWeeks[3].date)));
            currentDate = dayjs_min(showWeeks[3].date).format('YYYY-MM');
            var newWeeks = getWeeks(oldWeeks[mapChangeWeekIndex[arrayIndex]][3].date);
            var current = getPreNextArray(arrayIndex, newWeeks);
            setCurrentActive(arrayIndex);
            setPreWeek(current[PRE_WEEK]);
            setNextWeek(current[NEXT_WEEK]);
            setThisWeek(current[THIS_WEEK]);
        }
        else {
            var oldMonths = {
                thisMonth: thisMonth,
                preMonth: preMonth,
                nextMonth: nextMonth
            };
            var showMonths_1 = oldMonths[mapChangeMonthIndex[arrayIndex]];
            currentDate = dayjs_min(showMonths_1[8].date).format('YYYY-MM');
            setCurrentDate(dealYearMonth(dayjs_min(showMonths_1[8].date)));
            setCurrentActiveLines(Math.ceil(showMonths_1.length / 7));
            var newMonths = getMonths(oldMonths[mapChangeMonthIndex[arrayIndex]][8].date);
            var current = getPreNextArray(arrayIndex, newMonths);
            setCurrentActive(arrayIndex);
            setPreMonth(current[PRE_MONTH]);
            setNextMonth(current[NEXT_MONTH]);
            setThisMonth(current[THIS_MONTH]);
        }
        onChange && onChange(currentDate);
    };
    function changeMonth(date) {
        if (calendarType === 'week') {
            var weeks = getWeeks(date);
            var newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1;
            setCurrentActive(newIndex);
            var current = getPreNextArray(newIndex, weeks);
            setPreWeek(current[PRE_WEEK]);
            setNextWeek(current[NEXT_WEEK]);
            setThisWeek(current[THIS_WEEK]);
        }
        else {
            var months_2 = getMonths(date);
            var newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1;
            setCurrentActive(newIndex);
            var current = getPreNextArray(newIndex, months_2);
            setPreMonth(current[PRE_MONTH]);
            setNextMonth(current[NEXT_MONTH]);
            setThisMonth(current[THIS_MONTH]);
        }
    }
    var handleBackToToday = function () {
        setChooseDate(today);
        changeMonth(today);
    };
    function dealEveryDay(_a) {
        var i = _a.i, currentDay = _a.currentDay, date = _a.date;
        var thisNum = i - currentDay;
        var method = thisNum > 0 ? 'add' : 'subtract';
        var day = dayjs_min(date)[method](Math.abs(thisNum), 'day');
        var tipDayArray = tipDay || [];
        var dateData = {
            timeStamp: day.valueOf(),
            date: day.format(FORMAT_DATE),
            month: day.get('month'),
            day: day.get('date'),
            year: day.get('year'),
            today: today === day.format(FORMAT_DATE),
            old: dayjs_min(today).valueOf() - day.valueOf() > 0,
            active: chooseDate === day.format(FORMAT_DATE),
            tipTop: '',
            tipBottom: '',
            badge: {
                show: false,
                color: 'red',
                num: ''
            },
            disabled: false,
            special: {
                show: false,
                color: 'green'
            },
            highlight: highlightWeekend ? [0, 6].includes(day.get('day')) : false
        };
        // tip
        var tipIndex = tipDayArray.findIndex(function (item) { return item.date === dateData.date; });
        if (tipIndex >= 0) {
            var tipData = tipDayArray[tipIndex];
            dateData = Object.assign(dateData, {
                tipTop: tipData.tipTop || '',
                tipBottom: tipData.tipBottom || '',
                tipTopColor: tipData.tipTopColor,
                tipBottomColor: tipData.tipBottomColor
            });
        }
        // badge
        if (typeof badge === 'string' && dateData.date === badge) {
            Object.assign(dateData.badge, { show: true });
        }
        else if (badge instanceof Array) {
            badge.forEach(function (item) {
                if (item.date === dateData.date) {
                    Object.assign(dateData.badge, {
                        show: true,
                        color: item.color || 'red',
                        num: item.num || ''
                    });
                }
            });
        }
        // disabledDay
        if (disabledDay instanceof Array) {
            disabledDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.disabled = dateData.date === item;
                }
                else if (item instanceof Array) {
                    var minDate = item[0] && dayjs_min(item[0]).valueOf();
                    var maxDate = item[1] && dayjs_min(item[1]).valueOf();
                    if (minDate && maxDate) {
                        dateData.disabled =
                            dateData.timeStamp > minDate && dateData.timeStamp < maxDate;
                    }
                    else if (minDate) {
                        dateData.disabled = dateData.timeStamp > minDate;
                    }
                    else if (maxDate) {
                        dateData.disabled = dateData.timeStamp < maxDate;
                    }
                }
            });
        }
        // specialDay
        if (specialDay instanceof Array) {
            specialDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.special.show = item === dateData.date;
                }
                else if (typeof item === 'object') {
                    var date_1 = item.date;
                    var color = item.color;
                    Object.assign(dateData.special, {
                        date: date_1 === dateData.date,
                        color: color
                    });
                }
            });
        }
        return dateData;
    }
    function getWeeks(date) {
        var weekday = dayjs_min(date).day();
        var tempThisWeek = [];
        var tempPreWeek = [];
        var tempNextWeek = [];
        var i = -7;
        while (1) {
            if (i >= 14)
                break;
            var dateData = dealEveryDay({
                i: i,
                currentDay: weekday,
                date: date
            });
            if (i < 0) {
                tempPreWeek.push(dateData);
            }
            else if (i >= 7) {
                tempNextWeek.push(dateData);
            }
            else {
                tempThisWeek.push(dateData);
            }
            i++;
        }
        return {
            tempThisWeek: tempThisWeek,
            tempPreWeek: tempPreWeek,
            tempNextWeek: tempNextWeek
        };
    }
    function fillMonths(months) {
        var firstDay = months[0];
        var weekday = dayjs_min(firstDay.date).day();
        while (weekday) {
            months.unshift({
                timeStamp: weekday,
                date: '',
                month: '',
                day: '',
                year: '',
                today: false,
                old: false,
                active: false,
                tipTop: '',
                tipBottom: '',
                badge: {
                    show: false,
                    color: 'red',
                    num: ''
                },
                disabled: false,
                special: {
                    show: false,
                    color: 'green'
                },
                empty: true
            });
            weekday--;
        }
        return months;
    }
    function getMonths(date) {
        var tempThisMonth = [];
        var tempPreMonth = [];
        var tempNextMonth = [];
        var preMonthDays = dayjs_min(date).subtract(1, 'month').daysInMonth();
        var thisMonthDays = dayjs_min(date).daysInMonth();
        var thisDays = dayjs_min(date).date();
        var nextMonthDays = dayjs_min(date).add(1, 'month').daysInMonth();
        var i = -preMonthDays + 1;
        while (1) {
            if (i > nextMonthDays + thisMonthDays)
                break;
            var dateData = dealEveryDay({
                i: i,
                currentDay: thisDays,
                date: date
            });
            if (i <= 0) {
                tempPreMonth.push(dateData);
            }
            else if (i > thisMonthDays) {
                tempNextMonth.push(dateData);
            }
            else {
                tempThisMonth.push(dateData);
            }
            i++;
        }
        return {
            tempThisMonth: fillMonths(tempThisMonth),
            tempPreMonth: fillMonths(tempPreMonth),
            tempNextMonth: fillMonths(tempNextMonth)
        };
    }
    // useEffect(() => {}, [preWeek, nextWeek, thisWeek]);
    React.useEffect(function () {
        if (calendarType === 'week') {
            var weeks = getWeeks(today);
            setPreWeek(weeks.tempPreWeek);
            setThisWeek(weeks.tempThisWeek);
            setNextWeek(weeks.tempNextWeek);
        }
        else {
            var months_3 = getMonths(today);
            setPreMonth(months_3.tempPreMonth);
            setThisMonth(months_3.tempThisMonth);
            setNextMonth(months_3.tempNextMonth);
        }
    }, [calendarType]);
    var weekGridComponent = [
        '周日',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六'
    ].map(function (week, index) { return (React__default['default'].createElement(components.View, { key: week },
        React__default['default'].createElement(ClText, { align: 'center', size: 'small', lineSpacing: 'small', textColor: highlightWeekend
                ? [0, 6].includes(index)
                    ? highlightWeekendColor
                    : 'black'
                : 'black' }, week))); });
    var BGClassName = BG_COLOR_LIST[activeColor || 'blue'];
    var oldTextClassName = TEXT_COLOR_LIST['gray'];
    var weeksComponent = [preWeek, thisWeek, nextWeek].map(function (week, index) {
        var _a;
        return (React__default['default'].createElement(components.SwiperItem, { key: (_a = week[3]) === null || _a === void 0 ? void 0 : _a.date },
            React__default['default'].createElement(ClGrid, { col: 7 }, week.map(function (item) {
                var _a, _b;
                return (React__default['default'].createElement(components.View, { key: item.timeStamp, onClick: clickDate.bind(_this, {
                        item: item,
                        type: mapChangeWeekIndex[index]
                    }) },
                    React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                        React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center' },
                            React__default['default'].createElement(components.View, { style: {
                                    position: 'relative'
                                }, className: classNames([
                                    'day-normal',
                                    "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                    "" + (item.special.show && !item.active
                                        ? BG_COLOR_LIST[item.special.color]
                                        : ''),
                                    (_a = {},
                                        _a[BGClassName] = !item.disabled && item.active,
                                        _a[oldTextClassName] = item.old,
                                        _a)
                                ]) },
                                React__default['default'].createElement(components.View, { className: classNames([
                                        (_b = {},
                                            _b['cu-tag badge'] = item.badge.show,
                                            _b),
                                        BG_COLOR_LIST[item.badge.color]
                                    ]) }, item.badge.num),
                                React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                    React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipTopColor, text: item.tipTop }),
                                    React__default['default'].createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                            ? highlightWeekendColor
                                            : undefined }),
                                    React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipBottomColor, text: item.tipBottom })))))));
            }))));
    });
    var monthsComponent = [preMonth, thisMonth, nextMonth].map(function (month, index) {
        var _a;
        return (React__default['default'].createElement(components.SwiperItem, { key: (_a = month[3]) === null || _a === void 0 ? void 0 : _a.date },
            React__default['default'].createElement(ClGrid, { col: 7 }, month.map(function (item) {
                var _a, _b;
                return (React__default['default'].createElement(components.View, { key: item.timeStamp, onClick: clickDate.bind(_this, {
                        item: item,
                        type: mapChangeWeekIndex[index]
                    }) },
                    React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                        React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center' },
                            React__default['default'].createElement(components.View, { style: {
                                    position: 'relative'
                                }, className: classNames([
                                    'day-normal',
                                    "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                    "" + (item.special.show && !item.active
                                        ? BG_COLOR_LIST[item.special.color]
                                        : ''),
                                    (_a = {},
                                        _a[BGClassName] = !item.disabled && item.active,
                                        _a[oldTextClassName] = item.old,
                                        _a)
                                ]) },
                                React__default['default'].createElement(components.View, { className: classNames([
                                        (_b = {},
                                            _b['cu-tag badge'] = item.badge.show,
                                            _b),
                                        BG_COLOR_LIST[item.badge.color]
                                    ]) }, item.badge.num),
                                React__default['default'].createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                    React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipTopColor, text: item.tipTop }),
                                    React__default['default'].createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                            ? highlightWeekendColor
                                            : undefined }),
                                    React__default['default'].createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Taro.pxTransform(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipBottomColor, text: item.tipBottom })))))));
            }))));
    });
    var months = Array.from(Array(12)).map(function (_item, index) { return index + 1 + "\u6708"; });
    return (React__default['default'].createElement(ClCard, { type: showType },
        React__default['default'].createElement(components.View, { className: classNames([BG_COLOR_LIST['white'], 'cuCalendar']) },
            React__default['default'].createElement(ClLayout, { padding: 'small', paddingDirection: 'bottom' },
                React__default['default'].createElement(ClFlex, { justify: 'between', align: 'center' },
                    React__default['default'].createElement(ClTip, { renderMessage: React__default['default'].createElement(components.View, null,
                            React__default['default'].createElement(ClLayout, null,
                                React__default['default'].createElement(ClFlex, { align: 'center', justify: 'between' },
                                    React__default['default'].createElement(components.View, { onClick: function () {
                                            setCurrentYear(currentYear - 1);
                                        } },
                                        React__default['default'].createElement(ClIcon, { iconName: 'pullleft' })),
                                    React__default['default'].createElement(ClText, { text: currentYear + '' }),
                                    React__default['default'].createElement(components.View, { onClick: function () {
                                            setCurrentYear(currentYear + 1);
                                        } },
                                        React__default['default'].createElement(ClIcon, { iconName: 'pullright' })))),
                            React__default['default'].createElement(ClGrid, { col: 4 }, months.map(function (item, index) { return (React__default['default'].createElement(components.View, { key: item, className: classNames([
                                    'flex justify-center align-center'
                                ]) },
                                React__default['default'].createElement(ClLayout, { margin: 'small', marginDirection: 'vertical' },
                                    React__default['default'].createElement(ClButton, { size: 'small', bgColor: 'light-gray', shadow: false, long: true, text: item, onClick: function () {
                                            selectDate(index);
                                        } })))); }))), mode: 'click', width: 300, show: showMonths, onChange: function () {
                            setShowMonths(!showMonths);
                        } },
                        React__default['default'].createElement(ClButton, { shape: 'round', shadow: false, size: 'small' },
                            React__default['default'].createElement(ClText, { className: 'chooseDate', lineSpacing: 'normal', text: currentDate }))),
                    backToToday ? (React__default['default'].createElement(components.View, { onClick: function () {
                            handleBackToToday();
                        } },
                        React__default['default'].createElement(ClButton, { shadow: false, size: 'small' },
                            React__default['default'].createElement(ClText, { className: 'backToToday', lineSpacing: 'normal' }, "\u4ECA")))) : (''))),
            React__default['default'].createElement(components.View, { className: 'week' },
                React__default['default'].createElement(ClGrid, { col: 7, className: 'solid-bottom' }, weekGridComponent),
                React__default['default'].createElement(components.Swiper, { current: currentActive, circular: true, style: {
                        width: '100%',
                        height: calendarType === 'week'
                            ? Taro.pxTransform(120)
                            : Taro.pxTransform(120 * currentActiveLines)
                    }, onChange: function (e) {
                        if (currentActive !== e.detail.current)
                            changeDate(e.detail.current);
                    } }, calendarType === 'week' ? weeksComponent : monthsComponent)))));
}
Calendar_weapp.options = {
    addGlobalClass: true
};

function ClCalendar(props) {
    return (React__default['default'].createElement(components.View, null,
        isWeApp ? React__default['default'].createElement(Calendar_weapp, __assign({}, props)) : "",
        isH5 ? React__default['default'].createElement(Calendar_h5, __assign({}, props)) : ""));
}
ClCalendar.defaultProps = {
    calendarType: "month",
    showType: "card",
    activeColor: "blue",
    tipDay: [],
    backToToday: true,
    onClick: function () { },
    onChange: function () { },
    badge: [],
    highlightWeekend: false,
    highlightWeekendColor: "blue",
    specialDay: []
};
ClCalendar.options = {
    addGlobalClass: true
};

function ClTextarea(props) {
    var _a = props.value, value = _a === void 0 ? "" : _a, _b = props.autoFocus, autoFocus = _b === void 0 ? false : _b, _c = props.focus, focus = _c === void 0 ? false : _c, _d = props.placeholder, placeholder = _d === void 0 ? "" : _d, _e = props.maxLength, maxLength = _e === void 0 ? 0 : _e, _f = props.disabled, disabled = _f === void 0 ? false : _f, _g = props.showConfirmBar, showConfirmBar = _g === void 0 ? false : _g, _h = props.showLengthTip, showLengthTip = _h === void 0 ? false : _h, _j = props.bgColor, bgColor = _j === void 0 ? "white" : _j, _k = props.shadow, shadow = _k === void 0 ? false : _k, _l = props.height, height = _l === void 0 ? 0 : _l, _m = props.overMaxForbidden, overMaxForbidden = _m === void 0 ? false : _m, _o = props.onChange, onChange = _o === void 0 ? function () { } : _o, _p = props.onFocus, onFocus = _p === void 0 ? function () { } : _p, _q = props.onBlur, onBlur = _q === void 0 ? function () { } : _q, _r = props.onConfirm, onConfirm = _r === void 0 ? function () { } : _r, _s = props.onLineChange, onLineChange = _s === void 0 ? function () { } : _s;
    var _t = __read(React.useState(value), 2), tempValue = _t[0], setTempValue = _t[1];
    var tip = (React__default['default'].createElement(components.View, { className: "tip" },
        React__default['default'].createElement(ClLayout, { padding: "small", paddingDirection: "right" },
            React__default['default'].createElement(ClFlex, null,
                React__default['default'].createElement(ClText, { text: "" + tempValue.length, size: "small", textColor: maxLength && !overMaxForbidden && maxLength < tempValue.length
                        ? "red"
                        : undefined }),
                React__default['default'].createElement(components.View, null,
                    React__default['default'].createElement(ClText, { text: "/" + maxLength, size: "small", textColor: maxLength && !overMaxForbidden && maxLength < tempValue.length
                            ? "red"
                            : undefined }))))));
    React.useEffect(function () {
        setTempValue(value || "");
    }, [value]);
    return (React__default['default'].createElement(components.View, { className: classNames(["cu-textarea"]) },
        React__default['default'].createElement(components.View, { className: classNames([
                "bg",
                { shadow: shadow },
                BG_COLOR_LIST[bgColor || "white"],
            ]) },
            React__default['default'].createElement(components.Textarea, { style: __assign({
                    height: "" + (height ? Taro.pxTransform(height) : Taro.pxTransform(300)),
                    padding: Taro.pxTransform(10) + " " + Taro.pxTransform(14) + " " + Taro.pxTransform(40),
                    width: "100%",
                    border: "none",
                }), className: classNames([BG_COLOR_LIST[bgColor || "white"]]), value: tempValue || "", autoFocus: autoFocus, focus: focus, placeholder: placeholder, maxlength: overMaxForbidden ? maxLength : -1, disabled: disabled, showConfirmBar: showConfirmBar, onLineChange: function (e) {
                    onLineChange && onLineChange(e.detail);
                }, onConfirm: function (e) {
                    onConfirm && onConfirm(e.detail.value);
                }, onInput: function (e) {
                    setTempValue(e.detail.value);
                    onChange && onChange(e.detail.value);
                }, onFocus: function (e) {
                    onFocus && onFocus(e.detail.value);
                }, onBlur: function (e) {
                    onBlur && onBlur(e.detail.value);
                } }),
            showLengthTip ? tip : "")));
}

var ClTree = /** @class */ (function (_super) {
    __extends(ClTree, _super);
    function ClTree(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list: [],
            originList: [],
            flatList: []
        };
        return _this;
    }
    ClTree.prototype.dealLevel = function (_a) {
        var _this = this;
        var list = _a.list, parentId = _a.parentId, deep = _a.deep, levelId = _a.levelId;
        if (!list)
            return;
        var deepIndex = deep || 0;
        deepIndex++;
        var temp = list.map(function (item, listIndex) {
            var id = listIndex + 1;
            var newLevelId = levelId ? levelId + "-" + id : "" + id;
            return __assign(__assign({}, item), { deepIndex: deepIndex,
                id: id, parent: parentId, childrenCheck: [], commonId: generateId(), levelId: newLevelId, children: _this.dealLevel({
                    list: item.children,
                    parentId: id,
                    deep: deepIndex,
                    levelId: newLevelId
                }) });
        });
        return temp;
    };
    ClTree.prototype.openItem = function (item) {
        var thisOpen = !item.open;
        var originItem = this.getTreeItem(item.commonId);
        originItem.open = thisOpen;
        var originList = this.state.originList;
        var newList = this.flatList(originList);
        this.setState({
            list: newList
        });
    };
    ClTree.prototype.clickItem = function (item) {
        var onClickItem = this.props.onClickItem;
        onClickItem && onClickItem(item);
    };
    ClTree.prototype.getTreeItem = function (id) {
        var originList = this.state.originList;
        var result;
        function getItem(list) {
            var e_1, _a;
            if (!result) {
                try {
                    for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                        var item = list_1_1.value;
                        result = result ? result : item.commonId === id ? item : undefined;
                        if (item.children && !result) {
                            getItem(item.children);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        getItem(originList);
        return result;
    };
    ClTree.prototype.changeChecked = function (commonId, item) {
        if (commonId === void 0) { commonId = []; }
        var flatList = this.state.flatList;
        var onCheckedChange = this.props.onCheckedChange;
        var id = item.commonId;
        var checked = commonId.length > 0;
        var data = flatList.find(function (item) { return item.commonId === id; });
        var levelIdArr = item.levelId.split('-');
        var allLevelChildren = flatList.filter(function (child) {
            var levelArr = child.levelId.split('-');
            return (levelIdArr.every(function (item, index) { return item === levelArr[index]; }) &&
                item.deepIndex < child.deepIndex);
        });
        var allParent = flatList.filter(function (father) {
            if (item.deepIndex <= father.deepIndex)
                return false;
            var i = 0;
            var result = true;
            var levelArr = father.levelId.split('-');
            while (i < father.deepIndex) {
                result = result && levelArr[i] === levelIdArr[i];
                i++;
            }
            return result;
        });
        allLevelChildren.forEach(function (item) {
            item.checked = checked;
            item.someCheck = false;
        });
        var father = allParent.find(function (parent) { return parent.deepIndex === item.deepIndex - 1; });
        data.checked = checked;
        onCheckedChange && onCheckedChange(data);
        var maxDeep = allParent.length;
        var i = maxDeep;
        if (checked) {
            data.someCheck = false;
            if (father) {
                father.someCheck = father.children.some(function (item) { return !item.checked || item.someCheck; });
            }
            var result = true;
            while (i > 0) {
                var current = allParent.find(function (item) { return item.deepIndex === i; });
                result =
                    result &&
                        current.children.every(function (child) { return child.checked && !child.someCheck; });
                current.someCheck = !result;
                current.checked = checked;
                i--;
            }
        }
        else {
            allParent.forEach(function (item) { return (item.someCheck = true); });
            if (father) {
                father.checked = father.children.some(function (item) { return item.checked; });
            }
            while (i > 0) {
                var current = allParent.find(function (item) { return item.deepIndex === i; });
                current.checked = current.children.some(function (child) { return child.checked; });
                i--;
            }
        }
        this.setState({
            flatList: __spread(flatList),
            list: __spread(this.state.list)
        });
    };
    ClTree.prototype.renderItem = function (item) {
        var _this = this;
        var _a = this.props, color = _a.color, showCheck = _a.showCheck;
        return (React__default['default'].createElement(components.View, { style: {
                paddingLeft: Taro.pxTransform((item.deepIndex - 1) * 20)
            } },
            React__default['default'].createElement(ClFlex, { align: 'center' },
                React__default['default'].createElement(components.View, { style: {
                        transform: "rotate(" + (item.open ? 180 : 90) + "deg)",
                        visibility: item.children ? 'initial' : 'hidden'
                    }, onClick: this.openItem.bind(this, item) },
                    React__default['default'].createElement(ClIcon, { iconName: 'triangleupfill', size: 'small' })),
                showCheck ? (React__default['default'].createElement(ClCheckbox, { type: 'normal', shape: 'round', more: item.someCheck, color: color, checkboxGroup: [
                        {
                            checked: item.checked,
                            key: '',
                            value: item.commonId,
                            disabled: item.disabled
                        }
                    ], onChange: function (commonId) {
                        _this.changeChecked.call(_this, commonId, item);
                    } })) : (''),
                React__default['default'].createElement(components.View, { onClick: this.clickItem.bind(this, item) },
                    React__default['default'].createElement(ClText, { text: item.name })))));
    };
    ClTree.prototype.flatList = function (list) {
        var flat = [];
        function flatFn(list) {
            list.forEach(function (item) {
                flat.push(item);
                if (item.children && item.open) {
                    flatFn(item.children);
                }
            });
        }
        flatFn(list);
        return flat;
    };
    ClTree.prototype.flatAllArr = function (list) {
        var category = [];
        function categoryFn(list) {
            if (list === void 0) { list = []; }
            list.forEach(function (item) {
                category.push(item);
                if (item.children) {
                    categoryFn(item.children);
                }
            });
        }
        categoryFn(list);
        return category;
    };
    ClTree.prototype.updateData = function (data) {
        var _this = this;
        var dealArr = this.dealLevel({
            list: data,
            parentId: undefined
        });
        var flatArr = this.flatList(dealArr);
        var flatList = this.flatAllArr(dealArr);
        this.setState({
            list: flatArr,
            originList: dealArr,
            flatList: flatList
        }, function () {
            var checkedList = flatList.filter(function (item) { return item.checked; });
            var openList = flatList.filter(function (item) { return item.open; });
            openList.forEach(function (item) {
                item.open = !item.open;
                _this.openItem(item);
            });
            checkedList.forEach(function (item) {
                _this.changeChecked(item.commonId, item);
            });
        });
    };
    ClTree.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateData(nextProps.data);
    };
    ClTree.prototype.componentDidMount = function () {
        this.updateData(this.props.data);
    };
    ClTree.prototype.render = function () {
        var _this = this;
        var list = this.state.list;
        var listComponent = list.map(function (item) { return (React__default['default'].createElement(components.View, { key: 'key-' + item.commonId }, _this.renderItem(item))); });
        return React__default['default'].createElement(components.View, { className: 'cu-tree' }, listComponent);
    };
    ClTree.options = {
        addGlobalClass: true
    };
    ClTree.defaultProps = {
        showCheck: false,
        data: []
    };
    return ClTree;
}(React.Component));

exports.ClAccordion = ClAccordion;
exports.ClActionSheet = ClActionSheet;
exports.ClAnimation = ClAnimation;
exports.ClAvatar = ClAvatar;
exports.ClButton = ClButton;
exports.ClCalendar = ClCalendar;
exports.ClCard = ClCard;
exports.ClCheckbox = ClCheckbox;
exports.ClCurtain = ClCurtain;
exports.ClDivider = ClDivider;
exports.ClDrawer = ClDrawer;
exports.ClFlex = ClFlex;
exports.ClFloatButton = ClFloatButton;
exports.ClForm = ClForm;
exports.ClFormItem = ClFormItem;
exports.ClGrid = ClGrid;
exports.ClIcon = ClIcon;
exports.ClImagePicker = ClImagePicker;
exports.ClInput = ClInput;
exports.ClLayout = ClLayout;
exports.ClLoading = ClLoading;
exports.ClMenuList = ClMenuList;
exports.ClMessage = ClMessage;
exports.ClModal = ClModal;
exports.ClNavBar = ClNavBar;
exports.ClNoticeBar = ClNoticeBar;
exports.ClProgress = ClProgress;
exports.ClRadio = ClRadio;
exports.ClScreenDrawer = ClScreenDrawer;
exports.ClSearchBar = index;
exports.ClSelect = ClSelect;
exports.ClShopBar = ClShopBar;
exports.ClStep = ClStep;
exports.ClSwiper = ClSwiper;
exports.ClSwiperAction = ClSwiperAction;
exports.ClSwitch = ClSwitch;
exports.ClTabBar = ClTabBar;
exports.ClTabs = ClTabs;
exports.ClTag = ClTag;
exports.ClText = ClText;
exports.ClTextarea = ClTextarea;
exports.ClTimeline = ClTimeline;
exports.ClTip = ClTip;
exports.ClTitleBar = ClTitleBar;
exports.ClTree = ClTree;
exports.ClVerticalTab = ClVerticalTab;
exports.ClVerticalTabCell = ClVerticalTabCell;
