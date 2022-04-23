<template>
    <div id="topics" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">ネタ</Text>
            <Text>オセロの上達とは関係ない(?)ページです。<br>
            良い子はマネしないでください要素を含んだコンテンツを紹介する予定です。</Text>

            <template v-for="(topic, topicsKey) in topics" :key="topicsKey">
              <Text tag="h3">{{ topic.category.jpName }}</Text>
              <ul v-for="(item, itemKey) in topic.items" :key="itemKey">
                <li>
                  <Text>
                    <a :href="item.path">
                      {{ item.title }}
                    </a>
                  </Text>
                </li>
              </ul>
            </template>
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
      {path: null, label: 'ネタ'},
    ];

    const topics = [
      {
        category: { alpha: 'perfectTrap', jpName: '全滅' },
        items: [
          { title: '虎全滅', path: '/topics/trap/tigers-trap' },
        ]
      }
    ];

    return {
      topicPaths,
      topics,
    }
  }
});
</script>

<style lang="scss">
#topics {
  a {
    text-decoration: underline;
  }

  dl {
    display: flex;
    dt {
      width: 250px;
    }
  }
}
</style>