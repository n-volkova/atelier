<template>
  <nav class="container d-flex justify-content-between align-items-start">
    <div class="navbar__contacts">
      <a
        class="navbar__link navbar__link--phone"
        href="tel:+79688589010"
      >+7 (968) 858-90-10
      </a>
      <a
        class="navbar__link navbar__link--address"
        href="https://yandex.ru/maps/org/on_ona/80861612234/?ll=37.577813%2C55.575500&z=17"
        target="_blank"
      >
        Москва, ул.&nbsp;Ратная, д.&nbsp;10, корпус&nbsp;2 <br />(вход со двора)
      </a>
      <div class="navbar__insta">
        <b-icon-instagram />
        <a
          class="navbar__link"
          href="https://www.instagram.com/atelier.on.ona/"
          target="_blank"
        >
          atelier.on.ona
        </a>
      </div>
      <a
        class="navbar__link navbar__link--whatsapp"
        href="https://wa.me/79688589010"
        target="_blank"
      >
        Написать в WhatsApp
      </a>
    </div>
    <b-navbar toggleable="lg">
      <b-navbar-toggle
        target="nav"
        class="navbar__toggler ml-auto"
      >
        <template #default="{ expanded }">
          <b-icon
            v-if="expanded"
            icon="x"
          />
          <b-icon
            v-else
            icon="list"
          />
        </template>
      </b-navbar-toggle>
      <b-collapse
        id="nav"
        is-nav
      >
        <b-navbar-nav
          align="end"
          class="navbar__routes"
        >
          <nuxt-link
            exact
            to="/"
            class="navbar__link"
          >
            Главная
          </nuxt-link>
          <nuxt-link
            to="/prices"
            class="navbar__link"
          >
            Прейскурант
          </nuxt-link>
          <!-- <nuxt-link
          to="/gallery"
          class="navbar__link"
        >
          Портфолио
        </nuxt-link> -->
          <nuxt-link
            to="/contacts"
            class="navbar__link"
          >
            Контакты
          </nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { BNavbar, BNavbarNav, BCollapse, BNavbarToggle, BIconInstagram, BIconList, BIconX } from 'bootstrap-vue';

@Component({
  components: { BNavbar, BNavbarNav, BCollapse, BNavbarToggle, BIconInstagram, BIconList, BIconX },
})
export default class Navbar extends Vue {
}
</script>

<style lang="scss">
nav {
  color: $beige;
  margin-bottom: 20px;

  @include media-breakpoint-down(sm) {
    margin-bottom: 50px;
  }
}

.container {
  position: relative;
}

.navbar {
  padding-top: 0;
  padding-bottom: 0;

  @include media-breakpoint-down(md) {
    position: absolute;
    right: 0;
  }

  &__contacts {
    display: flex;
    flex-direction: column;

    @include media-breakpoint-down(md) {
      width: 50%;
    }

    @include media-breakpoint-down(xs) {
      width: 70%;
    }

    .navbar__link:hover {
      text-decoration: underline;
    }
  }

  &__link {
    font-family: $font-family-base;
    color: $beige;

    &:hover {
      color: $beige;
    }

    &--phone {
      font-size: 17px;
      font-weight: $font-weight-bold;
      margin-bottom: 4px;
    }

    &--address {
      font-size: 17px;
      margin-bottom: 10px;
    }

    &--whatsapp {
      display: flex;
      align-items: center;
      font-size: 17px;

      &:before {
        content: '';
        display: block;
        width: 17px;
        height: 17px;
        margin-right: 6px;
        background-color: $beige;
        -webkit-mask-image: url("assets/whatsapp.svg");
        mask-image: url("assets/whatsapp.svg");
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
      }
    }
  }

  &__insta {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 17px;
    letter-spacing: 0.8px;

    .bi-instagram {
      margin-right: 6px;
    }
  }

  &-collapse {
    @include media-breakpoint-down(md) {
      border: 1px dotted $beige;
      background-color: #2c2928;
    }
  }

  &-toggler.navbar__toggler {
    padding-top: 0;
    padding-right: 0;
    border: none;
    font-size: 44px;
    line-height: 0;
    color: $beige;
    border-color: $beige;
  }

  &__routes {
    display: flex;

    .navbar__link {
      padding: 15px 20px;
      text-transform: uppercase;
      font-weight: $font-weight-bold;
      transition: all 0.2s ease;

      &:hover {
        background-color: $beige-light;
        text-decoration: none;
      }

      &.nuxt-link-active {
        @include media-breakpoint-up(md) {
          border-bottom: 1px solid $beige;
          background-color: transparent;
        }

        @include media-breakpoint-down(md) {
          background-color: $beige-light;
        }
      }
    }
  }
}
</style>
