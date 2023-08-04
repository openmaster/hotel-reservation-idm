export default function useFormValidation () {
  const validLength = (str: string): boolean => {
    if (str.length < 1) {
      return true
    } else {
      return false
    }
  }
  const validEmail = (email: string) => {
    const valid = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (valid == null) {
      return true
    } else {
      return false
    }
  }
  return {
    validLength,
    validEmail
  }
}
