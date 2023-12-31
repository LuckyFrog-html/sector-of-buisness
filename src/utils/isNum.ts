export const isNum = (num: any) =>
    (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num as number);
