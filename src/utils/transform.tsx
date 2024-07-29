export const toLocalCurrency = (number) => (`${number.toFixed(2)}`.replace('.',"€"))
export const capFirstLetter =   str => (str.replace(str[0],[...str[0]].toUpperCase())