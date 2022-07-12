var romanToInt = function(s) {
    
    const romanSymbolOrder = ["I", "V", "X", "L", "C", "D", "M"]
    
    const romanSymbolValues = {
        "I": 1, 
        "V" : 5, 
        "X": 10, 
        "L": 50, 
        "C": 100, 
        "D": 500, 
        "M": 1000
    }
    
    let answer = 0;
    const romanSymbols = s.split("")
    //Starting at second symbol, look at this one and the previous
    for (let i=1; i<romanSymbols.length; i++){
        const cur = romanSymbols[i];
        const prev = romanSymbols[i-1]
        //Not exceptional
        if (romanSymbolOrder.indexOf(cur) <= romanSymbolOrder.indexOf(prev)) {
            answer += romanSymbolValues[prev]
            console.log(`Adding ${romanSymbolValues[prev]} for ${prev}`)
        } else {
            answer -= romanSymbolValues[prev]
            console.log(`Subtracting ${romanSymbolValues[prev]} for ${prev}`)
        }
    }
    answer += romanSymbolValues[romanSymbols[romanSymbols.length -1]]
    console.log(`Adding ${romanSymbolValues[romanSymbols[romanSymbols.length -1]]} for ${romanSymbols[romanSymbols.length -1]}`)
    return answer;
};

console.log(romanToInt("MCMXCIV"))