// import { useNavigate } from "react-router-dom";

// enum ePage {
//   Product = 1,
//   Cart,
//   Checkout,
// }

// class MPRouts {
//   static readonly navigator = useNavigate();

//   constructor() {}
  
//   static navigate(page: ePage) {
//     const url = this.getUrl(page);
//     this.navigator(url, { replace: true });
//   }

//   static getUrl(page: ePage) {
//     switch (page) {
//       case ePage.Cart:
//         return "/CartItems";
//       case ePage.Checkout:
//         return "/OrderProgress";
//       case ePage.Product:
//         return "/Product";
//       default:
//         return "/Product";
//     }
//   }
// }

// export {ePage, MPRouts}
const ProductUrl = "/";
const CheckoutUrl = "/OrderProgress";
const CartItemsUrl = "/CartItems";

export {ProductUrl, CheckoutUrl, CartItemsUrl}