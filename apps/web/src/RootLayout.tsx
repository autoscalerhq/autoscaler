import {PropsWithChildren} from 'react';

export function RootLayout({children}: PropsWithChildren) {
  return <>
    <div>I'm a header</div>
    {children}
    <div>I'm a footer</div>
  </>
}