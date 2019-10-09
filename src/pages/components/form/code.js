export const fullCode = `
\`\`\`
// 设置校验规则
const rules = {
  name(rule, value, callback) {
    if (!rule.required(value)) {
      callback("姓名不能为空");
      return false;
    }
    if (value.length > 5) {
      callback("姓名长度不能超过 5");
      return false;
    }
    return true;
  },
  phone(rule, value, callback) {
    if (!rule.required(value)) {
      callback("手机号码不能为空");
      return false;
    }
    if (!rule.phone(value)) {
      callback("手机号码不正确");
      return false;
    }
    return true;
  },
  hobby(rule, value, callback) {
    if (value.length < 2) {
      callback("至少选择 2 项");
      return false;
    }
    return true;
  }
}

// Form 用法
refFunc = node => {
  this.ref = node;
}
  
<ClForm ref={this.refFunc} model={model} rules={rules}>
  <ClFormItem prop="name" required>
    <ClInput
      title="姓名（失焦）"
      value={model.name}
      onBlur={value => {
        this.setState({
          model: {
            ...this.state.model,
            name: value
          }
        });
      }}
    />
  </ClFormItem>
  <ClFormItem prop="phone" required>
    <ClInput
      title="手机号码（实时）"
      value={model.phone}
      onChange={value => {
        this.setState({
          model: {
            ...this.state.model,
            phone: value
          }
        });
      }}
    />
  </ClFormItem>
  <ClFormItem prop="hobby">
    <ClCheckbox
      type="form"
      shape="round"
      title="选择爱好"
      checkboxGroup={[
        {
          key: "下棋",
          value: "xiaqi"
        },
        {
          key: "画画",
          value: "huahua"
        },
        {
          key: "唱歌",
          value: "singsong"
        }
      ]}
      onChange={value => {
        this.setState({
          model: {
            ...model,
            hobby: value
          }
        });
      }}
    />
  </ClFormItem>
</ClForm>

// 整体校验
// 直接调用 ref 里的 validate 方法
handleSubmit() {
  this.ref.validate(success => {
    this.setState({
      message: \`数据校验\${success ? "通过" : "未通过"}\`,
      messageType: success ? "success" : "error",
      showMessage: true
    });
  });
}
\`\`\`
`
