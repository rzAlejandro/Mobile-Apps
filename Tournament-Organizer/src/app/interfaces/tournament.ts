export interface Tournament{
    id: number;
    title: string;
    manager: string;
    date: string;
    numberPlayers: number;
    maxNumberPlayers: number;
    entranceFee: number;
    price: number;
    city: string;
    location: string;
    participating: boolean;
    img: string;
}