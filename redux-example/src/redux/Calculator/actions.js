export const sum = (num)=>{
    return {
        type:'addition',
        payload:num
    }
};
export const mmult = (num)=>{
    return {
        type:'multiplication',
        payload:num
    }
};
export const subtraction = (num)=>{
    return {
        type:'subtraction',
        payload:num
    }
};
export const division = (num)=>{
    return {
        type:'division',
        payload:num
    }
};
