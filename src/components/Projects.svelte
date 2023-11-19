<script lang="ts">
  import Card from "./Card.svelte";
</script>

<section class="mx-8" id="projects">
  <div
    class="font-bold text-2xl md:text-4xl tracking-wide mb-6 text-black dark:text-white mt-16"
  >
    Projects
  </div>
  <div class="grid grid-cols-1 place-items-center md:grid-cols-2 w-full">
    <Card
      title="Gospel Exhibition"
      body="Website for a Sunday school project of mine, made with Next.js, Prisma and Tailwind CSS."
      repo="gospel-exhibition"
    />
    <Card
      title="Saints for Us"
      body="Website about a few Catholic saints, whose intercession we rely on in our day-to-day lives."
      repo="saintsforus"
    />
    <Card
      title="pymon"
      body="A tool that auto-restarts your Python app on file changes for easier development."
      repo="pymon"
    />
    <Card
      title="Fortune"
      body="A command line utility which gives you a random quote from the Zen Quotes API."
      repo="fortune"
    />
    <Card
      title="Tresorita"
      body="This is a website for a client of mine."
      repo="tresorita"
    />
    <Card
      title="Discord Bot"
      body="A discord bot which can send memes and dad jokes. Written in TypeScript."
      repo="discord-bot"
    />
  </div>
</section>
