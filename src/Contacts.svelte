<svelte:options tag="ts-page-contacts" />

<script>
  import "@material/mwc-snackbar";
  import Blob from "./Blob.svelte";
  import Layout from "./Layout.svelte";
  import TeamPerson from "./TeamPerson.svelte";
  import RequestInfo from "./RequestInfo.svelte";
  import { onMount } from "svelte";

  let contactUsOpen = false;
  let contactUsElement = null;
  let snackbarElement = null;
  let mapElement = null;

  const mapCenter = { lat: 45.0876111, lng: 7.6729824 };
  let map = null;

  function handleClick() {
    contactUsOpen = true;

    setTimeout(() => {
      contactUsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  }

  function handleContactUsSubmit() {
    contactUsOpen = false;
    snackbarElement.show();
  }

  function initMap() {}

  onMount(async () => {
    var script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAZo_LJrBCbL6GOjCwtR41qPpoi4jn4NwA&callback=initMap";
    script.async = true;

    window.initMap = function () {
      map = new google.maps.Map(mapElement, {
        center: mapCenter,
        zoom: 16,
        mapTypeId: "roadmap",
        disableDefaultUI: true,
        // zoomControl: true,
        // fullscreenControl: true,
        // gestureHandling: "none",
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#1b2742" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#aab1bb" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#1b2742" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "landscape.man_made.buildings",
            elementType: "geometry",
            stylers: [{ stroke: "#2a416f" }],
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#04364d" }],
          },
          {
            featureType: "landscape.natural.terrain",
            elementType: "geometry",
            stylers: [{ color: "#1b2742" }],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "04364d" }, { visibility: "on" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#2a416f" }, { stroke: "#1c2c4a" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#aab1bb" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#aab1bb" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#101621" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#456264" }],
          },
        ],
      });

      const marker = new google.maps.Marker({
        position: { lat: 45.0876111, lng: 7.6729824 },
        icon: "img/icons/pin-map.svg",
        map: map,
      });
    };

    document.head.appendChild(script);
  });
</script>

<ts-layout class="page-contacts">
  <div class="page-contacts__copy">
    <h1 class="title-2">Contatti</h1>
    <ol class="page-contacts__contacts">
      <li id="page-contacts__contacts__email">
        <img src="img/icons/mail.svg" alt="" /><a
          href="mailto:info@topsolution.it">info@topsolution.it</a
        >
      </li>
      <li>
        <img src="img/icons/pin.svg" alt="" />Sede Legale: Corso Regina
        Margherita, 254 10144 Torino TO
      </li>
      <li id="page-contacts__contacts__phone">
        <img src="img/icons/phone.svg" alt="" /><a href="tel:+39 0112488280"
          >+39 0112488280</a
        >
      </li>
      <li>
        <img src="img/icons/pin.svg" alt="" />Sede Operativa: Via Livorno, 60
        10144 Torino TO
      </li>
    </ol>
  </div>

  <div bind:this={contactUsElement} class="contact-us">
    <ts-request-info open={true} on:formsubmit={handleContactUsSubmit} />
  </div>
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="Grazie per aver inviato la tua candidatura spontanea!"
  />
  <div id="page-contacts__map-container">
    <div bind:this={mapElement} id="page-contacts__map" />
    <ts-button
      id="page-contacts__map-center-button"
      variant="secondary"
      icon={true}
      on:click={() => {
        map.setCenter(mapCenter);
        map.setZoom(16);
      }}><img src="img/icons/center-map.svg" alt="center map" /></ts-button
    >
    <ts-button
      id="page-contacts__map-zoom-in-button"
      variant="secondary"
      icon={true}
      on:click={() => {
        map.setZoom(map.zoom + 1);
      }}><img src="img/icons/zoom-in-map.svg" alt="zoom in map" /></ts-button
    >
    <ts-button
      id="page-contacts__map-zoom-out-button"
      variant="secondary"
      icon={true}
      on:click={() => {
        map.setZoom(map.zoom - 1);
      }}><img src="img/icons/zoom-out-map.svg" alt="zoom out map" /></ts-button
    >
  </div>
</ts-layout>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .page-contacts {
    color: var(--ts-blue-color);
  }

  .page-contacts__contacts {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    padding-left: 0;
    margin-top: var(--ts-spacing-9);
  }

  .page-contacts__contacts li {
    flex: 1 0 50%;
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--ts-spacing-1-5);
    order: 4;
  }
  .page-contacts__contacts li a {
    font-weight: inherit;
  }

  .page-contacts__contacts img {
    width: 20px;
    height: 20px;
    margin-right: var(--ts-spacing-3);
    margin-top: 2px;
  }

  #page-contacts__contacts__phone {
    order: 1;
  }

  ts-request-info {
    margin-top: var(--ts-spacing-15);
    display: block;
  }

  #page-contacts__map-container,
  #page-contacts__map {
    height: 600px;
    width: 100%;
  }

  #page-contacts__map-container {
    margin-bottom: var(--ts-spacing-15);
    position: relative;
  }

  #page-contacts__map-center-button {
    position: absolute;
    top: var(--ts-spacing-2);
    right: var(--ts-spacing-2);
    width: 42px;
  }

  #page-contacts__map-center-button {
    position: absolute;
    top: var(--ts-spacing-2);
    right: var(--ts-spacing-2);
    width: 42px;
  }

  #page-contacts__map-center-button {
    position: absolute;
    top: var(--ts-spacing-2);
    right: var(--ts-spacing-2);
    width: 42px;
  }

  #page-contacts__map-zoom-in-button {
    position: absolute;
    bottom: calc(var(--ts-spacing-4) + 42px);
    right: var(--ts-spacing-2);
    width: 42px;
  }

  #page-contacts__map-zoom-out-button {
    position: absolute;
    bottom: var(--ts-spacing-3);
    right: var(--ts-spacing-2);
    width: 42px;
  }

  #page-contacts__map-center-button img,
  #page-contacts__map-zoom-in-button img,
  #page-contacts__map-zoom-out-button img {
    width: 24px;
    height: 24px;
  }

  @media only screen and (max-width: 900px) {
    .page-contacts__copy h1 {
      text-align: left;
      margin: var(--ts-spacing-2) 0 var(--ts-spacing-1);
    }

    .page-contacts__contacts {
      font-size: 20px;
      margin-top: var(--ts-spacing-2);
    }

    .page-contacts__contacts li {
      flex: 1 0 100%;
    }

    .page-contacts__contacts img {
      width: 22px;
      height: 22px;
      margin-top: 3px;
      margin-right: var(--ts-spacing-3);
    }

    ts-request-info {
      margin-top: var(--ts-spacing-10);
      display: block;
    }
  }
</style>
