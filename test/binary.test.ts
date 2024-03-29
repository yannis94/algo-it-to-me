import {describe, expect, test} from '@jest/globals'
import binary_search from '../algorithms/search/binary'


describe("Binary search algorithm", () => {
    const a: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    test("Find 16 in [0:30]", () => {
        expect(binary_search(a, 16)).toBe(true)
    })

    test("Find 69 in [0:30]", () => {
        expect(binary_search(a, 69)).toBe(false)
    })
})

