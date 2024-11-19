import {create} from "zustand/react";
import {User} from "@/lib/types";

export type Store = {
    user: User | null;
    set: (data: Partial<Store>) => void
};

//Global Store
export const store = create<Store>((set, state) => ({
    user: null,
    set: (data) => set(data),
}))

export const useStore = store;