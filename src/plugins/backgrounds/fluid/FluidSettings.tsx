import React, { FC } from 'react';

import { Props, defaultData } from './types';

const FluidSettings: FC<Props> = ({ data = defaultData, setData }) => (
  <div className="FluidSettings">
    <label>
      Quality
      <select
        value={data.DYE_RESOLUTION}
        onChange={event =>
          setData({ ...data, DYE_RESOLUTION: Number(event.target.value) })}
      >
        <option value="1024">High</option>
        <option value="512">Medium</option>
        <option value="256">Low</option>
        <option value="128">Very low</option>
      </select>
    </label>

    <label>
      Sim Resolution
      <select
        value={data.SIM_RESOLUTION}
        onChange={event =>
          setData({ ...data, SIM_RESOLUTION: Number(event.target.value) })}
      >
        <option value="32">32</option>
        <option value="64">64</option>
        <option value="128">128</option>
        <option value="256">256</option>
      </select>
    </label>

    <label>
      Density diffusion <br />
      <input
        type="range"
        min="0"
        max="4"
        step="0.1"
        value={data.DENSITY_DISSIPATION}
        onChange={event =>
          setData({ ...data, DENSITY_DISSIPATION: Number(event.target.value) })}
      />
    </label>

    <label>
      Velocity diffusion <br />
      <input
        type="range"
        min="0"
        max="4"
        step="0.1"
        value={data.VELOCITY_DISSIPATION}
        onChange={event =>
          setData({ ...data, VELOCITY_DISSIPATION: Number(event.target.value) })}
      />
    </label>

    <label>
      Pressure <br />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={data.PRESSURE}
        onChange={event =>
          setData({ ...data, PRESSURE: Number(event.target.value) })}
      />
    </label>

    <label>
      Vorticity <br />
      <input
        type="range"
        min="0"
        max="50"
        step="1"
        value={data.CURL}
        onChange={event =>
          setData({ ...data, CURL: Number(event.target.value) })}
      />
    </label>

    <label>
      Splat radius <br />
      <input
        type="range"
        min="0.01"
        max="1"
        step="0.1"
        value={data.SPLAT_RADIUS}
        onChange={event =>
          setData({ ...data, SPLAT_RADIUS: Number(event.target.value) })}
      />
    </label>

    <label>
      <input
        type="checkbox"
        checked={data.SHADING}
        onChange={() =>
          setData({ ...data, SHADING: !data.SHADING })
        }
      />{' '}
      Shading
    </label>

    <label>
      <input
        type="checkbox"
        checked={data.COLORFUL}
        onChange={() =>
          setData({ ...data, COLORFUL: !data.COLORFUL })
        }
      />{' '}
      Colorful
    </label>

    <label>
      <input
        type="checkbox"
        checked={data.BLOOM}
        onChange={() =>
          setData({ ...data, BLOOM: !data.BLOOM })
        }
      />{' '}
      Bloom
    </label>

    {data.BLOOM && (
      <div>
        <label>
          Intensity <br />
          <input
            type="range"
            min="1"
            max="2"
            step="0.1"
            value={data.BLOOM_INTENSITY}
            onChange={event =>
              setData({ ...data, BLOOM_INTENSITY: Number(event.target.value) })}
          />
        </label>

        <label>
          Threshold <br />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={data.BLOOM_THRESHOLD}
            onChange={event =>
              setData({ ...data, BLOOM_THRESHOLD: Number(event.target.value) })}
          />
        </label>
      </div>
    )}

    <label>
      <input
        type="checkbox"
        checked={data.SUNRAYS}
        onChange={() =>
          setData({ ...data, SUNRAYS: !data.SUNRAYS })}
      />{' '}
      Sunrays
    </label>

    {data.SUNRAYS && (
      <label>
        Weight
        <input
          type="range"
          min="0.3"
          max="1"
          step="0.1"
          value={data.SUNRAYS_WEIGHT}
          onChange={event =>
            setData({ ...data, SUNRAYS_WEIGHT: Number(event.target.value) })}
        />
      </label>
    )}

  </div >
);

export default FluidSettings;
