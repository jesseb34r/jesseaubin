export function Navigation() {
  return (
    <nav>
      <ul class="flex max-w-2xl mx-auto my-margin gap-gutter">
        <li class="flex-grow">
          <a href="/" class="text-xl font-semibold hover:text-plum-dim transition-colors">
            Jesse Aubin
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
          <a href="/notes" class="hover:underline hover:font-semibold">
            Notes
          </a>
        </li>
      </ul>
    </nav>
  );
}
