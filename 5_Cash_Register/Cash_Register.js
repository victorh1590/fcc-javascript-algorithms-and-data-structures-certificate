function checkCashRegister(price, cash, cid) {
    ;
    let Money;
    (function (Money) {
        Money[Money["PENNY"] = 1] = "PENNY";
        Money[Money["NICKEL"] = 5] = "NICKEL";
        Money[Money["DIME"] = 10] = "DIME";
        Money[Money["QUARTER"] = 25] = "QUARTER";
        Money[Money["ONE"] = 100] = "ONE";
        Money[Money["FIVE"] = 500] = "FIVE";
        Money[Money["TEN"] = 1000] = "TEN";
        Money[Money["TWENTY"] = 2000] = "TWENTY";
        Money[Money["ONE HUNDRED"] = 10000] = "ONE HUNDRED";
    })(Money || (Money = {}));
    const countChange = (unit, unitInRegister) => {
        let max = Math.floor(changeValue / unit);
        let i;
        for (i = 1; i <= max; i++) {
            if (unitInRegister < unit * i)
                break;
            changeValue -= unit;
        }
        changeObj.change.push([Money[unit], ((unit * (i - 1)) / 100)]); // dividing by 100 to go back to original values.
    };
    const changeObj = { "status": "INSUFFICIENT_FUNDS", "change": [] };
    let changeValue = Math.ceil((cash - price) * 100);
    let inCashRegister = 0;
    // How much money is in the cash register right now?
    for (let i = 0; i < cid.length; i++) {
        cid[i][1] = Math.ceil(cid[i][1] * 100); // x100 so we don't work with floats.
        inCashRegister += (cid[i][1]);
    }
    if (changeValue === inCashRegister) {
        changeObj.status = "CLOSED";
        for (let i = 0; i < cid.length; i++) {
            cid[i][1] /= 100; // dividing by 100 to go back to original values.
            changeObj.change.push(cid[i]);
        }
    }
    else if (changeValue < inCashRegister) {
        changeObj.status = "OPEN";
        let i = (cid.length - 1);
        if (changeValue >= Money["ONE HUNDRED"])
            countChange(Money["ONE HUNDRED"], cid[--i][1]);
        if (changeValue >= Money["TWENTY"])
            countChange(Money["TWENTY"], cid[--i][1]);
        if (changeValue >= Money["TEN"])
            countChange(Money["TEN"], cid[--i][1]);
        if (changeValue >= Money["FIVE"])
            countChange(Money["FIVE"], cid[--i][1]);
        if (changeValue >= Money["ONE"])
            countChange(Money["ONE"], cid[--i][1]);
        if (changeValue >= Money["QUARTER"])
            countChange(Money["QUARTER"], cid[--i][1]);
        if (changeValue >= Money["DIME"])
            countChange(Money["DIME"], cid[--i][1]);
        if (changeValue >= Money["NICKEL"])
            countChange(Money["NICKEL"], cid[--i][1]);
        if (changeValue >= Money["PENNY"])
            countChange(Money["PENNY"], cid[i][1]);
        let changeCalculated = changeObj.change.reduce((acc, ele) => {
            return ele[1] + acc;
        }, 0);
        if (changeCalculated <= changeValue) {
            changeObj.status = "INSUFFICIENT_FUNDS";
            changeObj.change = [];
        }
    }
    return changeObj;
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
