<template>
  <div class="UnbalancedEdges">
    <UnbalancedEdges />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UnbalancedEdges from '@/components/templates/lecture/beginner/UnbalancedEdges.vue';

export default defineComponent({
  name: 'UnbalancedEdgesView',
  components: {
    UnbalancedEdges,
  },
});
</script>
