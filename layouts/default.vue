<template>
  <div class="main__bg">
    <navbar />
    <nuxt
      keep-alive
      :nuxt-child-key="$route.fullPath"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class Layout extends Vue {}
</script>

<style lang="scss">
@import "assets/scss/main.scss";

body:after {
  display: none;
  content: url("assets/bg_desktop.jpg") url("assets/leather.svg") url("assets/whatsapp.svg");
}

.main {
  &__bg {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 40px 0;
    background-size: 100%;
    background-position: center;
    background-repeat: repeat-y;
    background-image: url("assets/bg_desktop.jpg");
    box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  }
}
</style>
