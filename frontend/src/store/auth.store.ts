import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginReqest } from '../services/authServices';
import type { Agent } from '../types/agent';

interface AuthState {
    user: Agent | null;
    isLoading: boolean;
    isLoggedIn: boolean;
    error: Error | null;
    login: Function;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isLoading: false,
            isLoggedIn: false,
            error: null,

            login: async (agentCode: string, password: string) => {
                set({ isLoading: true, error: null });
                try {
                    const userData: Agent = await loginReqest(agentCode, password)
                    set({ user: userData, isLoggedIn: true, isLoading: false })
                    return userData
                } catch (error: any) {
                    set({ error: error, isLoading: false })

                }
            }
        }), { name: "user-storage" }
    )
)