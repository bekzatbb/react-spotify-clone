import Sidebar from './Sidebar'
import TheSidebarOverlay from './TheSidebarOverlay'
import Header from './Header'
import Main from './Main'
import TheRegistration from './TheRegistration'

function App() {
  return (
    <>
      <div className="flex flex-grow overflow-auto">
        <Sidebar />
        <TheSidebarOverlay />

        <div className="flex-1 overflow-auto">
          <Header />
          <Main />
        </div>
      </div>
      <TheRegistration />
    </>
  );
}

export default App;