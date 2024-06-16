import { NavigationMenu } from "@kobalte/core/navigation-menu";

export function Navigation() {
  return (
    <NavigationMenu class="flex">
      <NavigationMenu.Menu>
        <NavigationMenu.Trigger class="flex-grow">Jesse Aubin</NavigationMenu.Trigger>
        <NavigationMenu.Trigger>About</NavigationMenu.Trigger>
        <NavigationMenu.Trigger>Uses</NavigationMenu.Trigger>
        <NavigationMenu.Trigger>Notes</NavigationMenu.Trigger>
      </NavigationMenu.Menu>
    </NavigationMenu>
  );
}
