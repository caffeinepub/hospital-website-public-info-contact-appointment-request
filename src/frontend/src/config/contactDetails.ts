/**
 * Centralized contact details configuration
 * Single source of truth for hospital contact information
 */

export const CONTACT_DETAILS = {
  phone: '7200041183',
  email: 'mahalaxmihospitalakm@gmail.com',
  emergency: '911',
  address: 'NO .H-67,JOTHI NAGAR,ARAKKONAM,RANIPET DISTRICT PIN-631003',
  hours: {
    emergency: '24/7',
    outpatient: 'Mon-Fri 8am-6pm',
    urgentCare: 'Daily 8am-8pm',
  },
} as const;
