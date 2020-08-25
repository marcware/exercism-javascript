const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const value = colors => {

   let number = colors.map(color => {
        return COLORS.indexOf(color)
    }).join('');

    return Number(number);
};
