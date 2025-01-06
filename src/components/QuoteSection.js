import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
export default function QuoteSection() {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        RecipeHub: Where every dish tells a story, and every flavor sparks
        creativity. Discover, cook, and share the joy of food with RecipeHub.
        <FontAwesomeIcon icon={faQuoteRight} />
      </p>
    </div>
  );
}
