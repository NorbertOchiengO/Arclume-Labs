// Business details supplied by the studio. Only add facts that are true.
//
// Optional fields (legalName, registrationNumber, postalAddress) render on the legal pages
// only when they are filled in, so nothing is invented and nothing shows as a blank placeholder.

export const business = {
  name: 'ARCLUME LABS',
  email: 'arclumelabs@gmail.com',
  // `tel` uses the international format (+254 is Kenya's country code) so the numbers dial correctly
  // from anywhere. Confirm these are correct for every number.
  phones: [
    { display: '0743 999 130', tel: '+254743999130' },
    { display: '0114 545 280', tel: '+254114545280' },
    { display: '0112 666 906', tel: '+254112666906' },
  ],

  // Fill in when known (shown on the Privacy Policy and Terms pages):
  legalName: '', // registered business name, if different from "ARCLUME LABS"
  registrationNumber: '', // business registration number, if you want it published
  postalAddress: '', // only if you want a postal address published
}

export const LEGAL_LAST_UPDATED = '15 October 2026'
