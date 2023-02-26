<script lang="ts">
  export let text: string;
  export let href: string;
</script>

<a
  class="text-xl font-normal hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg text-gray-700 hover:cursor-pointer hover:bg-gray-200 hover:text-black dark:hover:bg-dark-secondary dark:hover:text-white dark:text-gray-400 transition-all"
  {href}
>
  {text}
</a>
