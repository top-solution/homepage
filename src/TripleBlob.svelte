<svelte:options tag="ts-triple-blob" />

<script>
  import Button from "./Button.svelte";
  import Layout from "./Layout.svelte";

  export let title = "";
  export let blobs = [];
  export let buttonLink = "";
</script>

<ts-layout class="triple-blob">
  <h1 class="title-2 triple-blob__title">{title}</h1>
  <div class="triple-blob__container">
    {#each blobs as blob}
      <ts-blob
        interactive="true"
        shape="rectangle"
        style={`max-width: ${blob.width};`}
        fill={blob.color}
        padding="20"
      >
        <div class="triple-blob__text">
          <p class="triple-blob__icon">
            <img
              src={`../img/icons/${blob.icon}`}
              alt="devices icon"
              width="50"
              height="35"
            />
          </p>
          <div class="claim triple-blob__main-text">
            <b>{blob.title}</b>
          </div>
          <p class="triple-blob__subtitle">
            {blob.subtitle}
          </p>
        </div>
      </ts-blob>
    {/each}
  </div>
  <div class="triple-blob__button">
    <ts-button variant="outlined" href={buttonLink} type="button"
      >Scopri</ts-button
    >
  </div>
</ts-layout>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .triple-blob {
    &__container {
      display: flex;
      justify-content: space-between;
      margin-bottom: variables.$ts-spacing-10;
      color: variables.$ts-blue-color;

      @media only screen and (max-width: variables.$ts-tablet-max) {
        flex-wrap: wrap;
        justify-content: center;

        ts-blob {
          margin: variables.$ts-spacing-2 0;
        }
      }
    }

    &__text {
      text-align: center;
    }

    &__title {
      text-align: center;
      margin-bottom: variables.$ts-spacing-10;
      margin-top: variables.$ts-spacing-10;
    }

    &__icon,
    &__main-text {
      margin-bottom: variables.$ts-spacing-1;
    }

    &__subtitle {
      font-size: 20px;
      font-weight: 400;
    }

    &__button {
      display: flex;
      justify-content: center;
    }
  }
</style>
