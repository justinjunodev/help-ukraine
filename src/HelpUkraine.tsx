import * as React from 'react';

interface HelpUkraineOptions {
  link?: string;
  text?: string;
  size?: number;
  color?: string;
  bg?: string;
  pos?: 'top right' | 'top left' | 'bottom right' | 'bottom left';
  pX?: number;
  pY?: number;
  mX?: number;
  mY?: number;
  radius?: number;
}

export function HelpUkraine({
  link = 'https://crisisrelief.un.org/ukraine-crisis',
  text = 'Help Ukraine',
  size = 14,
  color = 'NavyBlue',
  bg = 'Gold',
  pos = 'bottom right',
  pX = 16,
  pY = 4,
  mX = 16,
  mY = 16,
  radius = 4,
}: HelpUkraineOptions) {
  return (
    <aside
      style={{
        position: 'fixed',
        top: pos.includes('top') ? `${mY}px` : 'initial',
        right: pos.includes('right') ? `${mX}px` : 'initial',
        bottom: pos.includes('bottom') ? `${mY}px` : 'initial',
        left: pos.includes('left') ? `${mX}px` : 'initial',
        zIndex: 99999,
        background: bg,
        padding: `${pY}px ${pX}px`,
        borderRadius: `${radius}px`,
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
