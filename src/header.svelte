<svelte:options tag="svelte-header" />

<div class="sub-header">
  <p>PARr r e e</p>
  <header>
    <nav>
      <div class="nav__logo">
        <img
          src="img/topsolution_logo_dark.svg"
          alt="top-solution_logo"
          width="150"
          height="150"
        />
      </div>
      <div class="nav__link">
        <ul>
          <li><a href="about.html">L'AZIENDA</a></li>
          <li><a href="work.html">IL TEAM</a></li>
          <li><a href="contact.html">CONTATTI</a></li>
        </ul>
      </div>
    </nav>
  </header>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .sub-header {
    background-color: gray;
  }

  nav {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
  }

  ul {
    padding: 0;
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
</style>
