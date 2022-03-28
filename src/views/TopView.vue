<template>
  <div class="top">
    <Top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Top from '@/components/templates/Top.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'TopView',
  components: {
    Top,
  },
});
</script>
