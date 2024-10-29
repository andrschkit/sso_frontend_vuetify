<template>
  <v-text-field
      :label="label"
      :type="type"
      variant="outlined"
      v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'd-text-field',
  inheritAttrs: false,

  props: {
    name: {
      type: String,
      requird: true,
    },
    type: {
      type: String,
      requird: true,
    },
    label: {
      type: String,
      required: true,
    },
    appendInnerIcon: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
