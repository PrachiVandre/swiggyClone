import {screen, render, fireEvent} from '@testing-library/react';
import {it, vi, expect} from 'vitest';
import "@testing-library/jest-dom";
import Body from '../body/Body';
import MOCK_DATA from '../mocks/mockrestList.json'
import { BrowserRouter } from 'react-router-dom';

globalThis.fetch = vi.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Should render the Body component with Search", async()=>{
    render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>    
    );

    const cardBeforeSearch = await screen.findAllByTestId('rescard');
    expect(cardBeforeSearch.length).toBe(20);

    const searchbox = await screen.findByPlaceholderText("Search");
    fireEvent.change(searchbox, {target: {value: 'burger'}});
    
    const searchButton = await screen.findByRole('button', { name: /Search/i });
    fireEvent.click(searchButton);

    const cards = await screen.findAllByTestId('rescard');
    expect(cards.length).toBe(2);
})