import React, {type ReactNode} from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';
import {logout} from '../firebase';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): ReactNode {
  return (
    <>
      <a style={{marginRight: 15, cursor: "pointer", color: '#222222'}} onClick={() => logout(() => window.location.reload())}>
        Logout
      </a>
      <ColorModeToggle {...props} />
    </>
  );
}
