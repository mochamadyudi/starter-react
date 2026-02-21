import "./assets/styles/app.scss";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./stores";
import AppProvider from "@components/organism/provider/app.provider.tsx";
import Views from "@/views";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppProvider>
          <Views />
        </AppProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
