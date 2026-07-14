function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <aside>Dashboard Sidebar</aside>
      <section>{children}</section>
    </div>
  );
}

export default DashboardLayout;
