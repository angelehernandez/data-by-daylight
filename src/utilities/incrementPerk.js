export const incrementPerk = (perk, outcome, generatedData) => {
    
    // look for perk in array
    for (let i = 0; i < generatedData.length; i++) {

        // quick access var
        let currentPerk = generatedData[i];

        // find perk in array
        if (perk === currentPerk.key) {

            // increment respective outcome
            if (outcome) {
                currentPerk.win++;
            } else {
                currentPerk.loss++;
            }
        }
    }
    return generatedData;
}