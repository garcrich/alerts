import { Alert as MaterailAlert, AlertTitle, Link } from '@mui/material';
import { FC } from 'react';
import { AlertProps } from './AlertType';

const Alert: FC<AlertProps> = ({ severity, title, link, message }) => {
  const hasLink: boolean = link !== '' && link !== undefined
  return (
    <MaterailAlert severity={severity}>
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

export const MessageBody: FC<{ title: string | undefined, message: string }> = ({ title, message }) => {
  return (
    <>
      {title && <AlertTitle data-testid={`${title}`}>{title}</AlertTitle>}
      {message}
    </>
  )
}

export default Alert;