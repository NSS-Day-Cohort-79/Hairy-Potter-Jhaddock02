let potteryPrimaryKey = 1

export const makePottery = () => {
    const id = potteryPrimaryKey
    potteryPrimaryKey++

    return {
        shape: "Bowl",
        weight: 2,
        height: 4,
        id: 1
    ,

        shape: "Mug",
        weight: 1,
        height: 3,
        id: 2
,

        shape: "Vase",
        weight: 3,
        height: 7,
        id: 3
,

        shape: "Plate",
        weight: 1.5,
        height: 1,
        id: 4
,

        shape: "Jug",
        weight: 4,
        height: 6,
        id: 5
    }
}