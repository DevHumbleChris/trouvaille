<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

.loader {
  position: relative;
  width: 3em;
  height: 3em;
  transform: rotate(165deg);
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}
.loader:before {
  animation: before 2s infinite;
}
.loader:after {
  animation: after 2s infinite;
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow:
      1em -0.5em rgba(184, 184, 184, 0.8),
      -1em 0.5em rgba(184, 184, 184, 0.8);
  }
  35% {
    width: 3em;
    box-shadow:
      0 -0.5em rgba(184, 184, 184, 0.8),
      0 0.5em rgba(184, 184, 184, 0.8);
  }
  70% {
    width: 0.5em;
    box-shadow:
      -1em -0.5em rgba(184, 184, 184, 0.8),
      1em 0.5em rgba(184, 184, 184, 0.8);
  }
  100% {
    box-shadow:
      1em -0.5em rgba(184, 184, 184, 0.8),
      -1em 0.5em rgba(184, 184, 184, 0.8);
  }
}
@keyframes after {
  0% {
    height: 0.5em;
    box-shadow:
      0.5em 1em rgba(211, 211, 211, 0.8),
      -0.5em -1em rgba(211, 211, 211, 0.8);
  }
  35% {
    height: 3em;
    box-shadow:
      0.5em 0 rgba(211, 211, 211, 0.8),
      -0.5em 0 rgba(211, 211, 211, 0.8);
  }
  70% {
    height: 0.5em;
    box-shadow:
      0.5em -1em rgba(211, 211, 211, 0.8),
      -0.5em 1em rgba(211, 211, 211, 0.8);
  }
  100% {
    box-shadow:
      0.5em 1em rgba(211, 211, 211, 0.8),
      -0.5em -1em rgba(211, 211, 211, 0.8);
  }
}
/**
 * Attempt to center the whole thing!
 */
html,
body {
  height: 100%;
}

.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}
</style>
