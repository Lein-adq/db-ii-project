import SideBar from "./_components/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex">
      <SideBar />
      <div className="h-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
