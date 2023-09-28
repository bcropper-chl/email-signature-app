<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <TextInput/>
  <ImageUpload/>
  <TemplateEditor/>
  <SignaturePreview/>
  <TemplateManagement/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TextInput from './components/TextInput.vue'
import ImageUpload from './components/ImageUpload.vue'
import TemplateEditor from './components/TemplateEditor.vue'
import SignaturePreview from './components/SignaturePreview.vue'
import TemplateManagement from './components/TemplateManagement.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TextInput,
    ImageUpload,
    TemplateEditor,
    SignaturePreview,
    TemplateManagement
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
