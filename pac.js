function FindProxyForURL(url, host) {
    if (
        host === "chatgpt.com" ||
        dnsDomainIs(host, ".openai.com") ||
        host === "claude.ai" ||
        dnsDomainIs(host, ".anthropic.com")
    ) {
        return "SOCKS5 debian:25344";
    }

    return "DIRECT";
}
