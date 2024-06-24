export function Navigation() {
  return (
    <nav class="mx-margin">
      <ul class="flex m-auto gap-gutter mb-gutter">
        <li class="flex-grow">
          <a href="/" class="text-xl font-semibold hover:text-plum-dim transition-colors text-nowrap">
            Jesse<span class="max-tablet:hidden"> Aubin</span>
          </a>
        </li>
        <li>
          <a href="/about" class="hover:underline hover:font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="/uses" class="hover:underline hover:font-semibold">
            Uses
          </a>
        </li>
        <li>
          <a href="/notes/about-these-notes" class="hover:underline hover:font-semibold">
            Notes
          </a>
        </li>
      </ul>
    </nav>
  );
}
