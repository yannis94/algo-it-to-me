import {describe, expect, test} from '@jest/globals'
import bubble_sort from '../algorithms/sort/bubble'

function isSort(arr: number[]): boolean {
    let result = true
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] > arr[i+1]) {
            result = false
            break
        }
    }

    return result
}

describe("Bubble sort algorithm", () => {
    let a: number[] = [3,67,2,7,3,43,67,23,79,9,4,28,18,69,33]

    test("Array shouldn't be sorted.", () => {
        expect(isSort(a)).toBe(false)
    })

    test("Array should be sorted.", () => {
        bubble_sort(a)
        expect(isSort(a)).toBe(true)
    })

})
