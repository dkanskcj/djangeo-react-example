import create from "zustand";

interface SampleState {
  myNumber: number;
  myString: string;
  
  setMyNumber: (myNumber: number) => void;
  setMyString: (myString: string) => void;

  increaseNumber: () => void;
}

const useSampleStore = create<SampleState>((set, get) => {
  return {
    myNumber: 0,
    myString: "",

    setMyNumber: (myNumber) => {
      set({ myNumber });
    },

    setMyString: (myString) => {
      set({ myString });
    },

    increaseNumber: () => {
      const state = get();
      const oldMyNumber = state.myNumber;

      set({ myNumber: oldMyNumber + 1 });
    },
  }
})

export default useSampleStore;