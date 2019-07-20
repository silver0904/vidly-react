export const setAuth = (auth)=>({
    type: 'SET_AUTH',
    _id: auth._id,
    name: auth.name,
    token: auth.token
});