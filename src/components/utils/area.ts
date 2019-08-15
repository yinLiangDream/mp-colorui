import PCAA from 'area-data/pcaa';

const provinceObj = PCAA['86'];

const provinceArr: [number, string][] = Object.entries(provinceObj);

export const getAreaData = (
  province?: { key: number; value: string },
  city?: { key: number; value: string }
) => {
  let tempProvice: any = province;
  if (!province) tempProvice = {
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
