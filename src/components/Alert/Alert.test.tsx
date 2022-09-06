import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Alert, { AlertProps } from './Alert';

describe('Alerts suite', () => {

  test('renders alert', async () => {
    const props: AlertProps = {
      severity: 'error',
      title: 'testing',
      message: 'unit test',
      link: 'https://www.google.com',
    }

    render(<Alert {...props} />);
    const alertTitle = screen.getByRole(`alert`)

    expect(alertTitle).toBeTruthy();
  });

  test('renders title', async () => {
    const props: AlertProps = {
      severity: 'error',
      title: 'testing',
      message: 'unit test',
      link: 'https://www.google.com',
    }

    render(<Alert {...props} />);

    const alertTitle = screen.getByTestId(`${props.title}`)

    expect(alertTitle).toHaveTextContent(`${props.title}`)
  });

  test('does not render title', async () => {
    const props: AlertProps = {
      severity: 'error',
      message: 'unit test',
      link: 'https://www.google.com',
    }

    render(<Alert {...props} />);

    const alertTitle = screen.queryByTestId(`${props.title}`)

    expect(alertTitle).toBeFalsy();
  });

  test('renders link', async () => {
    const props: AlertProps = {
      severity: 'error',
      title: 'testing',
      message: 'unit test',
      link: 'https://www.google.com',
    }

    render(<Alert {...props} />);

    const alertLink = screen.getByRole('link')
    expect(alertLink).toHaveAttribute('href', 'https://www.google.com');
    expect(alertLink).toHaveTextContent(`${props.message}`);
  });

  test('renders message in link', async () => {
    const props: AlertProps = {
      severity: 'error',
      title: 'testing',
      message: 'unit test',
      link: 'https://www.google.com',
    }

    render(<Alert {...props} />);

    const alertLink = screen.getByRole('link')
    expect(alertLink).toHaveTextContent(`${props.message}`);

  });

  test('renders message only', async () => {
    const props: AlertProps = {
      severity: 'error',
      title: 'testing',
      message: 'unit test',
    }

    render(<Alert {...props} />);

    const alertMessage = screen.getByText(`${props.message}`, { exact: true })
    expect(alertMessage).toBeTruthy();

  });

})