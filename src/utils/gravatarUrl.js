import md5 from "md5";

export function getGravatarUrl(email) {
    const hash = md5(email);
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`
}
