// en .every() metod kan användas för att skugga vad som är rätt och fel i en array med olika elemnet. tillexempel när man har
// tal som vi vill returnerna. Men vi vill bara returna talen om dem är under siffran 50. 


const OmDenÄrUnder = (currentValue) => currentValue < 50;

const array = [1, 10, 8, 28, 10, 47];

console.log(array.every(OmDenÄrUnder));
 // nu kommer den att returnerq true, för att det inte finns ett tal större än 50.
