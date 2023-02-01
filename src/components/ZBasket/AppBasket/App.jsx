// import { useState } from "react";
// import BasketItem from "../BasketItem/BasketItem";
// import Calculation from "../Calculation/Calculation";

// function App() {
//   const defaultProducts = [
//     {id: 1, title: 'Bike', price: 45000, count: 1},
//     {id: 2, title: 'Rollers', price: 40000, count: 3},
//     {id: 3, title: 'Scooter', price: 20000, count: 2},
//     {id: 4, title: 'Skate', price: 45000, count: 1},
//     {id: 5, title: 'Skis', price: 27000, count: 1},
//   ];
//   const [basket, setBasket] = useState(defaultProducts);

//   const increment = (value) => {
//     const target = basket.find(({id}) => id === value);
//     target.count++;
//     setBasket([...basket]);
//   }

//   const decrement = (value) => {
//     const target = basket.find(({id}) => id === value);
//     target.count--;

//     if(target.count === 0) {
//       setBasket(basket.filter(elem => elem !== target))
//     } else {
//       setBasket([...basket]);
//     }
//   }


//   // return (
//   //   <div>
//   //     <div >
//   //     {/* {
//   //       basket.map(item => <BasketItem 
//   //         increment ={increment}
//   //         decrement ={decrement}
//   //         key={item.id} 
//   //         {...item}
//   //         />)
//   //     }
//   //     </div>
//   //     <div>
//   //       <Calculation basket ={basket}/>
//   //     </div> */}
//   //   </div>
//   // );
// }

// export default App;
