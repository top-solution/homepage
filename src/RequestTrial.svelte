<svelte:options tag="ts-request-trial" />

<script>
  import "@material/ts-select";
  import "@material/ts-textfield";
  import "@material/mwc-textarea";
  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();
  const drawerElement = null;
  let drawerOpen = true;

  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };

  let form = {
    name: "",
    role: "",
    companyName: "",
    employees: "",
    industry: "",
    email: "",
    message: "",
    emailAssessor: "",
    emailAssessee: "",
  };

  let formErrors = {
    name: null,
    role: null,
    companyName: null,
    employees: null,
    industry: null,
    email: null,
    emailAssessor: null,
    emailAssessee: null,
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
    if (emailRegexp.test(form.email) == false) {
      formErrors.email = "Indirizzo email non valido";
    }
    if (form.emailAssessee && form.emailAssessee.length !== 0) {
      if (emailRegexp.test(form.emailAssessee) == false) {
        formErrors.emailAssessee = "Indirizzo email non valido";
      }
    }
    if (form.emailAssessor && form.emailAssessor.length !== 0) {
      if (emailRegexp.test(form.emailAssessor) == false) {
        formErrors.emailAssessor = "Indirizzo email non valido";
      }
    }

    if (Object.values(formErrors).find((err) => err !== null)) {
      console.log(formErrors);
      return;
    }

    console.log(event, form);

    form = {
      name: "",
      role: "",
      companyName: "",
      email: "",
      message: "",
      employees: "",
      industry: "",
    };
    dispatch("formsubmit", {});

    drawerOpen = false;
  }
</script>

<form class="request-trial" on:submit={handleSubmit}>
  <div
    class="request-trial__drawer"
    class:request-trial__drawer--open={drawerOpen}
    style={drawerElement
      ? `max-height: ${drawerElement.getBoundingClientRect().height}`
      : undefined}
  >
    <div class="request-trial__title-hexagon">
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
    <h2 class="title-3">Richiedi una <b>prova gratuita</b></h2>
    <p class="request-trial__subtitle">
      <b>Compila</b> e <b>invia</b> il form, il nostro team ti invierà il
      modello per la valutazione delle performance <b>gratuitamente</b>
    </p>
    <div class="request-trial__form">
      <div class="request-trial__form-row">
        <ts-textfield
          id="request-trial__name-textfield"
          name="name"
          label="Nome Cognome*"
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
          id="request-trial__companyName-textfield"
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
      <div class="request-trial__form-row">
        <ts-textfield
          id="request-trial__email-textfield"
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
        <ts-textfield
          id="request-trial__role-textfield"
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
      <div class="request-trial__form-row">
        <ts-select
          id="request-trial__employees-textfield"
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
          id="request-trial__industry-textfield"
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
      <div class="request-trial__form-row">
        <p>
          Inserisci l’email del valutato e del valutatore, in questo modo potrai
          ottenere in autonomia le <b>credenziali</b> per accedere alla
          piattaforma e fruire della <b>prova gratuita</b>.
        </p>
      </div>
      <div class="request-trial__form-row">
        <ts-textfield
          id="request-trial__assessee-email-textfield"
          name="email"
          type="email"
          label="Email valutato"
          error={formErrors.emailAssessee}
          value={form.emailAssessee}
          on:change={(e) => (form.emailAssessee = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.emailAssessee = null;
            }
          }}
        />
        <ts-textfield
          id="request-trial__assessor-email-textfield"
          name="email"
          type="email"
          label="Email valutatore"
          error={formErrors.emailAssessor}
          value={form.emailAssessor}
          on:change={(e) => (form.emailAssessor = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.emailAssessor = null;
            }
          }}
        />
      </div>
      <div id="request-trial__submit-button-form-row">
        <ts-button
          id="request-trial__submit"
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

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .title-3 {
    text-transform: none;
  }

  .request-trial {
    position: relative;
    margin-top: var(--ts-spacing-8);
  }

  .request-trial__drawer {
    position: relative;
    max-height: 0;
    transition: max-height var(--ts-transition-timing-default)
      var(--ts-transition-function-default);
    overflow: hidden;
  }

  .request-trial__drawer--open {
    max-height: 1200px;
  }

  .request-trial h2 {
    text-align: center;
    margin-bottom: var(--ts-spacing-4);
  }

  .request-trial__subtitle {
    text-align: center;
    margin: 0 auto;
    max-width: 730px;
  }

  .request-trial__title-hexagon {
    position: absolute;
    z-index: -1;
    top: -160px;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }

  .request-trial__form {
    margin: var(--ts-spacing-6) 0;
    display: block;
  }

  .request-trial__form-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }

  .request-trial__form-row p {
    font-size: 18px;
    line-height: 21px;
    margin: 0 var(--ts-spacing-2) var(--ts-spacing-2);
  }

  ts-textfield,
  ts-select {
    margin: 0 0 var(--ts-spacing-3);
  }

  ts-textfield,
  ts-select {
    flex: 1 0 100%;
  }

  #request-trial__employees-textfield {
    margin-right: var(--ts-spacing-1);
  }

  #request-trial__submit-button-form-row {
    display: flex;
  }

  #request-trial__submit {
    margin: 0 auto;
  }

  @media only screen and (min-width: 960px) {
    .request-trial {
      margin-top: 0;
    }

    .request-trial__drawer--open {
      max-height: 700px;
    }

    ts-textfield,
    ts-select {
      margin: 0 var(--ts-spacing-2) 0;
    }

    .request-trial__form-row {
      margin: 0 -8px var(--ts-spacing-3);
    }

    #request-trial__name-textfield,
    #request-trial__email-textfield,
    #request-trial__employees-textfield,
    #request-trial__assessee-email-textfield {
      flex: 1 1 0;
      margin-right: var(--ts-spacing-1);
    }

    #request-trial__companyName-textfield,
    #request-trial__role-textfield,
    #request-trial__industry-textfield,
    #request-trial__assessor-email-textfield {
      flex: 1 1 0;
    }
  }
</style>
