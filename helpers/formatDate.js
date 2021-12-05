import moment from 'moment'

export default function dateFormater(date) {
  let formatedDate = `${moment(`${date}`).format('Do MMM, yyyy')} at ${moment(
    `${date}`,
  ).format('LT')}
  `
  return formatedDate
}
