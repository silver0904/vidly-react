const initialState = {
    _id:"",
    name:"",
    token:""
}
const Auth = (state=initialState, action)=>{
    switch(action.type){
        case 'SET_AUTH':
            return{
                ...state,
                _id: action._id,
                name: action.name,
                token: action.token
            };
        default:
            return state;
    }
};

export default Auth;