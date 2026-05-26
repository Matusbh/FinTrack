import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="ml-60">{children}</main>
    </>
  );
}
