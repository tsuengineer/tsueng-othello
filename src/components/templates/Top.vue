<template>
    <div id="top" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">はじめに</Text>
            <Text>
                このページは手っ取り早くオセロが強くなりたい人向けのページです。<br>
                <a href="https://wars.fm/reversi?lang=ja">オセロクエスト</a>でレート800～1400あたりの方が1500(青レート)を目指すことを想定しています。
            </Text>
        </section>

        <section>
            <Text tag="h2">目次</Text>
            <template v-for="(tableOfContent, tableOfContentKey) in tableOfContents" :key="tableOfContentKey">
              <Text size="small">[{{ tableOfContent.target }}向け]</Text>
              <ul v-for="(content, contentKey) in tableOfContent.contents" :key="contentKey">
                <li class="pb-3">
                    <Text tag="h3">
                      <a :href="content.path">{{ content.title }}</a>
                    </Text>
                    <Text size="small">{{ content.discriptions.join('/') }}</Text>
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
      {path: '/', label: 'トップページ1'},
      {path: null, label: 'トップページ2'},
    ];

    const tableOfContents = [
      {
        target: '初心者',
        contents: [
          {
            title: '用語',
            path: '/',
            discriptions: [
                'マスの名称', '辺の名称', '手筋',
            ],
          },
          {
            title: '隅の重要性',
            path: '/',
            discriptions: [
              '隅が重要な理由', '隅を取られないようにするには', '隅を取られても問題ないケース',
            ],
          },
          {
            title: '終盤の考え方',
            path: '/',
            discriptions: [
              'ウィング攻め', 'ライン通し', '偶数理論', '連打', '2辺確定理論'
            ],
          },
          {
            title: '序盤～中盤の考え方',
            path: '/',
            discriptions: [
              '打てる場所が多い方が有利', '打てる場所を減らさないように打つ', '全滅に気を付ける', '辺の取り方'
            ],
          },
          {
            title: '問題集',
            path: '/',
            discriptions: [
              '中割り', '連打'
            ],
          },
          {
            title: 'ソフト',
            path: '/',
            discriptions: [
              '検討・研究用ソフト',
            ],
          },
        ]
      },
      {
        target: '上級者',
        contents: [
          {
            title: '60手暗記シリーズ',
            path: '/',
            discriptions: [
              'フラットローズ(白番)', 'イタリアンクロス(白番)', 'FJT(白番)',
            ],
          },
          {
            title: '暗記外し',
            path: '/',
            discriptions: [
              '対斜め取り',
            ],
          },
          {
            title: 'Edaxの使い方',
            path: '/',
            discriptions: [
              'BOOK構築方法',
            ],
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
