import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/sections/PerformanceSection', () => () => <div>PerformanceSection</div>);

describe('App component', () => {
    test('renders without crashing', () => {
        const { getByText } = render(<App />);
        expect(getByText('PerformanceSection')).toBeInTheDocument();
    });
});