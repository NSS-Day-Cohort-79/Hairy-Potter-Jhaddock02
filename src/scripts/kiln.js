export const firePottery = (potteryObject, kilnTemp) => {
    debugger;
    potteryObject.fired = true;

    if (kilnTemp > 2200) {
        potteryObject.cracked = true;
    }
    else if (kilnTemp <= 2200) {
        potteryObject.cracked = false;
    }

    return potteryObject;
    }