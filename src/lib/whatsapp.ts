/**
 * WhatsApp Generator Utility
 * 
 * Provides functions to generate context-specific WhatsApp booking links.
 */

const WHATSAPP_NUMBER = "1234567890"; // In production, this would be an environment variable.

/**
 * Generates a WhatsApp booking link with a pre-encoded message.
 * 
 * @param eventTitle The title of the event to book.
 * @param type The type of inquiry (Booking, Info, Support).
 * @returns A formatted WhatsApp URL.
 */
export function generateWhatsAppLink(eventTitle: string, type: 'Booking' | 'Info' | 'Support' = 'Booking'): string {
  let message = "";

  switch (type) {
    case 'Booking':
      message = `Hello, I'm interested in booking the "${eventTitle}" service. Can you provide more details on availability?`;
      break;
    case 'Info':
      message = `Hi, I saw your event "${eventTitle}" and would like to know more about the pricing and schedule.`;
      break;
    case 'Support':
      message = `Hello, I have a question regarding my reservation for "${eventTitle}".`;
      break;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generates a simple generic WhatsApp link.
 */
export function getGenericWhatsAppLink(): string {
  const message = "Hello, I am interested in learning more about your high-fidelity event management services.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
