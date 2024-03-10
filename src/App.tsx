/* eslint-disable no-mixed-spaces-and-tabs */
import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

import Cart from "./pages/Cart"

import MainLayout from "./components/MainLayout"
import PageLoading from "./components/PageLoading"

const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))

function App() {

  	return (
    	<>
			<Routes>
				<Route element={<MainLayout />}>

					<Route 
						index
						element={
							<Suspense fallback={<PageLoading/>}>
								<Home />
							</Suspense>
						}
					/>

					<Route 
						path="shop"
						element={
							<Suspense fallback={<PageLoading/>}>
								<Shop />
							</Suspense>
						}
					/>

					<Route 
						path="cart"
						element={
							<Suspense fallback={<PageLoading/>}>
								<Cart />
							</Suspense>
						}
					/>

				</Route>
			</Routes>
    	</>
  	)
}

export default App
