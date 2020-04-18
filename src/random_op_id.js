const BigInteger = require("biginteger").BigInteger

// Calculate ID checksum with Luhn Algorithm
function calculate_checksum(value) {
  // The Luhn Algorithm. It's so pretty.
  value = BigInteger.parse(value, 36).toString()
  var nCheck = 0; var bEven = false

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n)
    var nDigit = parseInt(cDigit, 10)

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9

    nCheck += nDigit
    bEven = !bEven
  }

  return nCheck % 10
}

function generate_op_id(length) {
  var result = ""
  var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return "OP-" + result + "-" + calculate_checksum(result)
}

function check_op_id_validity(opid) {
  var value = opid.replace(/^OP-/, "").replace(/-[0-9]$/, "")
  var ckval = opid.replace(/^OP-[0-9A-Za-z]{6}-/, "")
  var cksum = calculate_checksum(value)

  return cksum === ckval
}

var opid = generate_op_id(6)

console.log("Osteopathes.pro publication ID: " + opid)
console.log("Check publication ID validity: " + check_op_id_validity(opid))

