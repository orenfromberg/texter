function isRTL(str) {
    var isHebrew = XRegExp('[\\p{Hebrew}]');
    var isLatin = XRegExp('[\\p{Latin}]');
    var partLatin = 0;
    var partHebrew = 0;
    var rtlIndex = 0;
    var isRTL = false;

    for(i=0;i<str.length;i++){
        if(isLatin.test(str[i]))
            partLatin++;
        if(isHebrew.test(str[i]))
            partHebrew++;
    }
    rtlIndex = partHebrew/(partLatin + partHebrew);
    if(rtlIndex > .5) {
        isRTL = true;
    }
/*
console.log('Latin score: ' + partLatin);
console.log('Hebrew score: ' + partHebrew);
console.log('trlIndex score: ' + rtlIndex);
console.log('isRTL: ' + isRTL);
*/

    return isRTL;
}


