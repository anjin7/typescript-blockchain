type LastFunction = {
    <T>(arr: T[]):T
}

type PrependFunction = {
    <T,U>(a:T[], b:U): [U,...T[]]
}

const last : LastFunction = (arr) => {
    return arr[arr.length-1]
}

// const prepend = <T,U>(arr:T[], item:U) => {
//     return [item, ...arr]
// }

const prepend: PrependFunction = (arr, item) => {
    return [item, ...arr]
}