<script lang="ts">
  import { _ } from "svelte-i18n";
  import { helpModal } from "./../../shared/stores";

  function closeHelp() {
    helpModal.set(false);
  }
</script>

<div class="modal {$helpModal === true ? 'is-active' : ''}">
  <div class="modal-background" on:click={closeHelp} />
  <div class="modal-card">
    <section class="hero is-black">
      <div class="hero-body">
        <p class="title">
          {$_("help.title")}
        </p>
        <p class="subtitle">{$_("help.subtitle")}</p>
      </div>
    </section>
    <section class="modal-card-body">
      <section class="section">
        <h1 class="title">{$_("help.articles.change_lang.title")}</h1>
        <h2 class="subtitle">{$_("help.articles.change_lang.text")}</h2>
      </section>
      <section class="section">
        <h1 class="title">{$_("help.articles.add_row.title")}</h1>
        <h2 class="subtitle">{$_("help.articles.add_row.text")}</h2>
      </section>
      <section class="section">
        <h1 class="title">{$_("help.articles.remove_row.title")}</h1>
        <h2 class="subtitle">{$_("help.articles.remove_row.text")}</h2>
      </section>
      <section class="section">
        <h1 class="title">{$_("help.articles.edit_row.title")}</h1>
        <h2 class="subtitle">{$_("help.articles.edit_row.text")}</h2>
      </section>  
      <section class="section">
        <h1 class="title">{$_("help.articles.csv_export.title")}</h1>
        <h2 class="subtitle">{$_("help.articles.csv_export.text")}</h2>
      </section>      
      <section class="section">
        <h1 class="title">Reporting a bug</h1>
        <h2 class="subtitle">
            If you found a <strong>Bug</strong>, or just have a <strong>good idea</strong> for this tool.
            Please reach out to one of the maintainers listed below.
        </h2>
            
        <div class="tags has-addons">
            <div class="tag is-large is-primary">
                <ion-icon class="icon" name="mail-outline"></ion-icon>
            </div>
            <div class="tag is-large is-black">kevin.lieder@geutebrueck.com</div>
        </div>
    </section>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-rounded is-primary" on:click={closeHelp}>
        <ion-icon class="icon" name="close-outline" />
        <p>{$_("help.close")}</p>
      </button>
    </footer>
  </div>
</div>
