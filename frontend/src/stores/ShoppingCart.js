// Current session shopping cart state and actions (pinia)

import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', {
    state: () => ({
        items: [],
        total: 0,
    }),
    getters: {
        items: (state) => state?.items,
        total: (state) => state?.total,
    },
    actions: {
        addItem(item) {
            this.items.push(item)
            this.total += item?.price
        },
        removeItem(item) {
            this.items.splice(this.items.indexOf(item), 1)
            this.total -= item?.price
        },
    },
    
});