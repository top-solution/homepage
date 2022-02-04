<svelte:options tag="ts-request-info" />

<script>
  import "@material/ts-select";
  import "@material/ts-textfield";
  import "@material/mwc-textarea";
  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };

  let form = {
    name: "",
    surname: "",
    role: "",
    companyName: "",
    employees: "",
    industry: "",
    email: "",
    message: "",
  };

  let formErrors = {
    name: null,
    role: null,
    companyName: null,
    employees: null,
    industry: null,
    email: null,
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || form.name.length === 0) {
      formErrors.name = " ";
    }
    if (!form.role || form.role.length === 0) {
      formErrors.role = " ";
    }
    if (!form.companyName || form.companyName.length === 0) {
      formErrors.companyName = " ";
    }
    if (!form.employees || form.employees.length === 0) {
      formErrors.employees = " ";
    }
    if (!form.industry || form.industry.length === 0) {
      formErrors.industry = " ";
    }
    if (!form.email || form.email.length === 0) {
      formErrors.email = " ";
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) == false) {
      formErrors.email = "Indirizzo email non valido";
    }

    if (Object.values(formErrors).find((err) => err !== null)) {
      console.log(formErrors);
      return;
    }

    console.log(event, form);

    form = {
      name: "",
      surname: "",
      role: "",
      companyName: "",
      email: "",
      message: "",
      employees: "",
      industry: "",
    };
    dispatch("formsubmit", {});
  }
</script>

<form class="request-info" on:submit={handleSubmit}>
  <ts-hex
    class="request-info__floating-hex-1"
    width="40"
    fill="#352E6C"
    shadow="true"
  />
  <div class="request-info__drawer">
    <div class="request-info__title-hexagon">
      <!-- TODO: Use hexagon component -->
      <svg
        width="659"
        height="647"
        viewBox="0 0 659 647"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M508.47 350.156L478.849 267.932L448.894 185.832L359.579 172.096L270.198 158.7L210.504 227.188L151.078 295.892L180.698 378.116L210.654 460.216L299.968 473.951L389.35 487.348L449.044 418.859L508.47 350.156Z"
          fill="url(#paint0_linear_811_22064)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_811_22064"
            x1="350.037"
            y1="173.06"
            x2="302.936"
            y2="400.972"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EBEAF3" />
            <stop offset="1" stop-color="#EBEAF3" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <h2 class="title-3 title-form">Richiedi <b>informazioni</b></h2>
    <p class="request-info__subtitle body-1">
      <b>Compila</b> e <b>invia</b> il form per avere<br /> maggiori
      <b>informazioni</b>
      sui nostri <b>servizi</b>
    </p>
    <div class="request-info__form">
      <div class="request-info__form-row">
        <ts-textfield
          class="request-info__textfield request-info__textfield-name"
          name="name"
          label="Nome Cognome *"
          error={formErrors.name}
          value={form.name}
          on:change={(e) => (form.name = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.name = null;
            }
          }}
        />
        <ts-textfield
          class="request-info__textfield request-info__textfield-companyName"
          name="companyName"
          label="Nome azienda*"
          error={formErrors.companyName}
          value={form.companyName}
          on:change={(e) => (form.companyName = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.companyName = null;
            }
          }}
        />
      </div>
      <div class="request-info__form-row">
        <ts-textfield
          class="request-info__textfield request-info__textfield-email"
          name="email"
          type="email"
          label="Email *"
          error={formErrors.email}
          value={form.email}
          on:change={(e) => (form.email = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.email = null;
            }
          }}
        />
        <ts-textfield
          class="request-info__textfield request-info__textfield-role"
          name="role"
          label="Ruolo *"
          error={formErrors.role}
          value={form.role}
          on:change={(e) => (form.role = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.role = null;
            }
          }}
        />
      </div>
      <div class="request-info__form-row">
        <ts-select
          class="request-info__textfield request-info__textfield-employees"
          name="employees"
          label="Numero di dipendenti"
          error={formErrors.employees}
          value={form.employees}
          on:change={(e) => {
            form.employees = e.target.value;

            if (e.target.value.length) {
              formErrors.employees = null;
            }
          }}
          options={[
            { value: "", text: "" },
            { value: "1", text: "1-15" },
            { value: "16", text: "16-50" },
            { value: "50", text: "Oltre 50" },
          ]}
        />
        <ts-select
          class="request-info__textfield request-info__textfield-industry"
          name="industry"
          label="Settore"
          error={formErrors.industry}
          value={form.industry}
          on:change={(e) => {
            form.industry = e.target.value;

            if (e.target.value.length) {
              formErrors.industry = null;
            }
          }}
          options={[
            { value: "", text: "" },
            { value: "it", text: "IT" },
            { value: "manifacturing", text: "Manifattura" },
            { value: "servizi", text: "Servizi" },
          ]}
        />
      </div>

      <div class="request-info__form-row">
        <ts-textfield
          class="request-info__textfield request-info__textfield-message"
          textarea
          name="message"
          label="Messaggio"
          rows="3"
          value={form.message}
          on:change={(e) => (form.message = e.target.value)}
        />
      </div>
      <div class="request-info__submit-button-form-row">
        <ts-button
          class="request-info__submit"
          component="button"
          variant="secondary"
          type="submit"
          on:click={handleSubmit}
        >
          Invia
        </ts-button>
      </div>
    </div>
  </div>
</form>

<style lang="scss">
  @use "../styles/variables";

  @import "../styles/main.scss";

  .request-info {
    position: relative;
    margin-top: variables.$ts-spacing-15;

    &__floating-hex-1 {
      position: absolute;
      top: -50px;
      right: 15%;
    }

    &__drawer {
      position: relative;
    }

    & h2 {
      text-align: center;
      margin-bottom: variables.$ts-spacing-4;
    }

    &__subtitle {
      text-align: center;
      margin: 0;
    }

    &__title-hexagon {
      position: absolute;
      z-index: -1;
      top: -220px;
      margin-left: 50%;
      transform: translate(-50%, 0);
    }

    &__form {
      margin: variables.$ts-spacing-6 0 variables.$ts-spacing-15;
      display: block;
    }

    &__form-row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 (variables.$ts-spacing-1 * -1) 0;
    }

    &__textfield {
      margin: 0 variables.$ts-spacing-1 variables.$ts-spacing-3;

      flex: 1 1 100%;

      &__employees {
        margin-right: variables.$ts-spacing-1;
      }
    }

    .request-info__submit-button-form-row {
      display: flex;
    }

    .request-info__submit {
      margin: 0 auto;
    }

    @media only screen and (min-width: variables.$ts-tablet-max) {
      & {
        margin-top: 0;
      }

      &__form-row {
        margin: 0 (variables.$ts-spacing-1 * -1) variables.$ts-spacing-3;
      }

      &__textfield {
        margin: 0 variables.$ts-spacing-1 0;

        &-name,
        &-surname,
        &-companyName,
        &-employees {
          flex: 1 1 0;
          margin-right: variables.$ts-spacing-1;
        }

        &-role,
        &-email,
        &-industry {
          flex: 1 1 0;
        }

        &-message {
          flex: 0 1 100%;
        }
      }
    }
  }
</style>
