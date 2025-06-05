import {expect, it, vi} from 'vitest';
import { render, screen} from '@testing-library/react';
import RestaurantCategory from "../restaurantCategory/RestaurantCategory"
import MOCK_DATA from '../mocks/mockRestaurantMenu.json'
import '@testing-library/jest-dom'

globalThis.fetch = vi.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

// const categoryData =
//   MOCK_DATA.data.cards[0].groupedCard.cardGroupMap.REGULAR.cards[0].card.card;

const categoryData = MOCK_DATA[0]?.data?.cards.find(
    (c) => c.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[0]?.card;

it("Should render restaurant menu component", async()=>{
    render(
        <RestaurantCategory
            data={categoryData}
            showItem={false} 
            setShowindex={() => {}}
        />
    );

    const accordianHeader = await screen.findByText("Recommended (20)");
    expect(accordianHeader).toBeInTheDocument();
})