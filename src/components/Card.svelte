<script lang="ts">
  export let title: string;
  export let body: string;
  export let repo: string;
</script>

<li
  class="link-card list-none flex p-4 bg-gray-200 dark:bg-dark-secondary w-80 h-48 hover:scale-[1.01] transition-all mb-4 text-gray-900 dark:text-gray-200 hover:text-white"
>
  <a
    href={`https://github.com/aidantomcy/${repo}`}
    class="w-full leading-5 p-1 opacity-80"
  >
    <h2
      class="pb-2 m-0 text-xl [transition:color_0.6s_cubic-bezier(0.22,1,0.36,1);]"
    >
      {title}
      <span>&rarr;</span>
    </h2>
    <p class="mt-2 mb-0">
      {body}
    </p>
  </a>
</li>

<style>
  .link-card {
    background-image: var(--accent-gradient);
    background-size: 400%;
    border-radius: 0.5rem;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }

  .link-card:is(:hover, :focus-within) {
    background-position: 0;
  }
</style>
