<script lang="ts">
  import { _, locale } from "svelte-i18n";
  import { helpModal } from "../../shared/stores";
  import Export from "../data/Export.svelte";
  function openHelp() {
    helpModal.set(true);
  }

  function lang(lang: string) {
    locale.set(lang);
  }
</script>

<nav
  class="navbar is-fixed-top is-black"
  role="navigation"
  aria-label="main navigation"
>
  <div class="navbar-brand">
    <a class="navbar-item ml-5" href="https://www.geutebrueck.com">
      <img
        width="151"
        height="20"
        src="static/images/Geutebrueck-logo.png"
        alt="Geutebrück GmbH Logo"
      />
      <p class="has-text-white ml-2">{$_("page.title")}</p>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start" />
  </div>

  <div class="navbar-end hide-when-too-small">
    <div class="navbar-item mr-5">
      <Export />
    </div>
    <div class="navbar-item has-dropdown is-hoverable mr-5">
      <div class="navbar-link">
        <ion-icon class="icon mr-1" name="language-outline" />
        <p>{$_("navbar.lang.lang")}</p>
      </div>
      <div class="navbar-dropdown">
        <a class="navbar-item" on:click={() => lang("de")}>
          {$_("navbar.lang.de")}
        </a>
        <a class="navbar-item" on:click={() => lang("en")}>
          {$_("navbar.lang.en")}
        </a>
        <hr class="navbar-divider" />
        <a class="navbar-item" href="mailto:kevin.lieder@geutebrueck.com">
          {$_("navbar.lang.request")}
        </a>
      </div>
    </div>
    <div class="navbar-item mr-5">
      <button class="button is-black" on:click={openHelp}>
        <ion-icon class="icon" name="help-buoy-outline" />
        <p>{$_("navbar.help")}</p>
      </button>
    </div>
  </div>
</nav>
