import { Link } from "@/modules/shared/components/Link";

export function HomePage() {
  return (
    <section className="py-16">
      <article className="text-base prose xl:text-xl mb-6">
        <h1>Garlic bread with cheese: What the science tells us</h1>

        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to
          their children, with the food earning such an iconic status in our culture that kids will
          often dress up as warm, cheesy loaf for Halloween.
        </p>

        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies
          cases springing up around the country.
        </p>
      </article>

      <Link href="hehe">Go to not found page</Link>
    </section>
  );
}
