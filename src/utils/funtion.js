/**
 * 사업자 번호 '-' 입력 
 * @param {string} inputKeyWork 
 * @param {string} busynessNumber 
 * @returns 
 */
export const busynessNumberHyphen = (inputKeyWork,busynessNumber) =>{

    let newBusynessNumber = '';
    if(inputKeyWork !== null 
        && (busynessNumber.length === 3 
        ||  busynessNumber.length === 6)){
        newBusynessNumber =  busynessNumber+"-";
    }else{
        newBusynessNumber = busynessNumber;
    }

    return newBusynessNumber;

}