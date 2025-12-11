const potteryToSell = [];

export const toSellOrNotToSell = (firedPottery) => {
    if (firedPottery.cracked === true) {
        firedPottery.price = 2.50;
        potteryToSell.push(firedPottery);
        return firedPottery;
        
}

    if (firedPottery.weight >= 6) {
        firedPottery.price = 40;
    } else {
        firedPottery.price = 20;
    }


    potteryToSell.push(firedPottery);

    return firedPottery;
}

export const usePottery = () => {
    return structuredClone(potteryToSell);
}