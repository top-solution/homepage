<svelte:options tag="ts-triple-blob" />

<script>
  import { onMount } from "svelte/internal";
  export let title = "";
  export let blobs = "";
  export let buttonlink = "";

  let blobsObj = [];
  onMount(() => {
    setTimeout(() => {
      blobsObj = JSON.parse(blobs);
    }, 500);
  });

</script>

<div class="triple-blob">
  <h1 class="title-2 triple-blob__title">{title}</h1>
  <div class="triple-blob__container">
    {#each blobsObj as blob}
      <a class="triple-blob__container__link" href={blob.href}>
        <ts-blob
          interactive="true"
          shape="rectangle"
          style={`max-width: ${blob.width};`}
          fill={blob.color}
          padding="20"
          clickable="true"
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
      </a>
    {/each}
  </div>
  <div class="triple-blob__button">
    <ts-button variant="outlined" href={buttonlink} type="button">
      Scopri
    </ts-button>
  </div>
</div>

<style lang="scss">
  @use "../styles/variables";

  @import "../styles/main.scss";

  .triple-blob {
    &__container {
      display: flex;
      justify-content: space-between;
      margin-bottom: variables.$ts-spacing-10;
      color: variables.$ts-blue-color;

      @media only screen and (max-width: variables.$ts-tablet-max) {
        overflow-x: auto;
        align-items: center;
        min-height: 400px;
        margin-bottom: variables.$ts-spacing-1;
        margin-left: -(variables.$ts-spacing-6);
        margin-right: -(variables.$ts-spacing-6);

        &__link {
          margin: 0 variables.$ts-spacing-2 !important;
          height: 100%;
          min-width: 260px;
          flex-basis: 100%;
        }
      }
    }

    &__container__link {
      margin: 0 variables.$ts-spacing-2 !important;
      min-width: 260px;

      &:first-of-type {
        margin-left: 0 !important;
      }
      &:last-of-type {
        margin-right: 0 !important;
      }

      @media only screen and (max-width: variables.$ts-tablet-max) {
        &:first-of-type {
          margin-left: variables.$ts-spacing-6 !important;
        }
        &:last-of-type {
          margin-right: variables.$ts-spacing-6 !important;
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

      @media only screen and (max-width: variables.$ts-mobile-max) {
        margin-bottom: 0;
      }
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

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
</style>
