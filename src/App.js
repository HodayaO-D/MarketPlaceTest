import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Pdp from "./components/pdp/Pdp";
import OrderProgress from "./components/orderProgress/OrderProgress";
import  { EventContextProvider } from "./context/EventContext";
import CartItems from "./components/cart/CartItems";
import { ProductUrl, CheckoutUrl, CartItemsUrl } from "./Routs.js";
import { productDetails } from "./api/apiManager";
import TextLoader from "./components/UI/TextLoader/TextLoader";

const mockItem = {
  name: "מחשב נייד Lenovo ThinkBook 15 G2 ITL 20VE006SIV לנובו",
  id: 1,
  shortDesciption: `
  שם: מחשב נייד לנובו Lenovo
  מודל: ThinkBook 15 G2 ITL
  `,
  imageName: "lenovo.png",
  fullDetails: `מחשב נייד LENOVO דגם 20VE006SIV - לנובו

  מספר מכירה
  23035142
  
  תשלומים
  עד  36  תשלומים ללא ריבית
  זמן אספקה
  עד 7 ימי עבודה מיום קבלת אישור העסקה מטעם חברת האשראי
  דמי טיפול ומשלוח
  משלוח חינם
  אחריות
  שנה אחריות ע"י Lenovo
  אמצעי תשלום
  מכבדים את כל סוגי האשראי התקפים בישראל,למעוניינים לשלם במזומן,ניתן לתאם בטלפון 09-9720000.`,
  price: 2790,
  properies: `צבע: כסף
קורא טביעת אצבע | 
 מקלדת מוארת | 
חיבור רשת קווי`,
};

const shippingMethod = [
  { id: 1, methodName: "Regular", price: 0 },
  { id: 2, methodName: "Express", price: 50 },
  { id: 3, methodName: "One Day Delivary", price: 100 },
];
function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    /*productDetails(300046592,(res) => {
      setProduct({
        name: res.name,
        id: res.code,
        shortDesciption: res.description,
        imageName: "lenovo.png",
        fullDetails: res.summary,
        price: res.price.formattedValue,
        properies: "",
        averageRating: res.averageRating,
        numberOfReviews: res.numberOfReviews,
        stock:res.stock
      });
    });*/
    productDetails(300046592).then((res)=> {
      setProduct({
        name: res.name,
        id: res.code,
        shortDesciption: res.description,
        imageName: "lenovo.png",
        fullDetails: res.summary,
        price: res.price.formattedValue,
        properies: "",
        averageRating: res.averageRating,
        numberOfReviews: res.numberOfReviews,
        stock:res.stock
      });
    })
  }, []);

  return (
    <EventContextProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                path={ProductUrl}
                element={
                  product ? (
                    <Pdp product={product} shippingMethod={shippingMethod} />
                  ) : (
                    <TextLoader title="Loading product from api" />
                  )
                }
              ></Route>
              <Route
                exact
                path={CheckoutUrl}
                element={<OrderProgress />}
              ></Route>
              <Route exact path={CartItemsUrl} element={<CartItems />}></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </EventContextProvider>
  );
}

export default App;
