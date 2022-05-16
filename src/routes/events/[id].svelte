<script>
  import { page } from '$app/stores';
  console.log($page.url);
</script>

<h1>Event Id: { $page.params.id }</h1>
<p>Event url: { $page.url }</p>

<style>

</style>