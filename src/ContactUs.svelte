<svelte:options tag="ts-contact-us" />

<script>
  import "@material/mwc-textfield";
  import { onMount } from "svelte";
  let submitted = false;

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

  let nameElement;
  let surnameElement;
  let ageElement;
  let graduationElement;
  let graduationGradeElement;
  let experienceElement;
  let emailElement;
  let phoneElement;
  let curriculumInputElement;
  let curriculumError;

  function handleSubmit(event) {
    event.preventDefault();

    if (nameElement) {
      nameElement.blur();
    }

    if (surnameElement) {
      surnameElement.blur();
    }

    if (ageElement) {
      ageElement.blur();
    }

    if (graduationElement) {
      graduationElement.blur();
    }

    if (graduationGradeElement) {
      graduationGradeElement.blur();
    }

    if (experienceElement) {
      experienceElement.blur();
    }

    if (emailElement) {
      emailElement.blur();
    }

    if (phoneElement) {
      phoneElement.blur();
    }

    if (!form.curriculum || from.curriculum.length === "") {
      curriculumError = "Allegare un CV in formato PDF";
      return false;
    }

    if (!form.surname || form.name.length === 0) {
      return false;
    }
    if (!form.age || form.name.length === 0) {
      return false;
    }
    if (!form.graduation || form.name.length === 0) {
      return false;
    }
    if (!form.graduationGrade || form.name.length === 0) {
      return false;
    }
    if (!form.experience || form.name.length === 0) {
      return false;
    }
    if (!form.email || form.name.length === 0) {
      return false;
    }
    if (!form.phone || form.name.length === 0) {
      return false;
    }

    form = {};

    console.log(event, form, nameElement);
  }

  onMount(() => {
    console.log(nameElement);
  });
</script>

<form class="contact-us" on:submit={handleSubmit}>
  <!-- TODO: Use hexagon component -->
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 334 406"
    style="displaY: block; max-width: 350px; margin: auto;"
  >
    <g filter="url(#a)">
      <path
        d="m80.338 190.838 3.689-47.689L87.9 95.475l43.145-20.65 43.224-20.48 39.455 27.038 39.35 27.193-3.689 47.689-3.875 47.674-43.144 20.649-43.225 20.482-39.455-27.039-39.35-27.193Z"
        fill="#4857A3"
      />
    </g>
    <defs>
      <filter
        id="a"
        x=".338"
        y="54.344"
        width="332.736"
        height="350.726"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="80" />
        <feGaussianBlur stdDeviation="40" />
        <feColorMatrix
          values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.396078 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_876_11297"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_876_11297"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
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
  <h2>Candidatura <b>spontanea</b></h2>
  <p class="contact-us__subtitle">
    Vuoi far parte del <b>nostro team</b>?
  </p>
  <p class="contact-us__subtitle">
    <b>Inviaci</b> la tua <b>candidatura spontanea</b>
  </p>
  <div class="contact-us__form">
    <div class="contact-us__form-row">
      <mwc-textfield
        id="contact-us__name-textfield"
        outlined
        required
        name="name"
        label="Nome"
        value={form.name}
        on:change={(e) => (form.name = e.target.value)}
        bind:this={nameElement}
      />
      <mwc-textfield
        id="contact-us__surname-textfield"
        outlined
        required
        name="surname"
        label="Cognome"
        value={form.surname}
        bind:this={surnameElement}
        on:change={(e) => (form.surname = e.target.value)}
      />
      <mwc-textfield
        id="contact-us__age-textfield"
        outlined
        required
        name="age"
        type="number"
        min="0"
        max="99"
        label="Età"
        value={form.age}
        on:change={(e) => (form.age = e.target.value)}
        bind:this={ageElement}
      />
    </div>
    <div class="contact-us__form-row">
      <mwc-textfield
        id="contact-us__graduation-textfield"
        outlined
        required
        name="graduation"
        label="Titolo di studio"
        value={form.graduation}
        on:change={(e) => (form.graduation = e.target.value)}
        bind:this={graduationElement}
      />
      <mwc-textfield
        id="contact-us__graduation-grade-textfield"
        outlined
        required
        name="graduation-grade"
        type="number"
        label="Votazione"
        min="0"
        max="110"
        value={form.graduationGrade}
        on:change={(e) => (form.graduationGrade = e.target.value)}
        bind:this={graduationGradeElement}
      />
      <mwc-textfield
        id="contact-us__experience-textfield"
        outlined
        required
        name="experience"
        type="number"
        min="0"
        max="99"
        label="Anni di esperienza"
        value={form.experience}
        on:change={(e) => (form.experience = e.target.value)}
        bind:this={experienceElement}
      />
    </div>

    <div class="contact-us__form-row">
      <mwc-textfield
        id="contact-us__email-textfield"
        outlined
        required
        name="email"
        type="email"
        label="Email"
        value={form.email}
        on:change={(e) => (form.email = e.target.value)}
        bind:this={emailElement}
      />
      <mwc-textfield
        id="contact-us__phone-textfield"
        outlined
        name="phone"
        label="Cellulare"
        value={form.phone}
        on:change={(e) => (form.phone = e.target.value)}
        bind:this={phoneElement}
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
        bind:this={curriculumInputElement}
        on:change={(e) => {
          form.curriculum = e.target.value;
          curriculumError = null;
        }}
      />
      {#if curriculumError}
        <p id="contact-us__cv-error-text">{curriculumError}</p>
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
</form>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .contact-us {
    position: relative;
  }

  .contact-us h2 {
    text-align: center;
    margin-bottom: var(--ts-spacing-4);
  }

  .contact-us__subtitle {
    text-align: center;
    margin: 0;
  }

  .contact-us__title-hexagon {
    position: absolute;
    z-index: -1;
    top: 220px;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }

  .contact-us__form {
    margin: var(--ts-spacing-6) 0;
    display: block;
  }

  .contact-us__form-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px var(--ts-spacing-3);
  }

  mwc-textfield {
    margin: 0 var(--ts-spacing-1);
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
    height: var(--ts-spacing-4);
    border-radius: 2px;
    display: flex;
    margin: 0 0 var(--ts-spacing-2) 0;
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
    margin-bottom: var(--ts-spacing-3);
  }

  #contact-us__curriculum-upload-label {
    /* Fake button, can't use component due to WebComponents limitations */
    color: white;
    background-color: var(--ts-blue-color);
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  #contact-us__curriculum-upload-label img {
    height: 18px;
    margin-left: var(--ts-spacing-1);
  }

  #contact-us__curriculum-upload-label:hover {
    background-color: var(--ts-blue-color-light);
  }

  #contact-us__cv-error-text {
    color: var(--mdc-theme-error, #b00020);
    font-size: 16px;
    margin: 0;
    font-weight: 400;
  }

  mwc-textfield,
  #contact-us__curriculum-upload-label {
    flex: 1 0 100%;
  }

  #contact-us__graduation-grade-textfield,
  #contact-us__experience-textfield {
    flex: 1 1 auto;
  }

  #contact-us__graduation-grade-textfield {
    margin-right: var(--ts-spacing-1);
  }

  #contact-us__submit-button-form-row {
    display: flex;
  }

  #contact-us__submit {
    margin: 0 auto;
  }

  /* var(--mdc-theme-error, #b00020); */

  @media only screen and (min-width: 900px) {
    #contact-us__name-textfield,
    #contact-us__surname-textfield,
    #contact-us__graduation-textfield,
    #contact-us__email-textfield {
      flex: 1 1 0;
      margin-right: var(--ts-spacing-1);
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
