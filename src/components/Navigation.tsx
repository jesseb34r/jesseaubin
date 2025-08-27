export function Navigation() {
  return (
    <nav class="mx-margin">
      <ul class="flex m-auto gap-gutter mb-gutter">
        <li class="flex-grow">
          <a
            class="text-xl font-semibold hover:text-plum-dim transition-colors text-nowrap"
            href="/"
          >
            Jesse<span class="max-tablet:hidden"> Aubin</span>
          </a>
        </li>
        <li>
          <a class="hover:underline hover:font-semibold" href="/about">
            About
          </a>
        </li>
        <li>
          <a class="hover:underline hover:font-semibold" href="/uses">
            Uses
          </a>
        </li>
        <li>
          <a
            class="hover:underline hover:font-semibold"
            href="/notes/about-these-notes"
          >
            Notes
          </a>
        </li>
      </ul>
    </nav>
  );
}
