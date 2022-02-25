<template>
  <div class="portfolio container">
    <img
      class="portfolio__thumbnail"
      v-for="n in 19"
      :src="require(`../assets/gallery/${n + 1}.jpg`)"
      :key="n"
      @click="index = n"
    />
    <client-only placeholder="Загрузка...">
      <vue-gallery-slideshow
        v-if="images.length"
        :images="images"
        :index="index"
        @close="index = null"
      />
    </client-only>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import VueGallerySlideshow from 'vue-gallery-slideshow';

const IMAGES_COUNT: number = 19;

interface IGalleryImage {
  url: string;
  alt: string
}

@Component({
  components: { VueGallerySlideshow }
})
export default class Gallery extends Vue {
  index: number = null;

  images: IGalleryImage[] = [];

  beforeMount() {
    this.images = Array.from(new Array(IMAGES_COUNT), (value, index) => require(`../assets/gallery/${index + 1}.jpg`));
  }
}
</script>

<style lang="scss">
.portfolio {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .container {
    @include media-breakpoint-down(sm) {
      padding: 0;
    }
  }

  &__thumbnail {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    object-fit: cover;

    @include media-breakpoint-down(sm) {
      width: 120px;
      height: 120px;
      margin-bottom: 7px;
    }
  }
}

</style>
