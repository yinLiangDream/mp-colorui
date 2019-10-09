export const sizeCode = `
\`\`\`
const size = ["xs", "sm", "df", "lg", "xl"];

size.map(cc => (
  <ClCard key={cc}>
    <ClFlex>
      <View className={\`basis-\${cc}\`}>
        <ClCard bgColor="light-blue" type="full" shadow={false}>
          {cc}
        </ClCard>
      </View>
    </ClFlex>
  </ClCard>
));
\`\`\
`;

export const perCode = `
\`\`\`
const percent = ["sub", "twice", "treble"];

percent.map((perc, index) => (
  <View key={perc} className={\`flex-\${perc}\`}>
    <ClCard type="full" bgColor={\`light-\${colors[index]}\`}>
      {perc}({index + 1})
    </ClCard>
  </View>
));
\`\`\`
`;

export const justifyCode = `
\`\`\`
const justify = ["start", "end", "center", "between", "around"];

justify.map(jus => (
  <ClCard key={jus}>
    <ClFlex justify={jus}>
      <ClCard bgColor="light-blue" shadow={false}>
        {jus}
      </ClCard>
      <ClCard bgColor="light-blue" shadow={false}>
        {jus}
      </ClCard>
    </ClFlex>
  </ClCard>
));
\`\`\`
`;

export const alignCode = `
\`\`\`
const align = ["start", "end", "center"];

align.map(al => (
  <ClCard key={al}>
    <ClFlex align={al}>
      <ClCard bgColor="light-blue" shadow={false}>
        <View>{al}</View>
        <View>{al}</View>
      </ClCard>
      <ClCard bgColor="light-blue" shadow={false}>
        <View>{al}</View>
      </ClCard>
    </ClFlex>
  </ClCard>
));
\`\`\`
`;
