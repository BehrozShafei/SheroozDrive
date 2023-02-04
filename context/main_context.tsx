import { useContext, createContext, useState, ReactNode } from "react";
type contextType = {
  color: string;
  changeColor: (string) => void;
};

const ContextDefaultValues: contextType = {
  color: "light",
  changeColor: (string) => {},
};
const Context = createContext<contextType>(ContextDefaultValues);

export function useTheme() {
  return useContext(Context);
}

type Props = {
  children: ReactNode;
};

export function Provider({ children }: Props) {
  const [color, setColor] = useState<string>("light");
  const changeColor = (r) => {
    setColor(r);
  };
  const value = { color, changeColor };
  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
}
