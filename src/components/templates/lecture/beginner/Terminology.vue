<template>
    <div id="terminology" class="contents">
        <TopicPath :paths="topicPaths" />

        <section>
            <Text tag="h2">用語</Text>
            <Text>
              用語を知らなくてもオセロで遊べますが、よく利用されるテクニックや石の形などを誰かと共有したり、解説サイトや本を読むときスムーズに進めることができるので覚えましょう。
            </Text>
            <Text tag="h3">マスの名称</Text>
            <Text>オセロ盤のマスには下図のように名前がついています。</Text>
            <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=%E9%9A%85%EF%BC%A3%EF%BC%A1%EF%BC%A2%EF%BC%A2%EF%BC%A1%EF%BC%A3%E9%9A%85%EF%BC%A3%EF%BC%B8++++%EF%BC%B8%EF%BC%A3%EF%BC%A1+----+%EF%BC%A1%EF%BC%A2+-OX-+%EF%BC%A2%EF%BC%A2+-XO-+%EF%BC%A2%EF%BC%A1+----+%EF%BC%A1%EF%BC%A3%EF%BC%B8++++%EF%BC%B8%EF%BC%A3%E9%9A%85%EF%BC%A3%EF%BC%A1%EF%BC%A2%EF%BC%A2%EF%BC%A1%EF%BC%A3%E9%9A%85"></iframe>

            <Text>
              座標は縦方向を1～8、横方向をa～hで表します。<br>
              例えば、この盤面の左下にある黒石を座標で表すと<span class="marker">d5</span>となります。(アルファベットを先に読みます。)
            </Text>
            <Text>
              四隅を<span class="marker">隅</span>、隅の斜め前を<span class="marker">Ｘ(エックス)</span>、隅から隅を結ぶ外周を<span class="marker">辺</span>といいます。<br>
              辺にはA,B,Cと名前がついています。変わった順番で振られている感じがしますが、いい場所の順にA～Cが並んでいると覚えればいいです。(AとBは大差ありません。)<br>
              「・」のマスは<span class="marker">中辺</span>、中央の4×4のエリアを<span class="marker">ボックス</span>といいます。
            </Text>

            <Text tag="h3">ラインの名称</Text>
            <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=@--------@-----O--@---O----@-O------@------O-@----O---@--O-----@ X"></iframe>
            <Text>CからCを結ぶ右上がりのラインを<span class="marker">Cライン</span>、隅から隅を結ぶラインを<span class="marker">X（クロス）ライン</span>といいます。</Text>

            <Text tag="h3">辺の名称</Text>
            <Text>下図が実戦でよく見かける代表的な4つの形です。</Text>
            <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=-XXXXXX---XOXX-XXX----XXXX----OXXO----OXXX----XX--XOXX----XOOX-- X"></iframe>
             <Text>上辺の6つ並んだ形を<span class="marker">山</span>、右辺の5つ並んだ形を<span class="marker">ウィング</span>、下辺の白黒混在した形を<span class="marker">爆弾</span>、左辺の縦に4つ並んだ形を<span class="marker">ブロック</span>といいます。</Text>
             <Text>辺の名称はとりあえずこの4つを押さえておけば良いですが、余裕のある方は↓の名称も確認してください。</Text>

             <Text tag="h4">山</Text>
             <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=-XXXXXX---XXXX------------------------------------XOOO---XXXXX-- X"></iframe>
             <Text>上辺のように、中辺も全て辺と同じ色の場合を<span class="marker">ピュア山</span>といいます。</Text>
             <Text>下辺のように、あと1手で山にできる権利のある状態を<span class="marker">余裕山</span>といいます。※f7が黒石の場合はウィングです。</Text>

             <Text tag="h4">ウィング</Text>
             <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=-XXXXX--X-XXXX--XX----XXXO----OXXX----OX-X----OXc-XXXX---XabXX-- X"></iframe>
             <Text>山と同様に、上図の上辺を<span class="marker">ピュアウィング</span>、右辺を<span class="marker">余裕ウィング</span>といいます。<br>
             下辺のように、2つ隙間が空いていて白からいつでもa,bに打てる形を<span class="marker">不安定ウィング</span>、左辺の形を<span class="marker">セミウィング</span>といいます。<br>
             また、白がcに打ったときの左辺の形を<span class="marker">双方C打ち</span>といいます。</Text>

             <Text tag="h4">ブロック</Text>
             <iframe width="320" height="386" scrolling="no" src="https://tsueng.dev/hamlite/?start_board=--XXXX----XXXX--aX----XXbX----X-XX----X-XX----XX--XXXX----XXX--- X"></iframe>
             <Text>上図の上辺を<span class="marker">ピュアブロック</span>、右辺を<span class="marker">不安定ブロック</span>、下辺を<span class="marker">セミブロック</span>、左辺を<span class="marker">2個空き中辺壁</span>といいます。</Text>

             <Text tag="h4">良い形の順位</Text>
             <Text>黒から見て下記の順に良い形です。（個人的な意見）</Text>
             <Text>余裕山 ＞ 余裕ウィング ＞ 山 ＞ 爆弾 ≧ ブロック ＞ ウィング ＞ 不安定ブロック ＞ 不安定ウィング ≧ 2個空き中辺壁</Text>

            <Text tag="h3">手筋等の名称</Text>
            <Text tag="h4">1石返し</Text>
            <Text>1回の着手で1石だけひっくり返すこと。</Text>
            <Text tag="h4">中割り</Text>
            <Text>内側の石を返す手筋。良手。</Text>
            <Text tag="h4">引っ張り</Text>
            <Text>相手の壁を破らないように打つ手</Text>
            <Text tag="h4">ウィング攻め</Text>
            <Text>相手に隅を1つ与える代わりに隅1つと辺を取る手筋</Text>
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
      {path: '/othello/lecture', label: '講座'},
      {path: null, label: '用語'},
    ];

    return {
      topicPaths,
    }
  }
});
</script>
