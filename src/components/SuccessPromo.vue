<template>
  <el-dialog
    ref="modal"
    class="success-promo-modal"
    :visible="show"
    @update:visible="$emit('update:show', false)"
  >
    <div class="success-promo">
      <h1>🎉 Hooray 🎉</h1>
      <h2>Your signature successfully created and copied!</h2>
      <br>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'SuccessPromo',

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  created () {
  }
}
</script>

<style lang="scss">
.success-promo {
  text-align: center;
}
.success-promo-modal {
  .el-dialog {
    &__header {
      padding-bottom: 0;
    }
    h1 {
      margin-top: 0;
    }
  }
}
</style>
