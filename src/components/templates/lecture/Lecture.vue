<template>
    <div id="lecture" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">講座</Text>
            <Text>オセロの勝ち方・戦術に関するページです。<br>
            初心者向け講座では、戦術を一切知らない人を想定しています。<br>
            到達想定レートは、各講座を読んでから対局した場合に到達すると予想されるレートです。(参考程度に)</Text>

            <template v-for="(lecture, lectureKey) in lectures" :key="lectureKey">
              <Text tag="h3">{{ lecture.category.jpName }}</Text>
              <Text size="small">※括弧内の数字は到達想定レート</Text>
              <ul v-for="(item, itemKey) in lecture.items" :key="itemKey">
                <li>
                  <dl>
                    <dt>
                      <Text>
                        <a :href="item.path">
                          {{ item.title }}
                        </a>
                      </Text>
                    </dt>
                    <dd>
                      <Text size="small" color="gray" v-if="item.rate">({{ item.rate }})</Text>
                    </dd>
                  </dl>

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
      {path: null, label: '講座'},
    ];

    const lectures = [
      {
        category: { alpha: 'beginner', jpName: '初心者向け' },
        items: [
          { title: '用語', path: '/othello/lecture/beginner/terminology', rate: null },
          { title: '隅の重要性', path: '/othello/lecture/beginner/importance-of-corners', rate: 800 },
          { title: '自分の打てる場所を減らさない', path: '/othello/lecture/beginner/control-the-center', rate: 950 },
          { title: '内側の石を返す(中割り)', path: '/othello/lecture/beginner/control-the-center2', rate: 1000 },
          { title: '壁を破らない(引っ張り)', path: '/othello/lecture/beginner/balanced-moves', rate: 1050 },
          { title: 'ウィング攻め', path: '/othello/lecture/beginner/unbalanced-edges', rate: 1150 },
          // { title: 'ラインを通す', path: '/othello/lecture/beginner/unbalanced-edges', rate: 1200 },
          // { title: 'C打ちしてもいいケース', path: '/othello/lecture/beginner/consecutive-moves', rate: 1250 },
          // { title: '余裕手', path: '/othello/lecture/beginner/consecutive-moves', rate: 1350 },
          // { title: '連打を見逃さない', path: '/othello/lecture/beginner/consecutive-moves', rate: 1400 },
          // { title: '奇数空きから打つ', path: '/othello/lecture/beginner/even-number-theory', rate: 1500 },
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