<script lang="ts">
  export let text: string;
  export let href: string;
</script>

<a
  class="text-lg p-0 rounded-lg text-gray-700 dark:text-gray-400 w-auto hover:underline hover:decoration-sky-500 hover:decoration-wavy"
  {href}
>
  {#if text === "home"}
    <span class="dark:text-white font-semibold">{text}</span>
  {:else}
    {text}
  {/if}
</a>
