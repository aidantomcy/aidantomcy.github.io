<script lang="ts">
  import NavItem from "./NavItem.svelte";
  import ThemeButton from "./ThemeButton.svelte";
</script>

<nav
  class="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16"
>
  <div class="ml-[-0.60rem]">
    <a
      class="text-xl font-semibold hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg tracking-wide hover:cursor-pointer hover:bg-gray-200 hover:text-black dark:hover:bg-dark-secondary dark:hover:text-white transition-all"
      href="/"
    >
      Home
    </a>
    <NavItem text="About" href="/#about" />
    <NavItem text="Projects" href="/#projects" />
    <NavItem text="Stuff I Use" href="/#stuff-i-use" />
    <NavItem text="Contact" href="/#contact" />
  </div>
  <ThemeButton />
</nav>
