import { ADMIN_DELETE_REQUEST, ADMIN_FAILURE_REQUEST, ADMIN_GET_REQUEST, ADMIN_ORDERS_REQUEST, ADMIN_POST_REQUEST, ADMIN_REQUEST } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    orders: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_REQUEST:
            return { ...state, isLoading: true }
        case ADMIN_GET_REQUEST:
            return { ...state, isLoading: false, products: [...payload] }
        case ADMIN_POST_REQUEST:
            return { ...state, isLoading: false, }
        case ADMIN_DELETE_REQUEST:
            return { ...state, isLoading: false }
        case ADMIN_ORDERS_REQUEST:
            return { ...state, isLoading: false,  orders: [...payload]  }
        case ADMIN_FAILURE_REQUEST:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }

}