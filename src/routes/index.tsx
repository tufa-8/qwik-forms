import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
     <div class="mt-4">hi</div>
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
