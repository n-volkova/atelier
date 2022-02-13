<template>
  <b-table-lite
    :items="jerseyNewPrices"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class JerseyNew extends Vue {
  fields: BvTableFieldArray = [
    {
      key: 'name',
      label: 'Наименование',
      tdClass: 'name-column'
    },
    {
      key: 'price',
      label: 'Стоимость'
    }
  ];

  jerseyNewPrices: PriceItem[] = [
    {
      name: 'Топ-майка',
      price: 'от 3 000'
    },
    {
      name: 'Футболка',
      price: 'от 4 000'
    },
    {
      name: 'Толстовка',
      price: 'от 5 000'
    },
    {
      name: 'Кардиган',
      price: 'от 5 000'
    },
    {
      name: 'Блуза (летучая мышь)',
      price: 'от 4 000'
    },
    {
      name: 'Юбка на резинке',
      price: 'от 3 000'
    },
    {
      name: 'Платье с рукавами (без подклада)',
      price: 'от 6 000'
    },
    {
      name: 'Комбинезон',
      price: 'от 8 000'
    },
    {
      name: 'Брюки (без подклада и карманов)',
      price: 'от 4 000'
    },
  ];
}
</script>
