let array = ['A', 'three', 'five', 'six']

function getArrayValues(array) {

    let values = [];

    if (array.length > 0) {

        for (let i = 0; i < array.length; i++) {

            if (i === array.length - 3) {
                values.push(array[i])
            }

            if (i === array.length - 2) {
                values.push(array[i])
            }
        }
    }

    return values
}

const convertToString = () => {

    let newArray = getArrayValues(array)
    console.log(newArray)
    let string = newArray.toString()
    console.log(string);
    let newString = ''

    for (let i = 0; i < string.length; i++) {

        // if (string[i] !== ',') {

        //     newString += string[i]
        // }
        if (i === 0) {
            newString = string[i].toUpperCase()
        }
    }
    string[0] = newString
    console.log(string[0]);
    console.log(newString);

    return string

}

const result = convertToString()

console.log(result);

