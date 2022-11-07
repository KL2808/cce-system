<script lang="ts">
  import Wrapper from "./components/layout/Wrapper.svelte";
  import Toolbar from "./components/layout/Toolbar.svelte";
  import Help from "./components/overlays/Help.svelte";
  import CCTVTable from "./components/data/CCTVTable.svelte";
  import { _ } from "svelte-i18n";
  import "./shared/i18n";
</script>

<svelte:head>
  <title>{$_("page.title")}</title>
</svelte:head>

<Toolbar />
<Wrapper>
  <Help />
  <CCTVTable />
</Wrapper>
