import {describe, expect, test} from '@jest/globals'
import linear_search from '../algorithms/search/linear'


describe("Linear search algorithm", () => {
    const a: number[] = [0,42,2,5,2,45,76,8876,1]
    
    test("Find a number in array", () => {
        expect(linear_search(a, 45)).toBe(true)
    })

    test("Don't find a number in array", () => {
        expect(linear_search(a, 945)).toBe(false)
    })
})
