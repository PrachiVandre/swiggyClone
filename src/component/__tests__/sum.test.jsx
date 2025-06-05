import { sum } from "../sum"
import { test, expect } from 'vitest';

test("Sum function should calculate the two numbers",()=>{
    const result = sum(3,4);
    //Assertion
    expect(result).toBe(7);
})