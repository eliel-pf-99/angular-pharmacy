export function convertDate(date: string): string {
    let [y, m, d] = date.split('-');
    let date_correct = d + '/' + m + '/' + y
    return date_correct;
}