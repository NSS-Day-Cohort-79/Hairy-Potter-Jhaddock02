import { usePottery } from "./potteryCatalog.js"

export const PotteryList = () => {
    const potteryToSell = usePottery();
    let potteryHTML = '';


    for (const pottery of potteryToSell) {

        potteryHTML += `
        <section class="pottery" id="pottery--${pottery.id}">
       <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item Weighs ${pottery.weight} grams and is ${pottery.height} cm tall.
            </div>
            <div class="pottery__price">Price is ${pottery.price}</div>
</section>
`;
    }
    return potteryHTML;

}
  

