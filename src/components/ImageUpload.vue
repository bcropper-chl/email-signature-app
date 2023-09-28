<template>
  <input type="file" @change="uploadImage" />
</template>
<script>
export default {
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      console.log(file)
      // Store file in local storage or upload to server
    }
  }
}
</script>

