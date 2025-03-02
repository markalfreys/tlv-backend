//Formats a date string to a standard YYYY-MM-DD format.

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
};
