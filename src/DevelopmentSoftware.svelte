<svelte:options tag="ts-development-software" />

<div class="component-container">
  <div class="main-title">SVILUPPO SOFTWARE</div>
  <div class="flex-container">
    <ts-blob interactive="true" shape="rectangle" style="max-width: 300px;">
      <div style="text-align: center;">
        <p>
          <img
            src="../img/icons/devices.svg"
            alt="devices icon"
            width="50"
            height="35"
          />
        </p>
        <b>EXAGON</b>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
      </div>
    </ts-blob>
    <ts-blob interactive="true" shape="rectangle" style="max-width: 300px;">
      <div style="text-align: center;">
        <b>OCTAGON</b>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
      </div>
    </ts-blob>
    <ts-blob interactive="true" shape="rectangle" style="max-width: 300px;">
      <div style="text-align: center;">
        <b>RECTANGLE</b>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
      </div>
    </ts-blob>
  </div>
  <button type="button">scopri</button>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .flex-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    color: #312783;
  }
</style>
