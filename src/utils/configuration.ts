import { createContextId } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

export interface Configuration {
  baseUrl: string;
  portal: 'patient' | 'staff' | 'refmd';
  medDreamUrl: string;
  logger: {
    loggingLevel: string;
    throttlingTime: number;
    backendUrl: string;
  };
  auth: {
    keycloak: {
      url: string;
      realm: string;
      clientId: string;
      initOptions: {
        onLoad: any;
        pkceMethod: any;
        silentCheckSsoRedirectUri: any;
      };
      authorizationHeaderName?: string;
      enableBearerInterceptor: boolean;
      idpHint: string;
    };
  };
  featureflags: {
    unleash: {
      url: string;
    };
  };
  captcha: {
    size: string;
    siteKey: string;
  };
  dwt: {
    resourcesPath: string;
    organizationId: string;
  };
}

export const defaultPathToConfig = '../../config.json';

//qwik context
export const CONFIGURATION_TOKEN = createContextId<Configuration>('configuration');



export const fetchConfiguration = server$(async (pathToConfig?:string) => {
    try {
      console.log(pathToConfig);
        // const response = await fetch(pathToConfig || defaultPathToConfig);
        // const configuration = await response.json();
        // return configuration;
        return {baseUrl:'derka'} as Configuration;
    } catch (error) {
        throw new Error('Failed to fetch configuration');
    }
});

export const loadConfiguration = async (pathToConfig:string, configDeps : (() =>Function)[]) => {
    try {
        const configuration = await fetchConfiguration(pathToConfig || defaultPathToConfig);
        // Execute configDeps in parallel
        await Promise.all(configDeps.map((dep:Function) => dep()));
        return configuration;
    } catch (error) {
        throw new Error('Failed to load configuration');
    }
};

export default {
    loadConfiguration,
    fetchConfiguration  
}