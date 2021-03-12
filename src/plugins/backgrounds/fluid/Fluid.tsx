import React, { FC } from 'react';

import { Props, defaultData } from './types';

const Fluid: FC<Props> = ({ data = defaultData }) => (
  <div className="Fluid fullscreen">
    <canvas></canvas>
  </div>
);

export default Fluid;
