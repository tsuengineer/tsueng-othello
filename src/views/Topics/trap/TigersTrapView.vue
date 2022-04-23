<template>
  <div class="tigers-trap">
    <TigersTrap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TigersTrap from '@/components/templates/Topics/trap/TigersTrap.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'TopicsTrapTigersTrapView',
  components: {
    TigersTrap,
  },
});
</script>
