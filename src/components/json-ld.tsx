/**
 * Renders a JSON-LD block.
 *
 * Serialised with JSON.stringify and escaped for the `<` character so a
 * value containing `</script>` cannot break out of the element. All values
 * come from our own content modules rather than user input, but the escape
 * costs nothing and removes the class of bug entirely.
 */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
