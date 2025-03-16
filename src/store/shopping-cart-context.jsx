import { createContext } from "react";

export const CartContext = createContext({
    itens:[],
    addItemToCart: () => {},
});
