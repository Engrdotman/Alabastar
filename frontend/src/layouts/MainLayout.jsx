function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <header>
        <h2>Alabastar</h2>
      </header>
      <main>{children}</main>
      <footer>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default MainLayout;
