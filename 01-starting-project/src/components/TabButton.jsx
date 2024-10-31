export default function TabButton({children}) {
  return (
    <li><button>{children}</button></li>
  );
}
/*
Example with label as props
function TabButton({ label }) {
return <button>{label}</button>}
*/