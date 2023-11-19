<script lang="ts">
  import ArrowUpRight from "./_icons/ArrowUpRight.svelte";

  export let title: string;
  export let body: string;
  export let repo: string;
</script>

<div
  class="rounded-xl list-none flex bg-gray-200 dark:bg-dark-secondary hover:scale-[1.02] w-full transition-all my-2 text-gray-900 dark:text-gray-200 dark:hover:text-white px-4 py-6 md:h-52 lg:h-56 lg:py-4 md:w-[96%]"
>
  <a
    href={`https://github.com/aidantomcy/${repo}`}
    class="w-full leading-5 p-1 opacity-80"
    target="_blank"
  >
    <h2 class="pb-2 m-0 text-xl">
      {title}
      <ArrowUpRight />
    </h2>
    <p class="mt-2 mb-0 overflow-ellipsis">
      {body}
    </p>
  </a>
</div>
