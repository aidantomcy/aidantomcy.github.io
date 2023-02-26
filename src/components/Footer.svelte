<script lang="ts">
  import FooterLink from "./FooterLink.svelte";
</script>

<footer
  class="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center text-center"
>
  <hr class="mb-8 mt-8 w-full border-gray-100 dark:border-gray-400" />
  <div
    class="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3 dark:text-gray-400 text-gray-700"
  >
    <div class="flex flex-col space-y-4">
      <a href="/">Home</a>
      <a href="/#about">About</a>
      <a href="/#contact">Contact</a>
      <a href="/#stuff-i-use">Stuff I Use</a>
    </div>
    <div class="flex flex-col space-y-4">
      <FooterLink text="Projects" href="/projects.html" />
      <FooterLink text="GitHub" href="https://github.com/aidantomcy" />
      <FooterLink
        text="Stack Overflow"
        href="https://stackoverflow.com/users/15765063/aidan-tomcy"
      />
      <FooterLink text="CodePen" href="https://codepen.io/aidantomcy" />
    </div>
    <div class="flex flex-col space-y-4">
      <FooterLink text="Replit" href="https://replit.com/@aidantomcy" />
      <FooterLink
        text="Codewars"
        href="https://www.codewars.com/users/AidanTomcy"
      />
      <FooterLink
        text="Code Grepper"
        href="https://codegrepper.com/profile/aidan-idqzkhobs5xn"
      />
      <FooterLink
        text="Spotify"
        href="https://open.spotify.com/user/us7xaidyrndzw7r3kr6thoeed"
      />
    </div>
  </div>
</footer>
