import { render, screen } from '@testing-library/react';
import CardHeader from './CardHeader';

describe('CardHeader', () => {
  test('renders title and icon', () => {
    render(<CardHeader title="Test Title" icon={<span>Icon</span>} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('renders children', () => {
    render(<CardHeader title="Test Title"><span>Child</span></CardHeader>);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

//   test('renders options menu', () => {
//     const options = ['Option 1', 'Option 2'];
//     render(<CardHeader title="Test Title" options={options} />);
//     fireEvent.click(screen.getByRole('button'));
//     options.forEach(option => {
//       expect(screen.getByText(option)).toBeInTheDocument();
//     });
//   });

  test('does not render options menu when options are not provided', () => {
    render(<CardHeader title="Test Title" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
