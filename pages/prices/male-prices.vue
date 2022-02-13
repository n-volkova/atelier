<template>
  <b-table-lite
    :items="malePrices"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class MalePrices extends Vue {
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

  malePrices: PriceItem[] = [
    {
      name: 'Брюки база (без подклада и карманов)',
      price: 'от 7 000'
    },
    {
      name: 'Брюки классические',
      price: 'от 10 000'
    },
    {
      name: 'Сорочка классическая',
      price: 'от 8 000'
    },
    {
      name: 'Рубашка с застёжкой поло',
      price: 'от 6 000'
    },
    {
      name: 'Жилет на подкладе',
      price: 'от 9 000'
    },
    {
      name: 'Пиджак летний (подклад частично)',
      price: 'от 18 000'
    },
    {
      name: 'Пиджак классический',
      price: 'от 20 000'
    },
    {
      name: 'Куртка на подкладе',
      price: 'от 15 000'
    },
    {
      name: 'Пальто',
      price: 'от 25 000'
    },
    {
      name: 'Плащ',
      price: 'от 18 000'
    },
    {
      name: 'Усложняющие элементы: подклад, шлица, разрез, карманы, складки, рисунок',
      price: '500 — 1 000'
    },
    {
      name: 'Изменение фасона после примерки',
      price: '+50%',
      _cellVariants: { name: 'bold', price: 'bold' }
    },
  ];
}
</script>
