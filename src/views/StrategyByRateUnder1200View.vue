<template>
  <div class="terminology">
    <StrategyByRateUnder1200 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StrategyByRateUnder1200 from '@/components/templates/StrategyByRateUnder1200.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'StrategyByRateUnder1200View',
  components: {
    StrategyByRateUnder1200,
  },
});
</script>
