<template>
  <header>
    <div id="header-inner">
        <a href="/">
            <h1 id="title" class="">オセロ | tsueng.dev</h1>
        </a>
        <div class="flex items-center">
          <svg
              class="ham hamRotate"
              :class="isActive ? 'active' : ''"
              viewBox="5 5 90 90"
              width="40"
              @click="toggleHamburgerMenu(isActive)"
          >
            <path
                class="line top"
                d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"/>
            <path
                class="line middle"
                d="m 70,50 h -40"/>
            <path
                class="line bottom"
                d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"/>
          </svg>
        </div>
    </div>

    <nav class="menu absolute w-60 right-3 top-14 border rounded shadow-lg bg-white" :class="isActive ? 'active' : ''">
        <ul>
            <li><a href="/lecture">講座</a></li>
            <li>問題集</li>
        </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
  },
  setup() {
    const isActive = ref(false)

    const toggleHamburgerMenu = (flag) => {
      isActive.value = !flag
    }

    return {
      isActive,
      toggleHamburgerMenu
    }
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
}

header > #header-inner {
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom-width: 1px;
}

header > #header-inner #title {
  color: #1565C0;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

header > #header-inner #hamburger {
  width: 1.25rem;
}

header a {
  text-decoration: none;
}


.ham {
  cursor: pointer;
  transition: transform 400ms;
  user-select: none;

  .top {
    stroke-dasharray: 40 82;
  }

  .middle {
    stroke-dasharray: 40 111;
  }

  .bottom {
    stroke-dasharray: 40 161;
  }

  &.active {
    .top {
      stroke-dasharray: 17 82;
      stroke-dashoffset: -62px;
    }

    .middle {
      stroke-dashoffset: 23px;
    }

    .bottom {
      stroke-dashoffset: -83px;
    }

  }
}

.hamRotate.active {
  transform: rotate(45deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}

.menu {
  display: none;

  &.active {
    display: block;
    z-index: 100;
  }

  ul {
    li {
      padding: 10px;
      border-bottom: 1px solid #ccc;

      a {
        display: block;
      }
    }

    :last-child {
      border: none;
    }
  }
}
</style>