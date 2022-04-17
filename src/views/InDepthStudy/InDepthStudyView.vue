<template>
  <div class="inDepthStudy">
    <InDepthStudy />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InDepthStudy from '@/components/templates/InDepthStudy/InDepthStudy.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'InDepthStudyView',
  components: {
    InDepthStudy,
  },
});
</script>
