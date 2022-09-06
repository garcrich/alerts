import { Alert as MaterailAlert, AlertTitle, Link, Stack } from '@mui/material';
import { FC } from 'react';

export type AlertProps = {
  severity: 'error' | 'warning' | 'info' | 'success',
  title?: string | undefined,
  message: string,
  link?: string | undefined
}

const Alert: FC<AlertProps> = ({ severity, title, link, message }) => {
  const hasLink = link !== '' || link !== undefined
  return (
    <MaterailAlert data-testid={`${message}-alert`} onClose={() => { }} severity={severity}>
      <>
      
        {title && <AlertTitle data-testid={`${title}`}>{title}</AlertTitle>}
        {hasLink ? 

          <Link href={link} target="_blank" rel="noreferrer">{message}</Link> :
          { message }
        }
      </>
    </MaterailAlert>
  )
}

export default Alert;