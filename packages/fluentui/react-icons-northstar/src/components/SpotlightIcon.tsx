import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const SpotlightIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      className={classes.svg}
      viewBox="2 2 16 16"
      role="presentation"
      focusable="false"
    >
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M2 5.5C2 4.67157 2.67157 4 3.5 4H16.5C17.3284 4 18 4.67157 18 5.5V10.2572C17.6929 10.0035 17.3578 9.78261 17 9.59971V5.5C17 5.22386 16.7761 5 16.5 5H3.5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H6V13.5C6 12.6716 6.67157 12 7.5 12H9.59971C9.43777 12.3168 9.30564 12.6514 9.20703 13H7.5C7.22386 13 7 13.2239 7 13.5V15H9.02242C9.05337 15.3434 9.11588 15.6777 9.20703 16H3.5C2.67157 16 2 15.3284 2 14.5V5.5Z" />
        <path d="M12.5 8.5C12.5 8.8372 12.4332 9.15881 12.3122 9.45233C11.5156 9.79808 10.8168 10.3269 10.269 10.9857C10.1806 10.9951 10.0909 11 10 11C8.61929 11 7.5 9.88071 7.5 8.5C7.5 7.11929 8.61929 6 10 6C11.3807 6 12.5 7.11929 12.5 8.5ZM10 10C10.8284 10 11.5 9.32843 11.5 8.5C11.5 7.67157 10.8284 7 10 7C9.17157 7 8.5 7.67157 8.5 8.5C8.5 9.32843 9.17157 10 10 10Z" />
        <path d="M19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM14.976 11.8605C14.8262 11.3798 14.1738 11.3798 14.024 11.8605L13.5465 13.3923H12.0015C11.5166 13.3923 11.315 14.0391 11.7073 14.3362L12.9572 15.2829L12.4798 16.8146C12.33 17.2953 12.8578 17.6951 13.25 17.398L14.5 16.4513L15.75 17.398C16.1422 17.6951 16.67 17.2953 16.5202 16.8146L16.0428 15.2829L17.2927 14.3362C17.685 14.0391 17.4834 13.3923 16.9985 13.3923H15.4535L14.976 11.8605Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M2 5.5C2 4.67157 2.67157 4 3.5 4H16.5C17.3284 4 18 4.67157 18 5.5V10.2572C17.6929 10.0035 17.3578 9.78261 17 9.59971V5.5C17 5.22386 16.7761 5 16.5 5H3.5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H6V13.5C6 12.6716 6.67157 12 7.5 12H9.59971C9.21628 12.7501 9 13.5998 9 14.5C9 15.02 9.07217 15.5232 9.20703 16H3.5C2.67157 16 2 15.3284 2 14.5V5.5Z" />
        <path d="M12.5 8.5C12.5 8.8372 12.4332 9.15881 12.3122 9.45233C11.5156 9.79808 10.8168 10.3269 10.269 10.9857C10.1806 10.9951 10.0909 11 10 11C8.61929 11 7.5 9.88071 7.5 8.5C7.5 7.11929 8.61929 6 10 6C11.3807 6 12.5 7.11929 12.5 8.5Z" />
        <path d="M19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM14.976 11.8605C14.8262 11.3798 14.1738 11.3798 14.024 11.8605L13.5465 13.3923H12.0015C11.5166 13.3923 11.315 14.0391 11.7073 14.3362L12.9572 15.2829L12.4798 16.8146C12.33 17.2953 12.8578 17.6951 13.25 17.398L14.5 16.4513L15.75 17.398C16.1422 17.6951 16.67 17.2953 16.5202 16.8146L16.0428 15.2829L17.2927 14.3362C17.685 14.0391 17.4834 13.3923 16.9985 13.3923H15.4535L14.976 11.8605Z" />
      </g>
    </svg>
  ),
  displayName: 'SpotlightIcon',
});