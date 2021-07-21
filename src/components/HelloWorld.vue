<template>
  <a-button type="primary">{{msg}}</a-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Button } from 'ant-design-vue';

@Options({
  components: {
    AButton: Button,
  },
  props: {
    msg: String,
  },
  created() {
    console.log(process.env);
  },
})

export default class HelloWorld extends Vue {}
</script>

<style scoped lang="less">

</style>
