import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import ChatFeed from "./pages/ChatFeed";
import Chatroom from "./pages/Chatroom";
import { UserProvider } from "./context/UserContext";
import ProfilePage from "./pages/ProfilePage";

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/sign-up" element={<Register />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/feed/:categoryId" element={<ChatFeed />} />
					<Route path="/feed/:categoryId/chat/:chatId" element={<Chatroom />} />
					<Route path="/profile/:id" element={<ProfilePage />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;