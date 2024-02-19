import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Grid from "./Components/Grid/Grid";
import { Form } from "./Components/Form/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/tasklist"} replace />} />
      <Route path="/tasklist">
        <Route index element={<Grid />} />
        <Route path="newtask" element={<Form method={"POST"} />} />
        <Route path=":id" element={<Form method={"PUT"} />} />
      </Route>
    </Routes>
  );
}

export default App;
