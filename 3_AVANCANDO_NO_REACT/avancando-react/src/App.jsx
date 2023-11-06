import "./App.css";

import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";

import City from "./assets/city.jpg";
import { useState } from "react";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Murilo";

  const [userName] = useState("Murilo");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Amarela", newCar: false, km: 23232 },
    { id: 3, brand: "Bugatti", color: "Amarela", newCar: true, km: 0 },
  ];
  return (
    <div>
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      {/*destructuring */}
      <CarDetails brand="VW" km={1000000} color="Azul" newCar={false} />
      {/* Reaproveitamento*/}
      <CarDetails brand="BMW" color="red" km={2} newCar={false} />
      <CarDetails brand="Fiat" color="red" km={2323} newCar={true} />
      {/*loop em array de objetos */}

      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
