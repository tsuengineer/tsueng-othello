<template>
  <div class="terminology">
    <StrategyByRateUnder1000 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StrategyByRateUnder1000 from '@/components/templates/StrategyByRateUnder1000.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'StrategyByRateUnder1000View',
  components: {
    StrategyByRateUnder1000,
  },
});
</script>
