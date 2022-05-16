<script>
  import { page } from '$app/stores'

  const nav = [
    { title: 'Home', path: '/' },
    { title: 'Eventi', path: '/events' },
    { title: 'Press Kit', path: '/presskit' },
    { title: 'Parlano di noi', path: '/aboutus' }
  ]

  // let active = "text-gray-200 hover:text-secondary hover:border-b-2 hover:border-secondary px-5 py-3 text-sm font-bold";

</script>

<section class="header absolute top-0 left-0 w-full z-10">
  <div class="container mx-auto">
    <div class="flex justify-between items-center py-5">
      <div class="logo">
        <a href="/">
          <img src="assets/images/loghi.png" alt="">
        </a>
      </div>
      <nav>
        <ul class="flex">
          { #each nav as item}
            <li><a class="text-gray-200 hover:text-secondary hover:border-b-2 hover:border-secondary px-5 py-3 text-sm font-bold" class:active={ $page.url.pathname === item.path } href={item.path}>{item.title}</a></li>
          {/each }
        </ul>
      </nav>
    </div>
  </div>
</section>



<!-- <nav>
  <ul>
    { #each nav as item}
      <li><a class:active={ $page.url.pathname === item.path } href={item.path}>{item.title}</a></li>
    {/each }
  </ul>
</nav> -->

