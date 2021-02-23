import { reactive, toRefs } from "vue";

export default function useTest() {
  const state = reactive({
    load: reactive({
      active: true,
      number: 1,
    }),
    number: 1,
  });

  const name = () => {
    state.load.active = !state.load.active;
  };

  const changeNumber = () => {
    state.load.number = state.load.number + 1;
  };

  return { ...toRefs(state), name, changeNumber };
}
