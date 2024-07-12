import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { UserFormPage } from "./pages/UserFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
function App(){
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/user"/>}/>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/user-create" element={<UserFormPage/>}/>
        <Route path="/user/:id" element={<UserFormPage/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}
export default App;