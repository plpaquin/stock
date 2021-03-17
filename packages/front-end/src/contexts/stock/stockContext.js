import { createContext, useContext, useState } from 'react';

const StockStateContext = createContext();
const StockDispatchContext = createContext();

const useStockState = () => useContext(StockStateContext);
const useStockDispatch = () => useContext(StockDispatchContext);

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState();

  return (
    <StockStateContext.Provider value={stock}>
      <StockDispatchContext.Provider value={setStock}>
        {children}
      </StockDispatchContext.Provider>
    </StockStateContext.Provider>
  );
};

export const useStock = () => ({
  stock: useStockState(),
  setStock: useStockDispatch()
});
