const sandi = (password) => {
    const digit = /[0-9]/
    const upper = /[A-Z]/
    const lower = /[a-z]/
    if(password.length < 7) return 'password harus 8 karakter'
    if(password.length > 31) return 'password tidak max 32 karakter'
    if(!isNaN(password[0])) return 'awal password tidak boleh angka'
    if(!digit.test(password)) return 'password harus memiliki angka'
    if(!(upper.test(password) && lower.test(password))) return 'password harus memiliki huruf besar dan kecil'
    return 'kata sandi valid'
}

console.log(sandi('sandiwar4'))