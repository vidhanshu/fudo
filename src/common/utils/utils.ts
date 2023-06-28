export const StringShortener=(str: string, len: number) => {
    if(str.length > len){
        return str.substr(0, len) + "...";
    }
    return str;
}