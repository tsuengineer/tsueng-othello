<template>
  <div class="lecture">
    <Lecture />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Lecture from '@/components/templates/lecture/Lecture.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'LectureView',
  components: {
    Lecture,
  },
});
</script>
