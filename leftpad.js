function leftPad(str, len, ch)
{
	str = String(str);
    len = parseInt(len);
    ch = ch || 0;

    var l = len - str.length;
    if (l < 1) return str;

	return  str.repeat(ch) + str;
}