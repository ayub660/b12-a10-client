import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar user={{ photoURL: "https://via.placeholder.com/40" }} handleLogout={() => { }} />
      <h1>Test Page</h1>
    </div>
  );
}

export default App;
