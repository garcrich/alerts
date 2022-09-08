export type SeverityType = 'error' | 'warning' | 'info' | 'success'

export type AlertProps = {
  severity: SeverityType,
  title: string,
  message: string,
  link: string,
  duration: number,
  id: string | null
}