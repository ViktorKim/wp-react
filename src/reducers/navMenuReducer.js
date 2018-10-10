const INITIAL_STATE = {
    main_menu: {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MAIN_MENU_LOADED':
            return {
                ...state,
                main_menu: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
};
