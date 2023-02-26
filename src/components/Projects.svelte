<script lang="ts">
  import Card from "./Card.svelte";
</script>

<div class="projects" id="projects">
  <div
    class="font-bold text-3xl md:text-4xl tracking-tight mb-6 text-black dark:text-white mt-16 ml-[27rem]"
  >
    Projects
  </div>
  <div class="grid grid-cols-2 mr-96 ml-[27rem]">
    <Card
      title="Gospel Exhibition"
      body="This is a website for a Sunday school project of mine, made with Express, MongoDB, Next.js and Tailwind CSS."
      repo="gospel-exhibition"
    />
    <Card
      title="Saints for Us"
      body="This is a website about a few Catholic saints, whose intercession we rely on in our day-to-day lives."
      repo="saintsforus"
    />
    <Card
      title="PyMon"
      body="PyMon is a command line utility that helps you develop Python applications by re-running the application whenever file changes are detected in the directory."
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
</div>

<style>
  :root.dark {
    --accent: 123, 58, 237;
    --accent-gradient: linear-gradient(
      44deg,
      rgb(var(--accent)),
      #fa8142 30%,
      #313131 59%
    );
  }

  :root {
    --accent: 123, 58, 237;
    --accent-gradient: linear-gradient(
      44deg,
      rgb(var(--accent)),
      #fa8142 30%,
      #e4e4e7 59%
    );
  }
</style>
