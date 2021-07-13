import Snack from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"



class AppState extends EventEmitter {
  /** @type {Value[]} */
  money = 0
  snacks = [new Snack('Wasabi Doritos', 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80', 1.25, 10), new Snack('Pringles', 'https://images.unsplash.com/photo-1599493356626-9fdbdabfd9bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', 1.25, 7), new Snack('Blondies', 'https://images.unsplash.com/photo-1532940300-254894a99d95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 2.00, 5), new Snack('Popcorn', 'https://images.unsplash.com/photo-1586106040554-cdb137c979b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 1.00, 9), new Snack('Jelly Beans', 'https://images.unsplash.com/photo-1581798269145-7512508289b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80', 1.50, 3), new Snack('Sour Gummy Worms', 'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 1.25, 6)]
}


// NOTE Don't touch this
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})