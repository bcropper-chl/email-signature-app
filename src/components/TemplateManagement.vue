<template>
  <select v-model="selectedTemplate">
    <option v-for="template in templates" :key="template.id">{{ template.name }}</option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      selectedTemplate: null,
      templates: [] // Fetch from local storage or server
    };
  }
}
</script>

