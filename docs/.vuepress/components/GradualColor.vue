<template>
  <div style='display: flex; flex-wrap: wrap; justify-content: flex-start'>
    <div
      :style='`border-radius: 8px; width: 200px; height: 60px; background: linear-gradient(45deg, ${item.color[0]}, ${item.color[1]}); color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px`'
      v-for="item in gradualColor">
      <div>{{item.title}}</div>
      <div>{{item.color[0]}} ~ {{item.color[1]}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GradualColor',
    data () {
      return {
        gradualColor: [
          {
            title: 'gradualRed',
            color: ['#f43f3b', '#ec008c']
          },
          {
            title: 'gradualOrange',
            color: ['#ff9700', '#ed1c24']
          },
          {
            title: 'gradualGreen',
            color: ['#39b54a', '#8dc63f']
          },
          {
            title: 'gradualPurple',
            color: ['#9000ff', '#5e00ff']
          },
          {
            title: 'gradualPink',
            color: ['#ec008c', '#6739b6']
          },
          {
            title: 'gradualBlue',
            color: ['#0081ff', '#1cbbb4']
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
