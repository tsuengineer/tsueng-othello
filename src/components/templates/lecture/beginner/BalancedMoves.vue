<template>
    <div id="barancedMoves" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">壁を破らない</Text>
            <Text>
             <a href="/lecture/beginner/control-the-center">前回の講座</a>でいろいろな<span class="marker">中割り</span>を説明しました。<br>
             今回は中割りと対極の手筋<span class="marker">引っ張り</span>を紹介します。
            </Text>

            <Text tag="h3">おさらい</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=e7c7c4f3&start_board=
--------
--------
---XX---
---XXO--
--XOXO--
--OOOO--
---O----
-------- X
"></iframe>
            <Text>上図は黒番です。<br>
            お互いに中割りを打っていった場合はこうなります。(「＞」ボタンで進められます)</Text>


            <Text tag="h3">引っ張り</Text>
            <Text tag="h4">壁とは</Text>
            <Text>引っ張りの説明の前に<span class="marker">壁</span>の説明をします。<br>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=
--------
--------
---XX---
---XXO--
--XOXO--
--OOOO--
---O----
-------- O
"></iframe>

            壁とは、同じ色の石が外側に並んだ状態です。<br>
            例えば上図の下側は白の壁になっています。<br>
            白は自分の石が壁になっているせいで下側に打てません。</Text>

            <Text tag="h4">考え方</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=
--------
--------
---XX---
---XXXx-
--XOXO--
--OOOO--
---O----
-------- O
"></iframe>
            <Text>
            黒が初手でe7に中割りを打つと、白が下の方に打てるようになってしまいます。<br>
            そこで、黒はできるだけ壁を破らないようにすることで相手の打てる場所を制限します。<br>
            例えば黒g4の手が<span class="marker">引っ張り</span>です。</Text>
            <Text><span class="marker">相手の壁を破りたくない</span>、<span class="marker">自分が作ってしまった壁を相手に破らせたい</span>場合に使う手筋です。</Text>

            <Text tag="h4">引っ張り進行の例</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g4c4g5c3f7d2e7f2c8f3c7&start_board=
--------
--------
---XX---
---XXO--
--XOXO--
--OOOO--
---O----
-------- X
"></iframe>
            <Text>上図は<span class="marker">フラットローズ</span>という定石で、お互いに引っ張りを打ち続ける進行です。(「＞」ボタンで盤面を進められます)</Text>
            <Text>お互いに相手の壁を破りたくなく、自分が作ってしまった壁を破らせたいと考えながら打っています。</Text>

            <Text tag="h3">勝負を決める引っ張り</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=f8&start_board=
--------
--------
---XXXOO
--XXXXOO
--XXOOOO
--XXOOOO
---XXX--
---X---- O
"></iframe>
            <Text>上図は白番です。<br>
            白c7は<span class="marker">完全な中割り</span>ですが、左下に黒の打てる場所が増えてしまいます。<br>
            どこに打つのがいいでしょう?(「＞」ボタンで正解を表示します)</Text>

            <Text>正解は白f8です。<br>
            <span class="marker">相手の壁を破らず</span>引っ張りを打つことによって、黒は<span class="marker">手詰まり</span>になっています。</Text>



          <Text tag="h3">練習問題</Text>
            <Text>最後に練習問題で理解できたか確認してみましょう。</Text>


            <Text tag="h4">第1問</Text>
            <Text>白番です。<br>次の1手はどこでしょう?(「＞」ボタンで正解が表示されます)</Text>

          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=b6&start_board=
--------
--------
---XXX--
---XX---
-OOXOOO-
--XOOO--
--------
-------- O
"></iframe>

            <Text>※c4は中割りです。</Text>

            <Text tag="h4">第2問</Text>
            <Text>黒番です。次の1手はどこでしょう?<br>
            白が左側と上側に打てない状態を維持しましょう。(「＞」ボタンで正解が表示されます)</Text>
            <Text>※2手目以降の進行は一例</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g6h3h4h5h6h7g3f2&start_board=
--------
--OOO---
--OOOO--
--OXOOX-
--OXXOX-
--OXXO--
--XXOX--
--XXXXX- X
"></iframe>
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
      {path: '/othello/', label: 'トップページ'},
      {path: '/othello/lecture', label: '講座'},
      {path: null, label: '壁を破らない'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
