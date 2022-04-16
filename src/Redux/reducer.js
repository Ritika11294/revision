const initState = {
    country: {},
    city: {},
    loadings: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_COUNTRY":
            return {...state, country: action.payload.country}
        case "ADD_CITY":
            return {...state, city: action.payload.city}
    }
}

export default reducer