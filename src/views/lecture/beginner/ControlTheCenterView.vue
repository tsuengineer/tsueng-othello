<template>
  <div class="ImportanceofCorners">
    <ControlTheCenter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ControlTheCenter from '@/components/templates/lecture/beginner/ControlTheCenter.vue';

export default defineComponent({
  name: 'ControlTheCenterView',
  components: {
    ControlTheCenter,
  },
});
</script>
