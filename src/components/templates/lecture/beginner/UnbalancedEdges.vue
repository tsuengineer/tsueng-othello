<template>
    <div id="unbalancedEdges" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">ウィング攻め</Text>
            <Text>
             隅を取られないようにC打ちやX打ちを避けていても、いずれ打たなければなりません。<br>
             今回は効果的なC打ちやX打ちを紹介します。
            </Text>

            <Text tag="h3">テーマ図</Text>
            <Text>お互いにX打ちを避けて相手に隅を取られないように打ってきました。<br>
            次は白番ですが、<span class="marker">X打ちしかできません</span>。(次に隅を必ず取られます。)<br>
            不利に見えるかもしれませんが、<span class="marker">白は勝つ方法があります</span>。どこに打つのが良いでしょうか？</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=&start_board=
--XXXXX-
--XXXX-X
OOXXXXXX
OOXOOXXX
OOOXOXXX
OOXOXXXX
--XXXX-X
-XXXXXX- O
"></iframe>

            <Text tag="h3">失敗</Text>
            <Text>このような順番で打っていくと負けてしまいます。(「＞」ボタンで盤面を進められます。)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g2h1g7h8&start_board=
--XXXXX-
--XXXX-X
OOXXXXXX
OOXOOXXX
OOOXOXXX
OOXOXXXX
--XXXX-X
-XXXXXX- O
"></iframe>


            <Text tag="h3">成功</Text>
             <Text tag="h4">b2から打つ</Text>
            <Text>白はb2から打って、黒a1と隅を取らせます。<br>その後、白b1に打つことで次にh1を狙うことができます。(「＞」ボタンで盤面を進められます。)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=a1b1&start_move=51&start_board=
--XXXXX-
-oXXXX-X
OOOXXXXX
OOXOOXXX
OOOXOXXX
OOXOXXXX
--XXXX-X
-XXXXXX- X
"></iframe>

             <Text tag="h4">続き</Text>
            <Text>白は<span class="marker">a1を犠牲にすること</span>によって、<span class="marker">3隅を手にいれることができます</span>。(「＞」ボタンで盤面を進められます。)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=a2h1b7h8a7a8g7g2&start_board=
XOXXXXX-
-OOXXX-X
OOXOXXXX
OOXXOXXX
OOOXXXXX
OOXOXXXX
--XXXX-X
-XXXXXX- X
"></iframe>

             <Text tag="h4">ポイント</Text>
            <Text>上辺は<span class="marker">ウィング</span>という悪い形です。<br>これを攻撃します。</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=&start_board=
--XXXXX-
--------
--------
--------
--------
--------
--------
-------- O
"></iframe>

            <Text>まず<span class="marker">隅を取らせ</span>て</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=&start_board=
x-XXXXX-
--------
--------
--------
--------
--------
--------
-------- O
"></iframe>

            <Text>次に、<span class="marker">間に潜って</span></Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=&start_board=
XoXXXXX-
--------
--------
--------
--------
--------
--------
-------- O
"></iframe>

            <Text>最後に<span class="marker">反対側の隅を取ります</span>。</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=&start_board=
XOOOOOOo
--------
--------
--------
--------
--------
--------
-------- O
"></iframe>

            <Text>このように、相手に隅を取らせる代わりに辺と反対側の隅を取る手筋を「<span class="marker">ウィング攻め</span>」といいます。</Text>

            <Text tag="h3">中盤のウィング攻め</Text>
            <Text>これまでは<span class="marker">終盤までX打ちやC打ちをしない</span>という方針で講座を進めてきましたが、中盤でC打ちやX打ちをして<span class="marker">ウィング攻めで詰ませる</span>方法を紹介します。</Text>

            <Text tag="h4">勝負を決めるウィング攻め</Text>
            <Text>右辺にウィングがあります。<br>
            黒はどこに打つのがいいでしょう？</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=&start_board=
---O----
---O---O
-OOOOOOO
-OXXXXOO
OOOOXOOO
-OOOOXOO
--OXOO--
--OOOO-- X
"></iframe>

            <Text tag="h4">正解</Text>
            <Text>黒g8から白に隅を取らせる手順が正解です。<br>黒はh1から上辺を順番に取っていきます。</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=h8h7g7h1g2&start_board=
---O----
---O---O
-OOOOOOO
-OXXXXOO
OOOXXOOO
-OOOXXOO
--OXOX--
--OOOOx- O
"></iframe>

            <Text tag="h4">白がh8と取って来なかった場合</Text>
            <Text>白が隅を取って来なかった場合は、黒b8と下辺を取るのが良い手です。<br>白はずっと一か所しか打てない<span class="marker">指定打ち</span>状態が続きます。</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g7b8b7h8h7h1g2f2f1g1e1e2a7&start_board=
---O----
---O---O
-OOOOOOO
-OXXXXOO
OOOXXOOO
-OOOXXOO
--OXOX--
--OOOOx- O
"></iframe>

            <Text tag="h3">注意点</Text>
            <Text>下図は白番ですが、白b2、黒a1、白b1で上辺のウィングを攻める手はうまくいきません。<br>
            b列が全て白なので、白b2のあと黒b1が成立します。(黒がb1に打ったときb2の石を返さなくて済むため)<br>(「＞」ボタンで盤面を進められます。)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=b2b1&start_board=
--XXXXX-
--XOOX-X
-OXXXOXX
-OXOXXOX
-OXOOOOX
OOOXXXXX
--XXXX--
--XOOX-- O
"></iframe>
            <Text>このあと、白がa1を取られないようにg7と抵抗した場合も黒a5とラインを切ることができるため、黒にa1を取られてしまいます。(「＞」ボタンで盤面を進められます。)</Text>

          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g7a5&start_board=
-XXXXXX-
-OXOOX-X
-OOXXOXX
-OXOXXOX
-OXOOOOX
OOOXXXXX
--XXXX--
--XOOX-- O
"></iframe>

            <Text>この場合は右辺のウィングを攻めるのが正解です。(「＞」ボタンで盤面を進められます。)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g8h8h7g7h1g2b1&start_board=
--XXXXX-
--XOOX-X
-OXXXOXX
-OXOXXOX
-OXOOOOX
OOOXXXXX
--XXXX--
--XOOX-- O
"></iframe>

          <Text tag="h3">練習問題</Text>
            <Text>最後に練習問題で理解できたか確認してみましょう。</Text>
            <Text tag="h4">第1問</Text>
            <Text>黒番です。<span class="marker">ウィング攻め</span>してください。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=b7&start_board=
---O----
O-OOOO-X
OOXXOXXX
OOXOXOXX
OXXOXXOX
OOXXXXXX
O-OOOO-X
--OOOOO- X
"></iframe>

            <Text tag="h4">第2問</Text>
            <Text>黒番です。<span class="marker">山にされる前に</span>ウィング攻めを決めてください。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g7&start_board=
--O-OO--
--OOOO-O
O-OXXOOO
-OOXOOXO
-OOXOXOO
--OXOOXO
--XOXX--
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
      {path: '/', label: 'トップページ'},
      {path: '/lecture', label: '講座'},
      {path: null, label: 'ウィング攻め'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
