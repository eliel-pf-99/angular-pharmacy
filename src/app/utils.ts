export function convertDateDMY(date: string): string {
    let [y, m, d] = date.split('-');
    let date_correct = d + '/' + m + '/' + y
    return date_correct;
}

export function convertDateMDY(date: string): string {
    let [d, m, y] = date.split('/');
    let date_correct = m + '/' + d + '/' + y
    return date_correct;
}

export function convertStrToDate(date: string): Date{
    return new Date(convertDateMDY(date))
}

export function convertDateYMD(date: string): string{
    let [d, m, y] = date.split('/')
    return y + '-' + m + '-' + d
  }