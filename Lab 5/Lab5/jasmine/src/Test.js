// Ernesto Murillo Lab 5 Test js functions 

'use strict';

function returnStringtoInt(str){
    if ( typeof str !== 'string' ) return str;
    return parseInt(str);
}

function returnStringafterDecimal(str){
    if ( typeof str !== 'string' ) return str;
    var arrayString = str.split(".");
    var cents = arrayString[1];
    if( cents.length === 3){
        cents = "00";
    }

    if( cents.length === 1){
        var centNum = cents[0] * 10;
        cents = centNum.toString();
    }
    
    if( cents.length === 1){
        var centNum = cents[0];
        cents = "00";
    }

    return cents;
}
