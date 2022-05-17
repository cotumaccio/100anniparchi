<script>
  import { onMount } from 'svelte';
  import { store } from "../store.js";
  import moment from 'moment';

  // const date = moment();
  moment.locale('it');

  /**
  * @type {any[]}
  */
  let events = [];

  onMount(async() => {
		const response = await fetch($store.prod + "/api/events?populate%5Bimage_description%5D%5Bpopulate%5D=*&populate%5Bimage_cover%5D%5Bpopulate%5D=*&populate%5Bdocument%5D%5Bpopulate%5D=*&populate%5Bphoto_gallery%5D%5Bpopulate%5D=*&populate%5Btimeline%5D%5Bpopulate%5D=*")
		const results = await response.json();
		events = results.data;
		console.log(results.data);
	})

</script>

<section class="events bg-slate-100 py-10">
  <div class="container mx-auto">
    <h1 class="text-5xl">Eventi</h1>
    <p>Incontri, esperienze, musica e tanta natura da scoprire: ti aspettiamo per condividere la bellezza dei nostri territori. Partecipa agli eventi per le celebrazioni del Centenario, guarda il programma completo.</p>
    <div class="grid grid-cols-3 gap-4 py-8">
      {#each events as event, index}
        <div class="card bg-white rounded-lg overflow-hidden pb-10">
          <a href="events/{ event.id }">
            <img class="h-72 object-cover" src="{ event.attributes.image_cover.data.attributes.url }" alt="">
          </a>
          <div class="content p-10 text-slate-500">
            <a href="events/{ event.id }" class="text-terziary hover:text-orange-800">
              <h2 class="text-xl font-medium mb-5">{ event.attributes.title }</h2>
            </a>
            <p class="text-md">{ event.attributes.description }</p>
            <div class="content flex mt-6 font-medium text-md">
              <div class="content mr-5">
                <p class=""><i class="fa-solid fa-location-dot mr-2"></i>{ event.attributes.location }</p>
              </div>
              <div class="content">
                <p class="capitalize"><i class="fa-regular fa-calendar mr-2"></i>{ moment(event.attributes.date).format('DD MMMM, YYYY') }</p>
              </div>
            </div>
          </div>
          <a href="events/{ event.id }" class="uppercase text-terziary text-sm mx-10 font-medium hover:text-orange-800">Scopri di più <i class="fa-solid fa-arrow-right-long ml-2"></i></a>
        </div>
      {/each}
    </div>
    
  </div>
</section>

{ $store.prod }

<style>

</style>