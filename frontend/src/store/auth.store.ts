import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginReqest } from '../services/authServices';
import type { Agent } from '../types/agent';

interface AuthState {
    user: Agent | null;
    isLoading: boolean;
    isAuthonticated: boolean;
    error: Error | null;
    success: boolean;
    login: Function;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user:  null,
            isLoading: false,
            isAuthonticated: false,
            error: null,
            success: false,

            login: async (agentCode: string, password: string) => {
                set({ isLoading: true, error: null });
                try {
                    const userData: Agent = await loginReqest(agentCode, password)
                    set({ user: userData, isLoading: false, success: true })

                } catch (error: any) {
                    set({ error: error, isLoading: false, success: false })

                }
            }
        }), { name: "user-storage" }
    )
)