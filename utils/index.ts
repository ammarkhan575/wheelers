import {FilterProps, CarProps } from "@/types";

export async function fetchCars(filter: FilterProps){
    const {manufacturer, year, limit , fuel, model} = filter;
    const headers = {
		'X-RapidAPI-Key':'3f43512e06mshe50ade862d0da0fp104295jsn8b2a4809c2cc',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response =  await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    {
        headers: headers
    })

    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day in rupee by multiplying 81
    const rentalRatePerDay = (basePricePerDay + mileageRate + ageRate)*81;
    
    return rentalRatePerDay.toFixed(0);
};

