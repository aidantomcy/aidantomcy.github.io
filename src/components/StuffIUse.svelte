<script lang="ts">
  import { stuffIUse } from "./utils/stuffIUse";
</script>

<section class="mx-8">
  <div
    class="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white mt-16"
    id="stuffiuse"
  >
    Stuff I Use
  </div>
  <div class="flex flex-wrap">
    {#each stuffIUse as tool}
      <img
        src={`/${tool}.svg`}
        alt={tool}
        class="size-10 pr-1"
        loading="lazy"
      />
    {/each}
  </div>
</section>
