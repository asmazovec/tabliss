import { Config } from '../../types';
import Fluid from './Fluid'
import FluidSettings from './FluidSettings'

const config: Config = {
  key: 'background/fluid',
  name: 'Fluid',
  description: 'Add a WebGL Fluid Simulation',
  dashboardComponent: Fluid,
  settingsComponent: FluidSettings,
  supportsBackdrop: true
};

export default config;
