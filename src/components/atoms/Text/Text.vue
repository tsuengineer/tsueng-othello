<template>
  <component :is="tag" :class="state.classes"><slot /></component>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => {
        return ['xsmall', 'small', 'medium', 'large', 'xlarge'].includes(value);
      },
    },
    color: {
      type: String,
      default: 'black',
      validator: (value: string) => {
        return ['black', 'white', 'gray'].includes(
            value
        );
      },
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      classes: computed(() => {
        const classes = [];
        classes.push(props.bold ? 'text_bold' : '');
        classes.push('text_size_' + props.size);
        classes.push('text_color_' + props.color);
        return classes.join(' ');
      }),
    });
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.text_bold {
  font-weight: bold;
}
.text_size {
  &_xsmall {
    font-size: 0.6rem;
  }
  &_small {
    font-size: 0.8rem;
  }
  &_medium {
    font-size: 1rem;
  }
  &_large {
    font-size: 1.2rem;
  }
  &_xlarge {
    font-size: 1.4rem;
  }
}
.text_color {
  &_black {
    color: "#000";
  }
  &_white {
    color: "#fff";
  }
  &_gray {
    color: "#888";
  }
}
</style>
