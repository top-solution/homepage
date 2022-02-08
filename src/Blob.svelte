<svelte:options tag="ts-blob" />

<script>
  import { tick } from "svelte";
  // import { spline } from "@georgedoescode/spline";
  import SimplexNoise from "simplex-noise";
  import debounce from "lodash.debounce";
  import { onMount } from "svelte";
  // import bezierSpline from "@turf/bezier-spline";
  // import { lineString } from "@turf/helpers";

  export let fill = "#E9E8F2";
  export let rotate = null;
  export let flip = false;
  export let shape = "hexagon";
  export let variance = 1;
  export let interactive = false;
  export let padding = 0;
  export let src = null;
  export let clickable = "false";
  let paddingStyle = "";

  /**
   * See https://francoisromain.medium.com/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
   */

  const line = (pointA, pointB) => {
    const lengthX = pointB[0] - pointA[0];
    const lengthY = pointB[1] - pointA[1];
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX),
    };
  };

  const controlPoint = (current, previous, next, reverse) => {
    // When 'current' is the first or last point of the array
    // 'previous' or 'next' don't exist.
    // Replace with 'current'
    const p = previous || current;
    const n = next || current; // The smoothing ratio
    const smoothing = 0.2; // Properties of the opposed-line
    const o = line(p, n); // If is end-control-point, add PI to the angle to go backward
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing; // The control point position is relative to the current point
    const x = current[0] + Math.cos(angle) * length;
    const y = current[1] + Math.sin(angle) * length;
    return [x, y];
  };

  const bezierCommand = (point, i, a) => {
    const n = a.length - 1;
    const circ = (i) => ((i % n) + n) % n;

    // start control point
    const [cpsX, cpsY] = controlPoint(a[circ(i - 1)], a[circ(i - 2)], point); // end control point
    const [cpeX, cpeY] = controlPoint(
      point,
      a[circ(i - 1)],
      a[circ(i + 1)],
      true
    );
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
  };

  const lineCommand = (point) => `L ${point[0]} ${point[1]}`;

  const svgPath = (points, command) => {
    // build the d attributes by looping over the points
    const d = [...points, points[0]].reduce(
      (acc, point, i, a) =>
        i === 0 // if first point
          ? `M ${point[0]},${point[1]}` // else
          : `${acc} ${bezierCommand(point, i, a)}`,
      ""
    );
    return d;
  };

  let path = "";

  let noiseStep = 0.0;
  let noiseAccelStep = 0.0;

  let mouseOver = false;

  const simplex = new SimplexNoise();

  let points;
  let transform = "";

  function animate() {
    // for every point...
    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);

      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
      // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
      const x = map(nX, point.originX);
      const y = map(nY, point.originY);

      // update the point's current coordinates
      point.x = x;
      point.y = y;

      // progress the point's x, y values through "time"
      point.noiseOffsetX += noiseStep;
      point.noiseOffsetY += noiseStep;
    }

    if (noiseStep + noiseAccelStep < 0.005) {
      noiseStep = noiseStep + noiseAccelStep;
    } else if (noiseStep + noiseAccelStep < 0) {
      noiseAccelStep = 0;
    }

    if (noiseStep > 0) {
      requestAnimationFrame(animate);
    }

    path = svgPath(points.map((p) => [p.x + 10, p.y + 10]));
  }

  function map(n, point) {
    return point - 5 + n * 10 * Number(variance);
  }

  function noise(x, y) {
    return simplex.noise2D(x, y);
  }

  function createRegularPoints(numPoints) {
    const points = [];
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 100;

    for (let i = 0; i <= numPoints - 1; i++) {
      // x & y coordinates of the current point
      const theta = angleStep * (i - 1);

      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;

      // store the point's position
      points.push({
        x: x,
        y: y,
        // reference to the point's original point for when we modulate the values later
        originX: x,
        originY: y,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    return points;
  }

  function createPointsAlt() {
    return [
      {
        x: 30,
        y: 0,
        originX: 30,
        originY: 0,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 170,
        y: 0,
        originX: 170,
        originY: 0,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 200,
        y: 100,
        originX: 200,
        originY: 100,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 170,
        y: 200,
        originX: 170,
        originY: 200,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 30,
        y: 200,
        originX: 30,
        originY: 200,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 0,
        y: 100,
        originX: 0,
        originY: 100,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
    ];
  }

  function createPointsPotato() {
    return [
      {
        x: 0,
        y: 67,
        originX: 0,
        originY: 67,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 50,
        y: 15,
        originX: 50,
        originY: 15,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 100,
        y: 0,
        originX: 100,
        originY: 0,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 160,
        y: 50,
        originX: 160,
        originY: 50,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 200,
        y: 90,
        originX: 200,
        originY: 90,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 152,
        y: 134,
        originX: 152,
        originY: 134,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 85,
        y: 100,
        originX: 85,
        originY: 100,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
    ];
  }

  function createPointsRectangle() {
    return [
      {
        x: 20,
        y: 50,
        originX: 20,
        originY: 50,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 40,
        y: 160,
        originX: 40,
        originY: 160,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 200,
        y: 160,
        originX: 200,
        originY: 160,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
      {
        x: 170,
        y: 20,
        originX: 170,
        originY: 20,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      },
    ];
  }

  function handleMouseEnter() {
    mouseOver = true;
    noiseAccelStep = 0.003;
    animate();
  }

  const debouncedHandleMouseEnter = debounce(handleMouseEnter);

  function handleMouseLeave() {
    mouseOver = false;
    noiseAccelStep = -0.0001;
  }
  const debouncedHandleMouseLeave = debounce(handleMouseLeave);

  onMount(async () => {
    await tick();

    switch (shape) {
      case "hexagon":
        points = createRegularPoints(6);
        break;
      case "octagon":
        points = createRegularPoints(8);
        break;
      case "rectangle":
        points = createPointsAlt();
        break;
      case "potato":
        points = createPointsPotato();
        break;
      case "rectanglehr":
        points = createPointsRectangle();
        break;
    }
    animate();

    if (rotate || flip) {
      transform = "transform:";

      if (rotate) {
        transform = `${transform} rotate(${rotate}deg)`;
      }
    }

    if (padding) {
      paddingStyle = `padding: ${8 + Number(padding || 0)}px ${Number(
        padding || 0
      )}px;`;
    }
  });
</script>

<div
  class="blob"
  class:blob--clickable={clickable !== "false"}
  on:mouseenter={interactive === "true" && debouncedHandleMouseEnter}
  on:mouseleave={interactive === "true" && debouncedHandleMouseLeave}
>
  <div class="content" style={paddingStyle}>
    <slot />
  </div>
  <svg
    viewBox="0 0 210 210"
    preserveAspectRatio="none"
    style={flip ? "transform: scaleX(-1)" : undefined}
  >
    {#if src}
      <defs>
        <pattern
          id="blob__image"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="210"
          height="210"
        >
          <image href={src} width="210" height="210" />
        </pattern>
      </defs>
    {/if}
    <path
      id="path"
      d={path}
      fill={src ? `url(#blob__image)` : fill ?? "#EBEAF3"}
      style={`box-shadow: 5px 10px #888888; ${transform}; transform-box: fill-box; transform-origin: center;`}
    />
  </svg>
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .blob {
    position: relative;
    width: 100%;

    &--clickable {
      cursor: pointer;
      path {
        transition: filter variables.$ts-transition-timing-quick
          variables.$ts-transition-function-default;
      }

      &:hover {
        path {
          filter: brightness(0.9) saturate(1.5);
        }
      }
    }

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }

  path {
    cursor: pointer;
  }

  .content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .content > * {
    margin: 0;
  }

  svg {
    width: 100%;
    overflow: visible;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
  }
</style>
