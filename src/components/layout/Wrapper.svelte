<script lang="ts">
  import Windowsize from "./../overlays/Windowsize.svelte";
</script>

<div class="hide-when-too-small">
  <slot />
</div>
<div class="show-when-too-small">
  <Windowsize />
</div>
