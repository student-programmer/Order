export const GET_USER = 'fetchUser';

export const fetchUser = value => async dispatch => {
    dispatch({
        type    : GET_USER,
        payload : value
    });
};
