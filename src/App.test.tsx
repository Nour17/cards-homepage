import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/sections/PerformanceSection', () => () => <div>PerformanceSection</div>);

Object.defineProperty(global.crypto, 'randomUUID', {
    value: jest.fn().mockReturnValue('test-uuid')
});

describe('App component', () => {
    test('renders without crashing', () => {
        const { getByText } = render(<App />);
        expect(getByText('PerformanceSection')).toBeInTheDocument();
    });
});