import { ProxyState } from '../AppState.js'


class SnacksService {
  buy(type) {
    let index = ProxyState.snacks.findIndex(type)
    let price = ProxyState.snacks[type].price

  }
  addQuarter() {
    ProxyState.money += 0.25
    console.log(ProxyState.money)
  }
  returnMoney() {
    ProxyState.money = 0
  }
  buySnack(item) {
    console.log(item)
    let thisSnack = ProxyState.snacks.find(e => e.name == item)
    console.log(thisSnack)
    let price = thisSnack.price
    if (thisSnack.inventory == 0) {
      window.alert("Out of stock")
      console.log(ProxyState.snacks)
    }
    else if (ProxyState.money >= price) {
      ProxyState.money -= price
      thisSnack.inventory--
      console.log(ProxyState.snacks)
    }
    else {
      window.alert("Not enough money!")
    }
  }

}

// NOTE this creates the 'single' instance of gamesService for your app (singleton)
export const snacksService = new SnacksService()

// const gamesService = new GamesService()
// export default gamesService