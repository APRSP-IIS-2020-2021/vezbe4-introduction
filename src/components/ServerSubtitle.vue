<template>
  <div class="server-subtitle-wrapper">
    {{childHomeSubtitle}}
    <button @click="resetSubtitle('Subtitle changed')">Reset Subtitle</button>
  </div>
</template>

<script>
  import {eventBus} from '../main';
  export default {
    props: [
      'childHomeSubtitle'
    ],
    methods: {
      resetSubtitle($event) {
        this.childHomeSubtitle = $event;
        eventBus.$emit('subtitleWasReset', this.childHomeSubtitle);
      }
    }
  }
</script>

<style scoped>
  .server-subtitle-wrapper {
    background: linear-gradient(red, orange);
  }
</style>
