<template>
      <div class="car m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'HouseDetails', params: {id: house.id}}">
          <img :src="house.imgUrl" class="w-100" :alt="house.bedrooms">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${{house.price}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
//no name is needed, or components cuz it's our smallest component
export default {
    props: {
        // REVIEW we do need props here though because it's got to format(?) or is it exporting here? 
        house: {
            type: Object, 
            required: true
        }
    },
    setup(){
        return {}
    },
}
</script>


<style lang="scss" scoped>

</style>