<script>
import usecolorComposable from "./composables/ColorComposable.js";

export default {
  components: { usecolorComposable },
  setup() {
    const { colors, message, matchColor } = usecolorComposable();
 
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
