<template>
  <div class="terminology">
    <StrategyByRate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StrategyByRate from '@/components/templates/StrategyByRate.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'StrategyByRateView',
  components: {
    StrategyByRate,
  },
});
</script>
