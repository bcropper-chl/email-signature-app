<template>
  <SidebarPanel />
  <ConfigPanel />
  <PreviewPanel />
</template>

<script>
import SidebarPanel from './components/SidebarPanel'
import ConfigPanel from './components/ConfigPanel'
import PreviewPanel from './components/PreviewPanel'

export default {
  name: 'App',
  components: {
    SidebarPanel,
    ConfigPanel,
    PreviewPanel
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
#app {
  display: grid;
  grid-template-columns: 85px 550px 1fr;
  height: 100vh;
}
.desc {
  flex-grow: 1;
  font-size: 12px;
  line-height: 1.5em;
  color: #aaa;
}
</style>