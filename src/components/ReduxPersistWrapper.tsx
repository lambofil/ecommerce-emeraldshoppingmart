import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

const ReduxPersistWrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
  );
};

export default ReduxPersistWrapper;
