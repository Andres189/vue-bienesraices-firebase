<script setup>
  import usePropiedades from '../composables/usePropiedades'
  import Propiedad from '@/components/Propiedad.vue'
  import { propertyPrice } from '@/helpers';

  const { alberca,filteredItems,propiedadesCollection }= usePropiedades()


;
</script>

<template>
  <main>
    <h1 class="text-center text-h3 font-weight-bold my-5">Nuestras propiedades</h1>

    <v-card flat class="py-10">
      <v-card-title class="text-h5">
        Busqueda
        <v-checkbox label="Alberca" v-model="alberca"/>  
      </v-card-title>
      <v-row>
        <Propiedad
          v-for="propiedad in filteredItems"
          :key="propiedad.id"
          :propiedad="propiedad"
          :price="propertyPrice"
        />
      </v-row>
    </v-card>
  </main>
</template>
