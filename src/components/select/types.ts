export type TMode = 'selector' | 'multiSelector' | 'time' | 'date' | 'region';
export type TOnChange = (e: any) => void;
export type TOnCancel = (e: any) => void;
export type TOnColumnChange = (e: any) => void;
export type TSelector = {
  range?: any[];
  rangeKey?: string;
  value?: number;
};
export type TMultiSelector = {
  range?: any[];
  rangeKey?: string;
  value?: string[];
};
export type TTime = {
  value?: string;
  start?: string;
  end?: string;
};
export type TDate = {
  value?: string;
  start?: string;
  end?: string;
  fields?: 'year' | 'month' | 'day';
};
export type TRegion = {
  value?: string[];
  customItem?: string;
};
