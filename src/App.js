import { useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar'
import TheSidebarOverlay from './components/TheSidebarOverlay'
import Header from './components/Header'
import Main from './components/Main'
import Registration from './components/Registration'

function App() {
  const contentWrapperRef = useRef(null);
  let isScrollingEnabled = true;

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;

    event.preventDefault();
    event.stopPropagation();
  }

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    contentWrapper.addEventListener('wheel', handleScrolling);

    return () => contentWrapper.removeEventListener('wheel', handleScrolling);
  });

  return (
    <>
      <div className="flex flex-grow overflow-auto">
        <Sidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={ contentWrapperRef }>
          <Header />
          <Main toggleScrolling={ toggleScrolling } />
        </div>
      </div>
      <Registration />
    </>
  );
}

export default App;