export interface CommentProps {
  author: string;
  rawHtmlContent: string;
}

export function CommentWidget({ author, rawHtmlContent }: CommentProps) {
  // Unsanitized raw user input rendered directly into DOM allows script execution
  return (
    <div className="comment-box">
      <h4>{author}</h4>
      <div dangerouslySetInnerHTML={{ __html: rawHtmlContent }} />
    </div>
  );
}
