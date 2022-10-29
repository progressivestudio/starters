import { Link } from "@/modules/shared/components/Link";

export function NotFoundPage() {
  return (
    <section class="py-16">
      <article class="text-base prose xl:text-xl mb-6">
        <h1>404</h1>

        <p class="mb-0">Sorry we couldn&apos;t find this page.</p>
        <p class="mt-0">But dont worry, you can find plenty of other things on our homepage.</p>
      </article>

      <Link href="/">Back to home</Link>
    </section>
  );
}
