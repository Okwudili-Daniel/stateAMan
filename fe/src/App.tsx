import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/mainRouter"
import { Provider } from "react-redux"
import { store } from "./global/Store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


let persistor = persistStore(store)

let client = new QueryClient()

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client}>
            <RouterProvider router={mainRouter}/>

            <ReactQueryDevtools initialIsOpen={false}/>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
      
    </div>
  )
}

export default App
