/**
 * Valida um número de cartão de crédito usando o algoritmo de Luhn.
 * @param {string} cardNumber - O número do cartão de crédito como string.
 * @returns {boolean} - Retorna true se o número for válido, caso contrário, false.
 */
function validateCardNumber(cardNumber) {
    // Remove espaços ou caracteres não numéricos
    const sanitized = cardNumber.replace(/\D/g, '');

    // Verifica se o número tem pelo menos 13 dígitos e no máximo 19
    if (sanitized.length < 13 || sanitized.length > 19) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    // Itera pelos dígitos do número de trás para frente
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // O número é válido se a soma for múltiplo de 10
    return sum % 10 === 0;
}

// Exemplo de uso
const cardNumber = "4539 1488 0343 6467";
console.log(validateCardNumber(cardNumber)); // true ou false