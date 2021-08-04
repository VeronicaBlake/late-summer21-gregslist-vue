<template>
    <div class="house container-fluid">
       <div class="row">
           <div class="col">
            <h1>Creation Form Goes Here</h1>
           </div>
       </div>
    </div>
    <div class="row">
        <div class="col-4" v-for=" h in houses" :key="h.id">
            <!-- data passed through the prop -->
            <HouseCard :house="h"/>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import HouseCard from '../components/HouseCard.vue'
import { housesService } from '../services/HousesService'

export default {
    name: 'House',
    setup(){
        onMounted(async () =>{
            try {
                await housesService.getHouses()
            } catch (error) {
                console.error(error)
            }
        })
        

        return {
            houses: computed(()=> AppState.houses)
        }
    },
    components:{
        HouseCard
        //HouseForm (for creation)
    }
}
</script>


<style lang="scss" scoped>

</style>