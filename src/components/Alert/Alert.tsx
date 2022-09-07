import { Alert as MaterailAlert, AlertTitle, Link } from '@mui/material';
import { FC } from 'react';

export type AlertProps = {
  severity: 'error' | 'warning' | 'info' | 'success',
  title?: string | undefined,
  message: string,
  link?: string | undefined
}

const Alert: FC<AlertProps> = ({ severity, title, link, message }) => {
  const hasLink: boolean = link !== '' && link !== undefined
  return (
    <MaterailAlert onClose={() => { }} severity={severity}>
      <>
        {hasLink ?
          <Link href={link} target="_blank" rel="noreferrer">
            <MessageBody title={title} message={message} />
          </Link> :
          <MessageBody title={title} message={message} />
        }
      </>
    </MaterailAlert>
  )
}

export const MessageBody: FC<Omit<AlertProps, 'severity'>> = ({ title, message }) => {
  return (
    <>
      {title && <AlertTitle data-testid={`${title}`}>{title}</AlertTitle>}
      {message}
    </>
  )
}

export default Alert;