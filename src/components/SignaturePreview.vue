<template>
  <div v-html="renderedTemplate"></div>
</template>
<script>
export default {
  computed: {
    renderedTemplate() {
      return this.template.replace(/\${(.*?)}/g, (match, p1) => {
        return this.userData[p1] || '';
      });
    }
  }
}
</script>

