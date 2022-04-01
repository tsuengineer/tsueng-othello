<template>
  <div class="ImportanceofCorners">
    <ImportanceofCorners />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImportanceofCorners from '@/components/templates/lecture/beginner/ImportanceOfCorners.vue';

export default defineComponent({
  name: 'ImportanceofCornersView',
  components: {
    ImportanceofCorners,
  },
});
</script>
