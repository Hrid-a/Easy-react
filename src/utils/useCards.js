import { useState, useEffect } from "react";

export const useCards = ()=> {
    const [cards, setCards] = useState([]);
    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async ()=> {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resData = await response.json();
        setCards(resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return cards;
}