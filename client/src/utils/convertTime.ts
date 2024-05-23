export function formatTimestamp(timestamp: string): string {
    const now = Date.now();
    const targetTime = new Date(timestamp).getTime();
    const diff = now - targetTime;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (diff < minute) {
        return ` ${Math.floor(diff / 1000)}s`;
    } else if (diff < hour) {
        const time = Math.floor(diff / minute)
        return ` ${time}min${time > 1 && "s"}`;
    } else if (diff < day) {
        return ` ${Math.floor(diff / hour)}h`;
    } else if (diff < week) {
        return ` ${Math.floor(diff / day)}d`;
    } else if (diff < month) {
        return ` ${Math.floor(diff / week)}w`;
    } else if (diff < year) {
        const time = Math.floor(diff / month)
        return ` ${time}mth${time > 1 && "s"}`;
    } else {
        return ` ${Math.floor(diff / year)}y`;
    }
}

export function timestampToDate(timestamp: string) {
    try {
        const date = new Date(timestamp);

        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(date);
        return formattedDate
    } catch {
        return ""
    }
}