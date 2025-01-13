import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
import Footer from "./components/Foot.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Header from "./components/Header.jsx";
import UpdatePassword from "./pages/UpdatePassword.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductList from "./pages/ProductList.jsx";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>

        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
