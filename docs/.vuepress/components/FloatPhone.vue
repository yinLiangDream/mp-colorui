<template>
  <div
    style="position: fixed; right: 10px; top: 6%; z-index: 10; display: flex; flex-direction: column; justify-content: center; align-items: center">
    <div
      style="width: 364px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">
      <p>部分功能需扫码预览才能正常显示。</p>
      <button id='showDemo' class="button" @click="toggleButton"> 隐藏/显示</button>
    </div>
    <iframe id='iframe' style="border: 1px solid antiquewhite; border-radius: 20px" :src="url" height="568" width="316"
            v-show="show"></iframe>
    <div v-show="show" style="background-color: white;border-radius: 20px; overflow: hidden; margin-top: 10px">
      <div style="text-align: center">H5及小程序二维码</div>
      <canvas id='qrcode'></canvas>
      <img src="https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/coloruiqrcode.png"
           style="width: 180px; height: 180px">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'floatPhone',
    data () {
      return {
        show: true
      }
    },
    props: {
      url: {
        default: ''
      }
    },
    methods: {
      toggleButton () {
        this.show = !this.show
      }
    },
    mounted () {
      const QRCode = require('qrcode')
      setTimeout(() => {
        const id = document.getElementById('qrcode')
        QRCode.toCanvas(id, this.url)
      }, 100)
    }
  }
</script>

<style scoped>
  .button {
    background-color: antiquewhite;
    border-radius: 20px;
    color: black;
    padding: 5px 10px;
    overflow: hidden;
    border: 1px solid antiquewhite;
  }

  .button::after {
    display: none;
  }

  .button:active {
    background-color: navajowhite;
    border-radius: 20px;
    color: black;
    padding: 5px 10px;
    overflow: hidden;
    border: 1px solid navajowhite;
  }
</style>
