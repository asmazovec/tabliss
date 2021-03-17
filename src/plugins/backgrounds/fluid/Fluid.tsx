import React, { FC, useEffect } from 'react';
import { fileURLToPath } from 'url';

import { Props, defaultData } from './types';

// @ts-ignore
import { init } from './fluid';

const Fluid: FC<Props> = ({ data = defaultData }) => {
  class FluidDom extends React.Component {
    // Basically when the component mounts it adds a <script> tag containing
    // the fluid sim logic which will execute once added, hooking into the <cavnas>
    componentDidMount() {
      //let canvas = document.getElementsByClassName("Fluid")[0];

      let canvas = document.getElementsByClassName('Fluid-canvas')[0];
      //resizeCanvas();
      let config = data;
      /*
            let config = {
              SIM_RESOLUTION: 128,
              DYE_RESOLUTION: 1024,
              CAPTURE_RESOLUTION: 512,
              DENSITY_DISSIPATION: 1,
              VELOCITY_DISSIPATION: 0.2,
              PRESSURE: 0.8,
              PRESSURE_ITERATIONS: 20,
              CURL: 30,
              SPLAT_RADIUS: 0.25,
              SPLAT_FORCE: 6000,
              SHADING: true,
              COLORFUL: true,
              COLOR_UPDATE_SPEED: 10,
              PAUSED: false,
              BACK_COLOR: { r: 0, g: 0, b: 0 },
              TRANSPARENT: false,
              BLOOM: true,
              BLOOM_ITERATIONS: 8,
              BLOOM_RESOLUTION: 256,
              BLOOM_INTENSITY: 0.8,
              BLOOM_THRESHOLD: 0.6,
              BLOOM_SOFT_KNEE: 0.7,
              SUNRAYS: true,
              SUNRAYS_RESOLUTION: 196,
              SUNRAYS_WEIGHT: 1.0,
            }
            */

      init(config, canvas);
      /*
      const script = document.createElement('script');
      script.src = "/scripts/fluid.js";
      script.async = true;
      script.className = "Fluid-script";
      document.body.appendChild(script);
      */
    }

    componentWillUnmount() {
      //document.getElementsByClassName("Fluid-script")[0].remove();
    }

    render() {
      return (
        <canvas className="Fluid-canvas fullscreen"></canvas>
      );
    }
  }

  return (<FluidDom />);
};

export default Fluid;