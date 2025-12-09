// Imports go first

import { makePottery } from "./potteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell } from "./potteryCatalog.js"
import { PotteryList } from "./potteryList.js"

// Make 5 pieces of pottery at the wheel

const mug = makePottery("mug", 5, 6)
console.log(mug);
const bowl = makePottery("bowl", 7, 5)
console.log(bowl);
const vase = makePottery("vase", 10, 10)
console.log(vase);
const plate = makePottery("plate", 4, 2)
console.log(plate);
const jug = makePottery("jug", 12, 12)
console.log(jug);

// Fire each piece of pottery in the kiln

const firedMug = firePottery(mug, 2000)
const firedBowl = firePottery(bowl, 2300)
const firedVase = firePottery(vase, 2100)
const firedPlate = firePottery(plate, 2200)
const firedJug = firePottery(jug, 2000)

// Determine which ones should be sold, and their price

toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedBowl);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedPlate);
toSellOrNotToSell(firedJug);
// Invoke the component function that renders the HTML list

const potteryHTML = PotteryList();

document.querySelector("#potteryList").innerHTML = potteryHTML;