import * as model from './model';

const fullDate = (num: number) => {
  if (num < 10) return '0' + num;
  return num;
};

export const getNowDate = (type: 'year' | 'day' | 'month') => {
  const date = new Date();
  const year = date.getFullYear();
  const month = fullDate(date.getMonth());
  const day = fullDate(date.getDate());
  if (type === 'year') return `${year}`;
  if (type === 'month') return `${year}-${month}`;
  if (type === 'day') return `${year}-${month}-${day}`;
  return `${year}-${month}-${day}`;
};

export const getNowTIme = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  return `${hour}:${min}`;
};
export default {
  model,
  getNowDate
};
