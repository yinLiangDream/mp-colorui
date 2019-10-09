export const normalCode = `
\`\`\`
const defaultTabs = [
  {
    badge: true,
    icon: 'hot',
    title: '首页'
  },
  {
    badge: false,
    icon: 'info',
    title: '喵喵喵'
  },
  {
    badge: 99,
    icon: 'repeal',
    title: '嗷嗷嗷'
  }
]

<ClTabBar active={1} tabs={defaultTabs} />
\`\`\`
`;

export const bgColorCode = `
\`\`\`
const defaultTabs = [
  {
    badge: true,
    icon: 'hot',
    title: '首页'
  },
  {
    badge: false,
    icon: 'info',
    title: '喵喵喵'
  },
  {
    badge: 99,
    icon: 'repeal',
    title: '嗷嗷嗷'
  }
]

<ClTabBar active={1} bgColor="light-cyan" tabs={defaultTabs} />
\`\`\`
`;

export const activeColorCode = `
\`\`\`
const defaultTabs = [
  {
    badge: true,
    icon: 'hot',
    title: '首页'
  },
  {
    badge: false,
    icon: 'info',
    title: '喵喵喵'
  },
  {
    badge: 99,
    icon: 'repeal',
    title: '嗷嗷嗷'
  }
]

<ClTabBar
  active={1}
  bgColor="light-cyan"
  activeColor="black"
  tabs={defaultTabs}
/>
\`\`\`
`;

export const upCode = `
\`\`\`
const defaultTabs = [
  {
    badge: true,
    icon: 'hot',
    title: '首页'
  },
  {
    badge: false,
    icon: 'info',
    title: '喵喵喵'
  },
  {
    badge: 99,
    icon: 'repeal',
    title: '嗷嗷嗷'
  }
]

<ClTabBar
  active={1}
  bgColor="light-cyan"
  activeColor="black"
  tabs={actionTabs}
/>
\`\`\`
`;
