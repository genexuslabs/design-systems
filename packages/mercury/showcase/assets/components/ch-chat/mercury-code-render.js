import { h } from "./index-29553cff.js";

const copy = text => () => navigator.clipboard.writeText(text);
export const mercuryCodeRender = copyButtonAccessibleName => options =>
  h(
    "div",
    { class: "code-block-container" },
    h(
      "div",
      { class: "code-block-header" },
      h("button", {
        "aria-label": copyButtonAccessibleName,
        title: copyButtonAccessibleName,
        class: "button-copy-code",
        type: "button",
        onClick: copy(options.plainText)
      })
    ),
    h("ch-code", {
      language: options.language,
      lastNestedChildClass: options.lastNestedChildClass,
      value: options.plainText
    })
  );
export const mercuryChatMessageRender = theme => messageModel =>
  messageModel.role === "assistant" && messageModel.status === "waiting"
    ? [
        h("span", { part: "message__processing" }, messageModel.content),
        h("div", {
          class: "processing-animation",
          part: "processing-animation"
        })
      ]
    : [
        h(
          "span",
          { part: `message__role ${messageModel.role}` },
          messageModel.role === "user" ? "You" : "GeneXus Code Fixer"
        ),
        h(
          "time",
          { dateTime: messageModel.metadata, part: "message__time" },
          messageModel.metadata
        ),
        messageModel.role === "user"
          ? h("span", { part: "message__content user" }, messageModel.content)
          : h("ch-markdown-viewer", {
              part:
                messageModel.role === "assistant" &&
                (messageModel.status === "complete" || !messageModel.status) &&
                !messageModel.parts
                  ? `message__content no-error`
                  : "message__content",
              theme: theme,
              showIndicator: false,
              renderCode: mercuryCodeRender("Copy code"),
              value: messageModel.content
            })
      ];
