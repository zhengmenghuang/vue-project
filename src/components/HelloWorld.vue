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
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<style scoped lang="less">

</style>
