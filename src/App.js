import Sidebar from './components/Sidebar'
import TheSidebarOverlay from './components/TheSidebarOverlay'
import Header from './components/Header'
import Main from './components/Main'
import Registration from './components/Registration'

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
      <Registration />
    </>
  );
}

export default App;