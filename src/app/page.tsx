import Navigation from "@/components/Navigation";
import "../styles/css/style.css";

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <header className="header">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Berkan&apos;s Blog</span>
          <span className="heading-primary--sub">
            Welcome to my blog. One of the best blog&apos;s in the world.
          </span>
        </h1>
      </header>
    </div>
  );
}
