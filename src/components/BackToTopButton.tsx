import { ArrowBigUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Top window scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={`
        fixed bottom-5 right-5 z-50 p-3 
        rounded-full bg-white text-blue-500 shadow-lg 
        hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2
        transition-all duration-300 ease-in-out
        ${isVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"}
      `}
      aria-label="Back to top"
    >
      <ArrowBigUpIcon size={20} />
    </button>
  );
}
