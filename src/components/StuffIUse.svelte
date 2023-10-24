<script lang="ts">
  import { stuffIUse } from "./utils/stuffIUse";
</script>

<div
  class="font-bold text-3xl md:text-4xl tracking-tight mb-6 text-black dark:text-white mt-16 ml-[27rem]"
  id="contact"
>
  Stuff I Use
</div>
<div class="flex ml-[27rem]">
  {#each stuffIUse as tool}
    <img
      src={`/${tool}.svg`}
      alt=""
      class="w-10 pr-1"
      loading="lazy"
    />
  {/each}
</div>
