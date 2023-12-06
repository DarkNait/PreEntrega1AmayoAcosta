
export const Utils = {
    roundTo: (value, decimals) => {
        try {
            const multiplier = Math.pow(10, decimals)
            return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
        }
        catch(err) {
            return value
        }
    }
}

export const Validator = {
    isNumber: (value) => {
        return !isNaN(value)
    },
    isInteger: (value) => {
        try {
            return parseInt(value, 10)
        } 
        catch(err){
            return false
        }
    },
    isFloat: (value) => {
        try {
            return parseFloat(value)
        } 
        catch(err){
            return false
        }
    },
    isNullOrEmpty: (value) => {
        return (value === null || value === undefined || value === 'undefined' || value.toString().trim().length == 0)
    }
}

export default Utils