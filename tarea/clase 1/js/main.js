const obtenerData = (url) => {
    fetch(url)
    .then( res => res.json())
    .then( data => console.log(data))
    .catch( error => console.log(error))
}

const generarCards = ( data, elemento ) => {
    const generarCards = data.reduce(( acc, item ) => {
        return acc +  `
            <div>
                <h2>
                    ${ item.name }
                </h2>
                <img src=${item.img} alt=${ item.name }/>
            </div>
        `
    }, "")

    document.querySelector(elemento).innerHTML = generarCards
}

// generarCards(array, "#root")