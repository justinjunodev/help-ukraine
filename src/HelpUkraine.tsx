import * as React from 'react';

interface HelpUkraineOptions {
  link?: string;
  text?: string;
  size?: string;
  color?: string;
  background?: string;
  position?: 'top right' | 'top left' | 'bottom right' | 'bottom left';
  padding?: string;
  space?: string;
  radius?: string;
}

export function HelpUkraine({
  link = 'https://crisisrelief.un.org/ukraine-crisis',
  text = 'Help Ukraine',
  size = '14px',
  color = 'NavyBlue',
  background = 'Gold',
  position = 'bottom right',
  padding = '4px 16px',
  space = '16px',
  radius = '4px',
}: HelpUkraineOptions) {
  return (
    <aside
      style={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        top: position.includes('top') ? space : 'initial',
        right: position.includes('right') ? space : 'initial',
        bottom: position.includes('bottom') ? space : 'initial',
        left: position.includes('left') ? space : 'initial',
        zIndex: 99999,
        background: background,
        padding: padding,
        borderRadius: radius,
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: color, fontSize: size, textDecoration: 'none' }}
      >
        {text}
      </a>
    </aside>
  );
}
