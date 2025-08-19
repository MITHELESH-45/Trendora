import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCheckoutStore = create(
  persist(
    (set) => ({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
      },
      setFormData: (newData) =>
        set((state) => ({
          formData: { ...state.formData, ...newData },
        })),
      clearForm: () =>
        set({
          formData: {
            firstName: "",
            lastName: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            phone: "",
          },
        }),
    }),
    {
      name: "checkout-storage", // stored in localStorage
    }
  )
);
