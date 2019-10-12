<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div v-html="item.title"></div>
      <div class="language-jsx extra-class" v-html="item.code"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import "highlight.js/styles/atom-one-dark.css";
import axios from "axios";
export default {
  name: "CodeShow",
  props: ['componentName'],
  data() {
    return {
      list: []
    };
  },
  beforeMount() {
    let renderMD = new marked.Renderer();
    marked.setOptions({
      renderer: renderMD,
      highlight(code) {
        return require("highlight.js").highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  },
  mounted() {
    axios.get(`/mp-colorui-doc/dataKeyMap.json`).then(async (res) => {
      const componentDemoList = res.data[this.componentName]
      console.log(componentDemoList)
      for (let item of componentDemoList) {
        const data = await axios.get(`/mp-colorui-doc/${this.componentName}-${item.key}.md`)
        this.list.push({
          title: marked(`### ${item.value}`),
          code: marked(data.data, { sanitize: true })
        })
      }
    });
  }
};
</script>

<style scoped></style>
