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
            path: '/lecture',
            discriptions: '初心者向け講座',
          },
          // {
          //   title: '隅の重要性',
          //   path: '/',
          //   discriptions: [
          //     '隅が重要な理由', '隅を取られないようにするには',
          //   ],
          // },
          // {
          //   title: '終盤の考え方',
          //   path: '/',
          //   discriptions: [
          //     'ウィング攻め', 'ライン通し', '偶数理論', '連打'
          //   ],
          // },
          // {
          //   title: '序盤～中盤の考え方',
          //   path: '/',
          //   discriptions: [
          //     '打てる場所が多い方が有利', '打てる場所を減らさないように打つ', '全滅に気を付ける', '辺の取り方'
          //   ],
          // },
          // {
          //   title: 'レート別戦略',
          //   path: '/strategy-by-rate',
          //   discriptions: [
          //     '800未満', '～1000未満', '～1200未満', '～1500未満'
          //   ],
          // },
          {
            title: '問題集',
            path: '#',
            discriptions: '中割り、連打など',
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
