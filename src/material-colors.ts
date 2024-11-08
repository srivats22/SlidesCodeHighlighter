/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// thanks to https://github.com/minusfive/sass-material-colors for a great starting point
const COLORS = {
  'red': {
    '50':   {hex: '#FFEBEE'},
    '100':  {hex: '#FFCDD2'},
    '200':  {hex: '#EF9A9A'},
    '300':  {hex: '#E57373'},
    '400':  {hex: '#EF5350', white: true},
    '500':  {hex: '#F44336', white: true},
    '600':  {hex: '#E53935', white: true},
    '700':  {hex: '#D32F2F', white: true},
    '800':  {hex: '#C62828', white: true},
    '900':  {hex: '#B71C1C', white: true},
    'a100': {hex: '#FF8A80'},
    'a200': {hex: '#FF5252', white: true},
    'a400': {hex: '#FF1744', white: true},
    'a700': {hex: '#D50000', white: true}
  },
  'pink': {
    '50':   {hex: '#FCE4EC'},
    '100':  {hex: '#F8BBD0'},
    '200':  {hex: '#F48FB1'},
    '300':  {hex: '#F06292', white: true},
    '400':  {hex: '#EC407A', white: true},
    '500':  {hex: '#E91E63', white: true},
    '600':  {hex: '#D81B60', white: true},
    '700':  {hex: '#C2185B', white: true},
    '800':  {hex: '#AD1457', white: true},
    '900':  {hex: '#880E4F', white: true},
    'a100': {hex: '#FF80AB'},
    'a200': {hex: '#FF4081', white: true},
    'a400': {hex: '#F50057', white: true},
    'a700': {hex: '#C51162', white: true}
  },
  'purple': {
    '50':   {hex: '#F3E5F5'},
    '100':  {hex: '#E1BEE7'},
    '200':  {hex: '#CE93D8'},
    '300':  {hex: '#BA68C8', white: true},
    '400':  {hex: '#AB47BC', white: true},
    '500':  {hex: '#9C27B0', white: true},
    '600':  {hex: '#8E24AA', white: true},
    '700':  {hex: '#7B1FA2', white: true},
    '800':  {hex: '#6A1B9A', white: true},
    '900':  {hex: '#4A148C', white: true},
    'a100': {hex: '#EA80FC'},
    'a200': {hex: '#E040FB', white: true},
    'a400': {hex: '#D500F9', white: true},
    'a700': {hex: '#AA00FF', white: true}
  },
  'deep-purple': {
    '50':   {hex: '#EDE7F6'},
    '100':  {hex: '#D1C4E9'},
    '200':  {hex: '#B39DDB'},
    '300':  {hex: '#9575CD', white: true},
    '400':  {hex: '#7E57C2', white: true},
    '500':  {hex: '#673AB7', white: true},
    '600':  {hex: '#5E35B1', white: true},
    '700':  {hex: '#512DA8', white: true},
    '800':  {hex: '#4527A0', white: true},
    '900':  {hex: '#311B92', white: true},
    'a100': {hex: '#B388FF'},
    'a200': {hex: '#7C4DFF', white: true},
    'a400': {hex: '#651FFF', white: true},
    'a700': {hex: '#6200EA', white: true}
  },
  'indigo': {
    '50':   {hex: '#E8EAF6'},
    '100':  {hex: '#C5CAE9'},
    '200':  {hex: '#9FA8DA'},
    '300':  {hex: '#7986CB', white: true},
    '400':  {hex: '#5C6BC0', white: true},
    '500':  {hex: '#3F51B5', white: true},
    '600':  {hex: '#3949AB', white: true},
    '700':  {hex: '#303F9F', white: true},
    '800':  {hex: '#283593', white: true},
    '900':  {hex: '#1A237E', white: true},
    'a100': {hex: '#8C9EFF'},
    'a200': {hex: '#536DFE', white: true},
    'a400': {hex: '#3D5AFE', white: true},
    'a700': {hex: '#304FFE', white: true}
  },
  'blue': {
    '50':   {hex: '#E3F2FD'},
    '100':  {hex: '#BBDEFB'},
    '200':  {hex: '#90CAF9'},
    '300':  {hex: '#64B5F6'},
    '400':  {hex: '#42A5F5'},
    '500':  {hex: '#2196F3', white: true},
    '600':  {hex: '#1E88E5', white: true},
    '700':  {hex: '#1976D2', white: true},
    '800':  {hex: '#1565C0', white: true},
    '900':  {hex: '#0D47A1', white: true},
    'a100': {hex: '#82B1FF'},
    'a200': {hex: '#448AFF', white: true},
    'a400': {hex: '#2979FF', white: true},
    'a700': {hex: '#2962FF', white: true}
  },
  'light-blue': {
    '50':   {hex: '#E1F5FE'},
    '100':  {hex: '#B3E5FC'},
    '200':  {hex: '#81D4FA'},
    '300':  {hex: '#4FC3F7'},
    '400':  {hex: '#29B6F6'},
    '500':  {hex: '#03A9F4'},
    '600':  {hex: '#039BE5', white: true},
    '700':  {hex: '#0288D1', white: true},
    '800':  {hex: '#0277BD', white: true},
    '900':  {hex: '#01579B', white: true},
    'a100': {hex: '#80D8FF'},
    'a200': {hex: '#40C4FF'},
    'a400': {hex: '#00B0FF'},
    'a700': {hex: '#0091EA', white: true}
  },
  'cyan': {
    '50':   {hex: '#E0F7FA'},
    '100':  {hex: '#B2EBF2'},
    '200':  {hex: '#80DEEA'},
    '300':  {hex: '#4DD0E1'},
    '400':  {hex: '#26C6DA'},
    '500':  {hex: '#00BCD4'},
    '600':  {hex: '#00ACC1'},
    '700':  {hex: '#0097A7', white: true},
    '800':  {hex: '#00838F', white: true},
    '900':  {hex: '#006064', white: true},
    'a100': {hex: '#84FFFF'},
    'a200': {hex: '#18FFFF'},
    'a400': {hex: '#00E5FF'},
    'a700': {hex: '#00B8D4'}
  },
  'teal': {
    '50':   {hex: '#E0F2F1'},
    '100':  {hex: '#B2DFDB'},
    '200':  {hex: '#80CBC4'},
    '300':  {hex: '#4DB6AC'},
    '400':  {hex: '#26A69A'},
    '500':  {hex: '#009688', white: true},
    '600':  {hex: '#00897B', white: true},
    '700':  {hex: '#00796B', white: true},
    '800':  {hex: '#00695C', white: true},
    '900':  {hex: '#004D40', white: true},
    'a100': {hex: '#A7FFEB'},
    'a200': {hex: '#64FFDA'},
    'a400': {hex: '#1DE9B6'},
    'a700': {hex: '#00BFA5'}
  },
  'green': {
    '50':   {hex: '#E8F5E9'},
    '100':  {hex: '#C8E6C9'},
    '200':  {hex: '#A5D6A7'},
    '300':  {hex: '#81C784'},
    '400':  {hex: '#66BB6A'},
    '500':  {hex: '#4CAF50'},
    '600':  {hex: '#43A047', white: true},
    '700':  {hex: '#388E3C', white: true},
    '800':  {hex: '#2E7D32', white: true},
    '900':  {hex: '#1B5E20', white: true},
    'a100': {hex: '#B9F6CA'},
    'a200': {hex: '#69F0AE'},
    'a400': {hex: '#00E676'},
    'a700': {hex: '#00C853'}
  },
  'light-green': {
    '50':   {hex: '#F1F8E9'},
    '100':  {hex: '#DCEDC8'},
    '200':  {hex: '#C5E1A5'},
    '300':  {hex: '#AED581'},
    '400':  {hex: '#9CCC65'},
    '500':  {hex: '#8BC34A'},
    '600':  {hex: '#7CB342'},
    '700':  {hex: '#689F38', white: true},
    '800':  {hex: '#558B2F', white: true},
    '900':  {hex: '#33691E', white: true},
    'a100': {hex: '#CCFF90'},
    'a200': {hex: '#B2FF59'},
    'a400': {hex: '#76FF03'},
    'a700': {hex: '#64DD17'}
  },
  'lime': {
    '50':   {hex: '#F9FBE7'},
    '100':  {hex: '#F0F4C3'},
    '200':  {hex: '#E6EE9C'},
    '300':  {hex: '#DCE775'},
    '400':  {hex: '#D4E157'},
    '500':  {hex: '#CDDC39'},
    '600':  {hex: '#C0CA33'},
    '700':  {hex: '#AFB42B'},
    '800':  {hex: '#9E9D24'},
    '900':  {hex: '#827717', white: true},
    'a100': {hex: '#F4FF81'},
    'a200': {hex: '#EEFF41'},
    'a400': {hex: '#C6FF00'},
    'a700': {hex: '#AEEA00'}
  },
  'yellow': {
    '50':   {hex: '#FFFDE7'},
    '100':  {hex: '#FFF9C4'},
    '200':  {hex: '#FFF59D'},
    '300':  {hex: '#FFF176'},
    '400':  {hex: '#FFEE58'},
    '500':  {hex: '#FFEB3B'},
    '600':  {hex: '#FDD835'},
    '700':  {hex: '#FBC02D'},
    '800':  {hex: '#F9A825'},
    '900':  {hex: '#F57F17'},
    'a100': {hex: '#FFFF8D'},
    'a200': {hex: '#FFFF00'},
    'a400': {hex: '#FFEA00'},
    'a700': {hex: '#FFD600'}
  },
  'amber': {
    '50':   {hex: '#FFF8E1'},
    '100':  {hex: '#FFECB3'},
    '200':  {hex: '#FFE082'},
    '300':  {hex: '#FFD54F'},
    '400':  {hex: '#FFCA28'},
    '500':  {hex: '#FFC107'},
    '600':  {hex: '#FFB300'},
    '700':  {hex: '#FFA000'},
    '800':  {hex: '#FF8F00'},
    '900':  {hex: '#FF6F00'},
    'a100': {hex: '#FFE57F'},
    'a200': {hex: '#FFD740'},
    'a400': {hex: '#FFC400'},
    'a700': {hex: '#FFAB00'}
  },
  'orange': {
    '50':   {hex: '#FFF3E0'},
    '100':  {hex: '#FFE0B2'},
    '200':  {hex: '#FFCC80'},
    '300':  {hex: '#FFB74D'},
    '400':  {hex: '#FFA726'},
    '500':  {hex: '#FF9800'},
    '600':  {hex: '#FB8C00'},
    '700':  {hex: '#F57C00'},
    '800':  {hex: '#EF6C00', white: true},
    '900':  {hex: '#E65100', white: true},
    'a100': {hex: '#FFD180'},
    'a200': {hex: '#FFAB40'},
    'a400': {hex: '#FF9100'},
    'a700': {hex: '#FF6D00'}
  },
  'deep-orange': {
    '50':   {hex: '#FBE9E7'},
    '100':  {hex: '#FFCCBC'},
    '200':  {hex: '#FFAB91'},
    '300':  {hex: '#FF8A65'},
    '400':  {hex: '#FF7043'},
    '500':  {hex: '#FF5722', white: true},
    '600':  {hex: '#F4511E', white: true},
    '700':  {hex: '#E64A19', white: true},
    '800':  {hex: '#D84315', white: true},
    '900':  {hex: '#BF360C', white: true},
    'a100': {hex: '#FF9E80'},
    'a200': {hex: '#FF6E40'},
    'a400': {hex: '#FF3D00', white: true},
    'a700': {hex: '#DD2C00', white: true}
  },
  'brown': {
    '50':   {hex: '#EFEBE9'},
    '100':  {hex: '#D7CCC8'},
    '200':  {hex: '#BCAAA4'},
    '300':  {hex: '#A1887F', white: true},
    '400':  {hex: '#8D6E63', white: true},
    '500':  {hex: '#795548', white: true},
    '600':  {hex: '#6D4C41', white: true},
    '700':  {hex: '#5D4037', white: true},
    '800':  {hex: '#4E342E', white: true},
    '900':  {hex: '#3E2723', white: true}
  },
  'grey': {
    '50':   {hex: '#FAFAFA'},
    '100':  {hex: '#F5F5F5'},
    '200':  {hex: '#EEEEEE'},
    '300':  {hex: '#E0E0E0'},
    '400':  {hex: '#BDBDBD'},
    '500':  {hex: '#9E9E9E'},
    '600':  {hex: '#757575', white: true},
    '700':  {hex: '#616161', white: true},
    '800':  {hex: '#424242', white: true},
    '900':  {hex: '#212121', white: true}
  },
  'blue-grey': {
    '50':   {hex: '#ECEFF1'},
    '100':  {hex: '#CFD8DC'},
    '200':  {hex: '#B0BEC5'},
    '300':  {hex: '#90A4AE'},
    '400':  {hex: '#78909C', white: true},
    '500':  {hex: '#607D8B', white: true},
    '600':  {hex: '#546E7A', white: true},
    '700':  {hex: '#455A64', white: true},
    '800':  {hex: '#37474F', white: true},
    '900':  {hex: '#263238', white: true}
  }
} as const;


export function materialColor<Hue extends keyof typeof COLORS>(hue: Hue, value: keyof typeof COLORS[Hue]): string {
  const v = COLORS[hue][value];
  if (!v || typeof v !== 'object' || !('hex' in v)) {
    return '#000000';
  }

  return String(v.hex);
}
