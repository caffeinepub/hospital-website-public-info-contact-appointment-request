/**
 * Centralized contact details configuration
 * Single source of truth for hospital contact information
 */

export const CONTACT_DETAILS = {
  phone: '7200041183',
  email: 'mahalaxmihospitalakm@gmail.com',
  emergency: '',
  address: 'NO .H-67,JOTHI NAGAR,ARAKKONAM,RANIPET DISTRICT PIN-631003',
  hours: {
    emergency: '24/7',
    outpatient: 'Mon-Fri 8am-6pm',
    urgentCare: 'Daily 8am-8pm',
  },
} as const;

/**
 * Get the emergency phone number with fallback to main phone
 * Returns the emergency number if configured, otherwise the main phone number
 */
export function getEmergencyPhone(): string {
  return CONTACT_DETAILS.emergency || CONTACT_DETAILS.phone;
}

/**
 * Get the emergency phone tel link
 */
export function getEmergencyPhoneTel(): string {
  return `tel:${getEmergencyPhone()}`;
}

/**
 * Get the main phone tel link
 */
export function getMainPhoneTel(): string {
  return `tel:${CONTACT_DETAILS.phone}`;
}
