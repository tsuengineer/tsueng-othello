<template>
  <div class="terminology">
    <Terminology />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Terminology from '@/components/templates/lecture/beginner/Terminology.vue';

export default defineComponent({
  name: 'TerminologyView',
  components: {
    Terminology,
  },
});
</script>
