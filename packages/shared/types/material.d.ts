import type React from "react";

export type SettingsComponent<P> = React.FC<SettingsComponentProps<P>>;

export interface SettingsComponentProps<P> {
    instance: any;
    componentProps: P;
}
