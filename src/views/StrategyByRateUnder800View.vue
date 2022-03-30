<template>
  <div class="terminology">
    <StrategyByRateUnder800 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StrategyByRateUnder800 from '@/components/templates/StrategyByRateUnder800.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'StrategyByRateUnder800View',
  components: {
    StrategyByRateUnder800,
  },
});
</script>
