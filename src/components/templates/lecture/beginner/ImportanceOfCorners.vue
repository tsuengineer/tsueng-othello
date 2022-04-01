<template>
    <div id="strategyByRate" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>

            <Text tag="h2">隅の重要性</Text>
            <Text>レート800未満同士の対局では、序盤から隅を取ったり取られたるするケース多いです。</Text>
            <Text>相手に隅を取られないようにすることが重要となります。</Text>
            <Text>下記の事項を守ることで相手より先に隅を取ることができ、有利に試合を進められます。</Text>

            <Text tag="h4">自分が隅を取るまではXとCに打たない</Text>
            <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=-☠----☠-☠☠----☠☠--------------------------------☠☠----☠☠-☠----☠- X"></iframe>
            <Text>XとC(☠マークのマス)に打つと隅を取られる確率が高くなります。逆に、XとCに自分の石がなければ相手は絶対に隅を取れません。</Text>

            <Text tag="h4">相手がXに打ってきたら隅を取る</Text>
            <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=h8&start_board=-------------------OX-----OOOOX---OOXXX---OXXXX-----X-X--------- O"></iframe>
            <Text>相手がXに打ってきた場合は隅を取りましょう。(「＞」ボタンで盤面を進められます。)</Text>

            <Text tag="h4">相手がXに打ったのに隅が取れない場合</Text>
            <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g3b4h8&start_board=
--------
---O----
--@OOO--
--O@OOX-
-XXX@XX-
--XXO@X-
--XOOOO-
--OOOO-- X
"></iframe>
            <Text>上図は黒番です。Xラインが全て相手の色なのでh8に打てません。</Text>
            <Text>＋マークのついている石のどれかを黒石にすればh8に打てるようになります。(「＞」ボタンで盤面を進められます。)</Text>
            <Text tag="h4">隅を取った後は順番に辺を取っていく</Text>
          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?kifu=g8b6b8&start_board=
--------
---O----
--OOOOX-
-OOOOXX-
-OOXXOX-
O-XOOXXX
--XOOOOX
--OOOO-X X
"></iframe>
            <Text>隅を取った後は、隣の隅に向かって順番に辺を取っていきます。(「＞」ボタンで盤面を進められます。)</Text>

          <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=
--------
---O----
--OOOOX-
-OOOOXX-
-OOXXOX-
OOOXXX**
--XOO***
-******* X
"></iframe>
            <Text>前の図から3手進めた図です。＋マークがついている石は相手に返される心配がありません。</Text>
            <Text>このような石を確定石といいます。隅を取ったら隅を拠点に確定石を増やしていきましょう。</Text>


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
      {path: null, label: '隅の重要性'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
