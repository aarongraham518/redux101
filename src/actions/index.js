/*  Actions describe what we want to do
    an Action is a function that returns
    an Object
*/
export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const zeroment = () => {
    return {
        type: 'ZEROMENT'
    };
};

