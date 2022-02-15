<svelte:options tag="ts-header" />

<script>
  import { contacts } from "./contacts";
  export let color = "light"; //light, dark

  let hovering = true;

  let menuIsOpened = false;
  let headerHeight = "height: 0px";
  function handleOpenMenu(event) {
    menuIsOpened = !menuIsOpened;
    if (menuIsOpened) {
      headerHeight = "height: 100vh;";
      document.body.style.position = "fixed";
    } else {
      headerHeight = "height: 0px";
      document.body.style.position = "";
    }
  }

  function closeHeaderMobileMenu() {
    if (window.innerWidth < 600) {
      menuIsOpened = false;
      headerHeight = "height: 0px";
      document.body.style.position = "";
    }
  }

  window.onresize = closeHeaderMobileMenu;
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
  <div class="header">
    <a href="index.html">
      <img src="img/topsolution_logo_{color}.svg" alt="top Solution" /></a
    >
    <div class="header__link">
      <a href="hr-development.html" class="header__link--hr-tooltip"
        ><strong
          >HR <div class="header__link--tooltips">Risorse Umane</div></strong
        ></a
      >

      <a href="software-development.html"
        ><strong
          >DEV <div class="header__link--tooltips">
            Sviluppo Software
          </div></strong
        ></a
      >
      <a href="company.html"><strong>AZIENDA </strong></a>
      <a href="team.html"><strong>TEAM</strong></a>
      <a href="contacts.html"><strong>CONTATTI</strong></a>
    </div>
  </div>
</header>

