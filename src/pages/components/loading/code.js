export const barCode = `
\`\`\`
<ClLoading type='bar' show={barLoading} />
\`\`\`
`;

export const lineCode = `
\`\`\`
<ClLoading
  type="line"
  show={lineLoading}
  loadingError={lineLoadingErr}
  noMore={lineLoadingEnd}
/>
\`\`\`
`;

export const modalCode = `
\`\`\`
<ClLoading
  type="modal"
  show={modalLoading}
  imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"
/>
\`\`\`
`;

export const imageCode = `
\`\`\`
<ClLoading
  type="image"
  show={imageLoading}
  imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"
/>
\`\`\`
`;
