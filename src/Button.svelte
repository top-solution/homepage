<svelte:options tag="svelte-button" />

<script>
  import debounce from "lodash.debounce";

  export let bg = "transparent";
  export let textColor = "#312783";
  export let text = "Scopri";
  export let border = "none";
  export let href;
  export let interactive = false;

  console.log(bg, textColor)

  let mouseOver = false;
  function handleMouseEnter() {
    mouseOver = true;
  }

  const debouncedHandleMouseEnter = debounce(handleMouseEnter);

  function handleMouseLeave() {
    mouseOver = false;
  }
  const debouncedHandleMouseLeave = debounce(handleMouseLeave);


  if (!window.customElements.get('svelte-button')) {
   window.customElements.define('svelte-button', Button);
}
</script>

<div
  class="button"
  style={`background-color: ${bg}; border: ${border}`}
  on:mouseenter={interactive === "true" && debouncedHandleMouseEnter}
  on:mouseleave={interactive === "true" && debouncedHandleMouseLeave}
>
  <a {href} style={`color: ${textColor};`}>
    <strong>{text}</strong>
    {#if mouseOver === true}
      <img
        class="ml-12"
        src="../img/icons/rightArrow.svg"
        alt="arrow icon"
        width="16"
        height="16"
      />
    {/if}
  </a>
</div>
