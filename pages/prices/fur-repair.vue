<template>
  <b-table-lite
    :items="furRepairPrices"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class FurRepair extends Vue {
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

  furRepairPrices: PriceItem[] = [
    {
      name: 'Укоротить низ прямого силуэта (без правки)',
      price: 'от 4 500'
    },
    {
      name: 'Укоротить низ со шлицей / 2 раза (при деформации низа и ширине от 180 см)',
      price: '6 000 — 7 000'
    },
    {
      name: 'Укоротить рукава обычные, прямые',
      price: 'от 3 000'
    },
    {
      name: 'Укоротить рукава с манжетом, разрезами',
      price: 'от 4 000'
    },
    {
      name: 'Заузить рукава до локтя',
      price: 'от 3 000'
    },
    {
      name: 'Заузить рукава, затрагивая пройму',
      price: 'от 5 000'
    },
    {
      name: 'Расширить рукава с добавлением меха',
      price: 'от 5 000'
    },
    {
      name: 'Коррекция проймы',
      price: '5 000 — 8 000'
    },
    {
      name: 'Ушить по боковым швам без разрезов',
      price: 'от 5 000'
    },
    {
      name: 'Ушить по среднему шву спинки без шлицы',
      price: 'от 2 500'
    },
    {
      name: 'Изготовить манжеты, капюшон, воротник',
      price: '4 000 — 7 000'
    },
    {
      name: 'Баланс изделия (боковые, плечевые, горловина)',
      price: '7 000 — 9 000'
    },
    {
      name: 'Реставрация борта (перекат)',
      price: 'от 4 000'
    },
    {
      name: 'Реставрация потёртостей, порывов до 10 см',
      price: 'от 2 500'
    },
    {
      name: 'Реставрация борта с добавлением кожи, замши',
      price: 'от 5 000'
    },
    {
      name: 'Реставрация кармана с добавлением меха',
      price: 'от 2 500'
    },
    {
      name: 'Заменить подклад',
      price: '4 000 — 8 000'
    },
    {
      name: 'Утеплить изделие без подклада',
      price: 'от 2 500'
    },
    {
      name: 'Заменить крючок / кольцо',
      price: '800 — 1 200'
    },
    {
      name: 'Заменить навесную петлю',
      price: 'от 800'
    },
    {
      name: 'Заменить вешалку / шлёвки',
      price: '800 — 1 500'
    },
    {
      name: 'Заменить молнию',
      price: '2 500 — 4 000'
    },
    {
      name: 'Полный перекрой изделия',
      price: '30 000 — 40 000',
      _cellVariants: { name: 'red', price: 'bold' }
    },
  ];
}
</script>
