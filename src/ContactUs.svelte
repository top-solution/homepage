<svelte:options tag="ts-contact-us" />

<script>
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
    age: "",
    graduation: "",
    graduationGrade: "",
    experience: "",
    email: "",
    phone: "",
    curriculum: null,
  };

  let formErrors = {
    name: null,
    surname: null,
    age: null,
    graduation: null,
    graduationGrade: null,
    experience: null,
    email: null,
    phone: null,
    curriculum: null,
  };

  let curriculumInputElement;

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || form.name.length === 0) {
      formErrors.name = " ";
    }
    if (!form.surname || form.surname.length === 0) {
      formErrors.surname = " ";
    }
    if (!form.age || form.age.length === 0) {
      formErrors.age = " ";
    }
    if (!form.graduation || form.graduation.length === 0) {
      formErrors.graduation = " ";
    }
    if (!form.graduationGrade || form.graduationGrade.length === 0) {
      formErrors.graduationGrade = " ";
    }
    if (!form.experience || form.experience.length === 0) {
      formErrors.experience = " ";
    }
    if (!form.email || form.email.length === 0) {
      formErrors.email = " ";
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) == false) {
      formErrors.email = "Indirizzo email non valido";
    }
    if (!form.curriculum) {
      formErrors.curriculum = "Allegare un CV in formato PDF";
    }

    if (Object.values(formErrors).find((err) => err !== null)) {
      console.log(formErrors);
      return;
    }

    console.log(event, form);

    form = {
      name: "",
      surname: "",
      age: "",
      graduation: "",
      graduationGrade: "",
      experience: "",
      email: "",
      phone: "",
      curriculum: null,
    };

    dispatch("formsubmit", {});
  }
</script>

