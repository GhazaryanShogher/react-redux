const calculation = (state = 0, actions)=>{
    switch(actions.type){
        case 'addition':
            return state + actions.payload;
        case 'subtraction':
            return state - actions.payload;
        case 'multiplication':
            return state * actions.payload;
        case 'division':
            return state / actions.payload;
        default:
            return state;
    }
}
export default calculation;