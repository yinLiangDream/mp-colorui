export interface IProps {
  rule: {
    /**
     * 手机号码正则校验
     */
    phone: (value: string) => boolean;
    /**
     * email 地址校验
     */
    email: (value: string) => boolean;
    /**
     * 数值范围校验
     */
    range: (min: number, max: number, value: number) => boolean;
    /**
     * 是否为空
     */
    required: (value: string) => boolean;
    /**
     * 是否为纯英文
     */
    en: (value: string) => boolean;
    /**
     * 是否为纯中文
     */
    cn: (value: string) => boolean;
    /**
     * 是否为金钱数字
     */
    money: (value: number | string) => boolean;
    /**
     * 是否字母数字组合
     */
    code: (value: string) => boolean;
    /**
     * 是否为纯数字
     */
    number: (value: number | string) => boolean;
    /**
     * 是否为 ip 地址
     */
    ip: (value: string) => boolean;
    /**
     * 是否为合法 url
     */
    url: (value: string) => boolean;
    /**
     * 是否为合法身份证
     */
    idcard: (value: string) => boolean;
  }
}

declare const Utils: IProps;

export default Utils;
