import React from 'react';

import { Message } from '../types';
import isString from './isString';

export default (value: unknown): value is Message =>
  isString(value) || React.isValidElement(value as JSX.Element);
