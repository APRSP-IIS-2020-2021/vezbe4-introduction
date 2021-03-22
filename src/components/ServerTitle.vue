<template>
  <div class="server-title-wrapper">
    {{childHomeTitle}}
    <button @click="resetTitle('Title was reset')">Reset Title</button>
    {{subtitle}}
  </div>
</template>

<script>
import { eventBus } from '../main';
  export default {
    props: [
      'childHomeTitle'
    ],
    data() {
      return {
        subtitle: ''
      }
    },
    methods: {
      resetTitle($event) {
        this.childHomeTitle = $event;
        this.$emit('titleWasReset', this.childHomeTitle);
      }
    },
    created() {
      eventBus.$on('subtitleWasReset', value => {
        this.subtitle = value
      })
    }
  }
</script>

<style>
  .server-title-wrapper {
    background: yellow;
  }
</style>