<div class="header-mobile" style={headerHeight}>
  <div class="header-mobile__menu">
    <a href="index.html">
      <img
        class="header-mobile__logo"
        src="img/topsolution_logo_light.svg"
        alt="top Solution"
        height="70"
      /></a
    >
    <img src="img/header/hexMenu.svg" alt="Hex" class="header-mobile__hex" />
    <img
      src="img/header/hamburgerClose.svg"
      alt="top Solution"
      width="50"
      height="45"
      class="header-mobile__hamburger"
      class:hide={menuIsOpened === false}
      on:click={handleOpenMenu}
    />
    <img
      src="img/header/hamburger.svg"
      alt="top Solution"
      width="50"
      height="45"
      class="header-mobile__hamburger"
      class:hide={menuIsOpened === true}
      on:click={handleOpenMenu}
    />
  </div>

  <div class="header-mobile__wrapper" class:hide={menuIsOpened === false}>
    <img
      src="img/header/blobHeaderMobile.svg"
      alt="Main Hex Mobile"
      class="header-mobile__blob"
    />
    <img
      src="img/header/hexMenuMobile.svg"
      alt="Main Hex Mobile"
      class="header-mobile__main-hex"
    />
    <img
      src="img/header/header-mobile-hex.svg"
      alt="Hex"
      class="header-mobile__hex-group"
    />

    <div class="header-mobile__links">
      <a href="index.html">HOME</a>
      <a href="hr-development.html"
        >HR
        <span class="header-mobile__links--slime">Risorse Umane</span></a
      >
      <!-- <a href="about.html"
        >DEV
        <span class="header-mobile__links--slime">Sviluppo Software</span></a
      > -->
      <a href="haka.html#plans">TARIFFE</a>
      <a href="company.html">AZIENDA</a>
      <a href="team.html">TEAM</a>
      <a href="contacts.html">CONTATTI</a>
      <div class="sub-header">
        <span>ENG</span>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round" />
        </label>
        <span>ITA</span>
      </div>
      <div class="header-mobile__contacts" class:hide={menuIsOpened === false}>
        <div class="header-mobile__contacts--item">
          <img src="img/icons/phone.svg" alt="" />
          <a href={`tel:${contacts.phone}`}>
            <span>{contacts.phone}</span>
          </a>
          a
        </div>
        <div class="header-mobile__contacts--item">
          <img src="img/icons/mail.svg" alt="" />
          <a href={`mailto:${contacts.email}`}>
            <span>{contacts.email}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  $hamburger-z-index: 1000;

  header {
    @media only screen and (max-width: variables.$ts-mobile-max) {
      display: none;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: variables.$ts-spacing-1 0;

    img {
      height: 50px;
    }

    &__link {
      display: flex;
      flex-wrap: wrap;

      a {
        margin: 0 variables.$ts-spacing-3;
        text-decoration: none;
        font-size: 24px;
        line-height: 28px;

        &:hover {
          color: variables.$ts-blue-color-hovering;
          text-decoration: underline;
        }

        &:last-of-type {
          margin-right: variables.$ts-spacing-2;
        }
      }

      &--tooltips {
        background: rgba(97, 97, 97, 0.9);
        border-radius: 4px;
        color: white;
        padding: 0 4px;
        font-weight: 500;
        position: absolute;
        margin-left: -20;
        margin-top: 5;
        z-index: 10;
        font-size: 10px;
        max-height: 26px;
        display: none;
      }

      &--hr-tooltip:hover {
        .header__link--tooltips {
          display: block;
        }
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      display: none;
    }
  }

  .header-mobile {
    min-height: 100px;

    @media only screen and (min-width: variables.$ts-mobile-max) {
      display: none;
    }

    &__hex-group {
      position: absolute;
      z-index: -1;
      top: -160px;
      left: -185px;
      pointer-events: none;
    }

    &__wrapper {
      position: relative;
      top: -35px;
      transition: opacity variables.$ts-transition-timing-default
        variables.$ts-transition-function-default;
    }

    &__main-hex {
      position: absolute;
      z-index: -1;
      margin-left: 50%;
      transform: translate(-50%, 0);
      top: 10vw;
    }

    &__blob {
      position: absolute;
      z-index: -1;
      top: -30px;
      right: -75px;
      pointer-events: none;
    }

    &__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      margin: 24px;
      max-width: 220px;
    }

    &__hex {
      position: absolute;
      top: -35px;
      right: -130px;
      overflow: hidden;
      z-index: $hamburger-z-index;
    }

    &__hamburger {
      z-index: $hamburger-z-index + 10;
      position: absolute;
      top: 30px;
      right: 15px;
      cursor: pointer;
      transition: opacity variables.$ts-transition-timing-default
        variables.$ts-transition-function-default;
    }

    &__links {
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 1;
      width: 100%;
      margin-top: 25vw;
      align-items: center;
      justify-content: center;

      &--slime {
        font-size: 18px;
        font-weight: 400;
        margin-left: 8px;
      }

      a {
        margin: variables.$ts-spacing 0;
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: variables.$ts-white-color;
      }
    }

    &__contacts {
      margin-top: variables.$ts-spacing-10;
      color: variables.$ts-blue-color;
      transition: opacity variables.$ts-transition-timing-slow
        variables.$ts-transition-function-default;
      width: 100%;

      a {
        color: variables.$ts-blue-color;
        font-size: 20px;
        font-weight: 400;
      }

      span {
        margin-left: variables.$ts-spacing-2;
      }

      &--item {
        display: flex;
        justify-content: flex-start;
        margin: variables.$ts-spacing-1 variables.$ts-spacing-3;
        align-items: center;
        min-height: 44px;
        font-size: 20px;
        font-weight: 400;

        img {
          width: 22px;
          height: 22px;
        }
      }

      @media only screen and (max-height: 780px) {
        display: none;
      }
    }
  }

  .sub-header {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    align-items: center;
    padding: variables.$ts-spacing-3 variables.$ts-spacing-1
      variables.$ts-spacing-2;

    span {
      @media only screen and (max-width: variables.$ts-mobile-max) {
        color: variables.$ts-white-color;
      }
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 14px;
    margin: 0 16px;

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }
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

    @media only screen and (max-width: variables.$ts-mobile-max) {
      background-color: variables.$ts-blue-color-hovering;
    }

    &:before {
      position: absolute;
      content: "";
      height: 23px;
      width: 23px;
      right: 20px;
      bottom: -5px;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      background-image: url("img/languageSwitcher/en.svg");
    }
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

    &:before {
      border-radius: 50%;
    }
  }

  /* Hamburgers */

  .hide {
    opacity: 0;
  }

  .body-fixed {
    position: fixed;
  }
</style>
