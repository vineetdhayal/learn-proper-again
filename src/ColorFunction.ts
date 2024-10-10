export default function textSearch(text: any, queries: any) {
    if (text.trim === '') {
        return text;
    }

    const boldchars = Array(text.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < text.length;) {
            const newstr = text.slice(j, j + queries[i].length);
            if (newstr.toLowerCase() === queries[i].toLowerCase()) {
                boldchars.fill(1, j, j + queries[i].length);
                j = j + queries[i].length;
            }
            else {
                j++;
            }
        }
    }

    let highlight = '';
    for (let k = 0; k < text.length;) {
        let curr: any;
        if (boldchars[k] === 1) {
            const el = document.createElement('span');
            el.classList.add('color');
            let l = k;
            while (boldchars[l] === 1) {
                curr += text[l];
                l++;
            }
            k = l;
            el.innerText = curr;
            console.log(el);
            el.parentNode?.appendChild(el);
        }
        else {
            const el = document.createElement('span');
            curr += text[k];
            k++;
        }
    }
    return highlight;
}
