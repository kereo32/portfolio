import { ApplicationBar, TopNavBar, Main } from './Components';
function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-macbg bg-cover">
      <TopNavBar />
      <Main />
      <ApplicationBar />
    </div>
  );
}

export default App;
