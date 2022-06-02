import data from '../data/survivorData';
import games from '../data/games.json';
import incrementPerk from './incrementPerk';


export const getSurvivorData = () => {
    // make a copy of survivor perks template
    let generatedData = [...data]

    // get all game data for tallying
    const allGameData = games.games

    // access all games
    for (let i = 0; i < allGameData.length; i++) {
        const currentGameData = allGameData[i].data;

        // access all game data
        for (let j = 0; j < currentGameData.length; j++) {
            const currentPerk = currentGameData[j];

            // first survivor
            if (j >= 0 && j <= 3) {
                const outcome = currentGameData[4]
                incrementPerk(currentPerk, outcome, generatedData);
            }
            // second survivor
            else if (j >= 5 && j <= 8) {
                const outcome = currentGameData[9]
                incrementPerk(currentPerk, outcome, generatedData);
            }
            // third survivor
            else if (j >= 10 && j <= 13) {
                const outcome = currentGameData[14]
                incrementPerk(currentPerk, outcome, generatedData);
            }
            // fourth survivor
            else if (j >= 15 && j <= 18) {
                const outcome = currentGameData[19]
                incrementPerk(currentPerk, outcome, generatedData);
            }
            // bool or killer
            else continue;
        }
    }

    return generatedData
}