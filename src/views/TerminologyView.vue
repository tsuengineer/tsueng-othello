<template>
  <div class="terminology">
    <Terminology />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Terminology from '@/components/templates/Terminology.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'TerminologyView',
  components: {
    Terminology,
  },
});
</script>
