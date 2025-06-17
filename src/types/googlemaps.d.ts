
declare module '@react-google-maps/api' {
    import * as React from 'react';

    export const GoogleMap: React.FC<any>;
    export const MarkerF: React.FC<any>;
    export const useJsApiLoader: (args: any) => { isLoaded: boolean };
}
