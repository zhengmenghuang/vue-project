<template>
  <a-button type="primary" @click="getInfo">{{info}}</a-button>
  <a-button type="primary" @click="goNextPage">下一页</a-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Button } from 'ant-design-vue';
import TestService from '@/api/test';
import { AxiosResponse } from 'axios';

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
})

export default class HelloWorld extends Vue {
  info!: AxiosResponse;

  // 获取api消息
  async getInfo(): Promise<void> {
    this.info = await TestService.test();
  }

  // 去下一页
  goNextPage(): void {
    this.$router.push('/test');
  }
}
</script>

<style scoped lang="less">

</style>
