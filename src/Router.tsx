import { Routes, Route } from "react-router-dom";

import { Subscribe } from "./pages/Subscribe";
import { Event } from "./pages/Event";
import { NotFound } from "./pages/404";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Subscribe />} />
			<Route path="/event" element={<Event />} />
			<Route path="/event/lesson/:slug" element={<Event />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
