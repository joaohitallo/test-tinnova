export const mask = (v: any, type: any) => {
  v = v.replace(/\D/g, "")

  switch (type) {
    case 'phone':
      v = v.replace(/(\d{2})(\d)/, "($1)$2")
      v = v.replace(/(\d{5})(\d)/, "$1-$2")
      return v
    case 'cpf':
      v = v.replace(/(\d{3})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      return v
    case 'cnpj':
      v = v.replace(/^(\d{2})(\d)/, "$1.$2")
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
      v = v.replace(/(\d{4})(\d)/, "$1-$2")
      return v
    default:
      break;
  }
}
