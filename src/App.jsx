import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductGallery from "./componants/ProductGallery";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductDetails from "./componants/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductGallery/>}> </Route>
        <Route path="/Productdetails" element={<ProductDetails/>}> </Route>
      </Routes>
    </Router>
    // <div>
    //   <Header />
      // <div className="gapping">
      //   <ProductGallery />
      // </div>
    // </div>
  );
}

export default App;
