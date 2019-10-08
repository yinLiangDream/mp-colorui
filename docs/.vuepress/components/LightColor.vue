<template>
  <div style='display: flex; flex-wrap: wrap; justify-content: flex-start'>
    <div
      :style='`border-radius: 8px; width: 120px; height: 60px; background-color: ${item.color}; color: ${item.fontColor}; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px`'
      v-for="item in lightColor">
      <div>{{item.title}}</div>
      <div>{{item.color}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lightColor',
    data () {
      return {
        lightColor: [
          {
            title: 'redLight',
            color: '#fadbd9',
            fontColor: '#e54d42'
          },
          {
            title: 'orangeLight',
            color: '#fde6d2',
            fontColor: '#f37b1d'
          },
          {
            title: 'yellowLight',
            color: '#fef2ce',
            fontColor: '#fbbd08'
          },
          {
            title: 'oliveLight',
            color: '#e8f4d9',
            fontColor: '#8dc63f'
          },
          {
            title: 'greenLight',
            color: '#d7f0db',
            fontColor: '#39b54a'
          },
          {
            title: 'cyanLight',
            color: '#d2f1f0',
            fontColor: '#1cbbb4'
          },
          {
            title: 'blueLight',
            color: '#cce6ff',
            fontColor: '#0081ff'
          },
          {
            title: 'purpleLight',
            color: '#e1d7f0',
            fontColor: '#6739b6'
          },
          {
            title: 'mauveLight',
            color: '#ebd4ef',
            fontColor: '#9c26b0'
          },
          {
            title: 'pinkLight',
            color: '#f9d7ea',
            fontColor: '#e03997'
          },
          {
            title: 'brownLight',
            color: '#ede1d9',
            fontColor: '#a5673f'
          },
          {
            title: 'greyLight',
            color: '#e7ebed',
            fontColor: '#8799a3'
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>
