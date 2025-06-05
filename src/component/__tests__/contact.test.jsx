import {render, screen} from '@testing-library/react'
import {test, expect, describe, beforeAll, beforeEach, afterAll, afterEach} from 'vitest';
import Contact from '../contact/Contact'
import "@testing-library/jest-dom"


describe("Contact us page test cases", ()=>{

    afterAll(()=>{
        console.log("After All");
    })

    afterEach(()=>{
        console.log("After Each");
    })

    beforeAll(()=>{
        console.log("Before All");
    })
    beforeEach(()=>{
        console.log("Before Each");
    })

    test("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside contact component", ()=>{
        render(<Contact/>);
        const btn = screen.getByText('Submit');
        expect(btn).toBeInTheDocument();
    });
    
    test("Should load input in contact component", ()=>{
        render(<Contact/>);
        const inputText = screen.getByPlaceholderText("message");
        expect(inputText).toBeInTheDocument();
    })
    
    test("Should load 2 input boxes in contact page",()=>{
        render (<Contact />);
        
        const inputBox = screen.getAllByRole('textbox');
        expect(inputBox.length).toBe(2);
        // expect(inputBox.length).not.toBe(33);
    })
})


// test("Should load button inside contact component", ()=>{
//     render(<Contact/>);
//     const btn = screen.getByRole('button');
//     expect(btn).toBeInTheDocument();
// })