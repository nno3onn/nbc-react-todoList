import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import TodoPage from "../pages/TodoPage";

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<TodoPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
