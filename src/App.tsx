import "antd/dist/reset.css"; // Import Ant Design styles
import "./App.css";
import AppRoutes from "./Routes.tsx";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem('previousPath'); // replace 'yourKey' with your actual key
    };

    // Use both events for broader compatibility
    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, []);
  return (
    <>
      <AppRoutes  />
    </>
  );
}

export default App;
