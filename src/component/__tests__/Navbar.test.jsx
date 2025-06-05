import {it, expect} from 'vitest'
import Navbar from '../navbar/Navbar'
import { render, screen, fireEvent} from '@testing-library/react'
import appStore from '../../utils/appStore'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

it("Should render Header component with a login button",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    )
    const loginBtn = screen.getByRole('link', { name: "Logout" });
    expect(loginBtn).toBeInTheDocument();
})

it("Should render Header component with a Cart",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    )
    const carts = screen.getByText(/Cart/);
    expect(carts).toBeInTheDocument();
})

it("Should change Logout button to login button",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    )
    const logoutbtn = screen.getByRole('link', {name:/Logout/});
    fireEvent.click(logoutbtn);

    const loginbtn = screen.getByRole('link', {name: /Login/});
    expect(loginbtn).toBeInTheDocument();
})