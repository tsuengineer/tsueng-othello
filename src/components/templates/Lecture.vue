<template>
    <div id="lecture" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">講座</Text>

            <ul>
              <li>
                <Text><a href="/lecture/terminology">・用語</a></Text>
              </li>
              <li>
                <Text>・隅の重要性</Text>
              </li>
              <li>
                <Text>・終盤の考え方</Text>
              </li>
              <li>
                <Text>・序盤～中盤の考え方</Text>
              </li>
            </ul>
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
      {path: null, label: '講座'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>

<style lang="scss">
#lecture {
  a {
    text-decoration: underline;
  }
}
</style>