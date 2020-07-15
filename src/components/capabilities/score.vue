<template functional>
  <span>
    {{props.name}}:
    <small>
      <slot></slot>
      <span class="maxScore" v-if="!props.isSum">/{{props.maxScore}}</span>
      <span class="pts">Pts</span>
    </small>
  </span>
</template>

<script>

export default {

  props: {
    name: {
      type: String
    },
    score: {
      type: Number
    },
    timer: {
      type: Number,
      default: 3000
    },
    maxScore: {
      type: Number,
      default: 2000
    },
    isSum: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
small {
  font-size: 20px;
}
small .pts {
  font-size: 15px;
}
</style>