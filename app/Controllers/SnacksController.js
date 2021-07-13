import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";


//Private
function _draw() {
  let snacks = ProxyState.snacks;
  console.log(snacks)
  console.log(snacks.Template)
  let template = ''
  snacks.forEach(v => template += v.Template)
  document.getElementById("vending-machine").innerHTML = template
  document.getElementById("money-available").innerText = ProxyState.money.toFixed(2)
}
function _drawMoney() {
  document.getElementById("money-available").innerText = ProxyState.money.toFixed(2)
}
//Public
export default class SnacksController {
  constructor() {
    ProxyState.on("snacks", _draw);
    _draw()
  }
  addQuarter() {
    snacksService.addQuarter()
    _drawMoney()
  }
  buySnack(item) {
    snacksService.buySnack(item)
    _drawMoney()
  }
  returnMoney() {
    snacksService.returnMoney()
    _drawMoney()
  }

}
