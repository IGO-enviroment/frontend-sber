export const isJsonString = (str: string | undefined) => {

    if (!str) return false

    try {
      JSON.parse(str);
    } catch {
      return false;
    }
  
    return true;
  };
  
  export const isValidDayMonthYearDateString = (dateString: string): boolean => {
    const parts = dateString.split('.');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Месяцы в JavaScript начинаются с 0 (январь) до 11 (декабрь)
    const year = parseInt(parts[2], 10);
  
    const date = new Date(year, month, day);
  
    return (
      date.getDate() === day && date.getMonth() === month && date.getFullYear() === year && !isNaN(date.getTime()) // Проверка на корректность даты
    );
  };

export function escapeRegExp(text: string): string {
    return text.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
  }
  
  const urlRegexPattern =
    '^(https?:)\\/\\/(?:www\\.|(?!www))[^\\s\\.]+\\.[^\\s]{2,}|www\\.[^\\s]+\\.[^\\s]{2,}|(https?:)\\/\\/[-a-zA-Z0-9@%._\\+~#=]+(:\\d+)(\\/([^\\s\\.]+)?)?';
  const latinNumberDashScoreDotTextPattern = /^[A-Za-z\d.\-_]+$/;
  
  export const urlRegex = new RegExp(urlRegexPattern);
  export const latinNumberDashScoreDotTextRegex = new RegExp(latinNumberDashScoreDotTextPattern);
  