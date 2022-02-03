<svelte:options tag="ts-header" />

<script>
  export let color = "light"; //light, dark

  let menuIsOpened = false;

  let headerHeight = "height: 0px";
  function handleOpenMenu(event) {
    menuIsOpened = !menuIsOpened;
    if (menuIsOpened) {
      headerHeight = "height: 100vh;";
    } else headerHeight = "height: 0px";
  }
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
      <img
        src="img/topsolution_logo_{color}.svg"
        alt="top Solution"
        width="150"
        height="45"
      /></a
    >
    <div class="header__link">
      <a href="about.html"><strong>HR</strong></a>
      <a href="about.html"><strong>DEV</strong></a>
      <a href="company.html"><strong>AZIENDA</strong></a>
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
        src="img/topsolution_logo_{color}.svg"
        alt="top Solution"
        height="70"
      /></a
    >
    <img
      src="img/header/hexMenu.svg"
      alt="Hex"
      width="158"
      height="175"
      class="header-mobile__hex"
    />

    <img
      src="img/header/hamburgerClose.svg"
      alt="top Solution"
      width="150"
      height="45"
      class="header-mobile__hamburger"
      class:hide={menuIsOpened === false}
      on:click={handleOpenMenu}
    />
    <img
      src="img/header/hamburger.svg"
      alt="top Solution"
      width="150"
      height="45"
      class="header-mobile__hamburger"
      class:hide={menuIsOpened === true}
      on:click={handleOpenMenu}
    />
  </div>
  <div class="header-mobile__wrapper" class:hide={menuIsOpened === false}>
    <div class="white">
      <img
        src="img/header/blobHeaderMobile.svg"
        alt="Main Hex Mobile"
        class="header-mobile__blob"
      />
      <img
        src="img/header/hexMenuMobile.svg"
        alt="Main Hex Mobile"
        class="header-mobile__main-hex"
        width="500"
        height="500"
      />
      <div class="header-mobile__links">
        <a href="index.html">HOME</a>
        <a href="about.html"
          >HR
          <span class="header-mobile__links--slime">Risorse Umane</span></a
        >
        <a href="about.html"
          >DEV
          <span class="header-mobile__links--slime">Sviluppo Software</span></a
        >
        <a href="index.html#customers">TARIFFE</a>
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
        <div
          class="header-mobile__contacts"
          class:hide={menuIsOpened === false}
        >
          <div class="header-mobile__contacts--item">
            <img src="img/icons/phone.svg" alt="" /><a href="tel:+39 0112488280"
              ><span>+39 0112488280</span></a
            >
          </div>
          <div class="header-mobile__contacts--item">
            <img src="img/icons/mail.svg" alt="" /><a
              href="mailto:info@topsolution.it"
              ><span>info@topsolution.it</span></a
            >
          </div>
          <div class="header-mobile__contacts--item">
            <img src="img/icons/pin.svg" alt="" />
            <span
              >Sede Legale: Corso Regina Margherita, 254 10144 Torino TO</span
            >
          </div>
          <div class="header-mobile__contacts--item">
            <img src="img/icons/pin.svg" alt="" /><span
              >Sede Operativa: Via Livorno, 60 B2 Lab, 10144 Torino TO</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "./styles/variables";
  @use "@material/tooltip";
  @use "@material/tooltip/styles";

  @import "./styles/main.scss";

  header {
    @media only screen and (max-width: variables.$ts-mobile-max) {
      display: none;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__link {
      display: flex;
      flex-wrap: wrap;

      a {
        margin: 0 25px;
        text-decoration: none;
        font-size: 24px;
        line-height: 28px;

        &:hover {
          color: variables.$ts-blue-color-hovering;
          text-decoration: underline;
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

    &__wrapper {
      position: relative;
      max-height: 0;
      transition: opacity variables.$ts-transition-timing-default
        variables.$ts-transition-function-default;
    }

    &__main-hex {
      position: absolute;
      z-index: -1;
      margin-left: 50%;
      transform: translate(-50%, 0);
    }

    &__blob {
      position: absolute;
      z-index: -1;
      top: -100px;
      right: -75px;
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
      top: -40px;
      right: -50px;
      transform: rotate(-10deg);
    }

    &__hamburger {
      z-index: 1;
      position: absolute;
      top: 35px;
      right: -30px;
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
      margin-top: 56px;
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
      margin-top: variables.$ts-spacing-15;
      color: variables.$ts-blue-color;
      transition: opacity variables.$ts-transition-timing-slow
        variables.$ts-transition-function-default;

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
        margin: 0 variables.$ts-spacing-2;
        align-items: center;
        min-height: 44px;
        font-size: 20px;
        font-weight: 400;

        img {
          width: 22px;
          height: 22px;
        }
      }
    }

    .white {
      z-index: 999;
      background-color: white;
    }
  }

  .sub-header {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    align-items: center;
    margin-top: 12px;

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
      height: 26px;
      width: 26px;
      right: 20px;
      bottom: -7px;
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

  .white {
    transition: opacity variables.$ts-transition-timing-default
      variables.$ts-transition-function-default;
  }
</style>
