<svelte:options tag="ts-office-map" />

<script>
  import { onMount } from "svelte";

  let mapElement = null;

  const mapCenter = { lat: 45.088044, lng: 7.673456 };
  let map = null;

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
        gestureHandling: "none",
        maxZoom: 18,
        minZoom: 10,
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
            stylers: [{ color: "#29416e" }],
          },

          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#1b2742",
              },
            ],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{ visibility: "on" }, { stroke: "#f6f6f6" }],
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

      new google.maps.Marker({
        position: mapCenter,
        icon: "img/icons/pin-map.svg",
        map: map,
      });
    };

    document.head.appendChild(script);
  });
</script>

<div id="office-map__container">
  <div bind:this={mapElement} id="office-map" />
  <ts-button
    id="office-map__center-button"
    variant="secondary"
    icon={true}
    title="Mostra a schermo intero"
    on:click={(e) => {
      e.preventDefault();
      mapElement.requestFullscreen();
    }}><img src="img/icons/center-map.svg" alt="center map" /></ts-button
  >
  <ts-button
    id="office-map__zoom-in-button"
    variant="secondary"
    icon={true}
    on:click={(e) => {
      e.preventDefault();
      map.setZoom(map.zoom + 1);
    }}><img src="img/icons/zoom-in-map.svg" alt="zoom in map" /></ts-button
  >
  <ts-button
    id="office-map__zoom-out-button"
    variant="secondary"
    icon={true}
    on:click={(e) => {
      e.preventDefault();
      map.setZoom(map.zoom - 1);
    }}><img src="img/icons/zoom-out-map.svg" alt="zoom out map" /></ts-button
  >
</div>

<style lang="scss">
  @use "../styles/variables";

  @import "../styles/main.scss";

  #office-map__container,
  #office-map {
    height: 100%;
    width: 100%;
  }

  #office-map__container {
    position: relative;
  }

  #office-map__center-button {
    position: absolute;
    top: variables.$ts-spacing-2;
    right: variables.$ts-spacing-2;
    width: 42px;
  }

  #office-map__center-button {
    position: absolute;
    top: variables.$ts-spacing-2;
    right: variables.$ts-spacing-2;
    width: 42px;
  }

  #office-map__center-button {
    position: absolute;
    top: variables.$ts-spacing-2;
    right: variables.$ts-spacing-2;
    width: 42px;
  }

  #office-map__zoom-in-button {
    position: absolute;
    bottom: calc(variables.$ts-spacing-4 + 42px);
    right: variables.$ts-spacing-2;
    width: 42px;
  }

  #office-map__zoom-out-button {
    position: absolute;
    bottom: variables.$ts-spacing-3;
    right: variables.$ts-spacing-2;
    width: 42px;
  }

  #office-map__zoom-in-button img,
  #office-map__zoom-out-button img,
  #office-map__center-button img {
    width: 24px;
    height: 24px;
  }

  @media only screen and (max-width: variables.$ts-mobile-max) {
    #office-map__container,
    #office-map {
      min-height: 240px;
    }
  }
</style>
