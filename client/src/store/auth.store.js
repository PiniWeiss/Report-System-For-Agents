import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginReqest } from '../services/authServices';

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isLoading: false,
            isAuthonticated: false,
            error: null,

            login: async (agentCode, password) => {
                set({ isLoading:true, error: null});
                try {
                    const userData = await loginReqest(agentCode, password)
                    set({user: userData, isLoading: false})
                    return {success: true}
                } catch (error) {
                    set({error: error, isLoading: false})
                    return {success: false}
                }
            }
        }),
    )
)