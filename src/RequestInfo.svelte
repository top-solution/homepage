<svelte:options tag="ts-request-info" />

<script>
  import "@material/ts-select";
  import "@material/ts-textfield";
  import "@material/mwc-textarea";
  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";

  export let open = false;

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
    surname: null,
    role: null,
    companyName: null,
    employees: null,
    industry: null,
    email: null,
  };

  let formElement;

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || form.name.length === 0) {
      formErrors.name = " ";
    }
    if (!form.surname || form.surname.length === 0) {
      formErrors.surname = " ";
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

<form bind:this={formElement} class="request-info" on:submit={handleSubmit}>
  <!-- TODO: Use hexagon component -->
  <div class="request-info__separator-hexagon">
    <svg
      width="111"
      height="123"
      viewBox="0 0 111 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.495259 87.8533L2.85383 57.3628L5.33124 26.8817L32.9161 13.679L60.5522 0.584007L85.7784 17.8718L110.937 35.2579L108.579 65.7484L106.101 96.2295L78.5163 109.432L50.8802 122.527L25.6539 105.239L0.495259 87.8533Z"
        fill="#312783"
      />
    </svg>
  </div>
  <div class="request-info__drawer" class:request-info__drawer--open={open}>
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
    <h2 class="title-3">Richiedi <b>informazioni</b></h2>
    <p class="request-info__subtitle">
      <b>Compila</b> e <b>invia</b> il form per avere maggiori
      <b>informazioni</b>
      sui nostri <b>servizi</b>
    </p>
    <p class="request-info__subtitle">
      <b>Inviaci</b> la tua <b>candidatura spontanea</b>
    </p>
    <div class="request-info__form">
      <div class="request-info__form-row">
        <ts-textfield
          id="request-info__name-textfield"
          name="name"
          label="Nome*"
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
          id="request-info__surname-textfield"
          name="surname"
          label="Cognome*"
          error={formErrors.surname}
          value={form.surname}
          on:change={(e) => (form.surname = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.surname = null;
            }
          }}
        />
        <ts-textfield
          id="request-info__role-textfield"
          name="role"
          label="Ruolo*"
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
        <ts-textfield
          id="request-info__companyName-textfield"
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
        <ts-textfield
          id="request-info__email-textfield"
          name="email"
          type="email"
          label="Email*"
          error={formErrors.email}
          value={form.email}
          on:change={(e) => (form.email = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.email = null;
            }
          }}
        />
      </div>
      <!-- value={form.employees}
      on:change={(e) => (form.employees = e.target.value)} -->
      <div class="request-info__form-row">
        <ts-select
          id="request-info__employees-textfield"
          name="employees"
          label="Numero di dipendenti*"
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
          id="request-info__industry-textfield"
          name="industry"
          label="Settore*"
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
          id="request-info__message-textfield"
          textarea
          name="message"
          label="Messaggio"
          rows="3"
          value={form.message}
          on:change={(e) => (form.message = e.target.value)}
        />
      </div>
      <div id="request-info__submit-button-form-row">
        <ts-button
          id="request-info__submit"
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
  @use "./styles/variables";

  @import "./styles/main.scss";

  .request-info {
    position: relative;
    margin-top: variables.$ts-spacing-8;
  }

  .request-info__drawer {
    position: relative;
    max-height: 0;
    transition: max-height variables.$ts-transition-timing-default
      variables.$ts-transition-function-default;
    overflow: hidden;
  }

  .request-info__drawer--open {
    max-height: 1200px;
  }

  .request-info h2 {
    text-align: center;
    margin-bottom: variables.$ts-spacing-4;
  }

  .request-info__subtitle {
    text-align: center;
    margin: 0;
  }

  .request-info__separator-hexagon {
    position: absolute;
    left: -200px;
    top: -500px;
  }

  .request-info__title-hexagon {
    position: absolute;
    z-index: -1;
    top: -160px;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }

  .request-info__form {
    margin: variables.$ts-spacing-6 0;
    display: block;
  }

  .request-info__form-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }

  ts-textfield,
  ts-select {
    margin: 0 0 variables.$ts-spacing-3;
  }

  ts-textfield,
  ts-select {
    flex: 1 0 100%;
  }

  #request-info__employees-textfield {
    margin-right: variables.$ts-spacing-1;
  }

  #request-info__submit-button-form-row {
    display: flex;
  }

  #request-info__submit {
    margin: 0 auto;
  }

  /* var(--mdc-theme-error, #b00020); */

  @media only screen and (min-width: variables.$ts-tablet-max) {
    .request-info {
      margin-top: 0;
    }

    .request-info__drawer--open {
      max-height: 700px;
    }

    ts-textfield,
    ts-select {
      margin: 0 variables.$ts-spacing-2 0;
    }

    .request-info__form-row {
      margin: 0 -8px variables.$ts-spacing-3;
    }

    #request-info__name-textfield,
    #request-info__surname-textfield,
    #request-info__companyName-textfield,
    #request-info__employees-textfield {
      flex: 1 1 0;
      margin-right: variables.$ts-spacing-1;
    }

    #request-info__role-textfield,
    #request-info__email-textfield,
    #request-info__industry-textfield {
      flex: 1 1 0;
    }

    #request-info__message-textfield {
      flex: 0 1 100%;
    }
  }
</style>
