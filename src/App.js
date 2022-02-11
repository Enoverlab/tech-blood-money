import Footer from "./component/Footer";
import Reviews from "./component/Reviews";
import SectionOne from "./component/SectionOne";
import SectionTwo from "./component/SectionTwo";

function App() {
  return (
    <div className="App">
      <SectionOne />
      <Reviews web />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
