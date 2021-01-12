import BuyTicketBoxComponent from "./Components/BuyTicketBox/BuyTicketBoxComponent";
import CarouselComponent from "./Components/Carousel/CarouselComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import ListMovieComponent from "./Components/ListMovie/ListMovieComponent";
import ShowTimeComponent from "./Components/ShowTime/ShowTimeComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <CarouselComponent />

      <ListMovieComponent />
      <ShowTimeComponent />
    </div>
  );
}

export default App;
