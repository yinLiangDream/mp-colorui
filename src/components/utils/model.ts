export const SIZE = {
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

const COLOR_LIST = [
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
const GRADUAL_COLOR_LIST = [
  'gradualRed',
  'gradualOrange',
  'gradualGreen',
  'gradualPurple',
  'gradualPink',
  'gradualBlue'
];

export const COLOR = {};
COLOR_LIST.reduce((pre, cur) => {
  pre[cur] = cur;
  return pre;
}, COLOR);

export const BG_COLOR_LIST = {};
COLOR_LIST.reduce((pre, cur) => {
  pre[cur] = `bg-${cur}`;
  pre[`light-${cur}`] = `bg-${cur} light`;
  return pre;
}, BG_COLOR_LIST);

GRADUAL_COLOR_LIST.reduce((pre, cur) => {
  pre[cur] = `bg-${cur.replace(/[A-Z]/g, match => '-' + match.toLowerCase())}`;
  return pre;
}, BG_COLOR_LIST);

export const TEXT_COLOR_LIST = {};
COLOR_LIST.reduce((pre, cur) => {
  pre[cur] = `text-${cur}`
  return pre;
}, TEXT_COLOR_LIST);

export const SHADOW_LIST = {
  normal: 'shadow',
  large: 'shadow-lg',
  wrap: 'shadow-wrap',
  auto: 'shadow-blur'
};

const solids = 'solids';
const solid = 'solid';
export const SOLID_LIST = {
  none: '',
  around: `${solid}`,
  top: `${solid}-top`,
  left: `${solid}-left`,
  right: `${solid}-right`,
  bottom: `${solid}-bottom`,
  'bold-around': `${solids}`,
  'bold-top': `${solids}-top`,
  'bold-left': `${solids}-left`,
  'bold-right': `${solids}-right`,
  'bold-bottom': `${solids}-bottom`
};

export const pxMap = {
  xsmall: 40,
  small: 48,
  normal: 56,
  large: 64,
  xlarge: 72,
  xxlarge: 88,
  slarge: 160,
  xslarge: 240
}
