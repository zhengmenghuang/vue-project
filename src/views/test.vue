<template>
  <a-button type="primary" @click="onClick">返回</a-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Button } from 'ant-design-vue';

@Options({
  components: {
    AButton: Button,
  },
  props: {
  },
  data() {
    return {
    };
  },
  methods: {
    onClick() {
      window.history.back();
    },
  },
})

export default class Test extends Vue {}

</script>

<style scoped lang="less">

</style>
