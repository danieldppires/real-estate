import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SinglePage from "./pages/SinglePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/list",
					element: <ListPage />,
				},
				{
					path: "/profile",
					element: <Profile />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/:id",
					element: <SinglePage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
