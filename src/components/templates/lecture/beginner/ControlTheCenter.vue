<template>
    <div id="strategyByRate" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">レート800～1000</Text>
            <Text>レート800～1000の方はXやCに打つのがよくないことは理解しているものの、打つ場所がないので渋々XやCに打つケースが多いです。</Text>
            <Text>打ちたくない場所(XやC)に打たなくて済むように、自分の打てる場所をできるだけ多く確保することが重要になります。</Text>

            <Text tag="h3">相手より石が少ない状態を目指す</Text>

            <Text tag="h3">内側の石を返す</Text>

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
      {path: null, label: 'レート800～1000'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
