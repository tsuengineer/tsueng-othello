<template>
    <div id="strategyByRate" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">レート1000～1200</Text>
            <Text tag="h3">置き打ち</Text>
            <Text>辺の着手の仕方</Text>
            <Text tag="h3">C打ちの解禁</Text>
            <Text>余裕山/余裕ウィング</Text>
            <Text tag="h3">ウィング攻め</Text>
            <Text>終盤4隅のX周辺だけ空いているときの打ち方</Text>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from '@/components/atoms/Text/Text.vue';
import TopicPath from "@/components/atoms/TopicPath/TopicPath.vue";

export default defineComponent({
  components: { Text, TopicPath },
  setup() {
    const topicPaths = [
      {path: '/', label: 'トップページ'},
      {path: '/strategy-by-rate', label: 'レート別戦略'},
      {path: null, label: 'レート1000～1200'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
