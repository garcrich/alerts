import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Alert, { MessageBody } from './Alert';
import { AlertProps } from './AlertType'

describe('Alerts suite', () => {

  test('renders alert', async () => {
    const props: AlertProps = {
      severity: 'error',
      title: 'testing',
      message: 'unit test',
      link: 'https://www.google.com',
      duration: 10,
      id: 1
    }

    render(<Alert {...props} />);
    const alertTitle = screen.getByRole(`alert`)

    expect(alertTitle).toBeTruthy();
  });

  test('renders title', async () => {
    const props: Omit<AlertProps, 'severity' | 'duration'> = {
      title: 'testing',
      message: 'unit test',
      link: 'https://www.google.com',
      id: 1
    }

    render(<MessageBody {...props} />);

    const alertTitle = screen.getByTestId(`${props.title}`)

    expect(alertTitle).toHaveTextContent(`${props.title}`)
  });

  test('does not render title', async () => {
    const props: AlertProps = {
      severity: 'error',
      title: '',
      message: 'unit test',
      link: 'https://www.google.com',
      duration: 10,
      id: 1
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
      duration: 10,
      id: 1
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
      duration: 10,
      id: 1
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
      link: 'https://www.google.com',
      duration: 10,
      id: 1
    }

    render(<Alert {...props} />);

    const alertMessage = screen.getByText(`${props.message}`, { exact: true })
    expect(alertMessage).toBeTruthy();

  });

})