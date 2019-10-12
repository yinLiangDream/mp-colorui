<template>
  <div>
    <div v-for="item in updateList" :key="item.version">
      <h2>Version: {{ item.version }}</h2>
      <p style="color: cadetblue">发布时间: {{ item.time }}</p>
      <div style="color: grey">
        <ul v-for="desc in item.desc">
          <li>{{ desc }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
function generatorData(version, time, desc) {
  return {
    version,
    time,
    desc
  };
}

export default {
  name: "UpdateLog",
  async mounted() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json;charset=utf-8");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "*");
    const res = await fetch(
      "https://mp-colorui-1255362963.cos.ap-chengdu.myqcloud.com/update/update.json",
      {
        method: "GET",
        mode: "cors",
        headers
      }
    );
    const data = await res.json();
    this.updateList = data.map(item =>
      generatorData(item.title, item.time, item.content)
    );
  },
  data() {
    return {
      updateList: []
    };
  }
};
</script>
