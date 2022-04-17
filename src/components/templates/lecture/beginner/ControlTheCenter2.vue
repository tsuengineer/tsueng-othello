<template>
    <div id="controlTheCenter2" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">内側の石を返す</Text>
            <Text>
             <a href="/lecture/beginner/control-the-center">前回の講座</a>で<span class="marker">手詰まり</span>を防ぐためのテクニックとして内側の石を返す<span class="marker">中割り</span>を説明しました。<br>
             今回はいろいろなパターンの中割りを紹介します。
            </Text>

            <Text tag="h3">おさらい</Text>


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
            <Text>
              上図は<a href="/lecture/beginner/control-the-center">前回の講座</a>の練習問題2の盤面です。<br>
              次の1手は黒c6が正解です。返したd5の石が完全に周りに囲まれていることを確認してください。
            </Text>
            <Text tag="h3">ここで疑問</Text>


          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g5&start_board=
--------
--------
--XXXO--
--XXXOO-
--XOXO--
-X-OOOO-
----OX--
-------- X
"></iframe>
            <Text>黒g5に打つのも中割りでは?と思った方もいるかもしれません。<br>
            たしかにg5も内側の石を返すいい手ですが、c6より少し劣ります。<br>
            違いを確認してみましょう。</Text>

          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=
--------
--------
--XXXO+-
--XXX*O-
--XOX*X-
-X-OOOO-
----OX--
-------- X
"></iframe>
            <Text>黒g5に打つと、f4とf5の石が返ります。(＋マークがついている石)<br>
            この2石に注目すると、f5の石は周囲8マスを完全に囲まれていますが、f4の石はg3のマスが空いています。<br>
            返した石が完全に囲まれている方がいい手と覚えてください。
            </Text>

            <Text>
              このサイトでは、黒c6のように返した石が完全に囲まれている手を<span class="marker">完全な中割り</span>、黒g5のように返した石の周りに空きマスがある形を<span class="marker">不完全な中割り</span>と呼ぶことにします。
            </Text>

            <Text tag="h3">完全でも不完全でもない中割り</Text>


          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?put_enable=on&kifu=f6&start_board=
--------
--------
--XO----
--XXXO--
---OOX--
---O----
--------
-------- X
"></iframe>
            <Text>上図は虎定石という互角進行です。<br>
            次は黒番ですが、完全な中割りを打つことはできません。<br>
            では、どこに打つのがいいでしょう?(「＞」ボタンで盤面を進められます)</Text>

          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?put_enable=on&start_board=
--------
--------
--XO----
--XXXO--
---OXX--
---O+X--
--------
-------- X
"></iframe>
            <Text>序盤なので他にもいい手はありますが、最もいい手の1つが黒f6です。</Text>
            <Text>黒f6に打ったときに返ったe5の石に注目すると、e6のマスが空いているので<span class="marker">完全な中割り</span>ではありません。<br>
            しかし、e6のマスは白が打てません。この形は空きマスに相手が打てないので<span class="marker">不完全な中割り</span>よりいい形です。</Text>
            <Text>このサイトではこの形を<span class="marker">良い中割り</span>と呼ぶことにします。</Text>
            <Text>実戦では完全な中割り、良い中割り、不完全な中割りの順に探しましょう。</Text>


          <Text tag="h3">練習問題</Text>
            <Text>最後に練習問題で理解できたか確認してみましょう。</Text>
            <Text tag="h4">第1問</Text>
            <Text>白番です。<span class="marker">完全な中割り</span>を探してください。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=b5&start_board=
--------
--------
-XXO-O--
-OXOOO--
--OXOO--
--XOXXO-
--XXX---
--X--X-- O
"></iframe>

            <Text tag="h4">第2問</Text>
            <Text>黒番です。<span class="marker">良い中割り</span>を探してください。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g6&start_board=
--------
--------
-XXXXO--
-OXXOO--
-OOOXOO-
--XXXX--
--------
-------- X
"></iframe>

            <Text tag="h4">第3問</Text>
            <Text>白番です。<span class="marker">不完全な中割り</span>を探してください。(「＞」ボタンで正解が表示されます)</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=c6&start_board=
--------
--------
--------
--XXX---
--XXXOO-
---XOO--
---OX---
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
      {path: null, label: '内側の石を返す'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
