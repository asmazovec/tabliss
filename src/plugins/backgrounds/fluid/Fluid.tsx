import React, { FC } from 'react';

import { Props, defaultData } from './types';


const Fluid: FC<Props> = ({ data = defaultData }) => {
  return (
    <div className="Fluid fullscreen"
      style={{ backgroundColor: data.BACK_COLOR }}>
    </div>
  );
};


export default Fluid;
