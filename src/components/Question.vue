<template>
    <div>
      <div>Question</div>
      <div>Level{{$store.state.currentLevel}}</div>
      <div>Question{{$store.state.currentQuestion}}</div>
      <button v-show="!$store.getters.complete"
        @click="$store.dispatch('toNext')">下一题</button>
      <button v-show="$store.getters.complete"
              @click="$router.push('/histogram')"
      >查看报告</button>
    </div>
</template>
<script>
    export default require('./QuestionCode')

</script>
<style scoped>

</style>

