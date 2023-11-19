import * as React from 'react';

interface IAppRootProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function AppRoot(props: IAppRootProps): JSX.Element | null {
  return (
    <div>
      <h1>Flashcard Forge</h1>
      <p>App has rendered successfully.</p>
    </div>
  );
}