<script lang="ts">
  import { _ } from "svelte-i18n";
  import { CCTVItem } from "../../classes/CCTVItem";
  import {
    cameras,
    codecs,
    cctvItems,
    capacityTB,
  } from "./../../shared/stores";

  function addEntry() {
    let cctvNew: CCTVItem = new CCTVItem();
    cctvItems.set([...$cctvItems, cctvNew]);
  }

  function deleteEntry(uuid: string) {
    cctvItems.set($cctvItems.filter((e) => e.uuid != uuid));
    console.info(`CCTVItem deleted from the list\nUUID: ${uuid}`);
  }
</script>

<div class="card m-6">
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th style="width: 25%">{$_("cctvtable.camera")}</th>
        <th style="width: 25%">{$_("cctvtable.compression")}</th>
        <th style="width: 10%">
          <abbr title={$_("cctvtable.fps_hint")}>
            {$_("cctvtable.fps")}
          </abbr>
        </th>
        <th style="width: 10%">{$_("cctvtable.hours_a_day")}</th>
        <th style="width: 10%">{$_("cctvtable.days")}</th>
        <th style="width: 10%">{$_("cctvtable.quantity")}</th>
        <th style="width: 10%">
          <abbr title={$_("cctvtable.tb_hint")}>{$_("cctvtable.tb")}</abbr>
        </th>
        <th style="width: 5%, text-align: end" />
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th />
        <th />
        <th />
        <th />
        <th />
        <th />
        <th><u>{$capacityTB} TB</u></th>
        <th style="text-align: end">
          <button class="button is-primary" on:click={addEntry}>
            <ion-icon class="icon" name="add" />
          </button>
        </th>
      </tr>
    </tfoot>
    <tbody>
      {#each $cctvItems as item}
        <tr>
          <td>
            <div class="flex">
              <select
                bind:value={item.camrea}
                class="input is-static"
                style="cursor: pointer;"
              >
                {#each $cameras as camera}
                  <option value={camera}>
                    {camera.pixelsHorizontal} px * {camera.pixelsVertical} px * {camera.pixelDepthBit}
                    Bit
                  </option>
                {/each}
              </select>
              <ion-icon class="icon" name="chevron-down-outline" />
            </div>
          </td>
          <td>
            <div class="flex">
              <select
                bind:value={item.codec}
                class="input is-static"
                style="cursor: pointer;"
              >
                {#each $codecs as codec}
                  <option value={codec}>
                    {codec.name}
                  </option>
                {/each}
              </select>
              <ion-icon class="icon" name="chevron-down-outline" />
            </div>
          </td>
          <td>
            <input
              class="input is-static"
              type="number"
              name="fps"
              bind:value={item.fps}
            />
          </td>
          <td>
            <input
              class="input is-static"
              type="number"
              name="Recording Time"
              bind:value={item.recHoursPerDay}
            />
          </td>
          <td>
            <input
              class="input is-static"
              type="number"
              name="Recording Time"
              bind:value={item.recDays}
            />
          </td>
          <td>
            <input
              class="input is-static"
              type="number"
              name="Quantity"
              bind:value={item.quantity}
            />
          </td>
          <td>
            <strong class="input is-static">{item.capacityTB} TB</strong>
          </td>
          <td style="text-align: end">
            <button class="button is-black" on:click={() => deleteEntry(item.uuid)}>
              <ion-icon class="icon" name="close-outline" />
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
