export default function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function LabelName({ children }) {
  return <span className="">{children}</span>;
}

Label.Name = LabelName;
