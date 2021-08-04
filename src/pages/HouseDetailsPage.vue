<template>
    <div class="house-details-page row">
        <div class="col-md-12 d-flex justify-content-center">
            <h1>House Details</h1>
        </div>
        <div class=" col-md-5 ml-5">
            <img class=" image " :src="house.imgUrl">
        </div>
        <div class="col-md-6 bg-light border">
            <h3 class="my-3">Description: {{house.description}}</h3>
            <h3 class="my-3">Bedrooms: {{house.bedrooms}}</h3>
            <h3 class="my-3">Bathrooms: {{house.bathrooms}}</h3>
            <h3 class="my-3">Year: {{house.year}}</h3>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
import {useRoute } from 'vue-router'

export default {
    setup(){
        //REVIEW what's these now? 
        const route = useRoute()

        onMounted(async() =>{
            try {
                await housesService.getHouseById(route.params.id)
            } catch (error) {
                console.error(error)
            }
        })
        return {
            house: computed(()=> AppState.activeHouse)
        }
    }
}
</script>


<style lang="scss" scoped>
.image {
   min-height: 50vh;
}
</style>