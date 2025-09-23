import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedSize === product.selectedSize &&
              p.selectedColor === product.selectedColor
          );

          if (existingIndex !== -1) {
            const updateCart = [...state.cart];
            updateCart[existingIndex].quantity += product.quantity || 1;
            return { cart: updateCart };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: 1,
                selectedSize: product.selectedSize,
                selectedColor: product.selectedColor,
              },
            ],
          };
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(
                item.id === product.id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
              )
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
