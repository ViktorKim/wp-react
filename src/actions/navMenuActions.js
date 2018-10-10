const API_URL = '//sandbox.loc/wp-json/wp-api-menus/v2/';

const ENDPOINTS = {
    locations: API_URL + 'menu-locations/',
    menus: API_URL + 'menus/',
};

export const getMenuByLocation = (name) => {
    return (dispatch) => {
        fetch(ENDPOINTS.locations + name)
            .then(response => response.json())
            .then(items => {
                dispatch({type: 'MAIN_MENU_LOADED', payload: items});
            });
    }
};
