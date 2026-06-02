import { createClient } from "contentful";

export const client = createClient({
  space: "TU_SPACE_ID",
  accessToken: "TU_ACCESS_TOKEN",
});
