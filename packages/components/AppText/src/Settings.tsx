import type { SettingsComponent } from '@repo/shared/types/material';
import { AppTextComponentProps } from './UI.tsx';

const Settings: SettingsComponent<AppTextComponentProps> = (props) => {
    return <div>Settings { props.componentProps.text }</div>;
};

export default Settings;
