import { useEffect } from "react";
import { client } from "../services/contentful";

function App() {
  useEffect(() => {
    async function fetchPosts() {
      const response = await client.getEntries({
        content_type: "photoPost",
      });

      const posts = response.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        caption: item.fields.caption,
        altText: item.fields.altText,
      }));

      console.log(response.items);
      console.log(posts);
    }

    fetchPosts();
  }, []);

  return <h1>Contentful Test</h1>;
}

export default App;
