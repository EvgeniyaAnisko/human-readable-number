module.exports = function toReadable(number) {
    let temp = ''
    const one_ = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const ten_ = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const ten_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    if (number === 0) {
        return one_[0]
    }

    if (Math.trunc(number / 100)) {
        temp = one_[Math.trunc(number / 100)] + ' hundred'
    }

    if ((number % 100 < 20) && (number % 100 > 9)) {
        if (temp != '')
            temp = temp + ' '
        return temp + ten_nineteen[number % 10]
    }

    if (number % 100 > 10) {
        if (temp != '') {
            temp = temp + ' '
        }
        temp = temp + ten_[(number % 100 - number % 10) / 10]

    }

    if (number % 10) {
        if (temp != '') {
            temp = temp + ' '
        }
        temp = temp + one_[number % 10]
    }
    return temp;
}
