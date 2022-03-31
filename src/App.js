import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Pdp from "./components/Pdp";
import OrderProgress from "./components/OrderProgress/OrderProgress";
import EventContext, {
  EventContextProvider,
  eNavigate,
} from "./context/EventContext";
import { useNavigate } from "react-router-dom";
import CartItems from "./components/CartItems";

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
  const eventCtx = useContext(EventContext);

  return (
    <EventContextProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Pdp product={mockItem} shippingMethod={shippingMethod} />
                }
              ></Route>
              <Route
                exact
                path="/OrderProgress"
                element={<OrderProgress />}
              ></Route>
              <Route
                exact
                path="/CartItems"
                element={<CartItems />}
              ></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </EventContextProvider>
  );
}

export default App;
