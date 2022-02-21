import Cta from "./component/Cta";
import Footer from "./component/Footer";
import Reviews from "./component/Reviews";
import SectionOne from "./component/SectionOne";
import SectionTwo from "./component/SectionTwo";
import Why from "./component/Why";

function App() {
  return (
    <div className="App">
      <SectionOne />
      <Why />
      <Reviews web />
      <SectionTwo />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
