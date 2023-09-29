import Header from "./components/Header";
import Table from "./components/Ui/Table";
import NewInvestment from "./components/investment/NewInvestment";


function App() {
  

  return (
    <div>
      <Header/>

      <NewInvestment/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table/>
    </div>
  );
}

export default App;
