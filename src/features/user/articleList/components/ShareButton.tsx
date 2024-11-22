import { Tooltip } from "react-tooltip";

const generateTweetLink = (shareText: string) => {
    try {
        const url = new URL("https://twitter.com/intent/tweet");
        shareText && url.searchParams.set("text", shareText);
        return url.href;
    } catch (error) {
        return "";
    }
};

const generateTootLink = (shareText: string) => {
    try {
        const url = new URL("https://mstdn.jp/share");
        shareText && url.searchParams.set("text", shareText);
        return url.href;
    } catch (error) {
        return "";
    }
};
export const ShareButton = () => {
    const shareText = "Google https://www.google.com/";

    const tweetLink = generateTweetLink(shareText);
    const mastodonLink = generateTootLink(shareText);

    return (
        <>
            <button data-tooltip-id="my-tooltip-click" data-tooltip-place="bottom">
                SNSでシェア
            </button>
            <Tooltip
                id="my-tooltip-click"
                openOnClick
                clickable
                style={{ color: "white" }}
            >
                <ul>
                    <li>
                        <a
                            href={tweetLink}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            style={{ color: "white" }}
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href={mastodonLink}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            style={{ color: "white" }}
                        >
                            mstdn.jp
                        </a>
                    </li>
                </ul>
            </Tooltip>
        </>
    );
};