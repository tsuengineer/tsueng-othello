<template>
    <div id="top" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">はじめに</Text>
            <Text>
                このページは手っ取り早くオセロが強くなりたい人向けのページです。<br>
                オセロクエストで灰～緑レートの人が1500(青レート)を目指すことを想定しています。
            </Text>
        </section>

        <section>
            <Text tag="h2">目次</Text>
            <template v-for="(tableOfContent, tableOfContentKey) in tableOfContents" :key="tableOfContentKey">
              <!-- <Text size="small">[{{ tableOfContent.target }}向け]</Text> -->
              <ul v-for="(content, contentKey) in tableOfContent.contents" :key="contentKey">
                <li class="pb-3">
                    <Text tag="h3">
                      <a :href="content.path">{{ content.title }}</a>
                    </Text>
                    <Text size="small">{{ content.discriptions }}</Text>
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
      {path: null, label: 'トップページ'},
    ];

    const tableOfContents = [
      {
        target: '初心者',
        contents: [
          {
            title: '講座',
            path: '/othello/lecture',
            discriptions: '初心者向け講座',
          },
          {
            title: 'ネタ',
            path: '/othello/topics',
            discriptions: 'ハメ手など',
          },
          {
            title: '徹底研究',
            path: '/othello/in-depth-study',
            discriptions: '上級者向けコンテンツ',
          },
        ]
      }
    ];

    return {
      topicPaths,
      tableOfContents,
    }
  }
});
</script>
