import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Recipes() {
  const searches = [
    "butter chicken",
    "tandoori chicken",
    "paneer masala",
    "chicken biryani",
    "mutton biryani",
    "chicken tikka",
    "fish fry",
    "samosa",
    "seekh kabab",
  ];

  return (
    <div>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input type="text" placeholder="search for a recipe..." />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}
