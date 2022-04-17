<template>
  <div class="BalancedMoves">
    <BalancedMoves />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BalancedMoves from '@/components/templates/lecture/beginner/BalancedMoves.vue';

export default defineComponent({
  name: 'BalancedMovesView',
  components: {
    BalancedMoves,
  },
});
</script>
