export default function binary_search(a: number[], target: number): boolean {
    let low = 0
    let high = a.length

    while (low < high) {
        const middle = Math.floor(low + (high - low) / 2)
        const value = a[middle]

        if (value === target) {
            return true
        } else if (value > target) {
            high = value
        } else {
            low = value + 1
        }
    }

    return false
}
