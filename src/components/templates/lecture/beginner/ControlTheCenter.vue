<template>
    <div id="controlTheCenter" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">自分の打てる場所を減らさない</Text>
            <Text>CとXに打たなければ隅が取られないことを理解していても、実戦では他に打つ場所がなくなってやむを得ずCやXに打たなければならないことがあります。<br>
            打ちたくない場所に打たなくて済むように、自分の打てる場所をできるだけ多く確保することが重要になります。<br>
            このページでは自分の打てる場所を減らさないテクニックを紹介します。</Text>

            <Text tag="h3">おさらい</Text>

            <Text><span class="marker">隅の隣をC</span>、<span class="marker">隅の斜め前をX</span>といいます。<br>
            打ってしまうと隅を取られやすくなる<span class="marker">危険なマス</span>です。<br>
            忘れてしまった方や初めての方は【<a href="/lecture/beginner/terminology">講座 ＞ 用語</a>】を確認してみてください。</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=
-Ｃ----Ｃ-
ＣＸ----ＸＣ
--------
--------
--------
--------
ＣＸ----ＸＣ
-Ｃ----Ｃ- O
"></iframe>

            <Text tag="h3">よくある失敗</Text>


          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g7h8g8b8b7a8a7a2b2h7&start_board=
--------
-----O--
OOOOOOOX
OOOOOOXX
OOOXXXXX
OOOXOOXX
--OOOO--
--OOOO-- O
"></iframe>
            <Text>上図は白番です。<br>
            CやXを避けて打っていたはずなのに、気がついたらCかXしか打てなくなっています。<br>
            この状態を<span class="marker">手詰まり</span>といいます。<br>
            この後ずっと1箇所しか打てない<span class="marker">指定打ち</span>状態になります。(「＞」ボタンで盤面を進められます。)</Text>

            <Text tag="h3">失敗になるまでの手順例</Text>

            <Text>下図は白番です。</Text>
            <Text>白が失敗する進行を紹介するので盤面を進めながら読んでください。(「＞」ボタンで盤面を進められます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?put_enable=on&kifu=a3b5a6a7&start_board=
--------
--------
-XXXXXXO
-XOXOOOO
X-XXOOOO
-XXXOOOO
--XXOX--
-XXXXX-- O
"></iframe>

            <Text>[1手目]<br>白はa3に打って9個返します。</Text>
            <Text>[2手目]<br>黒はb5に打ちます。</Text>
            <Text>[3手目]<br>白はCとX以外にa6しか打つ場所がありません。</Text>
            <Text>[4手目]<br>黒はa7に打ちます。</Text>

            <Text>次に白はCかXにしか打てず黒に隅を取られてしまいます。</Text>

            <Text tag="h3">なぜ打つ場所が少なくなるのか</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=
--------
++++++++
-XXXXXXO
-XOXOOOO
X-XXOOOO
-XXXOOOO
--XXOX--
-XXXXX-- O
"></iframe>
            <Text>白が初手でa3に打ったとき、本来打つことができるはずだった8箇所を失っています。</Text>
            <Text>一気にたくさん返したり外側の石を返すと自分の打つ場所が減ってしまいます。</Text>

            <Text tag="h3">どうすればよかったのか？</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=b5&start_board=
--------
--------
-XXXXXXO
-XOXOOOO
X-XXOOOO
-XXXOOOO
--XXOX--
-XXXXX-- O
"></iframe>
           <Text>初めに白が打てる場所は15個あります。<br>
           どこに打つのがいいでしょう？盤面を1手進めてください。(「＞」ボタンで盤面を進められます)</Text>
           <Text>正解は白b5です。<br>
           黒番ですが、白が打てる場所を数えてみましょう。</Text>
           <Text>数えてみると15個あることがわかると思います。(a3に打った場合は5個)<br>
           内側の石を少なく返すと、打てる場所を温存することができます。</Text>


            <Text tag="h3">いい手を簡単に見つける方法</Text>
            <Text>毎回打てる場所の数を数えるのは大変なので、良い形を覚えましょう。<br>
            先に説明したように、内側の石を返すのが自分の打つ場所を減らさない良い手です。<br>
            打ったあとに返した石が全て他の石に囲まれている形が理想です。</Text>
            <Text>実際に見てみましょう</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g5&start_board=
--------
--------
--------
---OOOX-
---XXO--
----XOO-
--------
-------- X
"></iframe>
          <Text>上図は黒番です。<br>盤面を1手進めて正解を確認してください。(「＞」ボタンで盤面を進められます)</Text>
          <Text>正解は黒g5です。返したf5の石は隣接する8マスに綺麗に囲まれています。<br>この内側の石を返す形を<span class="marker">中割り</span>といいます。</Text>

          <Text tag="h3">練習問題</Text>
            <Text>最後に練習問題で理解できたか確認してみましょう。</Text>
            <Text tag="h4">第1問</Text>
            <Text>黒番です。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=e6&start_board=
--------
--------
---XX---
---XXO--
--XOOO--
--OO-O--
--------
-------- X
"></iframe>

            <Text tag="h4">第2問</Text>
            <Text>黒番です。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=c6&start_board=
--------
--------
--XXXO--
--XXXOO-
--XOXO--
-X-OOOO-
----OX--
-------- X
"></iframe>

            <Text tag="h4">第3問</Text>
            <Text>白番です。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g5&start_board=
--XXXXX-
--XXOX--
-XOOXX--
-OOOXXX-
-OOXXX--
--OOXOO-
---OOX--
-------- O
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
      {path: '/', label: 'トップページ'},
      {path: '/lecture', label: '講座'},
      {path: null, label: '自分の打てる場所を減らさない'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
