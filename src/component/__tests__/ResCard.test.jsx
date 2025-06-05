import {it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import MOCK_DATA from '../mocks/resCardMock.json'
import ResCard from '../rescard/ResCard'
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

it("Should render Restaurant card component with props data", ()=>{
    render(
        <BrowserRouter>
            <ResCard carddetail={[MOCK_DATA]}/>
        </BrowserRouter>
    );

    const name = screen.getByText('Domino\'s Pizza');
    expect(name).toBeInTheDocument();
})