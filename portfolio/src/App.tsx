import { ApplicationBar, TopNavBar, Main } from './Components';
import useWindowPopUp from './Hooks/useWindowPopUp';
function App() {
  const windowPopupProps = useWindowPopUp();

  return (
    <div className="flex flex-col h-screen w-screen bg-macbg bg-cover">
      <TopNavBar showWindowPopup={windowPopupProps.showWindowPopup} />
      <Main {...windowPopupProps} />
      <ApplicationBar isAppOpen={windowPopupProps.showPopup} showWindowPopup={windowPopupProps.showWindowPopup} isMinimized={windowPopupProps.isMinimized} toggleMinimize={windowPopupProps.toggleMinimized} />
    </div>
  );
}

export default App;
