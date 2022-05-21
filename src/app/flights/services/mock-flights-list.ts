import { Flight } from "../models/flight";

export const FLIGHTS: Flight [] = [ 
  { 
    id: 1, 
    from: 'Minsk', 
    to: 'London', 
    date: new Date(2022, 4, 1), 
    luggage: 20, 
    price: 60 
  },
  { 
    id: 2, 
    from: 'Minsk', 
    to: 'Athens', 
    date: new Date(2022, 4, 1), 
    luggage: 30, 
    price: 70 
  },
  { 
    id: 3, 
    from: 'Minsk', 
    to: 'Warsaw', 
    date: new Date(2022, 4, 2), 
    luggage: 25, 
    price: 80 
  },
  { 
    id: 4, 
    from: 'Minsk', 
    to: 'Prague', 
    date: new Date(2022, 4, 2), 
    luggage: 22, 
    price: 60 
  },
  { 
    id: 5, 
    from: 'Minsk', 
    to: 'Sofia', 
    date: new Date(2022, 4, 3), 
    luggage: 27, 
    price: 70 
  },
]