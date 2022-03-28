<template>
  <header>
    <div id="header-inner">
        <a href="/">
            <h1 id="title" class="">オセロ | tsueng.dev</h1>
        </a>
        <div id="hamburger">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </div>
    </div>

    <nav id="balloon" style="display: none;">
        <ul>
            <li><a href="/beginner">初心者</a></li>
            <li>用語</li>
            <li>講座</li>
            <li>問題集</li>
            <li>ソフト</li>
        </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({

});
</script>

<style lang="css" scoped>
header {
  background-color: #fff;
}

header > #header-inner {
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom-width: 1px;
}

header > #header-inner #title {
  color: #1565C0;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

header > #header-inner #hamburger {
  width: 1.25rem;
}

header #balloon {
  position: absolute;
  display: block;
  top: 65px;
  right: 30px;
  height: auto;
  width: 200px;
  color: #000;
  background: #f6f6f6;
  border-radius: 5px;
  z-index: 9999;
  box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  overflow: hidden;
}

header #balloon li {
  padding: 0.75rem;
  border-bottom-width: 1px;
}
</style>