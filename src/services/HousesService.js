import { AppState } from "../AppState"
import { sandbox } from "./AxiosService"
//the same as carsService just with houses. 
//The functions are going to be the same and do the same things.
//This is probably a good template to have for your standard crud methods.

class HousesService {
  async getHouses() {
    let res = await sandbox.get("/houses")
    AppState.houses = res.data
  }
  async getHouseById(id){
    let res = await sandbox.get(`/houses/${id}`)
    AppState.activeHouse = res.data
  }
  async createHouse(house){
    let res = await sandbox.post('/houses', house)
    AppState.houses.push(res.data)
    return res.data.id
  }
  async destroy(id){
    await sandbox.delete(`/houses/${id}`)
    AppState.houses = AppState.houses.filter(house => house.id !== id)
  }
}

export const housesService = new HousesService()