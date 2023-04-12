export default function linear_search(array: number[], target: number): boolean {

    for (let i=0; i<array.length; i++) {
        if (array[i] === target) {
            return true
        }
    }

    return false
}
