export default function Template({ children }) {
    return (
      <div className="container">
        <header>
          {"this is header"}
        </header>
        <main>{children}</main>
        <footer>
          {"this is footer"}
        </footer>
      </div>
    );
  }