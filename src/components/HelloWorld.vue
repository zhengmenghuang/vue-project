<template>
  <a-button type="primary" @click="onClick">{{info}}</a-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Button } from 'ant-design-vue';
import TestService from '@/api/test';

@Options({
  components: {
    AButton: Button,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      info: this.msg,
    };
  },
  methods: {
    async onClick() {
      this.info = await TestService.test();
    },
  },

})

export default class HelloWorld extends Vue {}
</script>

<style scoped lang="less">

</style>
