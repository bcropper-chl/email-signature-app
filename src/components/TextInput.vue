<template>
  <input v-model="userData[fieldName]" :placeholder="placeholder" />
</template>
<script>
export default {
  props: ['fieldName', 'placeholder'],
  data() {
    return {
      userData: this.$store.state.userData
    };
  }
}
</script>

