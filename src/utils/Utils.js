// formatPhone formats a phone number to be displayed as (xxx) xxx-xxxx
export const formatPhone = phone => {
  let digits = ("" + phone).replace(/\D/g, "")
  let match = digits.match(/^(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]
  }

  return null
}
