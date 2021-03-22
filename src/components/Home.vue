<template>
  <div class="home-wrapper">
    <h1>{{homeTitle}}</h1>
    <h2>{{homeSubtitle}}</h2>
    <!-- Server Title component -->
    <app-server-title
      :childHomeTitle="homeTitle"
      @titleWasReset="homeTitle=$event">
    </app-server-title>
    <br>
    <!-- Server Subtitle component -->
    <app-server-subtitle
      :childHomeSubtitle="homeSubtitle">

    </app-server-subtitle>

    <hr>
    <h4>Search Servers:</h4>
    <input v-model="filteredText" type="text">
    <br>
    <app-server-status
      v-for="server in filteredServers"
      :key="server.id">
      <h3>Name of Server: <span>{{server.name}}</span></h3>
    </app-server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  import ServerTitle from './ServerTitle.vue';
  import ServerSubtitle from './ServerSubtitle.vue';
  import {eventBus} from '../main';
  export default {
    data() {
      return {
        servers: [
          {
            id: 1,
            name: 'Server 1',
            desc: 'Description of Server 1'
          },
          {
            id: 2,
            name: 'Server 2',
            desc: 'Description of Server 2'
          },
          {
            id: 3,
            name: 'Server 3',
            desc: 'Description of Server 3'
          }
        ],
        filteredText: '',
        homeTitle: 'Home Title',
        homeSubtitle: 'Home Subtitle'
      }
    },
    components: {
      'app-server-status': ServerStatus,  // registrovanje lokalne komponente
      'app-server-title': ServerTitle,
      'app-server-subtitle': ServerSubtitle
    },
    computed: {
      filteredServers() {
        return this.servers.filter((server) => {
          const name = server.name;
          return name.match(this.filteredText);
        })
      }
    },
    created() {
      eventBus.$on('subtitleWasReset', (value) => {
        this.homeSubtitle = value;
      })
    }
  }
</script>

<style scoped>

</style>
