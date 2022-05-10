import "./styles/navbar.css";

function Navbar({ setViewBuckets, setViewDroplets, setViewSummary }) {
  return (
    <div className="navBar">
      <ul>
        <li
          onClick={() => {
            setViewBuckets(false);
            setViewDroplets(false);
            setViewSummary(true);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            setViewDroplets(false);
            setViewSummary(false);
            setViewBuckets(true);
          }}
        >
          Buckets
        </li>
        <li
          onClick={() => {
            setViewSummary(false);
            setViewBuckets(false);
            setViewDroplets(true);
          }}
        >
          Droplets
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
