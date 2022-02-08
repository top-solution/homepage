<svelte:options tag="ts-ht-textfield" />

<script>
  import { createEventDispatcher, onMount } from "svelte";

  const svelteDispatch = createEventDispatcher();

  let parentEl = null;

  onMount(() => {
    parentEl.style = `
      max-height: 0.1px;
      max-width: 0.1px;
      overflow: hidden;
    `;
  });

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };
</script>

<!--
  Mitigate spam with https://www.thryv.com/blog/honeypot-technique-html-form-spam-protection/
  This ugly field should be displayed and be filled by the unknowingly bots
  If JS is enabled, this field is going to be hidden (unless bots run JS, they should not be able
  to know that this field is an honeypot)
  -->

<div bind:this={parentEl} style="">
  <input
    id="website"
    name="website"
    tabindex="-1"
    type="text"
    value=""
    on:change={(e) => {
      dispatch("change");
    }}
    on:keyup={(e) => {
      dispatch("change");
    }}
    on:keydown={(e) => {
      dispatch("change");
    }}
  />
</div>
