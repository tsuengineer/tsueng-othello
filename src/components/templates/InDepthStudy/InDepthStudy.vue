<template>
    <div id="inDepthStudy" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">徹底研究</Text>
            <Text>上級者向けコンテンツです。<br>とりあえず完全暗記シリーズを公開予定です。</Text>

            <template v-for="(lecture, lectureKey) in lectures" :key="lectureKey">
              <Text tag="h3">{{ lecture.category.jpName }}</Text>
              <ul v-for="(item, itemKey) in lecture.items" :key="itemKey">
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
      {path: '/othello', label: 'トップページ'},
      {path: null, label: '徹底研究'},
    ];

    const lectures = [
      {
        category: { alpha: 'white', jpName: '白番' },
        items: [
          { title: 'FJT 最善受け編', path: '/othello/in-depth-study/fjt-white', rate: null },
        ]
      }
    ];

    return {
      topicPaths,
      lectures,
    }
  }
});
</script>

<style lang="scss">
#lecture {
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