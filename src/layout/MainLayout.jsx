import Navbar from "./components/Navbar";
const MainLayout = ({ children, user, handleLogout }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar user={user} handleLogout={handleLogout} />
            <main className="flex-grow">{children}</main>
        </div>
    );
};
