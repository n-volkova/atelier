<template>
  <b-table-lite
    :items="shirtRepair"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class ShirtRepair extends Vue {
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

  shirtRepair: PriceItem[] = [
    {
      name: 'Укоротить низ без повтора фигурной линии',
      price: '600 — 1 200'
    },
    {
      name: 'Укоротить низ с повтором фигурной линии',
      price: '900 — 1 500'
    },
    {
      name: 'Укоротить низ с разрезами',
      price: '1 200 — 1 600'
    },
    {
      name: 'Укоротить рукава с переносом планок и манжет',
      price: 'от 1 800'
    },
    {
      name: 'Укоротить рукава через окат (пройму)',
      price: 'от 2 000'
    },
    {
      name: 'Укоротить рукава швом вподгибку',
      price: '600 — 800'
    },
    {
      name: 'Ремонт рукавов (замена деталей, обточка)',
      price: '800 — 1 500'
    },
    {
      name: 'Ушить рукава по локтевому шву + низ',
      price: '900 — 1 200'
    },
    {
      name: 'Ушить рукава, затрагивая пройму',
      price: 'от 1 500'
    },
    {
      name: 'Оформить вытачки, рельефы',
      price: '600 — 2 500'
    },
    {
      name: 'Ушить по среднему шву спинки без молнии',
      price: '400 — 800'
    },
    {
      name: 'Ушить по боковым (оверлок, запошивочный)',
      price: '900 — 1 600'
    },
    {
      name: 'Расставить по боковым швам + низ + пройма + рукава',
      price: 'от 3 000'
    },
    {
      name: 'Перекрой проймы',
      price: '1 600 — 2 500'
    },
    {
      name: 'Перекрой воротника',
      price: 'от 1 500'
    },
    {
      name: 'Изменить линию горловины',
      price: '1 200 — 1 800'
    },
    {
      name: 'Ремонт шлицы, разреза, рельефа',
      price: 'от 500'
    },
    {
      name: 'Замена молнии',
      price: '600 — 1 200'
    },
    {
      name: 'Полный перекрой изделия',
      price: '4 000 — 7 000',
      _cellVariants: { name: 'red', price: 'bold' }
    },
  ];
}
</script>
