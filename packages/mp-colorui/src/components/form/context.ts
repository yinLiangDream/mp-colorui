export default {
  provider: {},
  inject(key) {
    return this.provider[key] || null
  },
  focus: ''
}