<form class="contact-us" on:submit={handleSubmit}>
  <!-- TODO: Use hexagon component -->
  <div class="contact-us__separator-hexagon">
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
  <div class="contact-us__drawer" class:contact-us__drawer--open={open}>
    <div class="contact-us__title-hexagon">
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
    <h2 class="title-3 title-form">Candidatura <b>spontanea</b></h2>
    <p class="contact-us__subtitle body-1">
      Vuoi far parte del <b>nostro team</b>?
    </p>
    <p class="contact-us__subtitle body-1">
      <b>Inviaci</b> la tua <b>candidatura spontanea</b>
    </p>
    <div class="contact-us__form">
      <div class="contact-us__form-row">
        <ts-textfield
          id="contact-us__name-textfield"
          outlined
          required
          name="name"
          error={formErrors.name}
          label="Nome"
          value={form.name}
          on:change={(e) => (form.name = e.target.value)}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.name = null;
            }
          }}
        />
        <ts-textfield
          id="contact-us__surname-textfield"
          outlined
          required
          name="surname"
          error={formErrors.surname}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.surname = null;
            }
          }}
          label="Cognome"
          value={form.surname}
          on:change={(e) => (form.surname = e.target.value)}
        />
        <ts-textfield
          id="contact-us__age-textfield"
          outlined
          required
          name="age"
          error={formErrors.age}
          on:keyup={(e) => {
            console.log(e.target.value);

            if (e.target.value.length) {
              formErrors.age = null;
            }
          }}
          type="number"
          min="0"
          max="99"
          label="Età"
          value={form.age}
          on:change={(e) => (form.age = e.target.value)}
        />
      </div>
      <div class="contact-us__form-row">
        <ts-textfield
          id="contact-us__graduation-textfield"
          outlined
          required
          name="graduation"
          error={formErrors.graduation}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.graduation = null;
            }
          }}
          label="Titolo di studio"
          value={form.graduation}
          on:change={(e) => (form.graduation = e.target.value)}
        />
        <ts-textfield
          id="contact-us__graduation-grade-textfield"
          outlined
          required
          name="graduation-grade"
          error={formErrors.graduationGrade}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.graduationGrade = null;
            }
          }}
          type="number"
          label="Votazione"
          min="0"
          max="110"
          value={form.graduationGrade}
          on:change={(e) => (form.graduationGrade = e.target.value)}
        />
        <ts-textfield
          id="contact-us__experience-textfield"
          outlined
          required
          name="experience"
          error={formErrors.experience}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.experience = null;
            }
          }}
          type="number"
          min="0"
          max="99"
          label="Anni di esperienza"
          value={form.experience}
          on:change={(e) => (form.experience = e.target.value)}
        />
      </div>

      <div class="contact-us__form-row">
        <ts-textfield
          id="contact-us__email-textfield"
          outlined
          required
          name="email"
          error={formErrors.email}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.email = null;
            }
          }}
          type="email"
          label="Email"
          value={form.email}
          on:change={(e) => (form.email = e.target.value)}
        />
        <ts-textfield
          id="contact-us__phone-textfield"
          outlined
          name="phone"
          error={formErrors.phone}
          on:keyup={(e) => {
            if (e.target.value.length) {
              formErrors.phone = null;
            }
          }}
          label="Cellulare"
          value={form.phone}
          on:change={(e) => (form.phone = e.target.value)}
        />
      </div>
      {#if form.curriculum}
        <div id="contact-us__cv-form-row">
          <p>
            {`${form.curriculum}`
              .replace("/", "\\")
              .substring(`${form.curriculum}`.lastIndexOf("\\") + 1)}
          </p>
          <img
            src="../img/icons/delete.svg"
            alt="remove icon"
            on:click={(e) => {
              form.curriculum = null;
              curriculumInputElement.value = "";
            }}
          />
        </div>
      {/if}
      <div id="contact-us__cv-button-form-row">
        <input
          type="file"
          id="contact-us__curriculum-upload"
          name="curriculum"
          accept="application/pdf"
          on:change={(e) => {
            form.curriculum = e.target.value;
            formErrors.curriculum = null;
          }}
        />
        {#if formErrors.curriculum}
          <p id="contact-us__cv-error-text">{formErrors.curriculum}</p>
        {/if}
        <label
          class="button"
          id="contact-us__curriculum-upload-label"
          for="contact-us__curriculum-upload"
        >
          ALLEGA CV
          <img src="img/icons/attachment.svg" alt="" />
        </label>
      </div>
      <div id="contact-us__submit-button-form-row">
        <ts-button
          id="contact-us__submit"
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

  .contact-us {
    position: relative;
    margin-top: variables.$ts-spacing-8;
  }

  .contact-us__drawer {
    position: relative;
    max-height: 0;
    transition: max-height variables.$ts-transition-timing-default
      variables.$ts-transition-function-default;
    overflow: hidden;
  }

  .contact-us__drawer--open {
    max-height: 700px;
  }

  .contact-us h2 {
    text-align: center;
    margin-bottom: variables.$ts-spacing-4;
  }

  .contact-us__title {
    margin: variables.$ts-spacing-6 0;
  }

  .contact-us__subtitle {
    text-align: center;
    margin: 0;
  }

  .contact-us__separator-hexagon {
    position: absolute;
    left: -200px;
    top: -500px;
  }

  .contact-us__title-hexagon {
    position: absolute;
    z-index: -1;
    top: -160px;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }

  .contact-us__form {
    margin: variables.$ts-spacing-6 0;
    display: block;
  }

  .contact-us__form-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px 0;
  }

  ts-textfield {
    margin: 0 variables.$ts-spacing-1 variables.$ts-spacing-3;
  }

  #contact-us__curriculum-upload {
    display: none;
  }

  #contact-us__cv-form-row {
    align-items: center;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    height: variables.$ts-spacing-4;
    border-radius: 2px;
    display: flex;
    margin: 0 0 variables.$ts-spacing-2 0;
  }

  #contact-us__cv-form-row p {
    color: black;
    font-size: 15px;
    font-weight: 300;
    margin: 0;
  }

  #contact-us__cv-form-row img {
    width: 18px;
    height: 18px;
    opacity: 0.8;
    margin-left: auto;
  }

  #contact-us__cv-form-row img:hover {
    cursor: pointer;
    opacity: 1;
  }

  #contact-us__cv-button-form-row {
    display: flex;
    align-items: center;
    margin-bottom: variables.$ts-spacing-3;
  }

  #contact-us__curriculum-upload-label {
    /* Fake button, can't use component due to WebComponents limitations */
    color: white;
    background-color: variables.$ts-blue-color;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  #contact-us__curriculum-upload-label img {
    height: 18px;
    margin-left: variables.$ts-spacing-1;
  }

  #contact-us__curriculum-upload-label:hover {
    background-color: variables.$ts-blue-color-light;
  }

  #contact-us__cv-error-text {
    color: var(--mdc-theme-error), #b00020;
    font-size: 16px;
    margin: 0;
    font-weight: 400;
  }

  ts-textfield,
  #contact-us__curriculum-upload-label {
    flex: 1 0 100%;
  }

  #contact-us__graduation-grade-textfield,
  #contact-us__experience-textfield {
    flex: 1 1 auto;
  }

  #contact-us__graduation-grade-textfield {
    margin-right: variables.$ts-spacing-1;
  }

  #contact-us__submit-button-form-row {
    display: flex;
  }

  #contact-us__submit {
    margin: 0 auto;
  }

  @media only screen and (min-width: variables.$ts-tablet-min) {
    .contact-us {
      margin-top: 0;
    }

    .contact-us__drawer--open {
      max-height: 1100px;
    }

    ts-textfield {
      margin: 0 variables.$ts-spacing-1 0;
    }

    .contact-us__form-row {
      margin: 0 -8px variables.$ts-spacing-3;
    }

    #contact-us__name-textfield,
    #contact-us__surname-textfield,
    #contact-us__graduation-textfield,
    #contact-us__email-textfield {
      flex: 1 1 0;
      margin-right: variables.$ts-spacing-1;
    }

    #contact-us__age-textfield,
    #contact-us__graduation-grade-textfield,
    #contact-us__experience-textfield,
    #contact-us__curriculum-upload-label {
      flex: 0 0 172px;
    }

    #contact-us__phone-textfield {
      flex: 0 0 360px;
    }
  }
</style>
