<svelte:options tag="svelte-button" />

<script>
  export let bg = "transparent";
  export let textColor = "#312783";
  export let text = "Scopri";
  export let href;
  export let interactive = false;

  //Manage Style and mouse enter //FIXME
</script>

<div class="button">
  <a {href} style={`background-color: ${bg}; color: ${textColor}`}>
    <span class="spacing"> {text} </span>
    <img
      on:mouseenter={interactive === "true"}
      src="../img/icons/rightArrow.svg"
      alt="arrow icon"
      width="16"
      height="16"
    />
  </a>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .button {
    padding: 8px 22px;
    border-radius: 4px;
    text-transform: uppercase;
    border: 1px solid rgba(49, 39, 131, 0.5);
  }

  .spacing {
    margin-left: 12px;
  }
</style>
