<script>
  import Header from "../components/Header.svelte";
  import Event from "../components/Event.svelte";
</script>

<Header />

<section class="carousel bg-primary relative">
  <video class="object-cover w-full h-carousel opacity-40 relative" autoplay loop muted>
    <source src="https://100anniparchi.it/wp-content/uploads/2022/04/2022-Centenario-Header-v.3.mp4" type="video/mp4" />
  </video>
  <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="assets/images/header-content.png" alt="">
</section>

<section>
  <div class="container mx-auto px-56 py-24 text-center">
    <p class="text-6xl font-bold italic text-primary">Il Parco Nazionale d’Abruzzo, Lazio e Molise e il Parco Nazionale Gran Paradiso festeggiano 100 anni di storia insieme.</p>
  </div>
</section>

<Event />
<!-- <Event name="Gianfranco"></Event> -->

<style></style>