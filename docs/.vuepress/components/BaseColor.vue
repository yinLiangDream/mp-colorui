<template>
  <div style='display: flex; flex-wrap: wrap; justify-content: flex-start'>
    <div
      :style='`border-radius: 8px; width: 120px; height: 60px; background-color: ${item.color}; color: ${item.fontColor}; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px`'
      v-for="item in baseColor">
      <div>{{item.title}}</div>
      <div>{{item.color}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseColor',
    data () {
      return {
        baseColor: [
          {
            title: 'red',
            color: '#e54d42',
            fontColor: '#ffffff'
          },
          {
            title: 'orange',
            color: '#f37b1d',
            fontColor: '#ffffff'
          },
          {
            title: 'yellow',
            color: '#fbbd08',
            fontColor: '#ffffff'
          },
          {
            title: 'olive',
            color: '#8dc63f',
            fontColor: '#ffffff'
          },
          {
            title: 'green',
            color: '#39b54a',
            fontColor: '#ffffff'
          },
          {
            title: 'cyan',
            color: '#1cbbb4',
            fontColor: '#ffffff'
          },
          {
            title: 'blue',
            color: '#0081ff',
            fontColor: '#ffffff'
          },
          {
            title: 'purple',
            color: '#6739b6',
            fontColor: '#ffffff'
          },
          {
            title: 'mauve',
            color: '#9c26b0',
            fontColor: '#ffffff'
          },
          {
            title: 'pink',
            color: '#e03997',
            fontColor: '#ffffff'
          },
          {
            title: 'brown',
            color: '#a5673f',
            fontColor: '#ffffff'
          },
          {
            title: 'grey',
            color: '#8799a3',
            fontColor: '#ffffff'
          },
          {
            title: 'black',
            color: '#333333',
            fontColor: '#ffffff'
          },
          {
            title: 'gray',
            color: '#aaaaaa',
            fontColor: '#ffffff'
          },
          {
            title: 'white',
            color: '#ffffff',
            fontColor: '#000000'
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>
