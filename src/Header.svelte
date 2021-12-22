<svelte:options tag="ts-header" />

<script>
  export let color = "light"; //light, dark
</script>

<header>
  <div class="sub-header">
    <span>ENG</span>
    <label class="switch">
      <input type="checkbox" checked />
      <span class="slider round" />
    </label>
    <span>ITA</span>
  </div>
  <nav>
    <div class="nav__logo">
      <img
        src="img/topsolution_logo_{color}.svg"
        alt="top Solution"
        width="150"
        height="70"
      />
    </div>
    <div class="nav__link">
      <ul>
        <li><a href="about.html"><strong>HR</strong></a></li>
        <li><a href="about.html"><strong>DEV</strong></a></li>
        <li><a href="about.html"><strong>L'AZIENDA</strong></a></li>
        <li><a href="team.html"><strong>IL TEAM</strong></a></li>
        <li><a href="contact.html"><strong>CONTATTI</strong></a></li>
      </ul>
    </div>
  </nav>
</header>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .sub-header {
    display: flex;
    min-height: 50px;
    justify-content: flex-end;
    align-items: center;
  }

  nav {
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
  }

  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    color: var(--ts-blue-color);
  }

  li {
    font-size: 24px;
    line-height: 28px;
  }

  li:hover {
    color: var(--ts-blue-color-hovering);
    text-decoration: underline;
  }

  a {
    margin: 0 25px;
    text-decoration: none;
    font-size: 24px;
    line-height: 28px;
  }

  a:hover {
    padding-bottom: 5px;
    box-shadow: inset 0 -2px 0 0 #fff;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0 8px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
