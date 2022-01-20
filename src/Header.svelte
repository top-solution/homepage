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
        height="45"
      />
    </div>
    <div class="nav__link">
      <ul>
        <li><a href="about.html"><strong>HR</strong></a></li>
        <li><a href="about.html"><strong>DEV</strong></a></li>
        <li><a href="about.html"><strong>L'AZIENDA</strong></a></li>
        <li><a href="../pages/team.html"><strong>IL TEAM</strong></a></li>
        <li><a href="./contacts.html"><strong>CONTATTI</strong></a></li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .sub-header {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    align-items: center;
    margin-top: 12px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
  }

  .nav__blob {
    display: initial;
  }

  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    color: variables.$ts-blue-color;
  }

  li {
    font-size: 24px;
    line-height: 28px;
  }

  li:hover {
    color: variables.$ts-blue-color-hovering;
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
    width: 34px;
    height: 14px;
    margin: 0 16px;
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
    background-color: rgba(49, 39, 131, 0.4);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    /* left: 4px; */
    right: 20px;
    bottom: -7px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-image: url("img/languageSwitcher/en.svg");
  }

  input:checked + .slider:before {
    background-image: url("img/languageSwitcher/it.svg");
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
