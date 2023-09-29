import Header from "./components/Header";
import ResultTable from "./components/ResultsTable/ResultTable";
import NewInvestment from "./components/investment/NewInvestment";


function App() {
  

  return (
    <div>
      <Header/>

      <NewInvestment/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable/>
    </div>
  );
}

export default App;
