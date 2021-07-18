<template>
  <div>
    <button
      v-for="(option, index) in options"
      :key="option"
      class="m5"
      @click="$emit('onVote', index)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["options"],
};
</script>

<style>
.m5 {
  margin: 5px;
}
</style>
