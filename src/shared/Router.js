import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import TodoPage from "../pages/TodoPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="todo/:id" element={<TodoPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
