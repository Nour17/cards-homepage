import React from 'react';
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import PerformanceSection from './components/sections/PerformanceSection';
import useStyles from './App.styles';
import PersonalizeSection from './components/sections/PersonalizeSection';

function App(): React.JSX.Element {
    const styles = useStyles()

    return (
        <FluentProvider theme={webLightTheme} className={styles.root}>
            <div style={{ width: '100%', maxWidth: '1480px', margin: '0 auto' }}>
                <PerformanceSection />
                <PersonalizeSection />
            </div>
        </FluentProvider>
    );
}

export default App;
