import React from 'react';

type CookiesContextT = {[key: string]: string}

const defaultValue = {};

export const CookiesContext = React.createContext<CookiesContextT>(defaultValue);