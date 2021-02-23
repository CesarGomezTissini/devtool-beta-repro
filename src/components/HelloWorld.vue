<template>
  <button>{{ load.active }}</button>
  <button @click="changeNumber">World</button>
  <button @click="name">Change</button>
</template>

<script>
import { defineComponent } from "vue";
import useTest from "./../composables/useTest";

export default defineComponent({
  setup() {
    const { load, changeNumber, name } = useTest();

    return { load, changeNumber, name };
  },
});
</script>

<style scoped></style>
