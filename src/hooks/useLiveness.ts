import { create } from 'zustand';

interface LivenessState {
    isLiveness: boolean;
    setLiveness: (value: boolean) => void;
}

const useLiveness = create<LivenessState>((set) => ({
    isLiveness: false,
    setLiveness: (value) => set({ isLiveness: value })
}));

export default useLiveness;
