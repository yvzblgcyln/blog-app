import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './pages/header/Navbar';
import Menu from './pages/body/Menu';
import NotFound from './pages/body/NotFound';
import AddBlog from './pages/body/AddBlog';
import EditBlog from "./pages/body/EditBlog";
import BlogDetails from './pages/body/BlogDetails';
import Footer from "./pages/footer/Footer";
import "./app.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Menu />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/edit" element={<EditBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;