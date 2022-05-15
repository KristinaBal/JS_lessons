let array = ['one', 'du', 'three', 'five', 'six']

function getArrayValues(array) {

    let values = [];

    if (array.length > 0) {

        for (let i = 0; i < array.length; i++) {

            if (i === 0) {
                values.push(array[i])
            }

            if (i === array.length - 1) {
                values.push(array[i])
            }
        }
    }

    return values
}

const convertToString = () => {

    let newArray = getArrayValues(array)

    let string = newArray.toString()

    let newString = ''

    for (let i = 0; i < string.length; i++) {

        if (string[i] !== ',') {

            newString += string[i]

        }

    }

    return newString

}

const result = convertToString()

console.log(result);

