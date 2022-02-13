<template>
  <b-table-lite
    :items="femaleRepair"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class FemaleRepair extends Vue {
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

  femaleRepair: PriceItem[] = [
    {
      name: 'Укоротить низ изделия',
      price: '800 — 2 500'
    },
    {
      name: 'Укоротить низ с разрезом, шлицей',
      price: '1 500 — 3 000'
    },
    {
      name: 'Ушить по боковым швам без молнии + низ',
      price: '900 — 1 500'
    },
    {
      name: 'Ушить по боковым швам с молнией и поясом',
      price: '2 000 — 5 000'
    },
    {
      name: 'Ушить в поясе (частично)',
      price: '1 500 — 2 500'
    },
    {
      name: 'Ушить по рельефам',
      price: '800 — 2 000'
    },
    {
      name: 'Ушить по шву спинки без молнии + низ',
      price: '600 — 1 200'
    },
    {
      name: 'Ушить по шву спинки с молнией и поясом',
      price: '1 500 — 3 000'
    },
    {
      name: 'Ушить по вытачкам',
      price: '800 — 1 500'
    },
    {
      name: 'Обработать горловину окантовкой',
      price: '1 500 — 2 500'
    },
    {
      name: 'Изменение линии горловины',
      price: 'от 1 500'
    },
    {
      name: 'Ушить рукава + пройма + боковые швы',
      price: '1 500 — 3 000'
    },
    {
      name: 'Укоротить рукава через пройму',
      price: '2 000 — 3 000'
    },
    {
      name: 'Изменение линии проймы',
      price: '1 500 — 3 000'
    },
    {
      name: 'Изменение линии талии',
      price: '2 500 — 3 000'
    },
    {
      name: 'Изготовление манжет',
      price: '2 500'
    },
    {
      name: 'Изготовление воротника',
      price: 'от 2 500'
    },
    {
      name: 'Полный перекрой изделия',
      price: '4 000 — 6 000',
      _cellVariants: { name: 'red', price: 'bold' }
    },
    {
      name: 'Замена молнии в юбке на подкладе / без',
      price: '600 — 800',
    },
    {
      name: 'Замена молнии в платье на подкладе / без',
      price: '800 — 1 500'
    },
  ];
}
</script>
