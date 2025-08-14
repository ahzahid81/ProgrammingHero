/***
 * Chair -->  3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */


function woodQuantity(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairTotalWood = chair * perChairWood;
    const tableTotalWood = table * perTableWood;
    const bedTotalWood = bed * perBedWood;

    const totalWood = allChairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}


const wood = woodQuantity(1, 1, 4);
console.log(wood);