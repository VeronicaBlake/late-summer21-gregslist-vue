<template>
    <div class="house container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h1>Houses, Baby! 🏡</h1>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'House',
    setup(){
        //OnMounted()-> to get houses on load

        return {
            //houses: computed(()=> Appstate.houses) returns houses whenever there's a change to Appstate 
        }
    },
    components:{
        //housesCard
        //housesForm (for creation)
    }
}
</script>


<style lang="scss" scoped>

</style>