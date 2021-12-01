import SelectionPage from "./components/SelectionPage";

function App() {
  return (
    <div className="bg-dark d-flex flex-column justify-content-center min-vh-100">
      <div className="w-20 text-center pb-4">
          <img src="data:image/png;base64,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"></img>
      </div>
        <div className="">
          <SelectionPage />
        </div>
    </div>
  );
}

export default App;
