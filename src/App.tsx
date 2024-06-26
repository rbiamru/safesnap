import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Feeda from "./pages/Feeda";
import PrivatePost from "./pages/PrivatePost";
import Feed from "./pages/Feed";
import Feed2a from "./pages/Feed2a";
import Auth from "./pages/Auth";
import PublicPost from "./pages/PublicPost";
import Feed1 from "./pages/Feed1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/22-private-post":
        title = "";
        metaDescription = "";
        break;
      case "/feed2":
        title = "";
        metaDescription = "";
        break;
      case "/feed2a":
        title = "";
        metaDescription = "";
        break;
      case "/auth":
        title = "";
        metaDescription = "";
        break;
      case "/21-public-post":
        title = "";
        metaDescription = "";
        break;
      case "/feed3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Feeda />} />
      <Route path="/22-private-post" element={<PrivatePost />} />
      <Route path="/feed2" element={<Feed />} />
      <Route path="/feed2a" element={<Feed2a />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/21-public-post" element={<PublicPost />} />
      <Route path="/feed3" element={<Feed1 />} />
    </Routes>
  );
}
export default App;
