declare module '@emailjs/browser' {
  export function send(serviceId: string, templateId: string, templateParams: any, publicKey?: string): Promise<any>
  const emailjs: {
    send: typeof send
  }
  export default emailjs
}
