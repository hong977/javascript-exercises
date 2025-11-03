const sumAll = function(a,b) {
    if ( (a<0 || b<0) || (typeof(a) != "number" || 
    typeof(b) != "number") ||
    (!Number.isInteger(a) || !Number.isInteger(b)))
    {
        return "ERROR";
    }

    let start;
    let end;
    if (a < b){
        start = a;
        end = b;
    }
    else {
        start = b;
        end = a;
    }

    for (let i = start+1; i <= end ; i++){
        start += i;
    }
    return start;
};

// Do not edit below this line
module.exports = sumAll;
