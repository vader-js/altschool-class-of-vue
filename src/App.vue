<script>
import ColorComposable from "./components/ColorComposable.vue";

export default {
  components: { ColorComposable },
  setup() {
    const { colors, message, matchColor } = ColorComposable();

   return {colors, message, matchColor}
  }
};
</script>

<template>
   <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<style scoped></style>
