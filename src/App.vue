<template>
  <TheHeader />
  <div id="contents">
    <router-view/>
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from "@/components/organisms/TheHeader.vue";
import TheFooter from "@/components/organisms/TheFooter.vue";
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* メイン */
#contents {
  min-height: calc(100vh - 69px - 64px);
  background-color: #fff;
  font-size: 0.75rem;
  line-height: 1.25rem;
  padding: 1.25rem;
}

#contents section {
  padding-bottom: 1.5rem;
}

#contents h2 {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  border-left-width: 4px;
  border-color: #1565C0;
  background-color: #f3f4f6;
}

#contents h3 {
  padding: 0.25rem 0.25rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  border-bottom-width: 2px;
  border-color: #1565C0;
  background-color: #fff;
}

/* リストカード */
#contents ul.list-card {
  padding: 10px;
  color: #448ccb;
  background: #ecf3fa;
  border: dashed 2px #adccf8;
  border-radius: 16px;
  list-style: none;
}
#contents ul.list-card li{
  position: relative;
  line-height: 25px;
  padding-left: 20px;
  font-weight: bold;
}
#contents ul.list-card li:before{
  content: "・";
  position: absolute;
  left: 7px;
  font-size: 1.25rem;
}
</style>
