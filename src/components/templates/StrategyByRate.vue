<template>
    <div id="strategyByRate" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">レート別戦略</Text>
            <Text>
              ここでは、対局時に意識すべきことをレート別に紹介します。<br>
              わからない用語がでてきたら【<a href="/lecture/terminology">講座 &gt; 用語</a>】を読み返してください。<br>
              ※レート800未満しか完成してません。
            </Text>
            <Text tag="h3"><a href="/strategy-by-rate/under800">レート800未満</a></Text>
            <Text>相手に隅を取られないように打つ！</Text>
            <Text tag="h3"><a href="/strategy-by-rate/under1000">レート800～1000</a></Text>
            <Text>内側を狙って少なく取る！</Text>
            <Text tag="h3"><a href="/strategy-by-rate/under1200">レート1000～1200</a></Text>
            <Text>相手のC打ちを攻める！</Text>
            <Text tag="h3"><a href="/strategy-by-rate/under1500">レート1200～1500</a></Text>
            <Text>辺の打ち方・終盤の手筋！</Text>
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
      {path: null, label: 'レート別戦略'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
