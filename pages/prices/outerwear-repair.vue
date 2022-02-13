<template>
  <b-table-lite
    :items="outerwearRepair"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class OuterwearRepair extends Vue {
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

  outerwearRepair: PriceItem[] = [
    {
      name: 'Выровнять и подшить низ прямого силуэта',
      price: '1 500 — 2 500'
    },
    {
      name: 'Укоротить низ расклешённого изделия',
      price: '1 800 — 3 000'
    },
    {
      name: 'Укоротить низ изделия со шлицей',
      price: '2 000 — 4 000'
    },
    {
      name: 'Ушить по боковым швам, затрагивая низ',
      price: '2 500 — 4 000'
    },
    {
      name: 'Ушить по боковым швам, затрагивая низ и пройму',
      price: '3 000 — 6 000'
    },
    {
      name: 'Ушить средний шов спинки без шлицы / со шлицей',
      price: '1 500 — 2 500'
    },
    {
      name: 'Переоформить рельефы',
      price: 'от 2 000'
    },
    {
      name: 'Уменьшить плечевые швы',
      price: 'от 1 000'
    },
    {
      name: 'Укоротить низ обычного рукава',
      price: 'от 1 000'
    },
    {
      name: 'Укоротить рукава с манжетом, шлицей',
      price: 'от 2 500'
    },
    {
      name: 'Заузить обычный рукав',
      price: 'от 1 500'
    },
    {
      name: 'Заузить рукав с манжетом, патами',
      price: 'от 1 800'
    },
    {
      name: 'Изменение линии проймы',
      price: 'от 2 500'
    },
    {
      name: 'Изменение линии горловины',
      price: 'от 1 500'
    },
    {
      name: 'Замена воротника, замена манжет',
      price: '2 500 — 4 000'
    },
    {
      name: 'Замена подклада',
      price: 'от 4 000'
    },
    {
      name: 'Частичная замена подклада',
      price: 'от 1 500'
    },
    {
      name: 'Утеплить изделие без замены подклада',
      price: 'от 4 000'
    },
    {
      name: 'Полный перекрой изделия',
      price: 'договорная',
      _cellVariants: { name: 'red', price: 'bold' }
    },
    {
      name: 'Замена молнии от 80 см (усложняющие элементы: планки, канты, пух)',
      price: '1 500 — 3 000',
    },
  ];
}
</script>
