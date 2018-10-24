<template>
  <Table :loading="loading" :columns='columns' :data='data' :height='height' :size='size' @on-selection-change="onSelectionChange"></Table>
</template>

<script>
export default {
  name: 'mainTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    height: [Number, String],
    size: String,
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSelectionChange (selection) {
      this.$emit('updateSelect', selection)
    }
  }
}
</script>
