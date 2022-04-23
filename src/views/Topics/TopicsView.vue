<template>
  <div class="topics">
    <Topics />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topics from '@/components/templates/Topics/Topics.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'TopicsView',
  components: {
    Topics,
  },
});
</script>
