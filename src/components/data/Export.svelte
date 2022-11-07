<script lang="ts">
  import { _ } from "svelte-i18n";
  import { cctvItems, capacityTB } from "./../../shared/stores";

  function exportData() {
    // creating a string that represents the csv data
    let csv: string = "";
    csv += `"Camera Type","Compression","FPS","Hours/Day","Days","Quantity","Terabyte"\n`;
    $cctvItems.forEach((element) => {
      csv += `"${element.camrea.pixelsVertical}*${element.camrea.pixelsHorizontal}*${element.camrea.pixelDepthBit}",`;
      csv += `"${element.codec.name}","${element.fps}","${element.recHoursPerDay}","${element.recDays}"`;
      csv += `,"${element.quantity}","${dotToComma(element.capacityTB)}"\n`;
    });
    csv += `,,,,,"SUM:","${dotToComma($capacityTB)}"\n`;
    // creating blob an feeding him the csv data
    let blob = new Blob([csv], { type: "text/csv" });
    // creating a url to access the blob
    let url = window.URL.createObjectURL(blob);
    // creating a anchor element an linking the blob to it
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    // filename
    a.download = "CCTV-Items.csv";
    // download the file
    a.click();
    window.URL.revokeObjectURL(url);
  }

  function dotToComma(num: number): string {
    let str: string = num.toString().replace(".", ",");
    return str;
  }
</script>

<button class="button is-black" on:click={exportData}>
  <ion-icon class="icon" name="code-download-outline" />
  <p>{$_("navbar.export")}</p>
</button>
