import { Link } from "@/modules/shared/components/Link";

export function NotFoundPage() {
  return (
    <section className="py-16">
      <article className="text-base prose xl:text-xl mb-6">
        <h1>404</h1>

        <p className="mb-0">Sorry we couldn&apos;t find this page.</p>
        <p className="mt-0">But dont worry, you can find plenty of other things on our homepage.</p>
      </article>

      <Link href="/">Back to home</Link>
    </section>
  );
}
