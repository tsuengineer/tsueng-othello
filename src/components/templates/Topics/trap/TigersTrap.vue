<template>
    <div id="barancedMoves" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">虎全滅</Text>
            <Text>
              凶悪な全滅のハメ手を紹介します。<br>
              筆者はこのハメ手をオセロ大会の公式戦で3回使用して3回とも成功しています。<br>
              ただし失敗するとめちゃくちゃ不利になるので覚悟して使いましょう。<br>
              引っ掛かりそうな相手かどうか観察する力が必要になります。<br>
              黒番で行います。
            </Text>

            <Text tag="h3">まずは虎定石</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=f5d6c3d3c4f4&start_move=7"></iframe>
            <Text>おなじみの虎定石です。<br>レート1500以上の人が2手目で縦取りしてくれば80%くらいこの形になります。</Text>


            <Text tag="h3">ここでd7</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=f5d6c3d3c4f4d7&start_move=8"></iframe>
            <Text>どう考えても悪手のd7に打ちます。<br>次に白は1石返しの中割りであるe3に打ってきます。ちなみにレート1500以上の人なら9割以上がここに打ってきます。</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=f5d6c3d3c4f4d7e3&start_move=9"></iframe>

            <Text tag="h3">f2に打つ</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=f5d6c3d3c4f4d7e3f2&start_move=10"></iframe>
            <Text>なんの変哲もない手です。<br>次に白は1石返しの中割りとしてe2、f3、c5あたりが候補に上がりますが、ボックス内という観点からe2よりf3を優先します。<br>そしてc5は壁を破る悪手と判断してやはりf3の方がいいと判断します。</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=f5d6c3d3c4f4d7e3f2f3&start_move=11"></iframe>


            <Text tag="h3">チェックメイト</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=f5d6c3d3c4f4d7e3f2f3g3&start_move=12"></iframe>
            <Text>黒g3で勝ちです。白がどこに打っても全滅にできます。</Text>

            <Text tag="h3">まとめ</Text>
            <Text>大会などの対面の場合は相手が1手1秒以内に即打ちする場合に使うと成功率が高まります。<br>
            ネット対局の場合は持ち時間1分の対局で威力を発揮します。<br>
            失敗すると-14くらいの形勢になるので、失敗したときの盤面を研究しておきましょう。<br>
            格下との対戦の場合は30手目あたりで互角に戻せます。<br>
            失敗しても研究していれば終盤で最悪-2～-8くらいまで戻せるので、64石勝ちできる可能性を考えると悪くない選択だと思います。相手の着手の時間や棋力差を考慮して使ってみてはいかがでしょうか？</Text>
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
      {path: '/topics', label: 'ネタ'},
      {path: null, label: '虎全滅'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
