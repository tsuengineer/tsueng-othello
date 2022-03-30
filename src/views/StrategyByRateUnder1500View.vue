<template>
  <div class="terminology">
    <StrategyByRateUnder1500 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StrategyByRateUnder1500 from '@/components/templates/StrategyByRateUnder1500.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'StrategyByRateUnder1500View',
  components: {
    StrategyByRateUnder1500,
  },
});
</script>
