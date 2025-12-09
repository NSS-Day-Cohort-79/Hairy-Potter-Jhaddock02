let potteryPrimaryKey = 1

export const makePottery = (shape, weight, height) => {
    
    const pottery = {
        id: potteryPrimaryKey,
        shape: shape,
        weight: weight,
        height: height,
    };
    potteryPrimaryKey++
    return pottery;
}