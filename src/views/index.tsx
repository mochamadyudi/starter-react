import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function Views() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/auth" element={<div>About</div>} />
			</Routes>
		</Router>
	);
}
