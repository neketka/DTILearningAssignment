<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import NavigationBar from "@/components/NavigationBar.vue";

@Component({
  components: {
    NavigationBar,
  },
})
export default class App extends Vue {}
</script>
