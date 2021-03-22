<template>
  <div class="server-status-wrapper">
    <h4> <slot></slot> status: {{serverStatus}}</h4>
    <button @click="stopServer">Stop Server</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        serverStatus: 'started',
        serverSubtitle: ''
      }
    },
    methods: {
      stopServer() {
        this.serverStatus = 'stopped';
      }
    },
    watch: {
      serverStatus: () => {
        alert('Server stopped!');
      }
    }
  }
</script>

<style scoped>

</style>
