<template>
  <div id="topic-paths">
    <ul>
      <li v-for="(topicPath, key) in paths" :key="key">
        <template v-if="topicPath.path">
          <a :href="topicPath.path">
            {{ topicPath.label }}
          </a>
          <span style="padding-left: 10px;">&gt;</span>
        </template>
        <template v-else>
          {{ topicPath.label }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    paths: {
      type: Array,
      required: true
    },
  }
});
</script>

<style lang="scss">
#topic-paths {
  ul {
    display: flex;
    padding-bottom: 10px;

    li {
      padding-left: 10px;
      font-size: 0.8rem;

      a {
        text-decoration: underline;
      }
    }
  }
}
</style>