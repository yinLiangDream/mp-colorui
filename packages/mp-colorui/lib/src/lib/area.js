import PCAA from 'area-data/pcaa';

export const provinceObj = PCAA['86'];
export const provinceArr = Object.entries(provinceObj);
export const getAreaData = (province, city) => {
    let tempProvice = province;
    if (!province)
        tempProvice = {
            key: provinceArr[0][0],
            value: provinceArr[0][1]
        };
    const cityArr = Object.entries(PCAA[tempProvice.key]);
    const districtArr = Object.entries(PCAA[city ? city.key : cityArr[0][0]]);
    return {
        province: provinceArr,
        city: cityArr,
        district: districtArr
    };
};
//# sourceMappingURL=area.js.map