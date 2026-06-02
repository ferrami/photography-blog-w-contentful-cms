import { useEffect } from "react";
import { client } from "../services/contentful";

function App() {
  useEffect(() => {
    async function fetchPosts() {
      const response = await client.getEntries({
        content_type: "photoPost",
      });

      console.log(response.items);
    }

    fetchPosts();
  }, []);

  return <h1>Contentful Test</h1>;
}

export default App;
