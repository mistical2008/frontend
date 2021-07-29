import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EffectorSsrRedirect } from 'features/navigation';
import { createStart, withStart } from 'lib/page-routing';
import { path } from '../paths';
import { SettingsProfilePage } from './profile';
import { EmailsProfilePage } from './emails';

export const pageStarted = createStart();

export const SettingsPage = withStart(pageStarted, () => {
  return (
    <Switch>
      <Route exact path={path.settings.profile()}>
        <SettingsProfilePage />
      </Route>
      <Route exact path={path.settings.emails()}>
        <EmailsProfilePage />
      </Route>
      <Route path="*">
        <EffectorSsrRedirect href={path.settings.profile()} />
      </Route>
    </Switch>
  );
});