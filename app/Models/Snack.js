export default class Snack {
    constructor(name, img, price, inventory) {
        console.log(name, img, price, inventory)
        this.name = name
        this.img = img
        this.price = price
        this.inventory = inventory
    }

    get Template() {

        return /*html*/`
        <div class="col-2 p-2">
            <h3>${this.name}</h3>
            <img class="w-100" src="${this.img}" alt="${this.name}">
            <h3>$${this.price.toFixed(2)}</h3>
            <button className = "btn btn-info" onclick = "app.snacksController.buySnack('${this.name}')" > Buy</button>
        </div>
        `
    }
}
