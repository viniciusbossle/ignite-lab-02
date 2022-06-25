import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/event" element={<h1>Event</h1>}></Route>
    </Routes>
  )
}