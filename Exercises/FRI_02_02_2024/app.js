let weatherData
const country = async ()=> {
    try {
        let country = await fetch('https://restcountries.com/#endpoints-all');
        return (country.json());
    }

    catch (error) {
        
    }
};
countries();

const renderCountries = async ()=> {
    let aCountry = '';

    let country = await countries();
    country.forEach(cty => {
        let ctyHTML = 
        `<div class="card">
            <h3 class="name">${cty.name}</h3>
            <img src="${cty.flags.png}" alt="">
            // <span class="currency">${cty/curriencies[0].code}</span>
        </div>`

        aCountry+=ctyHTML
    });
    // to access the card
    let card = document.querySelector('container');
    card.innerHTML = aCountry
}

renderCountries