let twelveCountries = [countriesVac[0].Afghanistan, countriesVac[0].Albania, countriesVac[0].Angola, countriesVac[0].Argentina, countriesVac[0].Japan, countriesVac[0].Chile, countriesVac[0].China, countriesVac[0].France, countriesVac[0].Germany, countriesVac[0].India, countriesVac[0].Italy, countriesVac[0].Iran];
        compareCountry = (twelveCountries) => {
            let max = twelveCountries.length-1;
            let maxCoun = '';
            for(let pop of twelveCountries){
                if(pop.All.population > max){
                    max = pop.All.population;
                    maxCoun = pop;
                }
            }
            return maxCoun;
        }
        console.log(compareCountry(twelveCountries));

    bubbleSortAsc = (twelveCountries) => {
            for(let i=0; i < twelveCountries.length; i++){
                for(let j=0; j < twelveCountries.length-1-i; j++){
                    if(twelveCountries[j].All.country.charCodeAt(0) > twelveCountries[j+1].All.country.charCodeAt(0)){
                        let temp = twelveCountries[j];
                        twelveCountries[j] = twelveCountries[j+1];
                        twelveCountries[j+1] = temp;
                    }
                    
                }
            }
            return twelveCountries;
        }
        console.log(bubbleSortAsc(twelveCountries));