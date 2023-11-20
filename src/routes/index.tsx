import { component$, useContext } from "@builder.io/qwik";

import { CONFIGURATION_TOKEN } from "~/utils/configuration";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

export default component$(() => {

  const config = useContext(CONFIGURATION_TOKEN)
  return (
    <>
     <div class="mt-4">hi</div>
     <div class="mt-4">{config.baseUrl}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
