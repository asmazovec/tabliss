import colour from './colour';
import giphy from './giphy';
import gradient from './gradient';
import image from './image';
import unsplash from './unsplash';
import fluid from './fluid'

export const backgroundConfigs = [colour, giphy, gradient, image, unsplash, fluid];

backgroundConfigs.sort((a, b) => a.name.localeCompare(b.name));
