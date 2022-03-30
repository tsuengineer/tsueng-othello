<template>
    <div id="strategyByRate" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">レート1200～1500</Text>
            <Text tag="h3">ライン通し</Text>
            <Text tag="h3">偶数理論</Text>
            <Text tag="h3">TOF</Text>
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
      {path: null, label: 'レート1200～1500'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
